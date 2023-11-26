import type { BlockProperties, Plugin } from 'grapesjs';
import { getPageSlug } from './utils';

export interface PluginOptions {
  block?: Partial<BlockProperties>;
};

const prefixPage = 'page://';

const plugin: Plugin<PluginOptions> = function (editor, opts = {}) {
    const { Components, Blocks } = editor;
    const wrapperModel = Components.getType('wrapper')!.model;
    const wrapperDefaults = wrapperModel.getDefaults();

    Components.addType('wrapper', {
      model: {
        defaults: {
          emptyState: { styleIn: 'height: 100vh', styleOut: 'padding: 0;' },
          stylable: [
            ...wrapperDefaults.stylable,
            // For now, the whole Typography section is visible because we don't handle
            // properly each property visibility, so this might change in case that will
            // be fixed (we'll need to indicate all Typography properties in that case).
            'font-family',
          ],
        }
      }
    });

    Components.addType('text', {
      model: {
        defaults: {
          highlightable: false,
          emptyState: { styleIn: 'min-height: auto; font-size: inherit;' },
        }
      }
    });

    Components.addType('image', {
      model: {
        defaults: {
          traits: [
            'alt',
            {
              type: 'checkbox',
              name: 'loading',
              valueTrue: 'lazy',
            }
          ],
        },
      },
    });

    const linkClass = 'gjs-link';
    const typeLink = Components.getType('link')!;
    const typyLinkModel = typeLink.model;
    Components.addType('link', {
      model: {
        defaults: {
          emptyState: true,
          attributes: { class: linkClass },
          traits: [
            'title',
            {
              type: 'checkbox',
              name: 'target',
              valueTrue: '_blank',
            },
            {
              type: 'href',
              name: 'href',
            },
          ],
          styles: `
            .${linkClass} {
              vertical-align: top;
              max-width: 100%;
              display: inline-block;
              text-decoration: none;
              color: inherit;
            }
          `,
        },

        getAttrToHTML() {
          const attr = typyLinkModel.prototype.getAttrToHTML.apply(this) as any;
          const { href } = attr;

          if (href) {
            if (href.indexOf(prefixPage) === 0) {
              const pageId = href.replace(prefixPage, '');
              const page = editor.Pages.get(pageId);
              attr.href = page ? `./${getPageSlug(editor, page)}` : '##';
            }
          }

          return attr;
        }
      },
    });

    Blocks.add('link', {
      label: 'Link',
      content: {
        type: 'link',
        content: 'Link',
        style: { color: '#d983a6', padding: '10px' }
      }
    }, { merge: true });

    Components.addType('select', {
      model: {
        defaults: {
          traits: [
            { name: 'name' },
            {
              type: 'checkbox',
              name: 'required',
            },
            {
              name: 'options',
              type: 'stack',
              getValue({ component }) {
                //@ts-ignore
                return component.components().map(cmp => ({
                  id: cmp.getAttributes()['value'] || '',
                  label: cmp.getInnerHTML()
                }));
              },
              setValue: ({
                component,
                value,
                emitUpdate,
              }) => {
                component.components(value.map((v: any) => ({
                  type: 'option',
                  content: v.label,
                  attributes: { value: v.id }
                })));
                emitUpdate();
              },
              // @ts-ignore
              properties: [
                { name: 'id' },
                { name: 'label' },
              ]
            },
          ],
        },
      },
    });
}

export default plugin;