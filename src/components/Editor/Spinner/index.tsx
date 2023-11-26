import React from "react";
import { cx } from "../../utils/makeCls";
import Grid from "../Grid";
import { br, fx } from "../theme";

export interface SpinnerProps extends React.HTMLProps<HTMLDivElement> {
    full?: boolean,
    abs?: boolean,
};

export default React.forwardRef<HTMLDivElement, SpinnerProps>(
    function Spinner({ full, abs, className }: SpinnerProps, ref) {
        const containerCls = cx(full && 'w-full h-full', abs && fx.coverAbs, className);
        const spinnerCls = cx(
            'w-10 h-10 animate-spin-fast',
            '!border-y-transparent !border-r-transparent',
            br.pill, br.bS, br.bA
        );

        return (
            <Grid ref={ref} className={containerCls} items="center" justify="center">
                <div className={spinnerCls}/>
            </Grid>
        )
    }
);