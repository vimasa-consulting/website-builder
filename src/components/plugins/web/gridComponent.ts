import type { BlockProperties, Plugin } from 'grapesjs';
import { elHasClassName, toEditorType } from './utils';

export interface PluginOptions {
  block?: Partial<BlockProperties>;
};

export const blockIdColumn1 = 'column1';
export const blockIdColumn2 = 'column2';
export const blockIdColumn3 = 'column3';
export const blockIdColumn37 = 'column3-7';

const plugin: Plugin<PluginOptions> = function (editor, opts = {}) {
    const { Components, Blocks } = editor;
    const gridId = 'gridRow';
    const gridColumnId = 'gridColumn';
    const gridClass = 'gjs-grid-row';
    const gridItemClass = 'gjs-grid-column';
    const resizable = { tl: 0, tc: 0, tr: 0, cl: 0, bl:0, br: 0 };
    const keyWidth = 'flex-basis';
    const minDim = 1;
    const step = 1; //0.2;
    const currentUnit = 1;

    Components.addType(gridId, {
      isComponent: (el) => elHasClassName(el, gridClass),
      model: {
        defaults: {
          emptyState: true,
          droppable: toEditorType(gridColumnId),
          highlightable: false,
          attributes: { class: gridClass },
          resizable: { ...resizable, keyHeight: 'min-height', },
          icon: `
            <svg viewBox="0 0 24 24">
              <path d="M22 14c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v4M4 14h4v-4H4v4m6 0h4v-4h-4v4m6 0h4v-4h-4v4z"></path>
            </svg>
          `,
          'stylable-require': ['flex-align-items', 'flex-align-items-v', 'flex-direction-id', 'flex-multiline'],
          traits: [
            'id',
            'title',
            {
              name: 'add-column',
              labelButton: 'Add column',
              type: 'button',
              full: true,
              command: (editor: any) => {
                editor.getSelected().components().add({ type: gridColumnId });
              },
            },
          ],
          styles: `
            .${gridClass} {
              display: flex;
              justify-content: flex-start;
              align-items: stretch;
              flex-direction: row;
              min-height: auto;
              padding: 10px 0;
            }
            @media (max-width: 992px) {
              .${gridClass} {
                flex-direction: column;
              }
            }
          `,
        },
      }
    });

    Components.addType(gridColumnId, {
      isComponent: (el) => elHasClassName(el, gridItemClass),
      model: {
        defaults: {
          emptyState: true,
          attributes: { class: gridItemClass },
          draggable: toEditorType(gridId),
          resizable: { ...resizable, bc: 0, keyWidth, currentUnit, minDim, step },
          icon: `
            <svg viewBox="0 0 24 24">
              <path d="M8 2h8c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2m0 8v4h8v-4H8m0 6v4h8v-4H8M8 4v4h8V4H8z"></path>
            </svg>
          `,
          unstylable: ['width'],
          'stylable-require': ['flex-basis', 'flex-item-behaviour', 'flex-item-h-align', 'flex-order'],
          traits: [{
            label: 'Center content',
            name: 'center-content',
            type: 'checkbox',
            changeProp: true,
          }],
          styles: `
            .${gridItemClass} {
              flex: 1 1 0%;
              padding: 5px 0;
            }
          `,
        },

        init() {
          this.listenTo(this, 'change:center-content', this.handleCenter);
        },

        handleCenter() {
          const center = this.get('center-content');
          this.addStyle({
            'display': center ? 'flex' : 'block',
            'align-items': center ? 'center' : '',
            'justify-content': center ? 'center' : '',
          });
        },
      },
    });


    const blockBase = {
      label: gridId,
      content: {
        type: gridId,
        components: [
          { type: gridColumnId },
          { type: gridColumnId },
          { type: gridColumnId },
        ]
      },
      ...opts.block,
    };

    const blockOptions = { merge: true };

    Blocks.add(blockIdColumn1, {
      ...blockBase,
      content: {
        type: gridId,
        components: [
          { type: gridColumnId },
        ]
      },
    }, blockOptions);
    Blocks.add(blockIdColumn2, {
      ...blockBase,
      content: {
        type: gridId,
        components: [
          { type: gridColumnId },
          { type: gridColumnId },
        ]
      },
    }, blockOptions);
    Blocks.add(blockIdColumn3, {
      ...blockBase,
      content: {
        type: gridId,
        components: [
          { type: gridColumnId },
          { type: gridColumnId },
          { type: gridColumnId },
        ]
      },
    }, blockOptions);
    Blocks.add(blockIdColumn37, {
      ...blockBase,
      content: {
        type: gridId,
        components: [
          { type: gridColumnId, style: { 'flex-basis': '30%', 'flex-grow': 0 } },
          { type: gridColumnId },
        ]
      },
    }, blockOptions);
}

export default plugin;