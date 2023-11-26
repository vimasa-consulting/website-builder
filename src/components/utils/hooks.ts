import type { BoxRect } from "grapesjs";
import { RefObject, useEffect, useLayoutEffect } from "react";
import { CanvasSpotPlacerPosition } from "../Editor/Grapesjs/CanvasSpotPlacer";

// https://github.com/mui/material-ui/blob/master/packages/mui-base/src/ClickAwayListener/ClickAwayListener.tsx
export function useClickOutside<T extends HTMLElement>(
    ref: RefObject<T>,
    opts: {
        onTrigger: (el: HTMLElement) => void,
        enabled?: boolean
    },
) {
    useEffect(() => {
        const event = 'pointerdown';
        const { current } = ref;

        if (!current || !opts.enabled) return;

        function handler(ev: PointerEvent) {
            const elTarget = ev.target as T;

            if (current && elTarget && !current.contains(elTarget)) {
                opts.onTrigger(elTarget);
            }
        }

        document.addEventListener(event, handler);

        return () => {
            document.removeEventListener(event, handler);
        };
    }, [ref.current, opts.enabled]);
};

export const usePlacerUpdate = (
    placerRef: RefObject<HTMLElement>,
    opts: {
        initialPos?: CanvasSpotPlacerPosition,
        boxRectScreen: BoxRect,
        vwHeight: number,
        setPos: (value: CanvasSpotPlacerPosition) => void
    }
) => {
    const { boxRectScreen, vwHeight, initialPos = 'top-right' } = opts;
    const posSplit = initialPos.split('-');
    const yPosInit = posSplit[0];
    const xPosInit = posSplit[1];
    const yPosAlt = yPosInit === 'top' ? 'bottom' : 'top';
    const xPosAlt = xPosInit === 'right' ? 'left' : 'right';


    useLayoutEffect(() => {
        const el = placerRef.current;

        if (el) {
            const { offsetWidth, offsetHeight } = el;
            const yDelta = boxRectScreen.y - offsetHeight;
            const xDelta = boxRectScreen.x + boxRectScreen.width - offsetWidth;
            const cmpHigher = (boxRectScreen.height + offsetHeight) > vwHeight;
            const yDeltaBelow = yDelta < 0;
            const toolbarY = yDeltaBelow && !cmpHigher ? yPosAlt : yPosInit;
            const toolbarX = xDelta < 0 ? xPosAlt : xPosInit;
            opts.setPos(`${toolbarY}-${toolbarX}` as CanvasSpotPlacerPosition);

            // Adjust top for big elements
            if (cmpHigher) {
                const boxScreenBottom = boxRectScreen.y + boxRectScreen.height;
                const top = boxScreenBottom < 0 ? yDelta - boxScreenBottom : yDelta;
                el.style.top = yDeltaBelow ? `${parseInt(`${-top}`)}px` : '';
            } else {
                el.style.top = '';
            }
        }

    }, [placerRef.current, boxRectScreen]);
}