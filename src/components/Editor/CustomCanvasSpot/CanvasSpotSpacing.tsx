import { useEditor } from "@grapesjs/react";
import { useState } from "react";
import CanvasSpotWrapper, { CanvasSpotWrapperProps } from "../Grapesjs/CanvasSpotWrapper";
import SpacingHandler, { DragSpacingHandlerType } from "./SpacingHandler";

export default function CanvasSpotSpacing({ spot, className }: CanvasSpotWrapperProps) {
    const editor = useEditor();
    const [handlerActive, setHandlerActive] = useState<DragSpacingHandlerType>();
    const { el, component } = spot;
    const boxRect = spot.getBoxRect();
    const zoomD = editor.Canvas.getZoomDecimal();
    const heightScreen = boxRect.height * zoomD;
    const widthScreen = boxRect.width * zoomD;
    const spotStyles = spot.getStyle({ boxRect });
    const isSelected = editor.getSelectedAll().includes(component!);
    const isLastSelected = editor.getSelected() === component;
    const isPaddingActive = handlerActive?.startsWith('p') ?? false;
    const isMarginActive = handlerActive?.startsWith('m') ?? false;

    if (spot.type === 'spacing' && isSelected) {
        return null;
    }

    const stylePadding: Partial<CSSStyleDeclaration> = {
        borderColor: 'rgba(196, 222, 184, 0.5)', // '#c4deb8',
        borderStyle: 'solid',
    };

    const styleMargin: Partial<CSSStyleDeclaration> = {
        borderColor: 'rgba(249, 204, 158, 0.5)', // '#f9cc9e',
        borderStyle: 'solid',
        boxSizing: 'content-box',
    };

    const elStyle = window.getComputedStyle(el!);

    stylePadding.borderTopWidth = elStyle.paddingTop;
    stylePadding.borderRightWidth = elStyle.paddingRight;
    stylePadding.borderBottomWidth = elStyle.paddingBottom;
    stylePadding.borderLeftWidth = elStyle.paddingLeft;

    styleMargin.borderTopWidth = elStyle.marginTop;
    styleMargin.borderRightWidth = elStyle.marginRight;
    styleMargin.borderBottomWidth = elStyle.marginBottom;
    styleMargin.borderLeftWidth = elStyle.marginLeft;

    const paddingStyle = {
        ...spotStyles,
        ...stylePadding,
    };

    const marginStyle = {
        ...spotStyles,
        ...styleMargin,
        translate: `${boxRect.x - parseFloat(elStyle.marginLeft)}px ${boxRect.y - parseFloat(elStyle.marginTop)}px`,
    };

    return (
        <>
            {
                (!isSelected || isPaddingActive) &&
                <CanvasSpotWrapper spot={spot} spotStyles={paddingStyle} className={className}/>
            }
            {
                (!isSelected || isMarginActive) &&
                <CanvasSpotWrapper spot={spot} spotStyles={marginStyle} className={className}/>
            }
            {
                isLastSelected && ((heightScreen > 60 && widthScreen > 60) || handlerActive) &&
                <CanvasSpotWrapper spot={spot} spotStyles={spotStyles} className={className}>
                    <SpacingHandler spot={spot} onActive={setHandlerActive}/>
                </CanvasSpotWrapper>
            }
        </>
    )
}