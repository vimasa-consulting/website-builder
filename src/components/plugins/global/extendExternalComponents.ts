import type { Component, Editor } from 'grapesjs';
import { CMD_ACTIVE_STYLES } from './studioPlugin';

export default function extendExternalComponents(editor: Editor) {
    const { Components } = editor;

    const extend = (compType: any) => {
        const { id, model } = compType;

        // Custom code
        if (id === 'custom-code') {
          const defContent = '<span>Insert here your custom code</span>';
          Components.addType(id, {
            model: {
              defaults: {
                emptyState: true,
                icon: `<svg viewBox="0 0 24 24"><path d="M14.6 16.6l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4m-5.2 0L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4z"></path></svg>`,
                classes: 'gjs-custom-code',
                components: defContent,
                'custom-code-plugin__code': defContent,
                styles: '.gjs-custom-code { padding: 5px; }',
              },
            },
          });
        }

        // TYPED
        if (id === 'typed') {
          const traits = model.getDefaults().traits.map((trait: any) => (
            trait.name === 'strings' ?
            {
              ...trait,
              type: 'stack',
              addItem(id: number) {
                return {
                  id,
                  label: `New string ${id}`,
                }
              },
              getValue({ component }: { component: Component }) {
                return component.get('strings').map((str: string, i: number) => ({
                  id: `${i}`,
                  label: str,
                }));
              },
              setValue: ({ component, value }: any) => {
                const strings = value.map((v: any) => v.label);
                component.set({ strings });
                component.trigger('rerender');
              },
              properties: [
                { name: 'label' },
              ]
            }
            : trait
          ));

          Components.addType(id, {
            model: {
              defaults: {
                traits: traits,
                strings: [
                  'These are the default values...!!!',
                  'Use your own strings from Properties!',
                  'Have a great day!',
                ],
                icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"><path d="M212.3 44l2.3 49.6h-6A60 60 0 00204 75c-3.2-6-7.5-10.5-12.9-13.3a44.9 44.9 0 00-21.1-4.3h-29.8V219c0 13 1.4 21 4.2 24.3 4 4.4 10 6.6 18.2 6.6h7.4v5.7H80.2V250h7.5c9 0 15.3-2.7 19-8.2 2.4-3.3 3.5-10.9 3.5-22.7V57.3H84.8a71 71 0 00-21.1 2.2 29 29 0 00-13.9 11.3 46.1 46.1 0 00-6.9 22.8H37L39.5 44h172.8zM245 22h18v256h-18z"/></svg>',
                classes: 'gjs-typed',
                styles: `
                  .gjs-typed {
                    padding: 5px;
                  }
                `,
              },
            },
          });
        }

        // TABS
        if ([
          'tabs', 'tab-content', 'tab-contents',  'tab', 'tab-container'
        ].indexOf(id) >= 0) {
          const icon = id === 'tabs' ? `
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 9.3c0-.8-.5-1.3-1.3-1.3H3.4C2.5 8 2 8.5 2 9.3v7.4c0 .8.5 1.3 1.3 1.3h17.4c.8 0 1.3-.5 1.3-1.3V9.3zM21 17H3V9h18v8z" fill-rule="nonzero"/><rect x="3" y="5" width="4" height="2" rx=".5"/><rect x="8" y="5" width="4" height="2" rx=".5"/><rect x="13" y="5" width="4" height="2" rx=".5"/>
            </svg>
          ` : undefined;
          const defaults: any = {
            emptyState: true,
            icon,
          };

          if (id === 'tab') {
            defaults.traits = [
              {
                type: 'button',
                label: false,
                text: 'Style Active',
                command: (ed: Editor) => {
                  ed.select();
                  ed.runCommand(CMD_ACTIVE_STYLES);
                  setTimeout(() => ed.Selectors.select('.tab.tab-active'));
                },
              },
            ];
          }

          Components.addType(id, {
            model: {
              defaults,
            },
          });
        }
    };

    editor.on('component:type:add', extend);
}