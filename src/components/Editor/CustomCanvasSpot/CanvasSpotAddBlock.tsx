import { cx } from "../../utils/makeCls";
import CanvasSpotWrapper, { CanvasSpotWrapperProps } from "../Grapesjs/CanvasSpotWrapper";
import { cl } from "../theme";
import CanvasSpotAddBadge from "./CanvasSpotAddBadge";

export default function CanvasSpotAddBlock({ spot, className }: CanvasSpotWrapperProps) {
    return (
        <CanvasSpotWrapper spot={spot} className={cx('border', cl.cmpBr, className)}>
            <CanvasSpotAddBadge spot={spot} />
        </CanvasSpotWrapper>
    )
}