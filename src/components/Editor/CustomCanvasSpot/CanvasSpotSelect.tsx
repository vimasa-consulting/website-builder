import { useEditor } from "@grapesjs/react";
import type { ToolbarButtonProps } from "grapesjs";
import { CSSProperties, useRef, useState } from "react";
import { STYLE_PLACER_Y } from ".";
import { isString } from "../../utils";
import { usePlacerUpdate } from "../../utils/hooks";
import { cx } from "../../utils/makeCls";
import Badge from "../Badge";
import Button from "../Button";
import CanvasSpotPlacer, { CanvasSpotPlacerPosition } from "../Grapesjs/CanvasSpotPlacer";
import CanvasSpotWrapper, { CanvasSpotWrapperProps } from "../Grapesjs/CanvasSpotWrapper";
import Grid from "../Grid";
import GridItem from "../GridItem";
import SvgIcon from "../SvgIcon";
import { cl } from "../theme";

export default function CanvasSpotSelect({ spot, className }: CanvasSpotWrapperProps) {
    const editor = useEditor();
    const placerRef = useRef<HTMLDivElement>(null);
    const [stylePlacer] = useState<CSSProperties>(STYLE_PLACER_Y);
    const [toolbarPos, setToolbarPos] = useState<CanvasSpotPlacerPosition>('top-right');
    const component = spot.component!;
    const boxRect = spot.getBoxRect();
    const boxRectScreen = editor.Canvas.getWorldRectToScreen(boxRect)!;
    const spotStyle = spot.getStyle({ boxRect });
    const isLastSelected = editor.getSelected() === component;
    const toolbar: ToolbarButtonProps[] = component.toolbar;
    const vwHeight = editor.Canvas.getElement().clientHeight;

    usePlacerUpdate(placerRef, {
        boxRectScreen,
        vwHeight,
        setPos: setToolbarPos,
    });

    const runCommand = (command: ToolbarButtonProps['command']) => {
        if (isString(command)) {
            editor.runCommand(command);
        } else {
            command?.(editor, '', {});
        }
    }

    return (
        <CanvasSpotWrapper spot={spot} spotStyles={spotStyle} className={cx('border-2', cl.cmpBr, className)}>
            {
                isLastSelected &&
                <CanvasSpotPlacer ref={placerRef} style={stylePlacer} position={toolbarPos} out>
                    <Badge className={cx(cl.cmp, 'overflow-hidden shadow-md')} s="s" nopad block>
                        <Grid space="x2s" items="center" nowrap>
                            {
                                toolbar.map(({ label, command = '' }) => (
                                    <GridItem key={label}>
                                        <Button
                                            border={false} rounded={false} size="m"
                                            className={cx('block py-1.5 px-1.5', cl.hBgDark)}
                                            onMouseDown={() => runCommand(command)}
                                        >
                                            { label?.startsWith('<svg') ? <SvgIcon className="w-[17px] fill-current" svg={label}/> : label }
                                        </Button>
                                    </GridItem>
                                ))
                            }
                        </Grid>
                    </Badge>
                </CanvasSpotPlacer>
            }
        </CanvasSpotWrapper>
    )
}