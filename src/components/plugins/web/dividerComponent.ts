import type { BlockProperties, Plugin } from 'grapesjs';
import { sectionId } from './sectionComponent';
import { elHasClassName, getBlockIndex } from './utils';

export interface PluginOptions {
  block?: Partial<BlockProperties>;
};

const plugin: Plugin<PluginOptions> = function (editor, opts = {}) {
    const { Components, Blocks } = editor;

    const componentId = 'divider';
    const componentClass = 'gjs-divider';

    Blocks.add(componentId, {
      label: componentId,
      media: `
        <svg viewBox="0 0 24 24">
          <path d="M8,18H11V15H2V13H22V15H13V18H16L12,22L8,18M12,2L8,6H11V9H2V11H22V9H13V6H16L12,2Z" />
        </svg>
      `,
      content: { type: componentId },
      ...opts.block,
    }, { at: getBlockIndex(editor, sectionId) + 1 });

    Components.addType(componentId, {
      isComponent: (el) => elHasClassName(el, componentClass),
      model: {
        defaults: {
          droppable: false,
          highlightable: false,
          attributes: { class: componentClass },
          stylable: ['height', 'width', 'background-color', 'margin', 'margin-top', 'margin-right', 'margin-bottom', 'margin-left'],
          styles: `
            .${componentClass} {
              height: 3px;
              width: 100%;
              margin: 10px;
              background-color: rgba(0, 0, 0, 0.05);
            }
          `
        },
      },
    });
}

export default plugin;