import { makeAutoObservable } from 'mobx';
import { Store, useStore } from ".";

export class BlockManagerStore {
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

export const useBlockManagerStore = () => {
    return useStore().blockManagerStore;
}