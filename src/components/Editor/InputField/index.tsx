import { useState, KeyboardEvent, useEffect } from "react";
import Grid from "../Grid";
import GridItem from "../GridItem";
import { pad, br, cl, elStyles } from '../theme';
import cx from '../../utils/makeCls';
import { isDef } from '../../utils/types';
import LabelField from "../LabelField";

export interface InputFieldProps {
    className?: string;
    value: string;
    placeholder?: string;
    required?: boolean;
    label?: React.ReactNode;
    size?: 'm' | 's',
    type?: string,
    onInput?(value: string): void;
    onChange?(value: string, partial?: boolean): void;
};

const getValue = (value: string) => isDef(value) ? value : '';

export const getInputClassName = () => {
  return cx('w-full placeholder:italic', cl.bgTr, elStyles.inputText);
}

export default function InputField({
  className,
  value,
  label,
  size = 'm',
  type,
  placeholder,
  required,
  onInput,
  onChange,
}: InputFieldProps) {
    const [stateValue, setStateValue] = useState(getValue(value));
    const classInput = getInputClassName();

    useEffect(() => {
      setStateValue(getValue(value));
    }, [value]);

    useEffect(() => {
      onInput?.(stateValue);
    }, [stateValue]);

    const handleChange = (value: string, partial?: boolean) => {
      onChange?.(value, partial);
    };

    const handleKeyDown = (ev: KeyboardEvent<HTMLInputElement>) => {
      const { key } = ev;

      switch( key ) {
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
            cl.bg, br.b, br.rnd,
            cl.br,
            size === 'm' && pad.xy,
            size === 's' && 'px-3 py-1',
          )} items="center" space="x2s">
          <GridItem grow>
              <input
                className={classInput}
                value={stateValue}
                onChange={ev => setStateValue(ev.target.value)}
                placeholder={placeholder}
                required={required}
                onBlur={handleBlur}
                onKeyDown={handleKeyDown}
                type={type}
              />
          </GridItem>
        </Grid>
      </div>
    );
  }