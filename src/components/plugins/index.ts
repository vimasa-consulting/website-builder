import { PluginToLoad } from "../Editor/Grapesjs/utils";
import { ProjectType } from "../utils/types";
import pluginWeb from "./web";

export const PLUGIN_BY_PROJECT: Record<ProjectType, (editor: any) => void> = {
    web: pluginWeb,
};

export const PLUGINS_BY_PROJECT: Record<ProjectType | 'global', PluginToLoad[]> = {
    global: [
        {
            id: 'grapesjs-indexeddb',
            src: '/unpkg.com/grapesjs-indexeddb@1.0.4/dist/index.js',
            options: { type: 'local' },
        },
    ],
    web: [
        { id: 'gjs-blocks-basic', src: '/unpkg.com/grapesjs-blocks-basic@1.0.1/dist/index.js' },
        { id: 'grapesjs-plugin-forms', src: '/unpkg.com/grapesjs-plugin-forms@2.0.5/dist/index.js' },
        { id: 'grapesjs-plugin-export', src: '/unpkg.com/grapesjs-plugin-export@1.0.11/dist/index.js', options: {
            isBinary: (content: string, name: string) => {
                const ext = name.split('.')[1];
                // https://stackoverflow.com/questions/1677644/detect-non-printable-characters-in-javascript
                // eslint-disable-next-line no-control-regex
                return /[\x00-\x08\x0E-\x1F]/.test(content) && !(ext && ['html', 'css'].indexOf(ext) >= 0);
            }
        } },
        { id: 'grapesjs-parser-postcss', src: '/unpkg.com/grapesjs-parser-postcss@1.0.1/dist/index.js' },
        { id: 'grapesjs-tui-image-editor', src: '/unpkg.com/grapesjs-tui-image-editor@1.0.1/dist/index.js' },

        { id: 'grapesjs-component-countdown', src: '/unpkg.com/grapesjs-component-countdown@1.0.1/dist/index.js' },
        //{ id: 'grapesjs-tabs', src: 'https://unpkg.com/grapesjs-tabs@1.0.6/dist/grapesjs-tabs.min.js', options: { tabsBlock: { category: 'Extra' } } },
        //{ id: 'grapesjs-custom-code', src: 'https://unpkg.com/grapesjs-custom-code@1.0.1/dist/index.js' },
        // { id: 'grapesjs-tooltip', src: 'https://unpkg.com/grapesjs-tooltip@0.1.7/dist/index.js' },
        // { id: 'grapesjs-typed', src: 'https://unpkg.com/grapesjs-typed@1.0.5/dist/grapesjs-typed.min.js', options: { block: { category: 'Extra' } } },
        // TODO remove empty state
        { id: 'grapesjs-navbar', src: '/unpkg.com/grapesjs-navbar@1.0.1/dist/index.js', options: { block: { category: 'Extra' } } },

        // { id: 'grapesjs-touch', src: 'https://unpkg.com/grapesjs-touch@0.1.1' },
        // { id: 'grapesjs-style-bg', src: 'https://unpkg.com/grapesjs-style-bg@1.0.5' },
    ],
}