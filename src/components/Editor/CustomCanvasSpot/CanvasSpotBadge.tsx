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

const POS = 'top-left';

export default function CanvasSpotBadge({ spot, className }: CanvasSpotWrapperProps) {
    const { Canvas } = useEditor();
    const [pos, setPos] = useState<CanvasSpotPlacerPosition>(POS);
    const component = spot.component!;
    const boxRect = spot.getBoxRect();
    const boxRectScreen = Canvas.getWorldRectToScreen(boxRect)!;
    const placerRef = useRef<HTMLDivElement>(null);
    const vwHeight = Canvas.getElement().clientHeight;

    usePlacerUpdate(placerRef, {
        boxRectScreen,
        vwHeight,
        setPos,
        initialPos: POS,
    });

    return (
        <CanvasSpotPlacer ref={placerRef} style={STYLE_PLACER_Y} position={pos} out>
            <Badge className={cx('shadow-md', className || cl.cmp)} s="s">
                <Grid space="xs" items="center" nowrap>
                    <SvgIcon className="w-[13px] fill-current" svg={component.getIcon()}/>
                    <div>{component.getName()}</div>
                </Grid>
            </Badge>
        </CanvasSpotPlacer>
    )
}