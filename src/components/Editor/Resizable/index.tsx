import { Resizable, ResizableProps } from "re-resizable";
import cx from "../../utils/makeCls";
import { cl } from "../theme";

export interface Props {
    children: React.ReactNode,
    className?: string,
    bottom?: boolean,
    right?: boolean,
    left?: boolean,
    width?: string | number,
    height?: string | number,
    minHeight?: string | number,
    minWidth?: string | number,
    maxHeight?: string | number,
    maxWidth?: string | number,
    style?: ResizableProps["style"],
    onResize?: ResizableProps["onResize"],
    onResizeStop?: ResizableProps["onResizeStop"],
};

export default function Resize({
    className,
    children,
    bottom,
    right,
    left,
    width,
    height,
    minHeight,
    minWidth,
    maxHeight,
    maxWidth,
    style,
    onResize,
    onResizeStop,
}: Props) {
    const enable = {
        top: false,
        right: right || false,
        bottom: bottom || false,
        left: left || false,
        topRight: false,
        bottomRight: false,
        bottomLeft: false,
        topLeft: false,
    };
    const defaultSize = {
        width: width || 'auto',
        height: height || 'auto',
    };
    const handleColor = cx('z-10', cl.hBgAct);
    const clsHandle = {
        bottom: handleColor,
        right: handleColor,
        left: handleColor,
    };
    const styleHandle = {
        bottom: { bottom: 0, height: 2 },
        right: { right: -1, width: 2 },
        left: { left: -1, width: 2 },
    };
    return (
        <Resizable
            className={className}
            enable={enable}
            defaultSize={defaultSize}
            handleStyles={styleHandle}
            handleClasses={clsHandle}
            onResize={onResize}
            onResizeStop={onResizeStop}
            minHeight={minHeight}
            minWidth={minWidth}
            maxHeight={maxHeight}
            maxWidth={maxWidth}
            style={style}
        >
            { children }
        </Resizable>
    );
}