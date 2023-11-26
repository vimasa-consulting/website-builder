import Icon from '@mdi/react';
import { mdiImage, mdiGradientVertical, mdiCheckboxBlank } from '@mdi/js';
import { getButtonsProps, getColorProps, getStackProps, toOptionsWithTitle } from ".";
import functionName from "../../utils/parsers/functionName";
import ButtonGroupField from "../ButtonGroupField";
import ColorField from "../ColorField";
import FileField from "../FileField";
import GradientPicker, { parseGradient } from "../GradientPicker";
import SelectField from "../SelectField";
import StackField from "../StackField";
import PropertyComposite from "./PropertyComposite";
import PropertyLabel from "./PropertyLabel";
import SectorRow from "./SectorRow";
import { icon } from '../theme';
import { useEditor } from '@grapesjs/react';

export interface Props extends React.HTMLProps<HTMLDivElement> {
    sector: any,
};

export enum BackgroundType {
    Image = 'image',
    Gradient = 'gradient',
    Color = 'color',
  }

export const PROPERTY_IMAGE = 'background-image';
export const PROPERTY_BG_TYPE = '__background-type';
export const PROPERTY_BG_IMAGE = PROPERTY_IMAGE;

// const BG_IMAGE = 'https://via.placeholder.com/150/999/fff/image.jpg?text=IMAGE';
const BG_IMAGE = 'https://placehold.co/150/777/white.png?text=IMAGE';
const BG_IMAGE_SIZE = '50px';

const bgDef = {
    [PROPERTY_BG_TYPE]: 'image',
    'background-image': `url("${BG_IMAGE}")`,
    'background-size': `${BG_IMAGE_SIZE} ${BG_IMAGE_SIZE}`,
    'background-repeat': 'repeat',
    'background-position': '0px 0px',
};

const getColorValueFromImage = (value: string) => {
    const result = value.includes('gradient(') ? parseGradient(value).colorStops[0].color : value;
    return result || '';
};

export default function SectorBackground({ sector }: Props) {
    const editor = useEditor();
    const propBg = sector.getProperty('background');
    const propType = propBg.getProperty(PROPERTY_BG_TYPE);
    const propImage = propBg.getProperty('background-image');
    const propPos = propBg.getProperty('background-position');
    const propSize = propBg.getProperty('background-size');
    const propBgColor = sector.getProperty('background-color');
    const propBgClip = sector.getProperty('background-clip');
    const layerIndex = propBg.getSelectedLayer()?.getIndex() || -1;
    const propTypeValue = propType.getValue();
    const isImage = propTypeValue === 'image';
    const propImageValue = propImage.getValue();

    const openAssets = () => {
        const am = editor.Assets;
        am.open({
            select(asset: any) {
                const src = asset.getSrc();
                propImage.upValue(`url("${src}")`);
                am.close();
            }
        })
    };

    const onTypeChange = (value: string) => {
        let image = 'none';
        let bgSize = '100%';
        if (value === BackgroundType.Image) {
            image = `url("${BG_IMAGE}")`;
            bgSize = BG_IMAGE_SIZE;
        } else if (value === BackgroundType.Gradient) {
            image = 'linear-gradient(90deg, black 10%, white 90%)';
            // image = 'radial-gradient(100px at 50%, black 10%, white 90%)';
        } else if (value === BackgroundType.Color) {
            image = 'rgba(0, 0, 0, 0.5)';
        }
        propImage.upValue(image);
        propType.upValue(value);
        propPos.upValue('0 0');
        propSize.upValue(`${bgSize} ${bgSize}`);
    };

    const optionsType = toOptionsWithTitle(propType, [
        { id: BackgroundType.Image, label: <Icon path={mdiImage} size={icon.s}/> },
        { id: BackgroundType.Gradient, label: <Icon path={mdiGradientVertical} size={icon.s}/> },
        { id: BackgroundType.Color, label: <Icon path={mdiCheckboxBlank} size={icon.s}/> },
    ]);

    return (
        <>
            <SectorRow separator>
                <StackField {...getStackProps(propBg, bgDef)} previewStyle={l => propBg.getStyleFromLayer(l, { camelCase: true })}>
                    <SectorRow>
                        <PropertyLabel label="Type">
                            <ButtonGroupField {...getButtonsProps(propType)} options={optionsType} onChange={onTypeChange}/>
                        </PropertyLabel>
                    </SectorRow>
                    <SectorRow>
                        <PropertyLabel>
                            { isImage && <FileField value={functionName(propImageValue).value} onOpen={openAssets}/> }
                            { propTypeValue === BackgroundType.Color && <ColorField {...getColorProps(propImage)} value={getColorValueFromImage(propImageValue)}/> }
                            {
                                (propTypeValue === BackgroundType.Gradient) &&
                                <GradientPicker key={layerIndex} value={propImageValue} onChange={(v, partial) => propImage.upValue(v, { partial })}/>
                            }
                        </PropertyLabel>
                    </SectorRow>
                    {
                        isImage &&
                        <>
                            <SectorRow col>
                                <PropertyComposite  property={propPos}/>
                            </SectorRow>
                            <SectorRow col>
                                <PropertyComposite  property={propSize}/>
                            </SectorRow>
                            <SectorRow>
                                <PropertyLabel label={propBg.getProperty('background-repeat').getLabel()}>
                                    <SelectField {...getButtonsProps(propBg.getProperty('background-repeat'))}/>
                                </PropertyLabel>
                                <PropertyLabel label={propBg.getProperty('background-attachment').getLabel()}>
                                    <SelectField {...getButtonsProps(propBg.getProperty('background-attachment'))}/>
                                </PropertyLabel>
                            </SectorRow>
                            <SectorRow>
                                <PropertyLabel label={propBg.getProperty('background-origin').getLabel()}>
                                    <SelectField {...getButtonsProps(propBg.getProperty('background-origin'))}/>
                                </PropertyLabel>
                            </SectorRow>
                        </>
                    }
                </StackField>
            </SectorRow>
            <SectorRow>
                <PropertyLabel property={propBgColor}>
                    <ColorField {...getColorProps(propBgColor)}/>
                </PropertyLabel>
            </SectorRow>
            <SectorRow>
                <PropertyLabel property={propBgClip}>
                    <SelectField {...getButtonsProps(propBgClip)}/>
                </PropertyLabel>
            </SectorRow>
        </>
    );
  }