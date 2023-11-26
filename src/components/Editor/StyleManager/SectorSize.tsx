import NumberField from "../NumberField";
import PropertyLabel from "./PropertyLabel";
import SectorRow from "./SectorRow";
import { getNumberProps } from ".";

export interface Props extends React.HTMLProps<HTMLDivElement> {
    sector: any,
};

export default function SectorSize({ sector }: Props) {
    const propW = sector.getProperty('width');
    const propMinW = sector.getProperty('min-width');
    const propMaxW = sector.getProperty('max-width');
    const propH = sector.getProperty('height');
    const propMinH = sector.getProperty('min-height');
    const propMaxH = sector.getProperty('max-height');
    // const defTypeValue = '0 0 auto';


    return (
        <>
            <SectorRow>
                <PropertyLabel property={propW}>
                    <NumberField {...getNumberProps(propW)}/>
                </PropertyLabel>
                <PropertyLabel property={propH}>
                    <NumberField {...getNumberProps(propH)}/>
                </PropertyLabel>
            </SectorRow>
            <SectorRow>
                <PropertyLabel property={propMinW}>
                    <NumberField {...getNumberProps(propMinW)}/>
                </PropertyLabel>
                <PropertyLabel property={propMinH}>
                    <NumberField {...getNumberProps(propMinH)}/>
                </PropertyLabel>
            </SectorRow>
            <SectorRow>
                <PropertyLabel property={propMaxW}>
                    <NumberField {...getNumberProps(propMaxW)}/>
                </PropertyLabel>
                <PropertyLabel property={propMaxH}>
                    <NumberField {...getNumberProps(propMaxH)}/>
                </PropertyLabel>
            </SectorRow>
            {/*

            <PropertyLabel property={propWT}>
                <ButtonGroupField
                    {...createRadioProps(propWT)}
                    onChange={updateWidthType}
                    options={[
                        { id: '1 1 0%', label: <Icon path={mdiUnfoldMoreHorizontal} size={icon.sx} rotate={90}/>, title: 'Fill container' },
                        { id: '0 1 auto', label: <Icon path={mdiUnfoldLessHorizontal} size={icon.sx} rotate={90}/>, title: 'Hug contents' },
                        { id: '0 0 auto', label: <Icon path={mdiFormatVerticalAlignCenter} size={icon.sx} rotate={90}/>, title: 'Fixed width' },
                    ]}
                />
            </PropertyLabel>
            <PropertyLabel property={propH}>
                <ButtonGroupField
                    {...createRadioProps(propHT)}
                    options={[
                        { id: 'fill', label: <Icon path={mdiUnfoldMoreHorizontal} size={icon.sx}/>, title: 'Fill container' },
                        { id: 'hug', label: <Icon path={mdiUnfoldLessHorizontal} size={icon.sx}/>, title: 'Hug contents' },
                        { id: 'fixed', label: <Icon path={mdiFormatVerticalAlignCenter} size={icon.sx}/>, title: 'Fixed height' },
                    ]}
                />
            </PropertyLabel>
            */}
        </>
    );
  }