import Grid, { GridProps } from "../Grid";
import cx from "../../utils/makeCls";
import { br, cl } from "../theme";

export interface Props extends GridProps {
    separator?: boolean;
    separatorTop?: boolean;
    bottom?: string;
};

export default function SectorRow({ className, children, bottom, separator, separatorTop, ...rest }: Props) {
    const sep = <div className={cx('mb-2 -ml-2 -mr-2', br.bb, cl.br)}/>;
    const cls = cx(
        className,
        'w-full',
        bottom || 'mb-2'
    );

    return (
        <>
            { separatorTop && sep }
            {/** @ts-ignore */}
            <Grid className={cls} space="s" nowrap {...rest}>
                { children }
            </Grid>
            { separator && sep }
        </>
    );
  }