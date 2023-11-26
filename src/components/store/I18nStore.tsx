import { makeAutoObservable } from 'mobx';
import { Store, useStore } from ".";

interface I18nOptions {
    params?: Record<string, any>
}

export class I18nStore {
    store: Store;

    constructor(store: Store) {
        this.store = store;
        makeAutoObservable(this, {}, { autoBind: true });
    }

    t(key: string, opts: I18nOptions = {}): string {
        const { editor } = this.store.appEditorStore;
        return editor?.I18n?.t(key, opts) || '';
    }

    tScoped(prefix: string) {
        return (key: string, opts?: I18nOptions) => this.t(`${prefix}.${key}`, opts);
    }
};

export const useI18nStore = () => {
    return useStore().i18nStore;
}