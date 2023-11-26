import { makeAutoObservable } from 'mobx';
import { Store, useStore } from ".";
import { ButtonProps } from '../Editor/Button';
import { ModalProps } from '../Editor/Modal';

type ModalPropsWithContent = Partial<ModalProps & { content: React.ReactNode }>;

export class ModalStore {
    store: Store;
    isOpen: boolean = false;
    title: React.ReactNode = '';
    content: React.ReactNode = '';
    size: ModalProps['size'] = 'l';
    fullH: ModalProps['fullH'] = false;
    modalProps: Partial<ModalProps> = {};
    buttons: ButtonProps[] = [];

    constructor(store: Store) {
        this.store = store;
        makeAutoObservable(this, {}, { autoBind: true });
    }

    setModalProps(props: Partial<ModalProps>) {
        this.modalProps = {
            title: '',
            size: 'l',
            fullH: false,
            buttons: [],
            ...props,
        };
    }

    open({ content, ...rest }: ModalPropsWithContent) {
        this.isOpen = true;
        this.content = content;
        this.setModalProps(rest);
    }

    close() {
        this.isOpen = false;
        setTimeout(this.clear, 101);
    }

    clear() {
        this.content = '';
        this.setModalProps({
            size: this.modalProps.size,
        });
    }

    confirm({ content, size = 'm', onConfirm, ...rest }: ModalPropsWithContent & { onConfirm?: () => void }) {
        this.isOpen = true;
        this.content = content;

        const onConfirmClick = () => {
            onConfirm?.();
            this.close();
        }
        this.setModalProps({
            ...rest,
            size,
            buttons: [
                { children: 'Confirm', onClick: onConfirmClick, size: 'm2', variant: 'pr' },
                { children: 'Cancel', onClick: this.close, size: 'm2' },
            ]
        })
    }
};

export const useModalStore = () => {
    return useStore().modalStore;
}