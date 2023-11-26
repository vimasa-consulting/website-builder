import { useState, useEffect } from 'react';
import InputRename from '.';
import cx from '../../utils/makeCls';
import { fx } from '../theme';

export interface RenamableProps extends Omit<React.HTMLProps<HTMLDivElement>, 'onChange'> {
    value: string,
    active?: boolean,
    activable?: boolean,
    unstyled?: boolean,
    onActive?(value: boolean): void,
    onChange(value: string): void,
};

export default function Renamable({ className, value, active, unstyled, activable, onChange, onActive, ...rest }: RenamableProps) {
    const [isActive, setIsActive] = useState(active);

    useEffect(() => {
        setIsActive(active)
    }, [active]);

    const handleActive = (value: boolean) => {
        onActive?.(value);
        setIsActive(value);
    }

    const handleChange = (value: string) => {
        onChange(value);
        handleActive(false);
    };

    return (
        <div className={cx('truncate', className)} {...rest} onDoubleClick={() => activable && handleActive(true)}>
            { isActive ? <InputRename className={cx(unstyled && fx.noFocusOut)} value={value} onChange={handleChange}/> : <>{ value }</> }
        </div>
    )
  }