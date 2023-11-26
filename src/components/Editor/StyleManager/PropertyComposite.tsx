import Grid from "../Grid";
import Icon from '@mdi/react';
import { mdiBorderAllVariant, mdiBorderStyle } from '@mdi/js';
import GridItem, { Props as GridItemProps } from "../GridItem";
import { br, cl, icon } from "../theme";
import SectorRow from "./SectorRow";
import PropertyLabel from "./PropertyLabel";
import NumberField from "../NumberField";
import { Option } from "../ButtonGroupField";
import ButtonGroupField from "../ButtonGroupField";
import { useState } from "react";
import SelectField from "../SelectField";
import { getButtonsProps, getColorProps, getNumberProps } from ".";
import ColorField from "../ColorField";
import cx from '../../utils/makeCls';

export interface Props extends GridItemProps {
    property?: any,
    corners?: boolean,
    onlyLabels?: boolean,
    compact?: boolean,
    options?: Option[],
};
const customOption = { id: 'custom', label: <Icon path={mdiBorderStyle} size={icon.sx}/>, title: 'Custom' };

const optsType = [
    { id: 'all', label: <Icon path={mdiBorderAllVariant} size={icon.sx}/>, title: 'All' },
    customOption,
];

function renderInput(prop: any, main?: any, opts: any = {}) {
    const type = prop.getType();
    const { compact = false } = opts;
    const parentProp = prop.getParent();
    const defValue = prop.getDefaultValue();

    if (type === 'select') {
        const propName = parentProp.getName();
        const labelOpts = { property: propName };
        return <SelectField
            {...getButtonsProps(prop, labelOpts)}
            {...(main ?
                {
                    value: !main.same ? '' : prop.getValue({ noDefault: true }),
                    emptyState: !main.same ? 'Custom' : (prop.getOptionLabel(defValue, labelOpts) || defValue),
                    onChange: (value) => main.all.map((p: any) => p.upValue(value)),
                } : {}
            )}
            />;
    } else if (type === 'color') {
        return <ColorField
            {...getColorProps(prop)}
            {...(main ?
                {
                    value: !main.same ? '' : prop.getValue({ noDefault: true }),
                    placeholder: !main.same ? 'Custom' : defValue,
                    onChange: (value, partial) => main.all.map((p: any) => p.upValue(value, { partial })),
                } : {}
            )}
            />;
    } else {
        return <NumberField
            {...getNumberProps(prop)}
            {...(compact ? { pan: prop.getLabel()[0] } : {})}
            {...(main ?
                {
                    value: !main.same ? '' : prop.getValue({ noDefault: true }),
                    valueUnit: !main.same ? '' : prop.getUnit(),
                    placeholder: !main.same ? 'Custom' : defValue,
                    onChange: (value, partial) => main.all.map((p: any) => p.upValue(value, { partial })),
                    onChangeUnit: (value) => main.all.map((p: any) => p.upUnit(value)),
                } : {}
            )}
        />
    }
};

export default function PropertyComposite({ property, corners, compact, children, options }: Props) {
    const [typeValue, setTypeValue] = useState<string | null>(null);
    const isDetached = property.isDetached();
    const allProps: any[] = property.getProperties();
    const propsLength = allProps.length;
    const [prop1, prop2, prop3, prop4] = allProps;
    const value1 = prop1.getFullValue();
    const valueAll: string[] = allProps.map(p => p.getFullValue());
    const valueAllSame = valueAll.every(v => v === value1);
    const valueType = typeValue !== null ? typeValue : (valueAllSame || options ? 'all' : customOption.id);
    const customOptions = options ? [...options, customOption] : [];
    const fullValue = property.getFullValue();
    const valueInOptions = customOptions.some(opt => opt.id === fullValue);
    const isCustom = valueType === customOption.id || (options ? !valueInOptions : false);

    const cmpProp1 = (
        <PropertyLabel property={compact ? null : prop1} shallow={!isDetached}>
            {renderInput(prop1, null, { compact })}
        </PropertyLabel>
    );
    const cmpProp2 = (
        <PropertyLabel property={compact ? null : prop2} shallow={!isDetached}>
            {renderInput(prop2, null, { compact })}
        </PropertyLabel>
    );
    const cmpProp3 = !!prop3 && (
        <PropertyLabel property={compact ? null : prop3} shallow={!isDetached}>
            {renderInput(prop3, null, { compact })}
        </PropertyLabel>
    );
    const cmpProp4 = !!prop4 && (
        <PropertyLabel property={compact ? null : prop4} shallow={!isDetached}>
            {renderInput(prop4, null, { compact })}
        </PropertyLabel>
    );

    const mainPropProps = compact ? { label: property.getLabel() } : { property };

    return (
        <div className="w-full">
            <SectorRow>
                <PropertyLabel {...mainPropProps}>
                    <SectorRow bottom="0">
                        {
                            children !== undefined ?
                                children
                            :
                            options ?
                            <>
                                <GridItem grow>
                                    <ButtonGroupField
                                        size="s"
                                        options={customOptions}
                                        value={isCustom ? customOption.id : fullValue}
                                        onChange={(value) => {
                                            if (value === customOption.id) {
                                                setTypeValue(value);
                                            } else {
                                                property.upValue(value);
                                                setTypeValue('');
                                            }
                                        }}
                                    />
                                </GridItem>
                            </>
                            :
                            <>
                                <GridItem grow>
                                    { renderInput(prop1, { same: valueAllSame, all: allProps }) }
                                </GridItem>
                                <GridItem grow>
                                    <ButtonGroupField size="s" options={optsType} value={valueType} onChange={setTypeValue}/>
                                </GridItem>
                            </>
                        }
                    </SectorRow>
                </PropertyLabel>
            </SectorRow>
            {
                isCustom &&
                <SectorRow col className={cx('px-2 py-1', cl.bgH2, br.rnd, br.b, cl.br)}>
                    {
                        propsLength === 2 ?
                        <>
                            <Grid space="s">
                                <GridItem grow>{ cmpProp1 }</GridItem>
                                <GridItem grow>{ cmpProp2 }</GridItem>
                            </Grid>
                        </>
                        :
                        propsLength === 3 ?
                        (
                        <>
                            <Grid space="s">
                                <GridItem grow>{ cmpProp1 }</GridItem>
                                <GridItem grow>{ cmpProp2 }</GridItem>
                            </Grid>
                            <Grid space="s">
                                <GridItem grow>{ cmpProp3 }</GridItem>
                            </Grid>
                        </>
                        ) :
                        (corners ?
                        <>
                            <Grid space="s">
                                <GridItem grow>{ cmpProp1 }</GridItem>
                                <GridItem grow>{ cmpProp2 }</GridItem>
                            </Grid>
                            <Grid space="s">
                                <GridItem grow>{ cmpProp4 }</GridItem>
                                <GridItem grow>{ cmpProp3 }</GridItem>
                            </Grid>
                        </>
                        :
                        <>
                            <Grid className="w-1/2 m-auto">{ cmpProp1 }</Grid>
                            <Grid space="s">
                                <GridItem grow>{ cmpProp4 }</GridItem>
                                <GridItem grow>{ cmpProp2 }</GridItem>
                            </Grid>
                            <Grid className="w-1/2 m-auto">{ cmpProp3 }</Grid>
                        </>)
                    }
                </SectorRow>
            }
        </div>
    );
  }