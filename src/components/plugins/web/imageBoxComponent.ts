import type { BlockProperties, Plugin } from 'grapesjs';
import { elHasClassName, getBlockIndex } from './utils';

export interface PluginOptions {
  block?: Partial<BlockProperties>;
};

const plugin: Plugin<PluginOptions> = function (editor, opts = {}) {
    const { Components, Blocks } = editor;
    const defaultModel = editor.Components.getType('default').model;

    const componentId = 'imageBox';
    const componentClass = 'gjs-image-box';

    Blocks.add(componentId, {
      label: componentId,
      media: `
        <svg viewBox="0 0 24 24">
          <path d="M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M13.96,12.29L11.21,15.83L9.25,13.47L6.5,17H17.5L13.96,12.29Z" />
        </svg>
      `,
      content: { type: componentId },
      ...opts.block,
    }, { at: getBlockIndex(editor, 'image') + 1 });

    Components.addType(componentId, {
      extend: 'image',
      isComponent: (el) => elHasClassName(el, componentClass),
      model: {
        defaults: {
          tagName: 'div',
          void: false,
          droppable: true,
          emptyState: false,
          resizable: { tl: 0, tc: 0, tr: 0, cl: 0, cr:0, bl:0, br: 0 },
          traits: ['title'],
          attributes: { class: componentClass },
          styles: `
            .${componentClass} {
              height: 200px;
              width: 100%;
            }
          `
        },
        getAttrToHTML(...args: any) {
          // Avoid src in attributes
          return defaultModel.prototype.getAttrToHTML.apply(this, args);
        },
      },
      view: {
        // @ts-ignore TODO ts
        tagName: 'div',
        updateSrc() {
          const { model, em } = this;
          // @ts-ignore
          const src = model.getSrcResult();
          // @ts-ignore
          const srcDef = model.isDefaultSrc();
          const style = model.getStyle();
          const srcUrl = `url('${src}')`;
          src && model.addStyle({
            'background-image': !srcDef ? srcUrl : style['background-image'] || srcUrl,
            'background-size': style['background-size'] || 'contain',
            'background-position': style['background-position'] || 'center center',
            'background-attachment': style['background-attachment'] || 'scroll',
            'background-repeat': style['background-repeat'] || 'no-repeat',
          });
          src && em.trigger('component:toggled');
          this.$el[src ? 'removeClass' : 'addClass'](this.classEmpty);
        },
        onRender() {
          this.renderChildren();
          this.updateSrc();
        }
      }
    });
}

export default plugin;