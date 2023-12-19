
import { useEditor } from '@grapesjs/react';
import { mdiEyeOffOutline, mdiEyeOutline, mdiLock, mdiLockOpenVariant, mdiMenuDown } from '@mdi/js';
import Icon from '@mdi/react';
import type { Component } from 'grapesjs';
import { MouseEvent, useEffect, useMemo, useRef, useState } from 'react';
import { SIDEBAR_LEFT_WIDTH } from '../../utils';
import cx from '../../utils/makeCls';
import Grid from "../Grid";
import GridItem from "../GridItem";
import InputRename from '../InputRename';
import SvgIcon from '../SvgIcon';
import { br, cl, icon, pad } from '../theme';

export declare interface Props extends React.HTMLProps<HTMLDivElement> {
    component: Component,
    level: number,
    draggingCmp?: Component,
    dragParent?: Component,
}

const itemStyle = { maxWidth: `${SIDEBAR_LEFT_WIDTH}px` };

export default function LayerItem({ component, draggingCmp, dragParent, ...props }: Props) {
    const editor = useEditor();
    const { Layers } = editor;
    const layerRef = useRef<HTMLDivElement>(null);
    const [rename, setRename] = useState(false);
    const [layerData, setLayerData] = useState(Layers.getLayerData(component));
    const { open, selected, hovered, components, visible, locked, name } = layerData;
    const componentsIds = components.map((c) => c.getId());
    const isDragging = draggingCmp === component;
    const cmpHash = componentsIds.join('-');
    const level = props.level + 1;
    const isHovered = hovered || dragParent === component;

    useEffect(() => {
        level === 0 && setLayerData(Layers.getLayerData(component));
        if (layerRef.current) {
            // @ts-ignore
            layerRef.current.__cmp = component;
        }
    }, [component]);

    useEffect(() => {
        const up = (cmp: Component) => {
            cmp === component && setLayerData(Layers.getLayerData(cmp));
        };
        const ev = Layers.events.component;
        editor.on(ev, up);

        return () => {editor.off(ev, up)};
    }, [editor, Layers, component]);

    const cmpToRender = useMemo(() => {
        return components.map((cmp) => (
            <LayerItem key={cmp.getId()} component={cmp} level={level} draggingCmp={draggingCmp} dragParent={dragParent}/>
        ))
    }, [cmpHash, draggingCmp, dragParent]);

    const onRename = (name: string) => {
        Layers.setLayerData(component, { name });
        setRename(false);
    }

    const toggleOpen = (ev: MouseEvent) => {
        ev.stopPropagation();
        Layers.setLayerData(component, { open: !open })
    };
    const toggleVisibility = (ev: MouseEvent) => {
        ev.stopPropagation();
        Layers.setLayerData(component, { visible: !visible })
    };
    const toggleLock = (ev: MouseEvent) => {
        ev.stopPropagation();
        Layers.setLayerData(component, { locked: !locked })
    };
    const select = (event: MouseEvent) => {
        event.stopPropagation();
        Layers.setLayerData(component, { selected: true }, { event })
    };
    const hover = (hovered: boolean) => {
        if (!hovered || !draggingCmp) {
            Layers.setLayerData(component, { hovered })
        }
    };

    console.log(component.getView());
    return (
        <div className="move-ref">
            <Grid col className={cx('layer-item', selected && cl.cmpBgSoftX, (!visible || isDragging) && 'opacity-50')}>
                <GridItem
                    onClick={select}
                    onMouseEnter={() => hover(true)}
                    onMouseLeave={() => hover(false)}
                    className={cx('group max-w-full')}
                    data-layer-item
                    ref={layerRef}
                >
                    <Grid
                        items="center"
                        space="xs"
                        className={cx([
                            pad.xyS, br.b,
                            isHovered ? cl.cmpBr : br.bT,
                            ...(selected ? [cl.cmpBgSoft, cl.cmpTxtActive] : [])
                        ])}
                    >
                        <GridItem
                            style={{marginLeft: `${level*10}px` }}
                            className={cx('cursor-pointer', !components.length && 'pointer-events-none opacity-0')}
                            onClick={toggleOpen}
                        >
                            <Icon path={mdiMenuDown} size={icon.sx} rotate={open ? 0 : -90}/>
                        </GridItem>
                        <GridItem>
                            <SvgIcon className="w-[13px]" svg={component.getIcon()}/>
                        </GridItem>
                        <GridItem className="truncate" onDoubleClick={() => setRename(true)} style={itemStyle} grow>
                            { rename ? <InputRename value={name} onChange={onRename}/> : <>{ name }</> }
                        </GridItem>
                        {
                            !rename &&
                            <>
                                <GridItem className={cx('group-hover:opacity-100 cursor-pointer', locked ? 'opacity-100' : 'opacity-0')} onClick={toggleLock}>
                                    <Icon path={locked ? mdiLock : mdiLockOpenVariant} size={icon.s3x}/>
                                </GridItem>
                                <GridItem className={cx('group-hover:opacity-100 cursor-pointer', visible ? 'opacity-0' : 'opacity-100')} onClick={toggleVisibility}>
                                    <Icon path={visible ? mdiEyeOutline : mdiEyeOffOutline} size={icon.sx}/>
                                </GridItem>
                            </>
                        }
                    </Grid>
                </GridItem>
                {
                    !!(open && components.length && level<1) &&
                    <GridItem className={cx('max-w-full', !open && 'hidden')}>
                        { cmpToRender }
                    </GridItem>
                }
            </Grid>
        </div>
    )
};