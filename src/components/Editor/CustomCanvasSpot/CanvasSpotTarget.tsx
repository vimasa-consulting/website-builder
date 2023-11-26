import { cx } from "../../utils/makeCls";
import CanvasSpotWrapper, { CanvasSpotWrapperProps } from "../Grapesjs/CanvasSpotWrapper";
import { cl } from "../theme";
import CanvasSpotBadge from "./CanvasSpotBadge";

export default function CanvasSpotTarget({ spot, className }: CanvasSpotWrapperProps) {
    const cls = cx('border-2', cl.cmpTargetBr, cl.cmpTargetBgOpac, className);
    return (
        <CanvasSpotWrapper spot={spot} className={cls}>
            <CanvasSpotBadge spot={spot} className={cl.cmpTargetBg}/>
        </CanvasSpotWrapper>
    )
}