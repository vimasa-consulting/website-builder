import { LocalSettingsData, ProjectData } from "../utils/types";

export enum ObjectStores {
  Projects = 'projects',
  Settings = 'settings',
}

export enum DBName {
  gjs = 'gjs',
  gjsStudio = 'gjs-studio',
}

let dbs: Record<DBName | string, IDBDatabase> = {};
let localDbSupported = true;

// WARNING: If you need to add a new objectStore, ensure to increase the version
const DB_VERSION = 1;

type ObjectStoresReturnType = {
  [ObjectStores.Projects]: ProjectData;
  [ObjectStores.Settings]: LocalSettingsData;
};

export type DbOptions = { db?: DBName };

export const isLocalDbSupported = () => localDbSupported;

const getDb = (opts: DbOptions = {}): Promise<IDBDatabase> =>
  new Promise((resolve, reject) => {
    const dbName = opts?.db || DBName.gjs;
    const dbVersion = dbName ===  DBName.gjsStudio ? DB_VERSION : 1;
    const dbResult = dbs[dbName];

    if (dbResult) {
      resolve(dbResult);
    } else {
      const request = window.indexedDB.open(dbName, dbVersion);
      request.onerror = reject;
      request.onsuccess = () => {
        const db = request.result;
        db.onerror = reject;
        dbs[dbName] = db;
        resolve(db);
      };
      // WARNING: If you need to add a new objectStore, ensure to increase the version above
      request.onupgradeneeded = () => {
        const idb = request.result;

        if (!idb.objectStoreNames.contains(ObjectStores.Projects)) {
          idb.createObjectStore(ObjectStores.Projects);
        }

        if (!idb.objectStoreNames.contains(ObjectStores.Settings)) {
          idb.createObjectStore(ObjectStores.Settings);
        }
      };
    }
  });

const getObjectStore = async (objStoreName: ObjectStores, opts?: DbOptions): Promise<IDBObjectStore> => {
  const db = await getDb(opts);
  return db.transaction([objStoreName], 'readwrite').objectStore(objStoreName);
};

export const setupLocalDb = async (opts?: DbOptions) => {
  // Check if IndexedDB is supported and not blocked
  try {
    await getDb(opts);
  } catch (error) {
    localDbSupported = false;
    console.error(error);
  }
};

type ObjectStoreAll<T> = {key: IDBValidKey, data: T};

export const getAllLocalData = async <T extends ObjectStores>(objStoreName: T, opts?: DbOptions) => {
  const objectStore = await getObjectStore(objStoreName, opts);

  return new Promise<{key: IDBValidKey, data: ObjectStoresReturnType[T]}[]>((resolve, reject) => {
    const result: ObjectStoreAll<ObjectStoresReturnType[T]>[] = [];
    const request = objectStore.openCursor();
    request.onerror = reject;
    request.onsuccess = function(event) {
      const target = event.target! as EventTarget & { result?: IDBCursor };
      const cursor = target.result;

      if (cursor) {
          let key = cursor.primaryKey;
          // @ts-ignore
          const data = cursor.value;
          result.push({ key, data });
          cursor.continue();
      }
      else {
        resolve(result);
      }
    };
  });
};

/**
 * Get app related data from the object store.
 */
export const getLocalAppData = async <T extends ObjectStores, K extends keyof ObjectStoresReturnType[T]>(
  objStoreName: T,
  key: K,
  opts?: DbOptions
) => {
  const objectStore = await getObjectStore(objStoreName, opts);

  return new Promise<ObjectStoresReturnType[T][K] | undefined>((resolve, reject) => {
    const request = objectStore.get(key as any);
    request.onerror = reject;
    request.onsuccess = () => resolve(request.result);
  });
};

/**
 * Put app related data to the object store.
 */
export const setLocalAppData = async <T extends ObjectStores, K extends keyof ObjectStoresReturnType[T]>(
  objStoreName: T,
  key: K,
  data: ObjectStoresReturnType[T][K],
  opts?: DbOptions
) => {
  const objectStore = await getObjectStore(objStoreName, opts);
  return new Promise<void>((resolve, reject) => {
    const request = objectStore.put(data, key as any);
    request.onerror = reject;
    request.onsuccess = () => resolve();
  });
};

/**
 * Delete app related data from the object store.
 */
export const deleteLocalData = async <T extends ObjectStores>(objStoreName: T, key: string, opts?: DbOptions) => {
  const objectStore = await getObjectStore(objStoreName, opts);
  return new Promise<void>((resolve, reject) => {
    const request = objectStore.delete(key);
    request.onerror = reject;
    request.onsuccess = () => resolve();
  });
};
