import type { Editor } from 'grapesjs';
import dividerComponent from './dividerComponent';
import extendComponents from './extendComponents';
import gridComponent from './gridComponent';
import headingComponent from './headingComponent';
import imageBoxComponent from './imageBoxComponent';
import linkBoxComponent from './linkBoxComponent';
import onBeforeStyle from "./parseStyles";
import sectionComponent from './sectionComponent';
import iconComponent from './iconComponent';

const basicCategory = 'Basic';

export default function pluginWeb(editor: Editor) {
    // const store = getStore();
    // @ts-ignore TODO TS gjs
    editor.Css.getConfig().onBeforeStyle = onBeforeStyle;

    // TODO remove
    editor.Components.addType('trait-check', {
        model: {
            defaults: {
                traits: [
                    'id',
                    'title',
                    {
                        type: 'select',
                        name: 'select-type',
                        options: [
                            { id: 'value1', label: 'Value 1' },
                            { id: 'value2', label: 'Value 2' },
                            { id: 'value3', label: 'Value 3' },
                        ]
                    },
                    {
                        type: 'number',
                        name: 'number-type',
                        // @ts-ignore TODO ts
                        units: ['px', 'rem', '%'],
                    },
                    {
                        type: 'checkbox',
                        name: 'checkbox-type',
                    },
                    {
                        type: 'color',
                        name: 'color-type',
                    },
                    {
                        type: 'button',
                        name: 'button-type',
                        label: 'Delete',
                        command: 'core:component-delete',
                    },
                ]
            }
        }
    });

    const basicBlocksProps = { category: basicCategory, select: true, activate: true };

    extendComponents(editor, {});
    gridComponent(editor, { block: basicBlocksProps });
    headingComponent(editor, { block: basicBlocksProps });
    sectionComponent(editor, { block: basicBlocksProps });
    dividerComponent(editor, { block: basicBlocksProps });
    imageBoxComponent(editor, { block: basicBlocksProps });
    linkBoxComponent(editor, { block: basicBlocksProps });
    iconComponent(editor, { block: basicBlocksProps });
}