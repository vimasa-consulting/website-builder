import { getButtonsProps, getNumberProps } from ".";
import { useI18nStore } from '../../store/I18nStore';
import Grid from "../Grid";
import GridItem from "../GridItem";
import NumberField from "../NumberField";
import SelectField from "../SelectField";
import Tooltip from "../Tooltip";
import PropertyLabel from "./PropertyLabel";
import SectorRow from "./SectorRow";

export interface Props extends React.HTMLProps<HTMLDivElement> {
    sector: any,
};

const PRESETS_OPTIONS = [
    'topLeft',
    'topRight',
    'bottomLeft',
    'bottomRight',
    'left',
    'right',
    'bottom',
    'top',
    'full',
] as const;

export default function SectorPosition({ sector }: Props) {
    const i18nStore = useI18nStore();
    const propPos = sector.getProperty('position');
    const posValue = propPos.getValue();
    const propTop = sector.getProperty('top');
    const propRight = sector.getProperty('right');
    const propBottom = sector.getProperty('bottom');
    const propLeft = sector.getProperty('left');
    const t = (id: string) => i18nStore.t(`styleManager.position.${id}`);
    const presetOptions = PRESETS_OPTIONS.map(id => ({ id, label: t(`presets.options.${id}`) }));
    const showPresets = ['absolute', 'fixed'].includes(posValue);
    const onPresetChange = (value: typeof PRESETS_OPTIONS[number]) => {
        let top = 'auto';
        let right = 'auto';
        let bottom = 'auto';
        let left = 'auto';

        switch (value) {
            case 'topLeft': top = '0%'; left = '0%'; break;
            case 'topRight': top = '0%'; right = '0%'; break;
            case 'bottomLeft': bottom = '0%'; left = '0%'; break;
            case 'bottomRight': bottom = '0%'; right = '0%'; break;
            case 'left': top = '0%'; bottom = '0%'; left = '0%'; break;
            case 'right': top = '0%'; bottom = '0%'; right = '0%'; break;
            case 'bottom': left = '0%'; bottom = '0%'; right = '0%'; break;
            case 'top': left = '0%'; top = '0%'; right = '0%'; break;
            case 'full': left = '0%'; top = '0%'; right = '0%'; bottom = '0%'; break;
        }

        propTop.upValue(top);
        propRight.upValue(right);
        propBottom.upValue(bottom);
        propLeft.upValue(left);
    }

    return (
        <>
            <SectorRow>
                <PropertyLabel property={propPos} tooltip={t(`tips.${propPos.getOption()?.id}`)} row>
                    <SelectField {...getButtonsProps(propPos)}/>
                </PropertyLabel>
                {
                    showPresets &&
                    <GridItem>
                        <Tooltip title={t('presets.title')}>
                            <SelectField
                                options={presetOptions}
                                onChange={onPresetChange}
                                emptyState="P"
                                size="s"
                                caret=""
                                value
                            />
                        </Tooltip>
                    </GridItem>
                }
            </SectorRow>
            {
                posValue !== 'static' &&
                <>
                    <SectorRow col>
                        <Grid className="w-1/2 m-auto">
                            <PropertyLabel property={propTop}>
                                <NumberField {...getNumberProps(propTop)}/>
                            </PropertyLabel>
                        </Grid>
                        <Grid space="s">
                            <GridItem grow>
                                <PropertyLabel property={propLeft}>
                                    <NumberField {...getNumberProps(propLeft)}/>
                                </PropertyLabel>
                            </GridItem>
                            <GridItem grow>
                                <PropertyLabel property={propRight}>
                                    <NumberField {...getNumberProps(propRight)}/>
                                </PropertyLabel>
                            </GridItem>
                        </Grid>
                        <Grid className="w-1/2 m-auto">
                            <PropertyLabel property={propBottom}>
                                <NumberField {...getNumberProps(propBottom)}/>
                            </PropertyLabel>
                        </Grid>
                    </SectorRow>
                    <SectorRow>
                        <PropertyLabel property={sector.getProperty('z-index')}>
                            <NumberField {...getNumberProps(sector.getProperty('z-index'))}/>
                        </PropertyLabel>
                    </SectorRow>
                </>
            }
        </>
    );
  }