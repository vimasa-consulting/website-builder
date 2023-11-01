export interface BlockDetails {
    label: string;
    content: string;
    media: string;
    category: Category;
    activate: boolean;
    resetId: boolean;
    disable: boolean;
    attributes: BlockDetailsAttributes;
    id: string;
}

export interface BlockDetailsAttributes {
    className: string;
}

export interface Category {
    id: string;
    label: string;
    open: boolean;
    attributes: CategoryAttributes;
}

export interface CategoryAttributes {
}
