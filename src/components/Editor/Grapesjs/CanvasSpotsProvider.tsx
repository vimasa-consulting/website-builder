import { useEditorMaybe } from '@grapesjs/react';
import React, { memo, useEffect, useState } from 'react';
import { PortalContainerResult, portalContainer } from './utils';
import { CanvasSpot } from './CanvasSpotWrapper';

export interface CanvasSpotsResultProps {
    spots: CanvasSpot[],
};

export interface CanvasSpotsProviderProps {
    children: (props: CanvasSpotsResultProps) => React.ReactElement,
}

export default memo(function CanvasSpotsProvider({ children }: CanvasSpotsProviderProps) {
    const editor = useEditorMaybe();
    const [spots, setSpots] = useState<CanvasSpot[]>([]);
    const [containerRef, setContainerRef] = useState<{ Container?: PortalContainerResult }>({});

    useEffect(() => {
        if (!editor) return;
        editor.onReady(() => {
            const el = editor.Canvas.getSpotsEl();
            const Container = portalContainer(el);
            setContainerRef({ Container });
        });

        const event = 'canvas:spot';
        const toListen = () => {
            const spotsRes: CanvasSpot[] = editor.Canvas.getSpots();
            // console.log('CanvasSpotsProvider canvas:spot', spotsRes.map(s => s.id));
            setSpots(spotsRes)
        };

        editor.on(event, toListen);

        return () => { editor.off(event, toListen) };
    }, [editor]);

    const { Container  } = containerRef;

    return editor && Container ?
        <Container>{ children({ spots })  }</Container>
    : null;
});
