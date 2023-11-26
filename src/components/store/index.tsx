import React, { createContext, useContext } from 'react';
import { AppEditorStore } from './appEditorStore';
import { BlockManagerStore } from './blockManager';
import { ModalStore } from './modalStore';
import { LocalSettingsStore, subscribeToLocalSettingsStore } from './localSettings';
import { I18nStore } from './I18nStore';
import { ToastStore } from './ToastStore';
import { PluginStore } from './pluginStore';
import { PointerBadgeStore } from './PointerBadgeStore';

let store: Store;

type IfEquals<X, Y, A, B> =
    (<T>() => T extends X ? 1 : 2) extends
    (<T>() => T extends Y ? 1 : 2) ? A : B;

type WritableKeysOf<T> = {
    [P in keyof T]: IfEquals<{ [Q in P]: T[P] }, { -readonly [Q in P]: T[P] }, P, never>
}[keyof T];

export type WritablePart<T> = Pick<T, WritableKeysOf<T>>;

export type InitialStoreState<T> = {
    [P in keyof T]?: Partial<T[P]>;
    // [P in keyof T]?: Partial<WritablePart<T[P]>>;
};
// export type InitialStoreState<T> = WritablePart<T>;

export type StoreProviderProps = {
    children: React.ReactNode;
    initialState?: InitialStoreState<Store>;
}

const StoreContext = createContext<Store | undefined>(undefined);

export class Store {
    localSettingsStore: LocalSettingsStore;
    appEditorStore: AppEditorStore;
    blockManagerStore: BlockManagerStore;
    modalStore: ModalStore;
    toastStore: ToastStore;
    i18nStore: I18nStore;
    pluginStore: PluginStore;
    pointerBadgeStore: PointerBadgeStore;

    constructor(initialState?: InitialStoreState<Store>) {
        this.blockManagerStore = new BlockManagerStore(this);
        this.appEditorStore = new AppEditorStore(this, initialState?.appEditorStore);
        this.localSettingsStore = new LocalSettingsStore(this, initialState?.localSettingsStore);
        this.toastStore = new ToastStore(this);
        this.modalStore = new ModalStore(this);
        this.i18nStore = new I18nStore(this);
        this.pluginStore = new PluginStore(this);
        this.pointerBadgeStore = new PointerBadgeStore(this);
        this.appEditorStore.init();
    }
}

const subscribeToStore = (store: Store) => {
    subscribeToLocalSettingsStore(store.localSettingsStore);
}

export const StoreProvider = ({ children, initialState }: StoreProviderProps) => {
    if (!store) {
        store = new Store(initialState);
        subscribeToStore(store);
    }

    return <StoreContext.Provider value={store}>{ children }</StoreContext.Provider>;
}

export const useStore = (): Store => {
    const context = useContext(StoreContext);
    if (!context) throw new Error('useStore must be used inside of StoreProvider');

    return context;
}

export const getStore = (): Store => {
    if (!store) throw new Error('Store has not been initialized');

    return store;
};

// @ts-ignore
window.getStore = getStore;
