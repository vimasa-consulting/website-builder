import { useEditor } from "@grapesjs/react";
import { cx } from "../../utils/makeCls";
import { forwardRef } from "react";

export type CanvasSpotPlacerPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'center-left'
  | 'center-center'
  | 'center-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'
;

export interface CanvasSpotPlacerProps extends React.HTMLProps<HTMLDivElement> {
    position?: CanvasSpotPlacerPosition,
    out?: boolean,
}

const CanvasSpotPlacer = forwardRef<HTMLDivElement, CanvasSpotPlacerProps>((
    { children, className, position, out, ...rest },
    ref
) => {
    const { Canvas } = useEditor();
    const clsUnscale = Canvas.getCanvasView()?.clsUnscale || '';
    const clsAdd: string[] = [];
    const style: React.CSSProperties = {};

    switch (position) {
        case 'top-left':
            clsAdd.push('top-0', 'left-0');
            style.transformOrigin = 'top left';
            if (out) {
                style.translate = '0 -100%';
                style.transformOrigin = 'bottom left';
            }
            break;
        case 'top-center':
            clsAdd.push('top-0');
            style.left = '50%';
            style.translate = '-50% 0';
            style.transformOrigin = 'top center';
            if (out) {
                style.translate = '-50% -100%';
                style.transformOrigin = 'bottom center';
            }
            break;
        case 'top-right':
            clsAdd.push('top-0', 'right-0');
            style.transformOrigin = 'top right';
            if (out) {
                style.translate = '0 -100%';
                style.transformOrigin = 'bottom right';
            }
            break;
        case 'center-left':
            clsAdd.push('left-0');
            style.top = '50%';
            style.translate = '0 -50%';
            style.transformOrigin = 'center left';
            if (out) {
                style.translate = '-100% -50%';
                style.transformOrigin = 'center right';
            }
            break;
        case 'center-center':
            style.top = '50%';
            style.left = '50%';
            style.translate = '-50% -50%';
            style.transformOrigin = 'center';
            break;
        case 'center-right':
            clsAdd.push('right-0');
            style.top = '50%';
            style.translate = '0 -50%';
            style.transformOrigin = 'center right';
            if (out) {
                style.translate = '100% -50%';
                style.transformOrigin = 'center left';
            }
            break;
        case 'bottom-left':
            clsAdd.push('left-0', 'bottom-0');
            style.transformOrigin = 'bottom left';
            if (out) {
                style.translate = '0 100%';
                style.transformOrigin = 'top left';
            }
            break;
        case 'bottom-center':
            clsAdd.push('bottom-0');
            style.left = '50%';
            style.translate = '-50% 0';
            style.transformOrigin = 'bottom center';
            if (out) {
                style.translate = '-50% 100%';
                style.transformOrigin = 'top center';
            }
            break;
        case 'bottom-right':
            clsAdd.push('right-0', 'bottom-0');
            style.transformOrigin = 'bottom right';
            if (out) {
                style.translate = '0 100%';
                style.transformOrigin = 'top right';
            }
            break;
    }

    const styleRes = {
        ...style,
        ...rest.style,
    }

    return (
        <div {...rest} className={cx('flex absolute', clsUnscale, className, clsAdd.join(' '))} style={styleRes} ref={ref}>
            { children }
        </div>
    )
});
CanvasSpotPlacer.displayName = 'CanvasSpotPlacer';

export default CanvasSpotPlacer;