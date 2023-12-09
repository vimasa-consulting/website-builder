import { makeAutoObservable, reaction } from 'mobx';
import { InitialStoreState, Store, useStore } from ".";
import { updateLocalState } from '../utils/localState';

export type ThemeOptions = 'dark' | 'light' | 'auto';

const updateTheme = (theme: ThemeOptions, store: Store) => {
    if (theme) {
        const { classList } = document.documentElement;
        let isDark = false;

        if (theme === 'dark' || (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            classList.add('dark');
            isDark = true;
        } else {
            classList.remove('dark');
        }

        if (store.appEditorStore.updateAppShell) {
            const metaTag = document.head.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
            if (metaTag) metaTag.content = isDark ? '#18181b' : '#ffffff';
        }
    }
};

export class LocalSettingsStore {
    store: Store;
    theme: ThemeOptions = 'light';
    lastProjectId: string = '';
    debug = false;

    constructor(store: Store, initialState?: InitialStoreState<LocalSettingsStore>) {
        this.store = store;

        initialState && Object.keys(initialState).forEach((key) => {
            const keyId = key as keyof InitialStoreState<LocalSettingsStore>;
            const value = initialState[keyId];
            if (value !== undefined) {
                // @ts-ignore Have to prevent readonly properties
                this[keyId] = value;
            }
        })

        makeAutoObservable(this, {}, { autoBind: true });
        updateTheme(this.theme, store);
    }

    setTheme(value: ThemeOptions) {
        this.theme = value;
    }

    get isDarkTheme() {
        const { theme } = this;
        return theme === 'dark' || (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
};

export const subscribeToLocalSettingsStore = (localSettingsStore: LocalSettingsStore) => {
    reaction(() => localSettingsStore.theme, (theme) => {
        updateTheme(theme, localSettingsStore.store);
        updateLocalState({ theme });
    });
};

export const useLocalSettingsStore = (): LocalSettingsStore => {
    return useStore().localSettingsStore;
}