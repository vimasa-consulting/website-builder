import type { Plugin } from 'grapesjs';

interface EmptyStateOptions {
  limitW?: boolean,
  limitH?: boolean,
  smallH?: boolean,
  styleOut?: string,
  styleIn?: string
};

const addEmptyStyle = (
  view: any,
  type: string,
  text = 'Empty',
  opts: EmptyStateOptions = {}
) => {
  const key = 'data-type';
  const keyAttr = `[${key}="${type}"]`;
  const head = view.frameView.getHead();
  const styleOut = opts.styleOut || '';
  const styleIn = opts.styleIn || '';
  if (!head.querySelector(`style${keyAttr}`)) {
    const style = document.createElement('style');
    style.setAttribute(key, type);
    style.innerHTML = `
    [data-gjs-type="${type}"]:empty {
      text-decoration: none;
      padding: 5px;
      ${opts.limitW ? 'min-width: 50px;' : ''}
      ${styleOut}
    }
    [data-gjs-type="${type}"]:empty:before {
      background-color: #ddd;
      color: #000;
      font-size: 16px;
      font-weight: bold;
      font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Open Sans", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 30px;
      padding: 0 10px;
      opacity: 0.3;
      border-radius: 3px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      content: "${text}";
      /*
      z-index: -1;
      position: relative;
      */

      ${opts.limitH ? 'height: auto;' : ''}
      ${opts.smallH ? 'min-height: 30px;' : ''}
      ${styleIn}
    }`;
    head.appendChild(style);
  }
};

export interface PluginOptions {
  components?: Record<string, any>;
};

const plugin: Plugin<PluginOptions> = function blockIconsToComponent(editor, opts = {}) {
    const { Components } = editor;
    const config = {
      components: {
        // wrapper: { styleIn: 'height: 100vh' },
        // text: { styleIn: 'min-height: auto; font-size: inherit;' },
      },
      ...opts,
    };

    const extendComponent = (compType: any) => {
        const { id, view } = compType;
        const viewPrototype = view.prototype;
        const typeOpts = config.components[id];

        Components.addType(id, {
          view: {
            onRender() {
              viewPrototype.onRender.apply(this, arguments);
              const { model } = this;
              const defaults = (model.constructor as any).getDefaults();
              const emptyState = (defaults.emptyState || typeOpts) as boolean | EmptyStateOptions;
              const type = model.get('type')!;

              if (!emptyState || defaults.void === true || type !== id) return;

              const empty = emptyState === true ? {} : emptyState;
              addEmptyStyle(this, type, model.getName({ noCustom: true }), empty);
            }
          }
        });
    };

    Components.getTypes().forEach(extendComponent);
    editor.on('component:type:add', extendComponent);
}

export default plugin;