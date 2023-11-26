import type { CanvasSpot as _CanvasSpot } from "grapesjs";

export interface CanvasSpot extends _CanvasSpot {}

export interface CanvasSpotWrapperProps extends React.HTMLProps<HTMLDivElement> {
    spot: CanvasSpot,
    spotStyles?: Partial<CSSStyleDeclaration>,
}

const innerStyle: React.CSSProperties = {
    pointerEvents: 'all'
};

export default function CanvasSpotWrapper({ spot, children, style, spotStyles, ...rest }: CanvasSpotWrapperProps) {
    const styleRes = {
        ...(spotStyles || spot.getStyle()),
        ...style,
    } as React.CSSProperties;

    return (
        <div {...rest} style={styleRes}>
            <div style={innerStyle}>
                { children }
            </div>
        </div>
    )
}