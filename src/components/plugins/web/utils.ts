import type { Editor, Page } from 'grapesjs';

export const toEditorType = (...ids: string[]) => {
    return ids.map(id => `[data-gjs-type="${id}"]`).join(',');
};

export const elHasTagName = (el: HTMLElement, ...tags: string[]) => {
    return tags.indexOf(el?.tagName?.toUpperCase()) >= 0;
}

export const elHasClassName = (el: HTMLElement, className: string) => {
    return el?.classList?.contains(className);
}

export const elHasAttribute = (el: HTMLElement, attrName: string) => {
    return !!el?.getAttribute?.(attrName);
}

export const getBlockIndex = (editor: Editor, blockId: string): number => {
    const block = editor.Blocks.get(blockId);
    return block ? block.collection.indexOf(block) : -1;
}

export const toSafeFilename = (value: string) => value.replace(/[^a-z0-9.]/gi, '_').toLowerCase();

export const getPageSlug = (editor: Editor, page: Page): string => {
    const { Pages } = editor;
    const index = Pages.getAll().indexOf(page);
    const filename = index === 0 ? 'index' : toSafeFilename(page.getName());
    return `${filename}.html`;
}