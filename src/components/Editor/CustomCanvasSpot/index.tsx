import { useEditor } from "@grapesjs/react";
import { CanvasSpot } from "../Grapesjs/CanvasSpotWrapper";
import CanvasSpotHover from "./CanvasSpotHover";
import CanvasSpotSelect from "./CanvasSpotSelect";
import CanvasSpotAddBlock from "./CanvasSpotAddBlock";
import CanvasSpotSpacing from "./CanvasSpotSpacing";
import CanvasSpotTarget from "./CanvasSpotTarget";
import { useAppEditorStore } from "../../store/appEditorStore";

export interface CustomCanvasSpotProps extends React.HTMLProps<HTMLDivElement> {
    spot: CanvasSpot,
}

const TOOLBAR_PAD = 9;

export const STYLE_PLACER_Y = {
    padding: `${TOOLBAR_PAD}px 0`,
};

export default function CustomCanvasSpot({ spot }: CustomCanvasSpotProps) {
    const { Canvas } = useEditor();
    const appEditorStore = useAppEditorStore();
    const { type } = spot;
    const isSelect = type === 'select';
    const isSpacing = type === 'spacing';
    const isHover = type === 'hover';
    const isTarget = type === 'target';

    if (
        !spot.el
        || (!Canvas.hasCustomSpot(type as any))
        || (appEditorStore.isSelectingTarget && !isTarget)
    ) {
        return null;
    }

    return (
        <>
            {isHover && <CanvasSpotHover spot={spot} className="z-0"/>}            
            {(isSpacing || isSelect) && <CanvasSpotSpacing spot={spot} className="z-0"/>}            
            {isTarget && <CanvasSpotTarget spot={spot} className="z-20"/>}
            {isSelect && <CanvasSpotSelect spot={spot} className="z-30"/>}
            {/*isSelect && <CanvasSpotAddBlock spot={spot} className="z-30"/>*/}
        </>
    )
};