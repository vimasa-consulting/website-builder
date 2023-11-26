import { makeAutoObservable } from 'mobx';
import { getStore, Store, useStore } from ".";
import { IToast } from '../Editor/Toast';

export class ToastStore {
    store: Store;
    toasts: IToast[] = [];

    constructor(store: Store) {
        this.store = store;
        makeAutoObservable(this, {}, { autoBind: true });
    }

    add(id: string, props: Omit<IToast, 'id'>) {
        this.toasts.push({
            id,
            ...props,
        });
    }

    remove(id: string) {
        this.toasts = this.toasts.filter(toast => toast.id !== id);
    }
};

export const useToastStore = () => {
    return useStore().toastStore;
}

export const getToastStore = () => {
    return getStore().toastStore;
}