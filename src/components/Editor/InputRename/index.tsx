import { useRef, useState, FormEvent, KeyboardEvent, useEffect } from 'react';
import cx from '../../utils/makeCls';
import { cl } from '../theme';

export declare interface InputRenameProps {
    className?: string,
    value: string,
    onChange(value: string): void,
};

export default function InputRename({ className, value, onChange }: InputRenameProps) {
    const [val, setVal] = useState(value);
    const inputRef = useRef(null);

    const handleChange = (ev: FormEvent<HTMLInputElement>) => {
        const { value } = ev.target as HTMLInputElement;
        setVal(value);
    }

    const stop = () => {
        onChange(val || value);
    };

    const onKeyDown = (ev: KeyboardEvent) => {
        switch(ev.key) {
            case 'Escape':
                onChange(value);
                break;
            case 'Enter':
                onChange(val || value);
                break;
        }
    };

    useEffect(() => {
        if (inputRef.current) {
            const el = inputRef.current as HTMLInputElement;
            el.select();
        }
    }, []);


    return <input
            autoFocus
            className={cx([className, 'w-full', cl.bgTr])}
            value={val}
            onChange={handleChange}
            onBlur={stop}
            onKeyDown={onKeyDown}
            ref={inputRef}/>;
  }