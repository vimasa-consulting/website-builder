import Icon from '@mdi/react';
import PropertyLabel from "./PropertyLabel";
import ButtonGroupField from "../ButtonGroupField";
import SectorRow from "./SectorRow";
import includes from "../../utils/includes";
import { mdiArrowRight, mdiArrowDown, mdiClose, mdiUnfoldMoreHorizontal, mdiUnfoldLessHorizontal } from '@mdi/js';
import { icon } from "../theme";
import { getButtonsProps, getNumberProps } from ".";
import SelectField from "../SelectField";
import { useI18nStore } from "../../store/I18nStore";
import PropertyComposite from "./PropertyComposite";
import { useAppEditorStore } from '../../store/appEditorStore';
import { useEffect, useState } from 'react';
import { AnyObject } from '../../utils/types';
import NumberField from '../NumberField';

export interface Props extends React.HTMLProps<HTMLDivElement> {
    sector: any,
};

const iconSizeS = icon.s;
const iAlignS = 'M6 6v12h13V6H6zm0 13v5H5V0h1v5h13c.6 0 1 .4 1 1v12c0 .6-.4 1-1 1H6zm6-14h1v14h-1V5z';
const iAlignC = 'M6 6v12h13V6H6zm0-1h13c.6 0 1 .4 1 1v12c0 .6-.4 1-1 1H6a1 1 0 01-1-1V6c0-.6.4-1 1-1zm6-5h1v24h-1V0z';
const iAlignE = 'M6 6v12h13V6H6zm13-1V0h1v24h-1v-5H6a1 1 0 01-1-1V6c0-.6.4-1 1-1h13zm-7 0h1v14h-1V5z';
const iAlignSB = 'M2 6v12h6V6H2zm0 13v5H1V0h1v5h6c.6 0 1 .4 1 1v12c0 .6-.4 1-1 1H2zM16 6v12h6V6h-6zm6-1V0h1v24h-1v-5h-6a1 1 0 01-1-1V6c0-.6.4-1 1-1h6z';
const iAlignSA = 'M11 0h1v24h-1V0zM1 6h6v12H1V6zm0-1h6c.6 0 1 .4 1 1v12c0 .6-.4 1-1 1H1a1 1 0 01-1-1V6c0-.6.4-1 1-1zm15 1h6v12h-6V6zm0-1h6c.6 0 1 .4 1 1v12c0 .6-.4 1-1 1h-6a1 1 0 01-1-1V6c0-.6.4-1 1-1z';
const iAlignSE = 'M3 6v12h6V6H3zm0-1h6c.6 0 1 .4 1 1v12c0 .6-.4 1-1 1H3a1 1 0 01-1-1V6c0-.6.4-1 1-1zM0 0h1v24H0V0zm14 6v12h6V6h-6zm0-1h6c.6 0 1 .4 1 1v12c0 .6-.4 1-1 1h-6a1 1 0 01-1-1V6c0-.6.4-1 1-1zm8-5h1v24h-1V0zM11 0h1v24h-1V0z';
const iAlignStr = 'M15 19H9V6h6v13zM8 6v13H0v1h24v-1h-8V6h8V5H0v1h8z';

export default function SectorLayout({ sector }: Props) {
    const { editor } = useAppEditorStore();
    const i18nStore = useI18nStore();
    const [elStyle, setElStyle] = useState<AnyObject>({}); // eslint-disable-line
    const [elParentStyle, setElParentStyle] = useState<AnyObject>({});
    const propDisplay = sector.getProperty('display');
    const propDir = sector.getProperty('flex-direction');
    const propJust = sector.getProperty('justify-content');
    const propAlign = sector.getProperty('align-items');
    const propWrap = sector.getProperty('flex-wrap');
    const propAlignContent = sector.getProperty('align-content');
    const propAlignSelf = sector.getProperty('align-self');
    const propOrder = sector.getProperty('order');
    const t = (id: string) => i18nStore.t(`styleManager.layout.${id}`);
    const displayValue = propDisplay.getValue();
    const isFlex = displayValue === 'flex';
    const isParentFlex = (elParentStyle.display || '').indexOf('flex') >= 0;

    const valueDir = propDir.getValue();
    const isDirRev = valueDir.indexOf('reverse') >= 0;
    const isRow = !includes(['column', 'column-reverse'], valueDir);
    // const labelJust = isRow ? 'Horizontal align' : 'Vertical align';
    // const labelAlign = isRow ? 'Vertical align' : 'Horizontal align';
    const optionsDir = [
        { id: 'row', label: <Icon path={mdiArrowRight} size={icon.sx}/>, title: t('direction.title.row') },
        { id: 'row-reverse', label: <Icon path={mdiArrowRight} size={iconSizeS} horizontal/>, title: t('direction.title.row-reverse') },
        { id: 'column', label: <Icon path={mdiArrowDown} size={icon.sx}/>, title: t('direction.title.column') },
        { id: 'column-reverse', label: <Icon path={mdiArrowDown} size={iconSizeS} vertical/>, title: t('direction.title.column-reverse') },
      ]
    const optionsJust = [
        { id: 'flex-start', title: 'Start', label: <Icon path={iAlignS} size={iconSizeS} rotate={isRow ? 0 : 90} horizontal={isRow && isDirRev}  vertical={!isRow && isDirRev}/> },
        { id: 'center', title: 'Center', label: <Icon path={iAlignC} size={iconSizeS} rotate={isRow ? 0 : 90}/> },
        { id: 'flex-end', title: 'End', label: <Icon path={iAlignE} size={iconSizeS} rotate={isRow ? 0 : 90} horizontal={isRow && isDirRev} vertical={!isRow && isDirRev}/> },
        { id: 'space-between', title: 'Space between', label: <Icon path={iAlignSB} size={iconSizeS} rotate={isRow ? 0 : 90}/> },
        { id: 'space-around', title: 'Space around', label: <Icon path={iAlignSA} size={iconSizeS} rotate={isRow ? 0 : 90} /> },
        { id: 'space-evenly', title: 'Space evenly', label: <Icon path={iAlignSE} size={iconSizeS} rotate={isRow ? 0 : 90} /> },
    ];
    const optionsAlign = [
        { id: 'stretch', title: 'Stretch', label: <Icon path={iAlignStr} size={iconSizeS} rotate={isRow ? 0 : 90}/> },
        { id: 'flex-start', title: 'Start', label: <Icon path={iAlignS} size={iconSizeS} rotate={isRow ? 90 : 0}/> },
        { id: 'center', title: 'Center', label: <Icon path={iAlignC} size={iconSizeS} rotate={isRow ? 90 : 0}/> },
        { id: 'flex-end', title: 'End', label: <Icon path={iAlignE} size={iconSizeS} rotate={isRow ? 90 : 0}/> },
    ];
    const optionsAlignContent = [
        { id: 'flex-start', title: 'Start', label: <Icon path={iAlignS} size={iconSizeS} rotate={isRow ? 90 : 0} horizontal={isRow && isDirRev}  vertical={!isRow && isDirRev}/> },
        { id: 'center', title: 'Center', label: <Icon path={iAlignC} size={iconSizeS} rotate={isRow ? 90 : 0}/> },
        { id: 'flex-end', title: 'End', label: <Icon path={iAlignE} size={iconSizeS} rotate={isRow ? 90 : 0} horizontal={isRow && isDirRev} vertical={!isRow && isDirRev}/> },
        { id: 'space-between', title: 'Space between', label: <Icon path={iAlignSB} size={iconSizeS} rotate={isRow ? 90 : 0}/> },
        { id: 'space-around', title: 'Space around', label: <Icon path={iAlignSA} size={iconSizeS} rotate={isRow ? 90 : 0} /> },
        { id: 'stretch', title: 'Stretch', label: <Icon path={iAlignStr} size={iconSizeS} rotate={isRow ? 0 : 90} /> },
    ];
    const optionsAlignSelf = [
        { id: 'auto', title: 'Auto', label: <Icon path={mdiClose} size={iconSizeS}/> },
        { id: 'flex-start', title: 'Start', label: <Icon path={iAlignS} size={iconSizeS} rotate={90}/> },
        { id: 'center', title: 'Center', label: <Icon path={iAlignC} size={iconSizeS} rotate={90}/> },
        { id: 'flex-end', title: 'End', label: <Icon path={iAlignE} size={iconSizeS} rotate={90}/> },
        { id: 'stretch', title: 'Stretch', label: <Icon path={iAlignStr} size={iconSizeS} rotate={0} /> },
    ];
    const optionsFlex = [
        { id: '0 0 auto', label: <Icon path={mdiClose} size={iconSizeS}/>, title: 'Auto' }, // mdiFormatVerticalAlignCenter
        { id: '1 1 0%', label: <Icon path={mdiUnfoldMoreHorizontal} size={iconSizeS} rotate={90}/>, title: 'Fill container' },
        { id: '0 1 auto', label: <Icon path={mdiUnfoldLessHorizontal} size={iconSizeS} rotate={90}/>, title: 'Hug contents' },
    ];

    useEffect(() => {
        if (!editor) return () => {};

        const { Styles } = editor;
        const up = () => {
            const selected = editor.getSelected();
            let elStyle: AnyObject = {};
            let elParentStyle: AnyObject = {};

            if (selected) {
                const el = selected.getEl();
                if (el) {
                    elStyle = window.getComputedStyle(el);
                    const elParent = el.parentElement;
                    if (elParent) {
                        elParentStyle = window.getComputedStyle(elParent);
                    }
                }
            }

            setElStyle(elStyle);
            setElParentStyle(elParentStyle);
        };
        const ev = Styles.events.target;
        editor.on(ev, up);
        up();
        return () => editor.off(ev, up);
    }, [editor]);

    return (
        <>
            <SectorRow>
                <PropertyLabel property={propDisplay} tooltip={t(`display.tips.${displayValue}`)} row>
                    <SelectField {...getButtonsProps(propDisplay)}/>
                </PropertyLabel>
            </SectorRow>
            {
                isFlex &&
                <>
                    <SectorRow>
                        <PropertyLabel property={propDir}>
                            <ButtonGroupField {...getButtonsProps(propDir)} options={optionsDir}/>
                        </PropertyLabel>
                    </SectorRow>
                    <SectorRow>
                        <PropertyLabel property={propJust}>
                            <ButtonGroupField {...getButtonsProps(propJust)} options={optionsJust}/>
                        </PropertyLabel>
                    </SectorRow>
                    <SectorRow>
                        <PropertyLabel property={propAlign}>
                            <ButtonGroupField {...getButtonsProps(propAlign)} options={optionsAlign}/>
                        </PropertyLabel>
                    </SectorRow>
                    <SectorRow>
                        <PropertyComposite property={sector.getProperty('gap')}/>
                    </SectorRow>
                    <SectorRow>
                        <PropertyLabel property={propWrap} row>
                            <SelectField {...getButtonsProps(propWrap)}/>
                        </PropertyLabel>
                    </SectorRow>
                    {
                        propWrap.getValue() !== 'nowrap' &&
                        <SectorRow>
                            <PropertyLabel property={propAlignContent}>
                                <ButtonGroupField {...getButtonsProps(propAlignContent)} options={optionsAlignContent}/>
                            </PropertyLabel>
                        </SectorRow>
                    }
                </>
            }
            {
                isParentFlex &&
                <>
                    <SectorRow separatorTop>
                        {t('flexChild')}
                    </SectorRow>
                    <SectorRow>
                        <PropertyComposite property={sector.getProperty('flex')} options={optionsFlex}/>
                    </SectorRow>
                    <SectorRow>
                        <PropertyLabel property={propAlignSelf}>
                            <ButtonGroupField {...getButtonsProps(propAlignSelf)} options={optionsAlignSelf}/>
                        </PropertyLabel>
                    </SectorRow>
                    <SectorRow>
                        <PropertyLabel property={propOrder} row>
                            <NumberField {...getNumberProps(propOrder)}/>
                        </PropertyLabel>
                    </SectorRow>
                </>
            }
        </>
    );
  }