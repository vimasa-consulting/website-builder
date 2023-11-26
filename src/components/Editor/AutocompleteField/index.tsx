import { Combobox } from '@headlessui/react';
import Icon from '@mdi/react';
import { useState } from 'react';
import { usePopper } from 'react-popper';
import { isFunction } from '../../utils';
import cx from '../../utils/makeCls';
import Card from '../Card';
import { getInputClassName, InputFieldProps } from '../InputField';
import InputFieldWrapper, { InputFieldWrapperProps } from '../InputField/InputFieldWrapper';
import LabelField from '../LabelField';
import { Option, optionsClassName, SelectFieldItem, selectPopperOptions } from '../SelectField';
import { icon, pad } from '../theme';
import { mdiChevronDown } from '@mdi/js';
import Grid from '../Grid';

export interface AutocompleteFieldProps {
    options: Option[],
    onChange(option: Option): void;
    onBlur?(): void,
    value?: Option,
    name?: string,
    placeholder?: string,
    border?: InputFieldWrapperProps['border'],
    size?: InputFieldProps["size"],
    className?: string;
    allowNew?: string | ((s: string) => string);
    autoFocus?: boolean;
    open?: boolean;
    hideCaret?: boolean;
    label?: React.ReactNode;
};

export default function AutocompleteField({
  className,
  options,
  value,
  name,
  label,
  border,
  hideCaret,
  size = 's',
  autoFocus,
  open,
  allowNew,
  onChange,
  onBlur,
  placeholder,
}: AutocompleteFieldProps) {
  const [refButton, setRefButton] = useState<HTMLElement | null>(null);
  const [refOptions, setRefOptions] = useState<any>(null);
  const { styles, attributes } = usePopper(refButton, refOptions, selectPopperOptions);
  const [query, setQuery] = useState('');
  const inputCls = getInputClassName();
  const filteredOptions = query === '' ? options : options.filter((option) => {
    return option.label.toLowerCase().includes(query.toLowerCase())
  });

  const onInputChange = (event:  React.ChangeEvent<HTMLInputElement>) => setQuery(event.target.value);
  const displayValue = (option: Option) => option?.label;
  const canShowNewOption = allowNew && query.length > 0 && !filteredOptions.some(opt => opt.label === query);
  const newOptionLabel = isFunction(allowNew) ? allowNew(query) : allowNew!;
  const cardOptionsStyle = {
    minWidth: `${refButton?.offsetWidth}px`,
    maxHeight: 200
  };

  const handleBlur = () => onBlur?.();

  return (
    <div className={cx('w-full', className)}>
      { !!label && <LabelField size={size}>{ label }</LabelField>}
      <Combobox value={value} onChange={onChange} name={name} nullable>
        <InputFieldWrapper
          size={size}
          ref={setRefButton}
          border={border}
        >
          <Grid nowrap>
            <Combobox.Input
              autoFocus={autoFocus}
              className={inputCls}
              displayValue={displayValue}
              onChange={onInputChange}
              onBlur={handleBlur}
              placeholder={placeholder}
            />
            {
              !hideCaret &&
              <Combobox.Button>
                  <Icon path={mdiChevronDown} size={icon.sx}/>
              </Combobox.Button>
            }
          </Grid>
        </InputFieldWrapper>
        <Combobox.Options static={open} className={optionsClassName} ref={setRefOptions} style={styles.popper} {...attributes.popper}>
          <Card className="h-full" padding={false} style={cardOptionsStyle}>
            {canShowNewOption && (
              <Combobox.Option value={{ id: null, label: query }}>
                {({ active }) => <SelectFieldItem option={{ id: null, label: newOptionLabel }} active={active} selected={value}/>}
              </Combobox.Option>
            )}
            {
              !canShowNewOption && filteredOptions.length === 0 &&
              <div className={pad.xy}>No items found</div>
            }
            {filteredOptions.map((option) => (
              <Combobox.Option key={option.id} value={option}>
                {({ active }) => <SelectFieldItem option={option} active={active} selected={value}/>}
              </Combobox.Option>
            ))}
          </Card>
        </Combobox.Options>
      </Combobox>
    </div>
  );
  }