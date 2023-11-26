import { RadioGroup } from '@headlessui/react'
import Grid from "../Grid";
import GridItem from "../GridItem";
import { pad,  br, cl } from '../theme';
import cx from '../../utils/makeCls';
import Tooltip from "../Tooltip";

export type Option = {
  id: string,
  label: React.ReactNode,
  title?: React.ReactNode,
};

export interface Props {
    className?: string;
    value: Option["id"];
    options: Option[];
    size?: 'm' | 's' | 'xs',
    onChange(value: Option["id"]): void;
};

export default function ButtonGroupField({
  className,
  options,
  value,
  size = 'm',
  onChange,
}: Props) {

    const isLast = (id: Option["id"]) => {
      const item = options.filter((opt) => opt.id === id)[0];
      return options.indexOf(item) === (options.length - 1);
    }

    const getItemCls = (checked: boolean, id: Option["id"] ) => cx(
      'cursor-pointer',
      size === 'm' && pad.xy,
      size === 's' && 'px-2 py-1.5',
      size === 'xs' && 'px-2 py-1',
      cl.br,
      checked && cl.bgO,
      !isLast(id) && br.br
    );

    return (
      <RadioGroup value={value} onChange={onChange} className="w-full">
        <Grid className={cx(className, br.b, br.rnd, cl.br, 'cursor-pointer')} items="center" full nowrap>
          {
            options.map(({ id, label, title }) => (
              <Tooltip title={title} key={id} className="w-full" classNameWrp="flex-1">
                  <RadioGroup.Option value={id} className={({ checked }) => getItemCls(checked, id)}>
                    <Grid justify="center" full>
                      <GridItem>{ label }</GridItem>
                    </Grid>
                  </RadioGroup.Option>
              </Tooltip>
            ))
          }
        </Grid>
      </RadioGroup>
    );
  }