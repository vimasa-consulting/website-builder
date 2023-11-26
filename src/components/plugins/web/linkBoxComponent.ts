import type { BlockProperties, Plugin } from 'grapesjs';
import { elHasClassName, getBlockIndex } from './utils';

export interface PluginOptions {
  block?: Partial<BlockProperties>;
};

const plugin: Plugin<PluginOptions> = function (editor, opts = {}) {
    const { Components, Blocks } = editor;

    const componentId = 'linkBox';
    const componentClass = 'gjs-link-box';

    Blocks.add(componentId, {
      label: componentId,
      media: `
        <svg viewBox="0 0 24 24">
          <path d="M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V5H19V19M11,16H10C8.39,16 6,14.94 6,12C6,9.07 8.39,8 10,8H11V10H10C9.54,10 8,10.17 8,12C8,13.9 9.67,14 10,14H11V16M14,16H13V14H14C14.46,14 16,13.83 16,12C16,10.1 14.33,10 14,10H13V8H14C15.61,8 18,9.07 18,12C18,14.94 15.61,16 14,16M15,13H9V11H15V13Z" />
        </svg>
      `,
      content: { type: componentId },
      ...opts.block,
    }, { at: getBlockIndex(editor, 'link') + 1 });

    Components.addType(componentId, {
      isComponent: (el) => elHasClassName(el, componentClass),
      extend: 'link',
      model: {
        defaults: {
          editable: false,
          droppable: true,
          attributes: { class: componentClass },
          styles: `
            .${componentClass} {
              color: inherit;
              display: inline-block;
              vertical-align: top;
              padding: 10px;
              max-width: 100%;
              text-decoration: none;
            }
          `
        },
      },
    });
}

export default plugin;