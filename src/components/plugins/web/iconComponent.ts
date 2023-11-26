import type { BlockProperties, Plugin } from 'grapesjs';
import { elHasAttribute, elHasClassName} from './utils';
import debounce from './../../utils/debounce';

export interface PluginOptions {
  block?: Partial<BlockProperties>;
};

export const resizableAngles = { ratioDefault: true, tc: false, cl: false, cr: false, bc: false };

const svgContent = `<svg viewBox="0 0 24 24">
  <path d="M16 9h3l-5 7m-4-7h4l-2 8M5 9h3l2 7m5-12h2l2 3h-3m-5-3h2l1 3h-4M7 4h2L8 7H5m1-5L2 8l10 14L22 8l-4-6H6z"></path>
</svg>`;

const plugin: Plugin<PluginOptions> = function (editor, opts = {}) {
    const { Components, Blocks } = editor;

    const componentId = 'icon';
    const componentClass = 'gjs-icon';
    const componentAttrType = 'data-type-icon';

    Blocks.add(componentId, {
      label: componentId,
      media: svgContent,
      content: { type: componentId },
      ...opts.block,
    },
    //{ at: getBlockIndex(editor, 'link') + 1 }
    );

    Components.addType(componentId, {
      isComponent: (el) => elHasClassName(el, componentClass) || elHasAttribute(el, componentAttrType),
      model: {
        defaults: {
          droppable: false,
          attributes: { class: componentClass, [componentAttrType]: true },
          resizable: resizableAngles,
          components: svgContent,
          traits: [
            'id',
            'title',
            {
              type: 'code',
              label: 'Content',
              // @ts-ignore
              typeProps: {
                language: 'html',
                clean: true,
                padding: 5,
              },
              getValue({ component }: any) {
                return component.getInnerHTML();
              },
              setValue: debounce(({ editor, component, value }: any) => {
                const parsed = editor.Parser.parseHtml(value).html;
                const result = Array.isArray(parsed) ? parsed[0] : parsed;
                const isSVG = result && result.tagName === 'svg';
                isSVG && component.components(result);
              }, 500),
            }
          ],
          styles: `
            .${componentClass} {
              display: inline-block;
              text-decoration: none;
              color: inherit;
              vertical-align: middle;
              fill: currentColor;
              width: 50px;
              height: 50px;
            }
          `
        },

        init() {
          this.listenTo(this.components(), 'change add', this.disableLayers);
          this.disableLayers();
        },

        disableLayers() {
          //@ts-ignore
          this.components().forEach(model => model.set('layerable', false));
        },
      },
      view: {
        init() {
          const { model } = this;
          this.listenTo(model.components(), 'change', this.disableChildren);
        },

        onRender() {
          this.disableChildren();
        },

        disableChildren() {
          //@ts-ignore
          this.model.components().forEach(model => {
            const el = model.view?.el;
            if (el) {
              el.style.pointerEvents = 'none';
            }
          });
        },
      }
    });
}

export default plugin;