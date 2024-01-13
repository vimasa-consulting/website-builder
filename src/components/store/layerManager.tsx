import { makeAutoObservable } from 'mobx';
import { Store, useStore } from ".";

export class LayerManagerStore {
    store: Store;
    isOpen = true;

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

export const useLayerManagerStore = () => {
    return useStore().layerManagerStore;
}