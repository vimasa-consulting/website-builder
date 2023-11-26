import { useEditorMaybe } from '@grapesjs/react';
import React, { useEffect, useState } from 'react';
import { PortalContainerResult, portalContainer } from './utils';

interface RtePropsResult {
    /**
     * Indicates if the RTE is enabled.
     */
    enabled: boolean,

    /**
      * RTE actions
      */
    actions: ActionRTE[],

    /**
     * Default RTE container.
     */
    Container: PortalContainerResult,
};

interface CustomRTEProps {
    children: (props: Omit<RtePropsResult, 'Container'>) => React.ReactElement,
};

interface EventProps {
    enabled: boolean,
    container: HTMLElement,
}

interface ActionRTE {
    id: string;
    icon: string;
    state: number;
    run: () => void;
}

export default function CustomRTE({ children }: CustomRTEProps) {
    const editor = useEditorMaybe();
    const [propState, setPropState] = useState<RtePropsResult>({
        enabled: false,
        actions: [],
        Container: () => null,
    });

    useEffect(() => {
        if (!editor) return;
        const rte = editor.RichTextEditor;
        const event = rte.events.custom;

        const toListen = (props: EventProps) => {
            const actions = rte.getAll().map(action => ({
                id: action.name,
                icon: action.icon as string,
                run: () => rte.run(action),
                state: action.currentState as number,
            }));
            setPropState({
                enabled: props.enabled,
                Container: portalContainer(props.container),
                actions,
            });
        }

        editor.on(event, toListen);

        return () => { editor.off(event, toListen) };
    }, [editor]);

    const { Container } = propState;

    return editor && Container ?
        <Container>
            { children(propState) }
        </Container>
        : null;
  }

  /**
  * I just need to pass RTE actions to the CustomRTE
  * Hide it when it's enabled
    * Can I decide when to keep it enabled so I can place RTE whenever I want
        * I should also access to the active component/componentView
   */