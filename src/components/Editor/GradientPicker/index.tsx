import { br, cl, icon } from '../theme';
import cx from '../../utils/makeCls';
import { useEffect, useRef, useState, PointerEvent as PE, MouseEvent as ME } from 'react';
import functionName from '../../utils/parsers/functionName';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';
import Grid from '../Grid';
import GridItem from '../GridItem';
import NumberField from '../NumberField';
import ColorPicker from '../ColorPicker';
import SwitchField from '../SwitchField';

export interface Props {
    className?: string;
    value: string;
    onChange?(value: string, partial?: boolean): void;
};

export type Orientation = {
    type: string,
    value?: string,
    shape?: string,
    size?: { x: string, y: string },
    position?: { x: string, y: string },
};

export type ColorStop = {
    color: string,
    hint: number | null,
};

export type Selection = {
    stop: ColorStop,
    x: number,
    y: number,
    w: number,
    h: number,
};

const LENGTH_REG = /^-?[0-9]+(\.[0-9]+)?[a-zA-Z%]{0,}$/;
const VALUE_REG = /,(?![^(]*\))/;
const STOP_REG = /\s(?![^(]*\))/;
const SIZE_REG = /^(closest-side|closest-corner|farthest-side|farthest-corner)/i;
const SHAPE_REG = /^circle|ellipse/i;
// const BRW_REG = /^(-(webkit|o|ms|moz)-)/i;

/**
 * <linear-gradient()> = linear-gradient([ <angle> | to <side-or-corner> ]? , <color-stop-list>)
 * <radial-gradient()> = radial-gradient([ <ending-shape> || <size> ]? [ at <position> ]? , <color-stop-list>
 * @example
 * linear-gradient(90deg, rgba(18, 215, 151, 0.75) 31.25%, white 85.1562%)
 * linear-gradient(to bottom left, rgba(18, 215, 151, 0.75) 31.25%, white 85.1562%)
 * radial-gradient(#e66465, #9198e5)
 * radial-gradient(closest-side, #3f87a6, #ebf8e1, #f69d3c)
 * radial-gradient(circle at 100%, #333, #333 50%, #eee 75%, #333 75%)
 * radial-gradient(at top, #333, #333 50%, #eee 75%, #333 75%)
 * radial-gradient(20px at top, #333, #333 50%, #eee 75%, #333 75%)
 * radial-gradient(ellipse at top, #e66465, transparent)
 */
export const parseGradient = (input: string) => {
    const colorStops: ColorStop[] = [];
    const { name, value } = functionName(input);
    const [dirValue, ...stops] = value.split(VALUE_REG).map(v => v.trim()).filter(Boolean);
    const hasDir = stops.length > 1;
    const dir = hasDir ? dirValue : '';
    let orientation: Orientation = { type: 'none' };
    let stopsArr = hasDir ? stops : [dirValue, ...stops];

    if (LENGTH_REG.test(dir)) {
        orientation.type = 'angle';
        orientation.value = dir;
    } else if (/^to\s/.test(dir)) {
        orientation.type = 'side-or-corner';
        orientation.value = dir; //.replace(/^to\s/, '').trim();
    } else if (SIZE_REG.test(dir)) {
        orientation.type = 'size';
        orientation.value = dir;
    } else if (SHAPE_REG.test(dir) || /^at\s/.test(dir) || /\sat\s/.test(dir)) {
        orientation.type = 'at';
        orientation.value = dir;
        const matchShape = dir.match(SHAPE_REG)?.[0] || 'circle';
        orientation.shape = matchShape;
        const size = { x: '0%', y: '0%' };
        const position = { x: '0%', y: '0%' };
        const [sizes, pos] = dir.replace(SHAPE_REG, '').trim().split('at').map(v => v.trim());
        if (sizes) {
            const [x, y] = sizes.split(STOP_REG);
            size.x = x;
            size.y = y || x;
        }
        if (pos) {
            const [x, y] = pos.split(STOP_REG);
            position.x = x;
            position.y = y || x;
        }
        orientation.size = size;
        orientation.position = position;
    }

    stopsArr.forEach(cl => {
        const [color, hint] = cl.split(STOP_REG);
        colorStops.push({ color, hint: hint ? parseFloat(hint) : null })
    });

    colorStops.forEach((stop, i) => {
        if (stop.hint === null) {
            stop.hint = i / (colorStops.length - 1) * 100;
        }
    })

    return {
        name,
        orientation,
        colorStops,
    };
}

const getImage = ({
    stops,
    orientation = 'to right',
    name = 'linear-gradient'
}: { stops: ColorStop[], orientation?: string, name?: string }) => {
    const stopsArr: ColorStop[] = stops.length === 1 ? [
        { color: stops[0].color, hint: null },
        { color: stops[0].color, hint: null },
    ] : stops;
    const colors = stopsArr.map(s => `${s.color} ${s.hint ? `${s.hint}%` : ''}`.trim()).join(', ');
    return colors ? `${name}(${orientation}, ${colors})` : 'none';
}

const sortStops = (stops: ColorStop[]) => {
    return stops.slice().sort((a, b) => (a.hint || 0) - (b.hint || 0));
}

/**
 * Spec: https://www.w3.org/TR/css-backgrounds-3/
 * bg-layer: <bg-image> || <bg-position> [ / <bg-size> ]? || <repeat-style> || <attachment> || <box> || <box>
 * final-bg-layer: <'background-color'> || <bg-image> || <bg-position> [ / <bg-size> ]? || <repeat-style> || <attachment> || <box> || <box>
 * // If one <box> value is present then it sets both background-origin and background-clip to that value
 */

export default function GradientPicker({
  className,
  value,
  onChange,
}: Props) {
    const parsed = parseGradient(value);
    const [stops, setStops] = useState(parsed.colorStops);
    // const stops = parsed.colorStops; const setStops = (v: any) => {};
    const [select, setSelect] = useState<Selection | null>(null);
    const prvRef = useRef<HTMLDivElement>(null);
    const clsMain = cx('grad-picker select-none', className, br.rnd);
    const name = parsed.name || 'linear-gradient';
    const isRadial = name.indexOf('radial') >= 0;
    const isRepeating = name.indexOf('repeating') >= 0;
    const orientation = parsed.orientation.value;
    const angle = `${parseFloat(`${orientation}`) || 180}`;
    const valueSize = `${parseFloat(`${parsed.orientation.size?.x}`) || 0}`;
    const posX = `${parseFloat(`${parsed.orientation.position?.x}`) || 0}`;
    const posY = `${parseFloat(`${parsed.orientation.position?.y}`) || 0}`;
    const min = 0;
    const max = 100;

    const upStops = (stops: ColorStop[], partial: boolean = false) => {
        const newValue = sortStops(stops);
        setStops(newValue);
        onChange?.(getImage({ name, orientation, stops: newValue }), partial)
    };

    const upAngle = (value: string, partial: boolean = false) => {
        onChange?.(getImage({ stops, name, orientation: `${value}deg` }), partial)
    };

    const upSize = (value: string, partial: boolean = false) => {
        onChange?.(getImage({ stops, name, orientation: `${value}px at ${posX}% ${posY}%` }), partial)
    };

    const upPosX = (value: string, partial: boolean = false) => {
        onChange?.(getImage({ stops, name, orientation: `${valueSize}px at ${value}% ${posY}%` }), partial)
    };

    const upPosY = (value: string, partial: boolean = false) => {
        onChange?.(getImage({ stops, name, orientation: `${valueSize}px at ${posX}% ${value}%` }), partial)
    };

    const upRepeat = (value: boolean) => {
        const newName = `${value ? 'repeating-' : ''}${isRadial ? 'radial' : 'linear'}-gradient`;
        onChange?.(getImage({ stops, orientation, name: newName }))
    };

    const upRadial = (value: boolean) => {
        const newName = `${isRepeating ? 'repeating-' : ''}${value ? 'radial' : 'linear'}-gradient`;
        onChange?.(getImage({ stops, orientation: value ? `100px at 50% 50%` : '90deg', name: newName }))
    };

    useEffect(() => {
        if (!select) return;
        const posInit = parseFloat(`${select.stop.hint}`);

        const handleMove = (ev: PointerEvent) => {
            const delta = ev.clientX - select.x;
            let pos = delta * 100;
            pos = pos / select.w;
            pos = posInit + pos;
            pos = pos < min ? min : pos;
            pos = pos > max ? max : pos;
            select.stop.hint = parseInt(`${pos}`, 10);
            upStops(stops, true);
        };
        const handleUp = () => {
            setSelect(null);
            upStops(stops);
        };

        window.addEventListener('pointermove', handleMove);
        window.addEventListener('pointerup', handleUp);
        return () => {
            window.removeEventListener('pointermove', handleMove);
            window.removeEventListener('pointerup', handleUp);
            handleUp();
        }
    }, [select]); // eslint-disable-line

    const selectStop = (ev: PE, stop: ColorStop) => {
        const el = prvRef.current;
        setSelect({
            stop,
            w: el?.clientWidth || 0,
            h: el?.clientHeight || 0,
            x: ev.clientX,
            y: ev.clientY,
        })
    }

    const clickPreview = (ev: ME) => {
        const el = prvRef.current;
        const w = el?.clientWidth || 0;
        const h = el?.clientHeight || 0;
        const x = ev.nativeEvent.offsetX - (el?.clientLeft || 0);
        const y = ev.nativeEvent.offsetY - (el?.clientTop || 0);
        const hint = x / w * 100;

        // Now let's find the pixel color by using the canvas
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        if (!context) return;
        canvas.width = w;
        canvas.height = h;
        const grad = context.createLinearGradient(0, 0, w, h);
        stops.forEach(h => grad.addColorStop(parseFloat(`${h.hint}`)/100, h.color));
        context.fillStyle = grad;
        context.fillRect(0, 0, canvas.width, canvas.height);
        canvas.style.background = 'black';
        const rgba = context.getImageData(x, y, 1, 1).data;
        const alpha = rgba[3] ? ((100 / 255 * rgba[3]) / 100).toFixed(2) : 0;
        const cl = `rgba(${rgba[0]}, ${rgba[1]}, ${rgba[2]}, ${alpha})`;
        const color = cl === 'rgba(0, 0, 0, 0)' ? '#000' : cl;
        upStops([
            ...stops,
            { color, hint }
        ]);
    };

    const removeStop = (stop: ColorStop) => {
        upStops(stops.filter(s => s !== stop))
    };

    const updateColor = (stop: ColorStop, value: string | null, partial?: boolean) => {
        value && (stop.color = value);
        upStops(stops, partial)
    };

    const isSelected = (stop: ColorStop) => {
        return select?.stop === stop;
    };

    return (
        <div className={clsMain}>
            { !!select?.stop && <div className="fixed inset-0 z-50 cursor-colr" /> }
            <div className="relative mb-6 mt-3">
                <div className={cx('bg-checker h-[30px]', br.rnd)}>
                    <div ref={prvRef}
                        className={cx('w-full h-full cursor-cross', br.b, br.rnd, cl.br)}
                        style={{ backgroundImage: getImage({ stops }) }}
                        onClick={clickPreview}
                    />
                </div>
                {stops.map((stop, i) => (
                    <div key={i} className="absolute top-0 h-full" style={{ left: `${stop.hint}%` }}>
                        <div className="cursor-pointer absolute translate-x-[-50%] top-[-14px]" onClick={() => removeStop(stop)}>
                            <Icon path={mdiClose} size={icon.s3x}/>
                        </div>
                        <div
                            onPointerDown={(ev) => selectStop(ev, stop)}
                            className={cx('h-full w-[4px] translate-x-[-50%] cursor-colr opacity-50 border-white', br.br, br.bl,  isSelected(stop) ? 'bg-white' : 'bg-black')}
                        />
                        <div className="cursor-pointer bottom-[-17px] left-[-7px] absolute">
                            <ColorPicker value={stop.color} onChange={(v, p) => updateColor(stop, v, p)} className="h-[15px] w-[15px] rounded-full border-2"/>
                        </div>
                    </div>
                ))}
            </div>
            <Grid space="s" items="center">
                <GridItem grow>
                    <SwitchField label="Repeat" value={isRepeating} onChange={upRepeat}/>
                </GridItem>
                <GridItem grow>
                    <SwitchField label="Radial" value={isRadial} onChange={upRadial}/>
                </GridItem>
            </Grid>
            {
                isRadial ?
                <Grid space="s" col>
                    <GridItem>
                        <Grid space="s" items="center">
                            <GridItem grow>
                                <NumberField pan="S" size="s" value={valueSize} onChange={upSize} valueUnit="px" units={['px']}/>
                            </GridItem>
                        </Grid>
                    </GridItem>
                    <GridItem>
                        <Grid space="s">
                            <GridItem grow>
                                <NumberField pan="X" size="s" value={posX} onChange={upPosX} valueUnit="%" units={['%']}/>
                            </GridItem>
                            <GridItem grow>
                                <NumberField pan="Y" size="s" value={posY} onChange={upPosY} valueUnit="%" units={['%']}/>
                            </GridItem>
                        </Grid>
                    </GridItem>
                </Grid>
                :
                <Grid space="s" items="center" nowrap>
                    <GridItem grow>
                        <NumberField pan="A" size="s" value={angle} onChange={upAngle} valueUnit="deg" units={['deg']}/>
                    </GridItem>
                </Grid>
            }
        </div>
    );
  }