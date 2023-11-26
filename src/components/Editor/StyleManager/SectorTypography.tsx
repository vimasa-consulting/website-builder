import { getButtonsProps, getColorProps, getNumberProps } from ".";
import ColorField from "../ColorField";
import NumberField from "../NumberField";
import SelectField from "../SelectField";
import PropertyLabel from "./PropertyLabel";
import SectorRow from "./SectorRow";

export interface Props extends React.HTMLProps<HTMLDivElement> {
    sector: any,
};

export default function SectorTypography({ sector }: Props) {
    return (
        <>
            <SectorRow>
                <PropertyLabel property={sector.getProperty('font-family')}>
                    <SelectField {...getButtonsProps(sector.getProperty('font-family'))}/>
                </PropertyLabel>
            </SectorRow>
            <SectorRow>
                <PropertyLabel property={sector.getProperty('color')}>
                    <ColorField {...getColorProps(sector.getProperty('color'))}/>
                </PropertyLabel>
            </SectorRow>
            <SectorRow>
                <PropertyLabel property={sector.getProperty('font-size')}>
                    <NumberField {...getNumberProps(sector.getProperty('font-size'))}/>
                </PropertyLabel>
                <PropertyLabel property={sector.getProperty('font-weight')}>
                    <SelectField {...getButtonsProps(sector.getProperty('font-weight'))}/>
                </PropertyLabel>
            </SectorRow>
            <SectorRow>
                <PropertyLabel property={sector.getProperty('line-height')}>
                    <NumberField {...getNumberProps(sector.getProperty('line-height'))}/>
                </PropertyLabel>
                <PropertyLabel property={sector.getProperty('letter-spacing')}>
                    <NumberField {...getNumberProps(sector.getProperty('letter-spacing'))}/>
                </PropertyLabel>
            </SectorRow>
            <SectorRow>
                <PropertyLabel property={sector.getProperty('text-align')}>
                    <SelectField {...getButtonsProps(sector.getProperty('text-align'))}/>
                </PropertyLabel>
                <PropertyLabel property={sector.getProperty('text-decoration')}>
                    <SelectField {...getButtonsProps(sector.getProperty('text-decoration'))}/>
                </PropertyLabel>
            </SectorRow>
            <SectorRow>
                <PropertyLabel property={sector.getProperty('text-transform')}>
                    <SelectField {...getButtonsProps(sector.getProperty('text-transform'))}/>
                </PropertyLabel>
                <PropertyLabel property={sector.getProperty('direction')}>
                    <SelectField {...getButtonsProps(sector.getProperty('direction'))}/>
                </PropertyLabel>
            </SectorRow>
            <SectorRow>
                <PropertyLabel property={sector.getProperty('white-space')}>
                    <SelectField {...getButtonsProps(sector.getProperty('white-space'))}/>
                </PropertyLabel>
            </SectorRow>
        </>
    );
  }