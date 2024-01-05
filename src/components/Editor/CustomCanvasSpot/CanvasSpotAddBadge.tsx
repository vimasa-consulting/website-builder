import { useEditor } from "@grapesjs/react";
import { useRef, useState } from "react";
import { STYLE_PLACER_Y } from ".";
import { usePlacerUpdate } from "../../utils/hooks";
import { cx } from "../../utils/makeCls";
import Badge from "../Badge";
import CanvasSpotPlacer, { CanvasSpotPlacerPosition } from "../Grapesjs/CanvasSpotPlacer";
import { CanvasSpotWrapperProps } from "../Grapesjs/CanvasSpotWrapper";
import Grid from "../Grid";
import SvgIcon from "../SvgIcon";
import { cl } from "../theme";
import Button from "../Button";

const POS = 'bottom-center';

export default function CanvasSpotAddBadge({ spot, className }: CanvasSpotWrapperProps) {
    const { Canvas } = useEditor();
    const [pos, setPos] = useState<CanvasSpotPlacerPosition>(POS);
    const component = spot.component!;
    const boxRect = spot.getBoxRect();
    const boxRectScreen = Canvas.getWorldRectToScreen(boxRect)!;
    const placerRef = useRef<HTMLDivElement>(null);
    const vwHeight = Canvas.getElement().clientHeight;  
    return (
        <CanvasSpotPlacer ref={placerRef} style={STYLE_PLACER_Y} position={pos} out>
            <Button> + Add</Button>            
        </CanvasSpotPlacer>
    )
}