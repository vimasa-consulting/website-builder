import { cx } from "../../utils/makeCls";
import CanvasSpotWrapper, { CanvasSpotWrapperProps } from "../Grapesjs/CanvasSpotWrapper";
import { cl } from "../theme";
import CanvasSpotBadge from "./CanvasSpotBadge";

export default function CanvasSpotHover({ spot, className }: CanvasSpotWrapperProps) {
    return (
        <CanvasSpotWrapper spot={spot} className={cx('border', cl.cmpBr, className)}>
            <CanvasSpotBadge spot={spot} />
        </CanvasSpotWrapper>
    )
}