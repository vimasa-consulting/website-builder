import PropertyComposite from "./PropertyComposite";

export interface Props extends React.HTMLProps<HTMLDivElement> {
    sector: any,
};

export default function SectorBorders({ sector }: Props) {
    const propRad = sector.getProperty('border-radius');

    return (
        <>
            <PropertyComposite  property={propRad} corners/>
            <PropertyComposite  property={sector.getProperty('border-width')}/>
            <PropertyComposite  property={sector.getProperty('border-style')}/>
            <PropertyComposite  property={sector.getProperty('border-color')}/>
        </>
    );
  }