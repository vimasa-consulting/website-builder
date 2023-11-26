import { forwardRef } from "react";
import Grid from "../Grid";
import GridItem from "../GridItem";
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';
import { pop, br, cl } from '../theme';
import cx from "../../utils/makeCls";

export interface Props extends Omit<React.HTMLProps<HTMLDivElement>, 'size' | 'title'> {
    children?: React.ReactNode,
    title?: React.ReactNode | boolean,
    titleClass?: string,
    icon?: string,
    className?: string,
    bg?: string,
    size?: 'm' | 's' | 'xs' | 'x2s',
    shadow?: boolean,
    padding?: boolean,
    border?: boolean,
    round?: boolean,
    style?: Record<string, any>,
    onClose?(): void;
};

export default forwardRef<HTMLDivElement, Props>(function Card({
    children,
    title,
    onClose,
    icon,
    shadow = true,
    padding = true,
    border = true,
    round = true,
    className,
    size = 'm',
    titleClass = 'mb-2 mt-0.5',
    style,
    bg,
    ...props
}, ref) {
    return (
        <div {...props} ref={ref} style={style} className={cx([
            className,
            bg || pop.bg,
            br.b,
            round && br.rnd,
            border ? cl.br : br.bT,
            'card overflow-auto',
            shadow && 'shadow-md',
            padding && size === 'm' && 'px-4 py-2',
            padding && size === 's' && 'px-2 py-1',
            padding && size === 'xs' && 'px-2 py-0.5',
            padding && size === 'x2s' && 'px-0.5',
        ])}>
            {
                (title || onClose) && title !== false &&
                <Grid className={cx('card-title', titleClass)} items="center">
                    <GridItem className="truncate" grow>{ title }</GridItem>
                    {
                        (onClose || icon) &&
                        <GridItem onClick={onClose} className="cursor-pointer transition-opacity opacity-50 hover:opacity-100">
                            <Icon path={icon || mdiClose} size={'18px'}/>
                        </GridItem>
                    }
                </Grid>
            }
            <div className="card-body">
                { children }
            </div>
        </div>
    );
  })