import type { BlockProperties, Plugin } from 'grapesjs';
import { elHasTagName, getBlockIndex } from './utils';

export interface PluginOptions {
  block?: Partial<BlockProperties>;
};

const plugin: Plugin<PluginOptions> = function (editor, opts = {}) {
    const { Components, Blocks } = editor;

    const componentId = 'heading';
    const componentClass = 'gjs-heading';

    Blocks.add(componentId, {
      label: componentId,
      media: `
        <svg viewBox="0 0 24 24">
          <path d="M8.3 11.5h7.4V6.9l-.2-1.6a1 1 0 00-.5-.5c-.3-.2-.7-.3-1-.3h-.6v-.4h6.8v.4h-.6c-.4 0-.7.1-1 .3a1 1 0 00-.6.6L18 6.9v10.3c0 .8 0 1.3.2 1.6 0 .2.2.3.4.5.4.2.7.3 1.1.3h.6v.4h-6.8v-.4h.5c.7 0 1.2-.2 1.5-.6.2-.3.3-.9.3-1.8v-4.9H8.3v4.9l.1 1.6.5.5c.3.2.7.3 1 .3h.7v.4H3.7v-.4h.6c.7 0 1.1-.2 1.4-.6.2-.3.3-.9.3-1.8V6.9L6 5.3a1 1 0 00-.5-.5l-1-.3h-.7v-.4h6.9v.4H10c-.4 0-.8.1-1 .3a1 1 0 00-.6.6l-.1 1.5v4.6z"></path>
        </svg>
      `,
      content: { type: componentId, components: 'Insert your text here' },
      ...opts.block,
    }, { at: getBlockIndex(editor, 'text') });

    Components.addType(componentId, {
      extend: 'text',
      isComponent: (el) => elHasTagName(el, 'H1', 'H2', 'H3', 'H4', 'H5', 'H6'),
      model: {
        defaults: {
          emptyState: true,
          tagName: 'h1',
          attributes: { class: componentClass },
          styles: `
            .${componentClass} {
              margin: 0;
            }
          `,
          traits: [{
              type: 'select',
              options: [
                { value: 'h1', name: 'One (largest)'},
                { value: 'h2', name: 'Two' },
                { value: 'h3', name: 'Three' },
                { value: 'h4', name: 'Four' },
                { value: 'h5', name: 'Five' },
                { value: 'h6', name: 'Six (smallest)' }
              ],
              label: 'Size',
              name: 'tagName',
              changeProp: true,
          }]
        },
      },
    });
}

export default plugin;