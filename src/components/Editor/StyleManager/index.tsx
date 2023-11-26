import { StylesResultProps, useEditor } from "@grapesjs/react";
import type { Property, PropertyNumber, PropertySelect, PropertyStack, SelectOption } from "grapesjs";
import cx from '../../utils/makeCls';
import Accordion from "../Accordion";
import { Option } from "../ButtonGroupField";
import Grid from "../Grid";
import GridItem from "../GridItem";
import { br, cl, fx, pad } from '../theme';
import PropertyLabel from "./PropertyLabel";
import SectorBackground from "./SectorBackground";
import SectorBorders from "./SectorBorders";
import SectorEffects from "./SectorEffects";
import SectorLayout from "./SectorLayout";
import SectorPosition from "./SectorPosition";
import SectorSize from "./SectorSize";
import SectorSpace from "./SectorSpace";
import SectorTypography from "./SectorTypography";

type LabelOptions = Record<string, any>;

export const getOptions = (prop: PropertySelect, labelOpts: LabelOptions = {}) => {
    return prop.getOptions().map((opt) => ({
        id: prop.getOptionId(opt),
        label: prop.getOptionLabel(prop.getOptionId(opt), labelOpts),
        title: opt.title,
    }))
}

export const toOptionsWithTitle = (prop: PropertySelect, options: Option[]) => {
    return options.map(opt => ({
        ...opt,
        title: prop.getOptionLabel(prop.getOptionId(opt as SelectOption)),
    }));
}

export const getButtonsProps = (prop: PropertySelect, labelOpts: LabelOptions = {}) => {
    return {
        size: 's' as 's',
        options: getOptions(prop, labelOpts),
        value: prop.getValue(),
        onChange: (value: string) => prop.upValue(value),
    }
}

export const getStackProps = (prop: PropertyStack, newLayer = {}) => {
    return {
        title: prop.getLabel(),
        titleAdd: `Add new ${prop.getLabel()}`,
        items: prop.getLayers(),
        selected: prop.getSelectedLayer(),
        renderItem: (layer: any) => prop.getLayerLabel(layer),
        add: () => prop.addLayer(newLayer, { at: 0 }),
        select: (layer: any) => prop.selectLayer(layer),
        remove: (layer: any) => prop.removeLayer(layer),
        move: (layer: any, index = 0) => prop.moveLayer(layer, index),
        label: <PropertyLabel property={prop}/>,
    }
}

export const getNumberProps = (prop: PropertyNumber) => {
    return {
        size: 's' as 's',
        value: prop.getValue({ noDefault: true }),
        valueUnit: prop.getUnit(),
        units: prop.getUnits(),
        placeholder: prop.getDefaultValue(),
        onChangeUnit: (unit: string) => prop.upUnit(unit),
        onChange: (value: string, partial: boolean) => prop.upValue(value, { partial }),
    }
}

export const getColorProps = (prop: Property) => {
    return {
        size: 's' as 's',
        value: prop.getValue({ noDefault: true }),
        placeholder: prop.getDefaultValue(),
        onChange: (value: string, partial: boolean) => prop.upValue(value, { partial }),
    }
}

export default function StyleManager({ className, sectors }: React.HTMLProps<HTMLDivElement> & StylesResultProps) {
    const { Styles } = useEditor();
    const target = Styles.getSelected();
    const sectorsPatch = sectors.length ? sectors : Styles.getSectors({ visible: true });

    return (
        !target ? null :
        <div className={cx(className, 'select-none')}>
            {
                sectorsPatch.map((sector, index) =>
                    <Accordion key={sector.getId()} sticky
                        handler={() => {
                            const hasValue = sector.getProperties({ withValue: true }).length > 0;
                            const hasValueP = sector.getProperties({ withParentValue: true }).length > 0;
                            return (
                                <Grid space="xs" items="center">
                                    <GridItem className="mr-2">
                                        { sector.getName() }
                                    </GridItem>
                                    {
                                        hasValue &&
                                        <GridItem><div className={cx(fx.dot, cl.bgA2)}/></GridItem>
                                    }
                                    {
                                        hasValueP &&
                                        <GridItem><div className={cx(fx.dot, cl.bgW)}/></GridItem>
                                    }
                                </Grid>
                            )
                        }}
                        className={(open) => cx(
                            cl.bgH2,
                            pad.xyS,
                            cl.br,
                            index && br.bt,
                            (open || index === sectorsPatch.length - 1) && br.bb
                        )}>
                        <Grid className="p-2" col>
                            { sector.getId() === 'layout' && <SectorLayout sector={sector} />}
                            { sector.getId() === 'size' && <SectorSize sector={sector} />}
                            { sector.getId() === 'space' && <SectorSpace sector={sector} />}
                            { sector.getId() === 'position' && <SectorPosition sector={sector} />}
                            { sector.getId() === 'borders' && <SectorBorders sector={sector} />}
                            { sector.getId() === 'effects' && <SectorEffects sector={sector} />}
                            { sector.getId() === 'typography' && <SectorTypography sector={sector} />}
                            { sector.getId() === 'background' && <SectorBackground sector={sector} />}
                        </Grid>
                    </Accordion>
                )
            }
        </div>
    );
  }