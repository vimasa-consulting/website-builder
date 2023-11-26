import { useState, KeyboardEvent, useEffect } from "react";
import Grid from "../Grid";
import GridItem from "../GridItem";
import { pad, br, icon, cl, elStyles } from '../theme';
import cx from '../../utils/makeCls';
import { isDef } from '../../utils/types';
import SelectField from "../SelectField";
import Icon from '@mdi/react';
import { mdiPanVertical } from '@mdi/js'; // alt pan: mdiArrowUpDown | mdiUnfoldMoreHorizontal
import { panNumberValue } from "./utils";
import LabelField from "../LabelField";

// export type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
export interface Props {
    className?: string;
    value: string;
    valueUnit?: string;
    units?: string[];
    placeholder?: string;
    pan?: React.ReactNode | boolean,
    label?: React.ReactNode;
    size?: 'm' | 's',
    onChange?(value: string | null, partial?: boolean): void;
    onChangeUnit?(value: string | null): void;
};

type NumericProp = string | number;

export type ValueUpDown = (props: {
  value: string;
  key: string;
  shiftKey?: boolean;
  min?: NumericProp;
  max?: NumericProp;
  step?: NumericProp;
}) => string | null;

export type MinMaxValue = (props: {
  min?: NumericProp;
  max?: NumericProp;
  value: NumericProp;
}) => string;

const getValue = (value: string) => isDef(value) ? value : '';

export const getMinMaxValue: MinMaxValue = ({ min, max, value }) => {
  const nValue = parseFloat(`${value}`);
  let newValue = nValue || 0;

  if (typeof min !== 'undefined') {
    newValue = Math.max(newValue, parseFloat(`${min}`) || 0);
  }

  if (typeof max !== 'undefined') {
    newValue = Math.min(newValue, parseFloat(`${max}`) || 0);
  }

  return `${`${nValue}` !== `${value}` ? value : newValue}`;
};

export const getValueUpDown: ValueUpDown = ({ value, key, shiftKey, min, max, step = 1 }) => {
  const isUp = key === 'ArrowUp';
  const isDown = key === 'ArrowDown';
  let newValue = null;

  if (isUp || isDown) {
    newValue = Number(value);
    if (isUp) newValue += (shiftKey ? 10 : 1) * parseFloat(`${step}`);
    if (isDown) newValue -= (shiftKey ? 10 : 1) * parseFloat(`${step}`);
    newValue = `${getMinMaxValue({ min, max, value: newValue })}`;
  }

  return newValue;
};

export default function NumberField({
  className,
  value,
  units,
  valueUnit,
  label,
  size = 'm',
  pan = true,
  placeholder,
  onChange,
  onChangeUnit,
}: Props) {
    const [stateValue, setStateValue] = useState(getValue(value));
    const [panOverlay, setPanOverlay] = useState(false);
    const unitsOpts = units?.map(id => ({ id, label: id })) || [];

    useEffect(() => {
      setStateValue(getValue(value));
    }, [value, valueUnit]);

    const handleChange = (value: string | null, partial?: boolean) => {
      onChange?.(value, partial);
    };
    // const onInputChange: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
    //   const input = evt.target.value;
    //   const { value, unit } = getValueUnit({ min, max, input, units });
    //   unit !== null && onChangeUnit?.(unit);
    //   onChange?.(value);
    // };

    const onLabelMouseDown: React.MouseEventHandler<HTMLDivElement> = (evt) => {
        // const scrubOpts: any = {};
        // if (props.min || props.min === 0) scrubOpts.min = parseInt(`${props.min}`);
        // if (props.max || props.max === 0) scrubOpts.max = parseInt(`${props.max}`);
        // if (props.step) scrubOpts.step = parseFloat(`${props.step}`);
        setPanOverlay(true);
        const update = (value: string, partial?: boolean) => {
          handleChange(value, !!partial);
          !partial && setPanOverlay(false);
        };
        panNumberValue( stateValue, evt.clientY, update, {});
    };

    const handleKeyDown = (ev: KeyboardEvent<HTMLInputElement>) => {
      const { key, shiftKey } = ev;

      switch( key ) {
          case 'Escape':
              return setStateValue(value);
          case 'Enter':
              return handleChange(stateValue);
      }

      const newValue = getValueUpDown({ value, key, shiftKey, /* min, max, step*/ });

      if (newValue !== null) {
        ev.preventDefault();
        handleChange(newValue);
      }
    };

    const handleBlur = (ev: React.FocusEvent<HTMLInputElement>) => {
      handleChange(stateValue);
    }

    // focus:outline-none focus-visible:ring-2 ring-white ring-opacity-75 focus-visible:ring-offset-2 ring-offset-orange-300 focus-visible:border-red-500

    return (
      <div className={cx(className)}>
        { panOverlay && <div className="fixed inset-0 z-50 cursor-ns" /> }
        { !!label && <LabelField size={size}>{ label }</LabelField>}
        <Grid className={cx(
          cl.bg, cl.br, br.b, br.rnd,
          size === 'm' && pad.xy,
          size === 's' && 'px-3 py-1',
          )} items="center" space="x2s">
          {
            !!pan &&
            <GridItem onMouseDown={onLabelMouseDown} className={cx(
              'opacity-50 cursor-ns',
              size === 'm' && '-ml-3',
              size === 's' && '-ml-2',
              pan !== true && 'mr-0.5 -ml-1',
            )}>
              { pan === true ? <Icon path={mdiPanVertical} size={icon.s2x}/> : pan }
            </GridItem>
          }
          <GridItem grow>
              <input
                className={cx('w-full', cl.bgTr, elStyles.inputText)}
                value={stateValue}
                onChange={ev => setStateValue(ev.target.value)}
                placeholder={placeholder}
                onBlur={handleBlur}
                onKeyDown={handleKeyDown}
              />
          </GridItem>
          {
            !!unitsOpts.length &&
            <GridItem className={cx(unitsOpts.length === 1 && 'opacity-50 pointer-events-none')}>
              <SelectField
                caret=""
                size="x2s"
                pos="right"
                width="75px"
                emptyState="-"
                border={false}
                value={valueUnit}
                onChange={value => onChangeUnit?.(value)} options={unitsOpts}
              />
            </GridItem>
          }
        </Grid>
      </div>
    );
  }