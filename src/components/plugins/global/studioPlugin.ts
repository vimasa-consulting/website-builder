import type { Component, Editor, ObjectAny } from 'grapesjs';
import { getStore } from "../../store";
import blockIconsToComponent from "./blockIconsToComponent";
import fillEmptyComponents from "./fillEmptyComponents";
import debounce from '../../utils/debounce';
import extendExternalComponents from './extendExternalComponents';

export const CMD_SELECT_TARGET = 'select-target';
export const CMD_ACTIVE_STYLES = 'enable-sm';

export default function studioPlugin(editor: Editor) {
    const { appEditorStore, blockManagerStore } = getStore();
    const { editorConfig, projectIdToLoad } = appEditorStore;
    const toggleBlockManager = () => blockManagerStore.toggleOpen();
    const toggleLeftSidebar = () => appEditorStore.toggleLeftSidebar();
    const toggleRightSidebar = () => appEditorStore.toggleRightSidebar();
    const { defaultProject } = editorConfig;

    if (defaultProject) {
        const { data } = defaultProject;
        editor.Pages.getConfig().pages = [...data.pages];
        editor.Css.config.rules = data.styles;
    }

    if (projectIdToLoad) {
        const storageOptions = editor.Storage.getConfig().options!;
        if (storageOptions) {
            storageOptions.local!.key = projectIdToLoad;
        }
    }

    // TODO move in grapesjs/react
    editor.RichTextEditor.getConfig().custom = true;

    // Canvas
    const { Canvas } = editor;
    const disablePanning = debounce(() => appEditorStore.setCanvasPanning(false), 200);
    editor.on(Canvas.events.coords, () => {
        appEditorStore.setCanvasPanning(true);
        disablePanning();
    });

    // Keymaps
    [
        // { id: `save`, keys: 'ctrl+s, ⌘+s', cmd: 'save-page' },
        // { id: `duplicate`, keys: 'ctrl+d, ⌘+d', cmd: 'tlb-clone' },
        // { id: `custom-component`, keys: 'ctrl+k, ⌘+k', cmd: 'open-custom-block' },
        // { id: `create-symbol`, keys: 'alt+ctrl+k, alt+⌘+k', cmd: createSymbol },
        // { id: `detach-symbol`, keys: 'shift+alt+ctrl+k, shift+alt+⌘+k', cmd: detachSymbol },
        { id: `toggle-lsidebar`, keys: 'alt+ctrl+,', cmd: toggleLeftSidebar },
        { id: `toggle-lsidebar2`, keys: 'alt+⌘+,', cmd: toggleLeftSidebar },
        { id: `toggle-rsidebar`, keys: 'alt+ctrl+., alt+⌘+.', cmd: toggleRightSidebar },
        { id: 'show-blocks', keys: 'ctrl+b, ⌘+b', cmd: toggleBlockManager },
    ].forEach(({ id, keys, cmd }) => {
        editor.Keymaps.add(`preset:${id}`, keys, cmd, { prevent: true });
    });

    // Commands update
    editor.on('run:core:preview', () => {
        appEditorStore.setPreview(true);
        blockManagerStore.setOpen(false);
    });
    editor.on('stop:core:preview', () => {
        appEditorStore.setPreview(false);
        // Update canvas tools post animation
        setTimeout(() => {
            editor.refresh();
        }, appEditorStore.transitionTime);
    });

    // Commands
    const spotSelectTargetId = 'target-selection';
    editor.Commands.add(CMD_SELECT_TARGET, {
        opts: {} as ObjectAny,
        init() {
            this.beforeSelect = this.beforeSelect.bind(this);
        },
        onComponentHover(em: any, cmp: Component) {
            const spot = { id: spotSelectTargetId, type: 'target', component: cmp };
            cmp ? Canvas.addSpot(spot) : Canvas.removeSpots(spot);
        },
        beforeSelect(cmp: Component, opts: any = {}) {
            opts.abort = true;
            opts.useValid = false;
            this.opts.onSelect(cmp);
            editor.stopCommand(CMD_SELECT_TARGET);
        },
        run(em, _, opts) {
            this.opts = opts;
            editor.on('component:select:before', this.beforeSelect);
            editor.on('change:componentHovered', this.onComponentHover);
        },
        stop() {
            editor.off('component:select:before', this.beforeSelect);
            editor.off('change:componentHovered', this.onComponentHover);
            Canvas.removeSpots({ id: spotSelectTargetId });
            appEditorStore.setSelectingTarget(false);
        },
    });

    editor.Commands.add(CMD_ACTIVE_STYLES, () => {
        appEditorStore.setSelectedDesignerTab('style');
    });

    extendExternalComponents(editor);
    blockIconsToComponent(editor);
    fillEmptyComponents(editor, {});
}