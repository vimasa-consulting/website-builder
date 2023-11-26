import { useState, KeyboardEvent, useEffect } from "react";
import Grid from "../Grid";
import GridItem from "../GridItem";
import { pad, br, cl } from '../theme';
import cx from '../../utils/makeCls';
import { isDef } from '../../utils/types';
import ColorPicker from "../ColorPicker";
import LabelField from "../LabelField";

export interface Props {
    className?: string;
    value: string;
    placeholder?: string;
    label?: React.ReactNode;
    size?: 'm' | 's',
    onChange?(value: string | null, partial?: boolean): void;
};

const getValue = (value: string) => isDef(value) ? value : '';

export default function ColorField({
  className,
  value,
  label,
  size = 'm',
  placeholder,
  onChange,
}: Props) {
    const [stateValue, setStateValue] = useState(getValue(value));

    useEffect(() => {
      setStateValue(getValue(value));
    }, [value]);

    const handleChange = (value: string | null, partial?: boolean) => {
      onChange?.(value, partial);
    };

    const handleKeyDown = (ev: KeyboardEvent<HTMLInputElement>) => {
      switch( ev.key ) {
          case 'Escape':
              return setStateValue(value);
          case 'Enter':
              return handleChange(stateValue);
      }
    };

    const handleBlur = (ev: React.FocusEvent<HTMLInputElement>) => {
      handleChange(stateValue);
    }

    return (
      <div className={cx(className)}>
        { !!label && <LabelField size={size}>{ label }</LabelField>}
        <Grid className={cx(
          cl.bg, cl.br, br.b, br.rnd,
          size === 'm' && pad.xy,
          size === 's' && 'px-3 py-1',
          )} items="center" space="s">
          <GridItem>
              <ColorPicker value={value} onChange={onChange}/>
          </GridItem>
          <GridItem grow>
              <input
                className={cx('w-full focus:outline-none', cl.bgTr)}
                value={stateValue}
                onChange={ev => setStateValue(ev.target.value)}
                placeholder={placeholder}
                onBlur={handleBlur}
                onKeyDown={handleKeyDown}
              />
          </GridItem>
        </Grid>
      </div>
    );
  }