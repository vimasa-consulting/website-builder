import { LayersResultProps, useEditor } from '@grapesjs/react';
import { mdiLayers } from '@mdi/js';
import Icon from '@mdi/react';
import type { Component, Editor } from 'grapesjs';
import { useEffect, useRef, useState, PointerEvent } from 'react';
import cx from '../../utils/makeCls';
import Grid from "../Grid";
import GridItem from "../GridItem";
import { br, cl, icon, pad } from '../theme';
import LayerItem from './LayerItem';
import Tooltip from '../Tooltip';
import Button from '../Button';
import { useBlockManagerStore } from '../../store/blockManager';
import DesignManager from '../DesignManager';

export type DragRect = {
    y: number,
    h: number,
    pointerInside: boolean,
}

type CanMoveResult = ReturnType<Editor['Components']['canMove']>;

interface CanMove extends Partial<Omit<CanMoveResult, 'source'>> {
  canMoveInside?: CanMoveResult;
  source?: Component | null;
  index?: number;
}

const wrapGridStyle = {
    touchAction: 'none',
}

const LAYER_PAD = 5;

const getDragTarget = (ev: PointerEvent) => {
    const el = document.elementFromPoint(ev.clientX, ev.clientY) as HTMLElement;
    const elLayer = el?.closest('[data-layer-item]') as HTMLElement;
    return {
        el: elLayer,
        cmp: (elLayer as any)?.__cmp as Component,
    }
}

export default function LayerManager({ root }: LayersResultProps) {
    const editor = useEditor();
    const { Components } = editor;
    const [pointerDown, setPointerDown] = useState(false);
    const [canMoveRes, setCanMoveRes] = useState<CanMove>({});
    const [cmpPointerOver, setCmpPointerOver] = useState<Component>();
    const [dragging, setDragging] = useState<Component>();
    const [dragParent, setDragParent] = useState<Component>();
    const [dragRect, setDragRect] = useState<DragRect>();
    const indicatorRef = useRef<HTMLDivElement>(null);

    // DND
    const onDragStart = () => {
        setPointerDown(true);
    };
    const onDragMove = (ev: PointerEvent) => {
        if (!pointerDown) return;
        const { cmp, el: elLayer } = getDragTarget(ev);
        if (!elLayer || !cmp) return;
        const layerRect = elLayer.getBoundingClientRect();
        const layerH = elLayer.offsetHeight;
        const layerY = elLayer.offsetTop;
        const pointerY = ev.clientY;
        const isBefore = pointerY < (layerRect.y + layerH / 2);
        const cmpSource = !dragging ? cmp : dragging;
        const cmpTarget = cmp.parent();
        const cmpIndex = cmp.index() + (isBefore ? 0 : 1);
        !dragging && setDragging(cmp);
        setCmpPointerOver(cmp);
        const canMove = Components.canMove(cmpTarget!, cmpSource, cmpIndex);
        const canMoveInside = Components.canMove(cmp, cmpSource);
        const canMoveRes: CanMove = {
            ...canMove,
            canMoveInside,
            index: cmpIndex,
        };
        let pointerInside = false;
        if (
            canMoveInside.result &&
            (
                pointerY > (layerRect.y + LAYER_PAD)
                && pointerY < (layerRect.y + layerH - LAYER_PAD))
        ) {
            pointerInside = true;
            canMoveRes.target = cmp;
            delete canMoveRes.index;
        }
        setDragParent(pointerInside ? cmp : undefined);
        setCanMoveRes(canMoveRes);
        setDragRect({
            pointerInside,
            y: layerY + (isBefore ? 0 : layerH),
            h: layerH,
        });
    };
    const onDragEnd = () => {
        canMoveRes?.result && canMoveRes.source?.move(canMoveRes.target!, { at: canMoveRes.index });
        setCanMoveRes({});
        setPointerDown(false);
        setDragging(undefined);
        setCmpPointerOver(undefined);
        setDragParent(undefined);
        setDragRect(undefined);
    };

    const dragLevel = (cmpPointerOver ? cmpPointerOver.parents() : []).length;
    const showIndicator = !!(dragging && dragRect && canMoveRes?.result && !dragRect.pointerInside);
    const indicatorStyle = showIndicator ? { top: dragRect.y, left: 0, marginLeft: dragLevel*10+20 } : {};
    
    useEffect(() => {
        const doc = window.document;
        const onKeyDown = (ev: KeyboardEvent) => {
            if (ev.key === 'Escape') {
                setCanMoveRes({ ...canMoveRes, result: false });
                onDragEnd();
            }
        }

        doc.addEventListener('keydown', onKeyDown);

        return () => {
            doc.removeEventListener('keydown', onKeyDown);
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    const { isOpen, toggleOpen } = useBlockManagerStore();
    const { Layers } = editor;
    if(root) {
        Layers.setLayerData(root,{ open: true });
    }
    
    return (
      <Grid col full nowrap>
        <GridItem>
            <Grid space="s" items="center" className={cx([pad.xy, br.bb, cl.br])}>
                <GridItem>
                    <Icon path={mdiLayers} size={icon.s}/>
                </GridItem>
                <GridItem grow>Design Manager</GridItem>
                {/* <GridItem grow>
                    <Tooltip title="Blocks">
                        <Button onClick={toggleOpen}>
                            Blocks
                        </Button>
                    </Tooltip>
                </GridItem>*/}
                {/* <GridItem>
                    <Icon path={mdiMagnify} size={icon.s}/>
                </GridItem> */}
            </Grid>
        </GridItem>
        <DesignManager/>
        {/*<GridItem
            className="overflow-y-auto overflow-x-hidden text-sm select-none relative"
            style={wrapGridStyle}
            onPointerDown={onDragStart}
            onPointerMove={onDragMove}
            onPointerUp={onDragEnd}
            grow
        >
            
            {
                !!root && <LayerItem component={root} level={-1} draggingCmp={dragging} dragParent={dragParent}/>
            }
            {
                showIndicator &&
                <div ref={indicatorRef} className={cx('absolute w-full h-0.5', cl.cmp)} style={indicatorStyle}></div>
            }
        </GridItem>*/}
      </Grid>
    );
  }