import type { BlockProperties, Plugin } from 'grapesjs';
import { blockIdColumn37 } from './gridComponent';
import { elHasClassName, getBlockIndex, toEditorType } from './utils';

export interface PluginOptions {
  block?: Partial<BlockProperties>;
};

export const sectionId = 'section';
const containerId = 'container';
const sectionClass = 'gjs-section';
const containerClass = 'gjs-container';

const plugin: Plugin<PluginOptions> = function (editor, opts = {}) {
    const { Components, Blocks } = editor;

    Blocks.add(sectionId, {
      label: sectionId,
      media: `
        <svg viewBox="0 0 24 24">
          <path fill="currentColor" d="M21 18H2V20H21V18M19 10V14H4V10H19M20 8H3C2.45 8 2 8.45 2 9V15C2 15.55 2.45 16 3 16H20C20.55 16 21 15.55 21 15V9C21 8.45 20.55 8 20 8M21 4H2V6H21V4Z" />
        </svg>
      `,
      content: { type: sectionId },
      ...opts.block,
    }, { at: getBlockIndex(editor, blockIdColumn37) + 1 });

    Components.addType(sectionId, {
      isComponent: (el) => elHasClassName(el, sectionClass),
      model: {
        defaults: {
          tagName: 'section',
          emptyState: true,
          draggable: toEditorType('wrapper'),
          droppable: toEditorType(containerId),
          attributes: { class: sectionClass },
          components: { type: containerId },
          styles: `
            .${sectionClass} {
              display: flex;
              padding: 50px 0;
            }
          `
        },
      },
    });

    Components.addType(containerId, {
      isComponent: (el) => elHasClassName(el, containerClass),
      model: {
        defaults: {
          emptyState: true,
          copyable: false,
          removable: false,
          draggable: false,
          attributes: { class: containerClass },
          styles: `
            .${containerClass} {
              width: 90%;
              margin: 0 auto;
              max-width: 1200px;
            }
          `
        }
      },
    });
}

export default plugin;