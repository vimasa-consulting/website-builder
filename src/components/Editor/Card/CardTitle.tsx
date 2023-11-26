import { mdiClose, mdiPlus } from '@mdi/js';
import Icon from '@mdi/react';
import { useI18nStore } from '../../store/I18nStore';
import cx from "../../utils/makeCls";
import ButtonWithTooltip, { ButtonWithTooltipProps } from "../Button/ButtonWithTooltip";
import Grid, { GridProps } from "../Grid";
import GridItem from "../GridItem";
import { fx, icon as iconT } from "../theme";

export interface CardTitleButtons extends ButtonWithTooltipProps {
    id: string,
    icon?: string,
}

export interface CardTitleProps extends Omit<GridProps, 'title'> {
    title?: React.ReactNode,
    icon?: string,
    className?: string,
    onClose?(): void;
    actions?: CardTitleButtons[],
};

const iconMap: Record<string, string> = {
    add: mdiPlus,
};

const getIcon = (id: CardTitleButtons['id'], icon?: CardTitleButtons['icon']) => {
    return icon || iconMap[id];
}

export default function CardTitle({ className, icon, title, onClose, actions = [], children }: CardTitleProps) {
    const { t } = useI18nStore();
    return (
        <Grid className={cx('card-title mb-0.5 mt-0.5', className)} items="center">
            <GridItem className="truncate" grow>{ title }</GridItem>
            { children }
            {
                !!actions.length &&
                <Grid space="xs" className="px-1">
                    {actions.map(({ id, icon, className, ...rest }) => (
                        <GridItem key={id}>
                            <ButtonWithTooltip block border={false} className={cx(fx.click, className)} {...rest}>
                                {
                                    !!getIcon(id, icon) && <Icon path={getIcon(id, icon)} size={iconT.s}/>
                                }
                            </ButtonWithTooltip>
                        </GridItem>
                    ))}
                </Grid>
            }
            {
                (onClose || icon) &&
                <ButtonWithTooltip title={t('close')} onClick={onClose} border={false} className={fx.click} block>
                    <Icon path={icon || mdiClose} size={'18px'}/>
                </ButtonWithTooltip>
            }
        </Grid>
    )
}