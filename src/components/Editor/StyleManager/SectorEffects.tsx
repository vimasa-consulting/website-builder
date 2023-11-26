import PropertyLabel from "./PropertyLabel";
import SectorRow from "./SectorRow";
import Grid from "../Grid";
import GridItem from "../GridItem";
import { br } from "../theme";
import cx from "../../utils/makeCls";
import NumberField, { getMinMaxValue } from "../NumberField";
import { isValidUnit } from "../NumberField/utils";
import ButtonGroupField from "../ButtonGroupField";
import { getButtonsProps, getColorProps, getNumberProps, getStackProps } from ".";
import ColorField from "../ColorField";
import StackField from "../StackField";
import SelectField from "../SelectField";
import PropertyComposite from "./PropertyComposite";

export interface Props extends React.HTMLProps<HTMLDivElement> {
    sector: any,
};

const previewNumber = (value: string) => getMinMaxValue({ value: parseFloat(value), min: -3, max: 3 });

const getNumberFilterProps = (prop: any, name = 'filter') => {
    const propValue = prop.getProperty(`${name}-value`);
    const option = prop.getProperty(`${name}-name`).getOption() || {};
    const units = option.units || [];
    const unit = propValue.getUnit();
    const valueUnit = isValidUnit(unit, units) ? unit : units[0];

    return {
        ...getNumberProps(propValue),
        units,
        valueUnit,
        onChange: (value: string, partial: boolean) => {
            propValue.upValue(value, {
                partial,
                units,
                min: option.min,
                max: option.max,
            })
        },
    }
}

const getTypeProps = (prop: any, name: string) => {
    const propType = prop.getProperty(`${name}-name`);
    const propValue = prop.getProperty(`${name}-value`);

    return {
        ...getButtonsProps(propType),
        onChange: (value: string) => {
            propType.upValue(value);
            propValue.upValue('');
        },
    }
}

const defTextShadow = {
    'text-shadow-h': '1px',
    'text-shadow-v': '1px',
    'text-shadow-blur': '5px',
};

export default function SectorEffects({ sector }: Props) {
    const propShadow = sector.getProperty('box-shadow');
    const propTextShadow = sector.getProperty('text-shadow');
    const propFilter = sector.getProperty('filter');
    const propBackFilter = sector.getProperty('backdrop-filter');
    const propTrans = sector.getProperty('transition');
    const propTransf = sector.getProperty('transform');
    const propPrspOrig = sector.getProperty('perspective-origin');

    const renderShadowLayer = (layer: any) => {
        const {
            boxShadowH: x,
            boxShadowV: y,
            boxShadowBlur: blur,
            boxShadowColor: color,
            boxShadowSpread: spread,
            boxShadowType: type,
        } = layer.getValues({ camelCase: true });
        const maxH = previewNumber(x);
        const maxV = previewNumber(y);
        const maxB = previewNumber(blur);
        const maxS = previewNumber(spread);
        const boxShadow = `${maxH}px ${maxV}px ${maxB}px ${maxS}px ${color} ${type}`.trim();

        return (
            <Grid space="s" items="center">
                <GridItem grow>
                    {x} {y} {blur} {spread}
                </GridItem>
                <GridItem>
                    <div className={cx('w-[15px] h-[15px] bg-white', br.b, br.rnd)} style={{ boxShadow }}/>
                </GridItem>
            </Grid>
        )
    }

    const renderTextShadowLayer = (layer: any) => {
        const {
            textShadowH: x,
            textShadowV: y,
            textShadowBlur: blur,
            textShadowColor: color,
        } = layer.getValues({ camelCase: true });
        const maxH = previewNumber(x);
        const maxV = previewNumber(y);
        const maxB = previewNumber(blur);
        const boxShadow = `${maxH}px ${maxV}px ${maxB}px ${color}`.trim();

        return (
            <Grid space="s" items="center">
                <GridItem grow>
                    {x} {y} {blur}
                </GridItem>
                <GridItem>
                    <div className={cx('w-[15px] h-[15px] bg-white', br.b, br.rnd)} style={{ boxShadow }}/>
                </GridItem>
            </Grid>
        )
    }

    return (
        <>
            <SectorRow>
                <PropertyLabel property={sector.getProperty('opacity')}>
                    <NumberField {...getNumberProps(sector.getProperty('opacity'))}/>
                </PropertyLabel>
                <PropertyLabel property={sector.getProperty('mix-blend-mode')}>
                    <SelectField {...getButtonsProps(sector.getProperty('mix-blend-mode'))}/>
                </PropertyLabel>
            </SectorRow>
            <SectorRow separator>
                <PropertyLabel property={sector.getProperty('cursor')}>
                    <SelectField {...getButtonsProps(sector.getProperty('cursor'))}/>
                </PropertyLabel>
            </SectorRow>
            <SectorRow separator>
                <StackField {...getStackProps(propShadow)} renderItem={renderShadowLayer}>
                    <SectorRow>
                        <ButtonGroupField {...getButtonsProps(propShadow.getProperty('box-shadow-type'))}/>
                    </SectorRow>
                    <SectorRow>
                        <PropertyLabel label="X offset">
                            <NumberField {...getNumberProps(propShadow.getProperty('box-shadow-h'))}/>
                        </PropertyLabel>
                        <PropertyLabel label="Y offset">
                            <NumberField {...getNumberProps(propShadow.getProperty('box-shadow-v'))}/>
                        </PropertyLabel>
                    </SectorRow>
                    <SectorRow>
                        <PropertyLabel label="Blur">
                            <NumberField {...getNumberProps(propShadow.getProperty('box-shadow-blur'))}/>
                        </PropertyLabel>
                        <PropertyLabel label="Spread">
                            <NumberField {...getNumberProps(propShadow.getProperty('box-shadow-spread'))}/>
                        </PropertyLabel>
                    </SectorRow>
                    <SectorRow>
                        <PropertyLabel label="Color">
                            <ColorField {...getColorProps(propShadow.getProperty('box-shadow-color'))}/>
                        </PropertyLabel>
                    </SectorRow>
                </StackField>
            </SectorRow>
            <SectorRow separator>
                <StackField {...getStackProps(propTextShadow, defTextShadow)} renderItem={renderTextShadowLayer}>
                    <SectorRow>
                        <PropertyLabel label="X offset">
                            <NumberField {...getNumberProps(propTextShadow.getProperty('text-shadow-h'))}/>
                        </PropertyLabel>
                        <PropertyLabel label="Y offset">
                            <NumberField {...getNumberProps(propTextShadow.getProperty('text-shadow-v'))}/>
                        </PropertyLabel>
                    </SectorRow>
                    <SectorRow>
                        <PropertyLabel label="Blur">
                            <NumberField {...getNumberProps(propTextShadow.getProperty('text-shadow-blur'))}/>
                        </PropertyLabel>
                    </SectorRow>
                    <SectorRow>
                        <PropertyLabel label="Color">
                            <ColorField {...getColorProps(propTextShadow.getProperty('text-shadow-color'))}/>
                        </PropertyLabel>
                    </SectorRow>
                </StackField>
            </SectorRow>
            <SectorRow separator>
                <StackField {...getStackProps(propFilter, { 'filter-name': 'blur', 'filter-value': '3px' })}>
                    <SectorRow>
                        <PropertyLabel label="Type">
                            <SelectField {...getTypeProps(propFilter, 'filter')}/>
                        </PropertyLabel>
                        <PropertyLabel label="Value">
                            <NumberField {...getNumberFilterProps(propFilter)}/>
                        </PropertyLabel>
                    </SectorRow>
                </StackField>
            </SectorRow>
            <SectorRow separator>
                <StackField {...getStackProps(propBackFilter, { 'backdrop-filter-name': 'blur', 'backdrop-filter-value': '3px' })}>
                    <SectorRow>
                        <PropertyLabel label="Type">
                            <SelectField {...getButtonsProps(propBackFilter.getProperty('backdrop-filter-name'))}/>
                        </PropertyLabel>
                        <PropertyLabel label="Value">
                            <NumberField {...getNumberFilterProps(propBackFilter, 'backdrop-filter')}/>
                        </PropertyLabel>
                    </SectorRow>
                </StackField>
            </SectorRow>
            <SectorRow separator>
                <StackField {...getStackProps(propTrans)}>
                    <SectorRow>
                        <PropertyLabel label="Type">
                            <SelectField {...getButtonsProps(propTrans.getProperty('transition-property'))}/>
                        </PropertyLabel>
                    </SectorRow>
                    <SectorRow>
                        <PropertyLabel label="Easing">
                            <SelectField {...getButtonsProps(propTrans.getProperty('transition-timing-function'))}/>
                        </PropertyLabel>
                    </SectorRow>
                    <SectorRow>
                        <PropertyLabel label="Duration">
                            <NumberField {...getNumberProps(propTrans.getProperty('transition-duration'))}/>
                        </PropertyLabel>
                        <PropertyLabel label="Delay">
                            <NumberField {...getNumberProps(propTrans.getProperty('transition-delay'))}/>
                        </PropertyLabel>
                    </SectorRow>
                </StackField>
            </SectorRow>
            <SectorRow separator>
                <StackField {...getStackProps(propTransf)}>
                    <SectorRow>
                        <PropertyLabel label="Type">
                            <SelectField {...getTypeProps(propTransf, 'transform')}/>
                        </PropertyLabel>
                        <PropertyLabel label="Value">
                            <NumberField {...getNumberFilterProps(propTransf, 'transform')}/>
                        </PropertyLabel>
                    </SectorRow>
                </StackField>
            </SectorRow>
            <PropertyComposite property={sector.getProperty('transform-origin')}/>
            <PropertyComposite property={sector.getProperty('overflow')}/>
            <SectorRow>
                <PropertyLabel property={sector.getProperty('backface-visibility')}>
                    <ButtonGroupField {...getButtonsProps(sector.getProperty('backface-visibility'))}/>
                </PropertyLabel>
            </SectorRow>
            <SectorRow separatorTop>
                Children transform
            </SectorRow>
            <SectorRow>
                <PropertyLabel property={sector.getProperty('perspective')}>
                    <NumberField {...getNumberProps(sector.getProperty('perspective'))}/>
                </PropertyLabel>
                <PropertyLabel property={sector.getProperty('transform-style')}>
                    <ButtonGroupField {...getButtonsProps(sector.getProperty('transform-style'))}/>
                </PropertyLabel>
            </SectorRow>
            <PropertyComposite property={propPrspOrig}/>
        </>
    );
}
