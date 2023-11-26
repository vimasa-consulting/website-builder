import { Listbox, Transition } from '@headlessui/react';
import { Fragment, useState, KeyboardEvent, useRef } from "react";
import Icon from '@mdi/react';
import { mdiChevronDown, mdiCheck } from '@mdi/js';
import Grid from "../Grid";
import GridItem from "../GridItem";
import { ts, pad, pop, br, icon, cl, ring } from '../theme';
import Card, { Props as CardProps } from "../Card";
import { stop } from '../../utils/dom';
import cx from '../../utils/makeCls';
import { calculatePosition } from '../Tooltip';
import LabelField from '../LabelField';
import { usePopper } from 'react-popper';
import type PopperJS from '@popperjs/core';

export type OptionId = any;

export type Option = {
  id: OptionId,
  label: string,
}

export type SearchOptions = {
  empty: React.ReactNode,
}

export interface Props {
    handlerSelected?(o: Option): React.ReactNode,
    handlerOption?(o: Option): React.ReactNode,
    className?: string,
    label?: React.ReactNode,
    options: Option[],
    emptyState?: string,
    includeEmpty?: boolean,
    search?: boolean | SearchOptions,
    fixed?: boolean,
    open?: boolean,
    size?: CardProps["size"],
    border?: CardProps["border"],
    value: OptionId,
    caret?: string,
    width?: string,
    pos?: 'top' | 'right' | 'bottom' | 'left',
    onChange(value: OptionId): void,
    onBlur?(): void,
};

const getById = (options: Option[], id: OptionId): Option | null => {
  return options.filter(o => o.id === id)[0] || null;
}

const isSelected = (option: Option, selected?: Option | null) => option?.id === selected?.id;

const isMatch = (opt: Option, value: string) => {
  return opt.label.toLowerCase().indexOf(value.toLowerCase()) >= 0
};

const getPosValues = (open: boolean, refBtnEl: HTMLElement | null, refPanelEl: HTMLElement | null ) => {
  const { innerHeight } = window;
  const style = open && refBtnEl && refPanelEl ?
    calculatePosition(refBtnEl, refPanelEl, { position: { y: 'bottom' } }) : {};
  return {
    ...style,
    minWidth: refBtnEl?.offsetWidth || 0,
    ...(refPanelEl && (refPanelEl.scrollHeight > innerHeight) ? { height: innerHeight } : {})
  };
}

export const optionsClassName = cx(
  'cursor-default select-none focus:outline-none',
  'z-20 max-h-full',
);

export const selectPopperOptions: Partial<PopperJS.Options> = {
  strategy: 'fixed',
  placement: 'bottom',
  modifiers: [
    {
      name: 'offset',
      options: { offset: [0, 5]},
    },
    {
      name: 'flip',
      options: { fallbackPlacements: ['top'] },
    },
  ],
};

export function SelectFieldItem(props: { option: Option, active?: boolean, selected?: Option, isSelected?: () => boolean }) {
  const { option, active, selected } = props;
  const isSelectedAdd = props.isSelected?.() || true;

  return (
    <Grid items="center" className={cx([pad.xy, active && pop.bgH])}>
      <GridItem className="truncate" grow>{option.label}</GridItem>
      <GridItem className="pl-2">
        { isSelected(option, selected) && isSelectedAdd && <Icon className={cl.tA} path={mdiCheck} size={icon.s}/> }
      </GridItem>
    </Grid>
  )
}

export default function SelectField({
  value,
  onChange,
  onBlur,
  handlerSelected,
  label,
  options,
  includeEmpty,
  className,
  search,
  fixed,
  open,
  caret = mdiChevronDown,
  size = 'm',
  width = '',
  border,
  pos,
  emptyState = '- Select an option -',
}: Props) {
    const [refButton, setRefButton] = useState<HTMLElement | null>(null);
    const [refOptions, setRefOptions] = useState<any>(null);
    const [searchValue, setSearchValue] = useState('');
    const { styles, attributes } = usePopper(refButton, refOptions, selectPopperOptions);
    const opts = [ ...options ].filter(opt => search ? isMatch(opt, searchValue) : opt);
    const hasSearch = search && searchValue;
    const selected = (hasSearch && opts.length) ? opts[0] : getById(opts, value);
    const handleChange = (value: Option) => onChange(value.id);
    const emptyOption = { id: null, label: emptyState };
    const selectedValue = selected ?
      (handlerSelected ? handlerSelected(selected) : selected.label) :
      (handlerSelected ? handlerSelected(emptyOption) : emptyState);
    includeEmpty && opts.unshift(emptyOption);

    const onKeyDown = (ev: KeyboardEvent<HTMLInputElement>) => {
      const { value } = ev.target as HTMLInputElement;
      const val = value.trim();
      switch( ev.key ) {
          case 'Escape':
              onChange(null);
              break;
          case 'Enter':
              onChange((opts.length ? opts[0].id : val) || null);
              break;
          case ' ':
              stop(ev);
              break;
      }
    };
    const clsButton = cx('w-full text-left cursor-pointer', br.rnd, ring.focus);

    const handleBlur = () => {
      onBlur?.();
    }

    return (
      <Listbox value={selected} onChange={handleChange}>
        {({ open: isOpen }) => {
          return (
            <div className="relative w-full text-sm">
              {
                label &&
                <Listbox.Label>
                  <LabelField as="span" size={size}>{ label }</LabelField>
                </Listbox.Label>
              }
              <Listbox.Button ref={setRefButton} className={clsButton}>
                {
                  search ?
                  <input autoFocus
                    value={searchValue}
                    className={cx(['w-full', br.rnd, ring.focus, pad.xyS])}
                    onChange={ev => setSearchValue(ev.target.value)}
                    onKeyDown={onKeyDown}
                    onClick={stop}
                    onBlur={handleBlur}
                  />
                  :
                  <Card border={border} size={size} title={selectedValue} icon={caret} shadow={false} className={className} titleClass=""/>
                }
              </Listbox.Button>
              {/* { <div className={'opacity-30 w-full h-full fixed inset-0 z-40 bg-black'}/> } */}
              {/* <Transition show={isOpen} as={Fragment} {...ts}> */}
                {/* <Listbox.Options static={open} className={clsOptions} style={getPosValues(isOpen, refBtn.current, refPanel.current)}> */}
                <Listbox.Options static={open} className={optionsClassName} ref={setRefOptions} style={styles.popper} {...attributes.popper}>
                  <Card padding={false} className="h-full" style={{ minWidth: `${refButton?.offsetWidth}px`, maxHeight: 200 }}>
                    {
                      !opts.length && search && search !== true &&
                      <div className={pad.xy}>
                        { search.empty }
                      </div>
                    }
                    {opts.map((option, index) => (
                      <Listbox.Option key={index} value={option}>
                        {({ active, selected: sel }) => (
                          <Grid items="center" className={cx([pad.xy, active && pop.bgH])}>
                            <GridItem className="truncate" grow>{option.label}</GridItem>
                            <GridItem className="pl-2">
                              { isSelected(option, selected) && !hasSearch && <Icon className={cl.tA} path={mdiCheck} size={icon.s}/> }
                            </GridItem>
                          </Grid>
                        )}
                      </Listbox.Option>
                    ))}
                  </Card>
                </Listbox.Options>
              {/* </Transition> */}
            </div>
          )
        }}
      </Listbox>
    );
  }