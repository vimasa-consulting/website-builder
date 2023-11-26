import { Switch } from '@headlessui/react'
import Grid from "../Grid";
import cx from '../../utils/makeCls';
import LabelField from '../LabelField';
import { ring, cl } from '../theme';

export interface Props {
    className?: string;
    value: boolean;
    placeholder?: string;
    label?: React.ReactNode;
    size?: 'm' | 's',
    onChange(checked: boolean): void;
};

export default function SwitchField({
  className,
  value,
  label,
  size = 'm',
  onChange,
}: Props) {
    const checked = !!value;
    return (
        <Switch.Group>
          <Grid full items="center">
            <Switch.Label className="mr-4 flex-1" passive>
              <LabelField as="span" size={size} m="">{ label }</LabelField>
            </Switch.Label>
            <Switch
              checked={checked}
              onChange={onChange}
              className={`${
                checked ? cl.bgA : cl.bgH
              } relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none ${ring.focus}`}
            >
              <span
                className={cx(
                  cl.bg,
                  'inline-block w-4 h-4 transform rounded-full transition-transform',
                  checked ? 'translate-x-6' : 'translate-x-1',
                )}
              />
            </Switch>
          </Grid>
        </Switch.Group>
    );
  }