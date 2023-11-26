import { mdiDelete } from '@mdi/js';
import Icon from '@mdi/react';
import type { Asset } from 'grapesjs';
import { observer } from 'mobx-react-lite';
import { useI18nStore } from '../../store/I18nStore';
import { cx } from '../../utils/makeCls';
import Button from '../Button';
import ButtonWithTooltip from '../Button/ButtonWithTooltip';
import Card from '../Card';
import Grid from '../Grid';
import GridItem from '../GridItem';
import PopoverConfirm from '../Popover/PopoverConfirm';
import { cl, fx, icon } from '../theme';

export interface AssetCardProps extends Omit<React.HTMLProps<HTMLDivElement>, 'onSelect'> {
    asset: Asset;
    onSelect?: (asset: Asset) => void;
    onRemove?: (asset: Asset) => void;
  };

export default observer(function AssetCard({ asset, onSelect, onRemove, className }: AssetCardProps) {
    const i18nStore = useI18nStore();

    return (
        <Card padding={false} className={cx('overflow-hidden max-w-full group', className)}>
            <Grid col>
                <GridItem className={cx('relative group h-[100px] cursor-pointer bg-checker')} onClick={() => onSelect?.(asset)}>
                    <div className="w-full h-full bg-contain bg-no-repeat bg-center" style={{ backgroundImage: `url("${asset.getSrc()}")` }} />
                    <Grid
                        justify="center"
                        items="center"
                        className={cx(fx.coverAbs, cl.bgH75, 'group-hover:opacity-100 opacity-0 transition-opacity')}
                    >
                        <Button className="text-sm" size="m2" variant="pr">
                            {i18nStore.t('select')}
                        </Button>
                    </Grid>
                </GridItem>
                <Grid className="p-1 max-w-full" space="s" items="center" nowrap>
                    <GridItem className={cx(fx.txtEllips, 'text-sm mr-auto')}>
                        { asset.get('name' as any) || asset.getFilename() }
                    </GridItem>
                    <PopoverConfirm onConfirm={() => onRemove?.(asset)}>
                        <ButtonWithTooltip title={i18nStore.t('delete')}>
                            <Icon path={mdiDelete} size={icon.sx}/>
                        </ButtonWithTooltip>
                    </PopoverConfirm>
                </Grid>
            </Grid>
        </Card>
    )
});