import { mdiEyedropperVariant } from '@mdi/js';
import Icon from '@mdi/react';
import { colord, extend } from "colord";
import namesPlugin from "colord/plugins/names";
import { RgbaStringColorPicker } from "react-colorful";
import { useI18nStore } from '../../store/I18nStore';
import cx from '../../utils/makeCls';
import ButtonWithTooltip from '../Button/ButtonWithTooltip';
import Grid from '../Grid';
import GridItem from '../GridItem';
import InputField from '../InputField';
import Popover from '../Popover';
import { br, cl, icon } from '../theme';

extend([namesPlugin]);

export interface Props {
    className?: string;
    value: string;
    format?: 'hex' | 'rgba' | 'hsl' | 'hsb',
    onChange?(value: string | null, partial?: boolean): void;
};

const bgSize = { backgroundSize: '10px' };
const pos = {
    position: { x: 'left' },
    offset: { x: 40, y: -30 },
};

const getColor = (value: string) => {
    return value.startsWith('rgba') ? value : colord(value).toRgbString();
}

export default function ColorPicker({
  className,
  value,
  format = 'rgba',
  onChange,
}: Props) {
    const localValue = getColor(value);
    const i18nStore = useI18nStore();
    const hasEyeDropper = !!(window as any).EyeDropper;
    // Issues with useEffect
    // const [localValue, setLocalValue] = useState(getColor(value));
    // useEffect(() => {
    //     const newValue = getColor(value);
    //     setLocalValue(newValue);
    // }, [value]);

    const clsMain = cx(
        'bg-checker overflow-hidden cursor-pointer',
        className, br.b, br.rnd, cl.br
    );

    const handler = (
        <div style={bgSize} className={clsMain}>
            <div className={cx('w-[15px] h-[15px]')} style={{ backgroundColor: value }}/>
        </div>
    );

    const handleChange = (value: string) => {
        onChange?.(value, true);
    }

    const openEyeDropper = () => {
        if (hasEyeDropper) {
            // @ts-ignore
            const eyeDropper = new EyeDropper();
            eyeDropper.open().then((result: any) => handleChange(result.sRGBHex))
        }
    }

    return (
        <Popover handler={handler}  title="Color" size="s" pos={pos} static clickAway>
            <RgbaStringColorPicker
                className="color-picker"
                color={localValue}
                onChange={handleChange}
                onPointerUp={() => onChange?.(localValue, false)}
            />
            <Grid className="mt-3" space="s">
                <GridItem grow>
                    <InputField size="s" value={localValue} onChange={handleChange}/>
                </GridItem>
                <ButtonWithTooltip
                    onClick={openEyeDropper}
                    disabled={!hasEyeDropper}
                    title={i18nStore.t(`${hasEyeDropper ? 'eyeDropper' : 'noEyeDropper' }`)}
                >
                    <Icon path={mdiEyedropperVariant} size={icon.s}/>
                </ButtonWithTooltip>
            </Grid>
        </Popover>
    );
  }