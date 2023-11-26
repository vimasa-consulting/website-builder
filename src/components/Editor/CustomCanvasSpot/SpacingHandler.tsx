import { useEditor } from "@grapesjs/react";
import type { Coordinates } from "grapesjs";
import { memo, useCallback, useEffect, useState } from "react";
import { cx } from "../../utils/makeCls";
import Badge from "../Badge";
import CanvasSpotPlacer from "../Grapesjs/CanvasSpotPlacer";
import { CanvasSpotWrapperProps } from "../Grapesjs/CanvasSpotWrapper";
import { cl } from "../theme";
import { usePointerBadgeStore } from "../../store/PointerBadgeStore";

export type OnActive = (type?: DragSpacingHandlerType) => void;

interface SpacingHandlerProps extends CanvasSpotWrapperProps {
    onActive?: OnActive;
}

export enum DragSpacingHandlerType {
    PaddingTop = 'padding-top',
    PaddingRight = 'padding-right',
    PaddingBottom = 'padding-bottom',
    PaddingLeft = 'padding-left',
    MarginTop = 'margin-top',
    MarginRight = 'margin-right',
    MarginBottom = 'margin-bottom',
    MarginLeft = 'margin-left',
}

type CssStyleDrag = Partial<Record<DragSpacingHandlerType, string>>;

const {
    PaddingTop, PaddingRight, PaddingBottom, PaddingLeft,
    MarginTop, MarginRight,  MarginBottom, MarginLeft,
} = DragSpacingHandlerType;

interface DragHandlerOptions {
    onActive?: OnActive,
    setAltKey?: (value: boolean) => void
    setShiftKey?: (value: boolean) => void
}

const useDragHandler = (
    spot: CanvasSpotWrapperProps['spot'],
    type: DragSpacingHandlerType,
    opts: DragHandlerOptions = {}
) => {
    const editor = useEditor();
    const pointerBadgeStore = usePointerBadgeStore();
    const [startPos, setStartPos] = useState<Coordinates>();

    const toggleFrames = (disable: boolean) => {
        const framesEl = editor.Canvas.getFramesEl();
        const clsList = framesEl.classList;
        const method = disable ? 'add' : 'remove';
        clsList[method]('pointer-events-none');
        clsList[method]('select-none');
    };

    const onKeyPress = (ev: KeyboardEvent) => {
        opts.setAltKey?.(ev.altKey);
        opts.setShiftKey?.(ev.shiftKey);
    };

    useEffect(() => {
        const isY = [PaddingTop, PaddingBottom, MarginTop, MarginBottom].includes(type);
        const bodyCls = document.body.classList;
        const componentEl = spot.component!.getEl()!;
        const selectedTarget = editor.Styles.getSelected();
        const elStyles = window.getComputedStyle(componentEl);
        const currentValue = parseFloat(elStyles[type as any]) ?? 0;
        const grabbingCls = isY ? '!cursor-ns-resize' : '!cursor-ew-resize';
        const zoomMlt = editor.Canvas.getZoomMultiplier();
        const elStylesOrig: CssStyleDrag = {};
        let newValue = '';
        let lastStyle: CssStyleDrag = {};

        for (const key of Object.values(DragSpacingHandlerType)) {
            const prop = key as DragSpacingHandlerType;
            elStylesOrig[prop] = elStyles[prop as any];
        }

        const getStyles = (value: string, opts: { altKey: boolean, shiftKey: boolean}) => {
            const isPad = type?.startsWith('p');
            const { altKey, shiftKey } = opts;
            const elStylesObj = elStylesOrig;
            const initPadStyle: CssStyleDrag = {
                [PaddingTop]: shiftKey || (type === PaddingBottom && altKey) ? value : elStylesObj[PaddingTop],
                [PaddingRight]: shiftKey || (type === PaddingLeft && altKey) ? value : elStylesObj[PaddingRight],
                [PaddingBottom]: shiftKey || (type === PaddingTop && altKey) ? value : elStylesObj[PaddingBottom],
                [PaddingLeft]: shiftKey || (type === PaddingRight && altKey) ? value : elStylesObj[PaddingLeft],
            };
            const initMargStyle: CssStyleDrag = {
                [MarginTop]: shiftKey || (type === MarginBottom && altKey) ? value : elStylesObj[MarginTop],
                [MarginRight]: shiftKey || (type === MarginLeft && altKey) ? value : elStylesObj[MarginRight],
                [MarginBottom]: shiftKey || (type === MarginTop && altKey) ? value : elStylesObj[MarginBottom],
                [MarginLeft]: shiftKey || (type === MarginRight && altKey) ? value : elStylesObj[MarginLeft],
            };
            initPadStyle[type] = value;
            initMargStyle[type] = value;

            return isPad ? initPadStyle : initMargStyle;
        }

        const updateCurrentTarget = (opts?: { partial: boolean }) => {
            newValue && selectedTarget?.addStyle(lastStyle, opts);
        }

        const onPointerMove = (ev: PointerEvent) => {
            if (!startPos || !selectedTarget) return;
            const delta = isY ? ev.clientY - startPos.y : ev.clientX - startPos.x;
            const intValue = Math.max(0, parseInt(`${currentValue + delta * zoomMlt}`));
            newValue = `${intValue}px`;
            lastStyle = getStyles(newValue, ev);
            updateCurrentTarget({ partial: true });
            pointerBadgeStore.show(intValue);
        }

        const onPointerUp = () => {
            if (!startPos || !selectedTarget) return;
            setStartPos(undefined);
            toggleFrames(false);
            pointerBadgeStore.hide();
            updateCurrentTarget();
        }

        const handleKeyPress = (ev: KeyboardEvent) => {
            onKeyPress(ev);
            lastStyle = getStyles(newValue, ev);
            updateCurrentTarget({ partial: true });
        }

        if (startPos) {
            document.addEventListener('pointermove', onPointerMove);
            document.addEventListener('pointerup', onPointerUp);
            document.addEventListener('keydown', handleKeyPress);
            document.addEventListener('keyup', handleKeyPress);
            bodyCls.add(grabbingCls);
            opts.onActive?.(type);
        }

        return () => {
            document.removeEventListener('pointermove', onPointerMove);
            document.removeEventListener('pointerup', onPointerUp);
            document.removeEventListener('keydown', handleKeyPress);
            document.removeEventListener('keyup', handleKeyPress);
            bodyCls.remove(grabbingCls);
            opts.onActive?.(undefined);
        }
    }, [startPos]);

    const onPointerDown = useCallback((ev: React.PointerEvent) => {
        if (ev.button !== 0) return
        const { clientX, clientY } = ev;
        setStartPos({ x: clientX, y: clientY });
        toggleFrames(true);
        onKeyPress(ev.nativeEvent as any)
    }, []);

    return [onPointerDown, !!startPos] as const;
}

const clsCommon = 'border-2 border-white !box-content';
const clsPadColor = 'bg-[#7fc65e]';
const clsMargColor = 'bg-[#ebae70]';
const clsHandlX = 'h-[20px] w-[3px] mx-2 cursor-ew-resize';
const clsHandlY = 'h-[3px] w-[20px] my-2 cursor-ns-resize';

export default memo(function SpacingHandler({ spot, onActive }: SpacingHandlerProps) {
    const [hasAltKey, setAltKey] = useState(false);
    const [hasShiftKey, setShiftKey] = useState(false);
    const opts: DragHandlerOptions = { onActive, setAltKey, setShiftKey };
    const [onPointerDownPT, enabledPT] = useDragHandler(spot, DragSpacingHandlerType.PaddingTop, opts);
    const [onPointerDownPR, enabledPR] = useDragHandler(spot, DragSpacingHandlerType.PaddingRight, opts);
    const [onPointerDownPB, enabledPB] = useDragHandler(spot, DragSpacingHandlerType.PaddingBottom, opts);
    const [onPointerDownPL, enabledPL] = useDragHandler(spot, DragSpacingHandlerType.PaddingLeft, opts);

    const [onPointerDownMT, enabledMT] = useDragHandler(spot, DragSpacingHandlerType.MarginTop, opts);
    const [onPointerDownMR, enabledMR] = useDragHandler(spot, DragSpacingHandlerType.MarginRight, opts);
    const [onPointerDownMB, enabledMB] = useDragHandler(spot, DragSpacingHandlerType.MarginBottom, opts);
    const [onPointerDownML, enabledML] = useDragHandler(spot, DragSpacingHandlerType.MarginLeft, opts);

    const clsHanlderPX = cx(cl.cmp, clsCommon, clsPadColor, clsHandlX);
    const clsHanlderPY = cx(cl.cmp, clsCommon, clsPadColor, clsHandlY);
    const clsHanlderMX = cx(cl.cmp, clsCommon, clsMargColor, clsHandlX);
    const clsHanlderMY = cx(cl.cmp, clsCommon, clsMargColor, clsHandlY);

    const hasSomePadEnabled = enabledPT || enabledPR || enabledPB || enabledPL;
    const hasSomeMargEnabled = enabledMT || enabledMR || enabledMB || enabledML;
    const isSomeEnabled = hasSomePadEnabled || hasSomeMargEnabled;

    const isHandleEnabled = (handlerEnabled: boolean, type: DragSpacingHandlerType) => {
        let altHandler = false;
        const hasAllPad = hasSomePadEnabled && hasShiftKey;
        const hasAllMarg = hasSomeMargEnabled && hasShiftKey;

        switch (type) {
            case DragSpacingHandlerType.PaddingTop:
                altHandler = (enabledPB && hasAltKey) || hasAllPad;
                break;
            case DragSpacingHandlerType.PaddingRight:
                altHandler = (enabledPL && hasAltKey) || hasAllPad;
                break;
            case DragSpacingHandlerType.PaddingBottom:
                altHandler = (enabledPT && hasAltKey) || hasAllPad;
                break;
            case DragSpacingHandlerType.PaddingLeft:
                altHandler = (enabledPR && hasAltKey) || hasAllPad;
                break;

            case DragSpacingHandlerType.MarginTop:
                altHandler = (enabledMB && hasAltKey) || hasAllMarg;
                break;
            case DragSpacingHandlerType.MarginRight:
                altHandler = (enabledML && hasAltKey) || hasAllMarg;
                break;
            case DragSpacingHandlerType.MarginBottom:
                altHandler = (enabledMT && hasAltKey) || hasAllMarg;
                break;
            case DragSpacingHandlerType.MarginLeft:
                altHandler = (enabledMR && hasAltKey) || hasAllMarg;
                break;
        }

        return !isSomeEnabled || handlerEnabled || altHandler;
    };

    const isEnabledPT = isHandleEnabled(enabledPT, DragSpacingHandlerType.PaddingTop);
    const isEnabledPR = isHandleEnabled(enabledPR, DragSpacingHandlerType.PaddingRight);
    const isEnabledPB = isHandleEnabled(enabledPB, DragSpacingHandlerType.PaddingBottom);
    const isEnabledPL = isHandleEnabled(enabledPL, DragSpacingHandlerType.PaddingLeft);
    const isEnabledMT = isHandleEnabled(enabledMT, DragSpacingHandlerType.MarginTop);
    const isEnabledMR = isHandleEnabled(enabledMR, DragSpacingHandlerType.MarginRight);
    const isEnabledMB = isHandleEnabled(enabledMB, DragSpacingHandlerType.MarginBottom);
    const isEnabledML = isHandleEnabled(enabledML, DragSpacingHandlerType.MarginLeft);

    return (
        <>
            {/* Paddings */}
            {
                isEnabledPT &&
                <CanvasSpotPlacer position="top-center" onPointerDown={onPointerDownPT}>
                    <Badge className={clsHanlderPY} s="s" pill block nopad/>
                </CanvasSpotPlacer>
            }
            {
                isEnabledPR &&
                <CanvasSpotPlacer position="center-right" onPointerDown={onPointerDownPR}>
                    <Badge className={clsHanlderPX} s="s" pill block nopad/>
                </CanvasSpotPlacer>
            }
            {
                isEnabledPB &&
                <CanvasSpotPlacer position="bottom-center" onPointerDown={onPointerDownPB}>
                    <Badge className={clsHanlderPY} s="s" pill block nopad/>
                </CanvasSpotPlacer>
            }
            {
                isEnabledPL &&
                <CanvasSpotPlacer position="center-left" onPointerDown={onPointerDownPL}>
                    <Badge className={clsHanlderPX} s="s" pill block nopad/>
                </CanvasSpotPlacer>
            }
            {/* Margins */}
            {
                isEnabledMT &&
                <CanvasSpotPlacer position="top-center" onPointerDown={onPointerDownMT} out>
                    <Badge className={clsHanlderMY} s="s" pill block nopad/>
                </CanvasSpotPlacer>
            }
            {
                isEnabledMR &&
                <CanvasSpotPlacer position="center-right" onPointerDown={onPointerDownMR} out>
                    <Badge className={clsHanlderMX} s="s" pill block nopad/>
                </CanvasSpotPlacer>
            }
            {
                isEnabledMB &&
                <CanvasSpotPlacer position="bottom-center" onPointerDown={onPointerDownMB} out>
                    <Badge className={clsHanlderMY} s="s" pill block nopad/>
                </CanvasSpotPlacer>
            }
            {
                isEnabledML &&
                <CanvasSpotPlacer position="center-left" onPointerDown={onPointerDownML} out>
                    <Badge className={clsHanlderMX} s="s" pill block nopad/>
                </CanvasSpotPlacer>
            }
        </>
    )
});