import { makeAutoObservable } from 'mobx';
import { getStore, Store, useStore } from ".";
import { InstallablePlugin, ProjectType } from '../utils/types';
import { EditorProps } from '@grapesjs/react';
import { getEditorPlugins } from '../Editor/Editor/editorOptions';
import { DBName, DbOptions, getLocalAppData, ObjectStores, setLocalAppData } from '../modules/localDb';

export class PluginStore {
    store: Store;
    projectPlugins: InstallablePlugin[] | undefined;
    loadCounter = 0;
    pendingInstalled: string[] = [];
    pendingUninstalled: string[] = [];
    selectedShown = false;

    constructor(store: Store) {
        this.store = store;
        makeAutoObservable(this, {}, { autoBind: true });
    }

    get hasPending() {
        return !!this.pendingInstalled.length || !!this.pendingUninstalled.length;
    }

    *initProjectPlugins(projectType: ProjectType) {
        this.pendingInstalled = [];
        this.pendingUninstalled = [];
        const installedPlugins: InstallablePlugin[] = yield loadInstalledPlugins();
        const localPlugins = installedPlugins.filter(plugin => plugin.projectType.includes(projectType))
        // TODO get plugins from the project itself
        this.projectPlugins = [
            ...localPlugins,
        ];
    }

    getPluginsToLoad(projectType: ProjectType): EditorProps['plugins'] {
        return [
            ...getEditorPlugins(projectType),
            ...this.projectPlugins || [],
        ];
    }

    addPendingInstalled(plugin: InstallablePlugin) {
        const { pendingInstalled, pendingUninstalled } = this;
        const key = plugin.id;

        if (pendingUninstalled.includes(key)) {
            this.pendingUninstalled = pendingUninstalled.filter(id => id !== key);
        } else if (!pendingInstalled.includes(key)) {
            pendingInstalled.push(key);
        }
    }

    addPendingUninstalled(plugin: InstallablePlugin) {
        const { pendingInstalled, pendingUninstalled } = this;
        const key = plugin.id;

        if (pendingInstalled.includes(key)) {
            this.pendingInstalled = pendingInstalled.filter(id => id !== key);
        } else {
            pendingUninstalled.push(key);
        }
    }

    setSelectedShown(value: boolean) {
        this.selectedShown = value;
    }
};

const pluginLocalDbOpts: DbOptions = { db: DBName.gjsStudio };

export const loadInstalledPlugins = () => new Promise<InstallablePlugin[]>(async res => {
    let items: InstallablePlugin[] = [];
    try {
        const data = await getLocalAppData(ObjectStores.Settings, 'plugins', pluginLocalDbOpts);
        items = data || [];
    } catch (err) {
        console.error(err)
    }
    res(items);
});

export const installPlugin = (plugin: InstallablePlugin) => new Promise<void>(async res => {
    try {
        const installed = await loadInstalledPlugins();
        const newPlugins = [ ...installed, plugin ];
        getPluginStore().addPendingInstalled(plugin);

        await setLocalAppData(ObjectStores.Settings, 'plugins', newPlugins, pluginLocalDbOpts);
    } catch (err) {
        console.error(err)
    }
    res();
});

export const uninstallPlugin = (plugin: InstallablePlugin) => new Promise<void>(async res => {
    try {
        const installed = await loadInstalledPlugins();
        const newPlugins = installed.filter(plg => plg.id !== plugin.id);
        getPluginStore().addPendingUninstalled(plugin);

        await setLocalAppData(ObjectStores.Settings, 'plugins', newPlugins, pluginLocalDbOpts);
    } catch (err) {
        console.error(err)
    }
    res();
});

export const usePluginStore = () => {
    return useStore().pluginStore;
}

export const getPluginStore = () => {
    return getStore().pluginStore;
}