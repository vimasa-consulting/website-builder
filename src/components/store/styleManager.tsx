import { makeAutoObservable } from 'mobx';
import { Store, useStore } from ".";

export class StyleManagerStore {
    store: Store;
    isOpen = false;

    constructor(store: Store) {
        this.store = store;
        makeAutoObservable(this, {}, { autoBind: true });
    }

    setOpen(value: boolean) {
        this.isOpen = value;
    }

    toggleOpen() {
        this.isOpen = !this.isOpen;
    }
};

export const useStyleManagerStore = () => {
    return useStore().styleManagerStore;
}