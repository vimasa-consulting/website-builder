import { makeAutoObservable } from 'mobx';
import { getStore, Store, useStore } from ".";

export class PointerBadgeStore {
    store: Store;
    isActive = false;
    content: React.ReactNode = '';

    constructor(store: Store) {
        this.store = store;
        makeAutoObservable(this, {}, { autoBind: true });
    }

    show(content: PointerBadgeStore['content']) {
        this.isActive = true;
        this.content = content;
    }

    hide() {
        this.isActive = false;
        setTimeout(this.clear, 101);
    }

    clear() {
        this.content = '';
    }
};

export const usePointerBadgeStore = () => {
    return useStore().pointerBadgeStore;
}

export const getPointerBadgeStore = () => {
    return getStore().pointerBadgeStore;
}