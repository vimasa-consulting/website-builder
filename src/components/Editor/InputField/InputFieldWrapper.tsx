import React from "react";
import { cx } from "../../utils/makeCls";
import Grid, { GridProps } from "../Grid";
import GridItem from "../GridItem";
import { br, cl, pad } from "../theme";

export interface InputFieldWrapperProps extends Omit<GridProps, 'size'> {
    size?: 'm' | 's',
    border?: boolean
}

export default React.forwardRef<HTMLDivElement, InputFieldWrapperProps>(
    function InputFieldWrapper({ size = 'm', className, border = true, children, ...rest }: InputFieldWrapperProps, ref) {
        const clsName = cx(
            cl.bg, cl.br,
            border && `${br.b} ${br.rnd}`,
            size === 'm' && pad.xy,
            size === 's' && 'px-3 py-1',
            className,
        );
        return (
            <Grid className={clsName} items="center" space="x2s" {...rest} ref={ref}>
                <GridItem grow>
                    {children}
                </GridItem>
            </Grid>
        )
    }
);