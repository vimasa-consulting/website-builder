import React from 'react';
import { cx } from '../../utils/makeCls';
import GlobalModal from '../Modal/GlobalModal';
import PointerBadge from '../PointerBadge';
import GlobalToasts from '../Toast/GlobalToasts';
import { cl } from '../theme';

export declare interface AppWrapperProps extends React.HTMLProps<HTMLDivElement> {}

export default function AppWrapper({ children }: AppWrapperProps) {
  return (
    <div className={cx('h-screen text-base', cl.txt)}>
        { children }
        <GlobalToasts/>
        <GlobalModal/>
        <PointerBadge/>
    </div>
  );
};
