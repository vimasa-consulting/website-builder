import { Popover as PO, Transition } from '@headlessui/react';
import { ElementType, Fragment, useEffect, useRef, useState } from "react";
import { stop } from '../../utils/dom';
import cx from '../../utils/makeCls';
import { isDef } from '../../utils/types';
import Card from "../Card";
import { calculatePosition, PosOptions } from '../Tooltip';
import { useClickOutside } from '../../utils/hooks';

export type RenderProps = {
   close(): void,
};

export interface PopoverProps {
    handler?: React.ReactNode,
    children?: React.ReactNode | ((props: RenderProps) => void),
    title?: React.ReactNode,
    className?: string,
    static?: boolean,
    clickAway?: boolean,
    fixed?: boolean,
    padding?: boolean,
    overlay?: boolean,
    pos?: PosOptions,
    canOpen?: () => boolean,
    open?: boolean,
    onClose?: () => void,
    size?: 's' | 'sm' | 'md',
    topIcon?: boolean,
    buttonAs?: ElementType<any>,
};

export default function Popover({ children, handler, title, fixed, size, padding = true, overlay, clickAway, topIcon, pos, open: isOpen, onClose, buttonAs, className, ...props }: PopoverProps) {
    const refBtn = useRef(null);
    const refPanel = useRef(null);
    const [open, setOpen] = useState(!!isOpen);
    const [posit, setPos] = useState({ top: 0, left: 0 });

    const close = () => {
      setOpen(false);
      onClose?.();
    };

    useClickOutside(refPanel, {
      onTrigger: close,
      enabled: clickAway && open,
    });

    useEffect(() => {
      setOpen(!!isOpen);
    }, [isOpen]);

    useEffect(() => {
      const refBtnEl = refBtn.current;
      const refPanelEl = refPanel.current;
      if (refBtnEl && refPanelEl) {
        if (open) {
          const updatePos = () => setPos(calculatePosition(refBtnEl, refPanelEl, pos));
          setTimeout(updatePos);
        }
      }
    }, [refBtn, refPanel, open]); // eslint-disable-line
    /*
    {
                  !open ? null : (typeof children === 'function' ? children({ close }) : children)
                }
    */
    return (
      <PO className={cx('popover relative flex', className)}>
        <PO.Button ref={refBtn} as={buttonAs} className="w-full">
          <div onClick={() => !isDef(isOpen) && setOpen(!open)}>{ handler }</div>
        </PO.Button>
        { open && overlay && <div onClick={close} className="z-10 fixed inset-0"/> }
        <Transition
              as={Fragment}
              show={open}
              unmount={false}
              enter="transition ease-out duration-200" enterFrom="opacity-0 translate-y-1" enterTo="opacity-100"
              leave="transition ease-in duration-150" leaveFrom="opacity-100" leaveTo="opacity-0 translate-y-1"
            >
            <PO.Panel
              className={cx([
                'fixed z-20',
                topIcon && 'mt-5',
                size === 's' && 'w-full max-w-[240px]',
                size === 'sm' && 'w-full max-w-sm',
                size === 'md' && 'w-full max-w-md',
              ])}
              onClick={stop}
              style={posit}
              static
            >              
              <Card ref={refPanel} title={title} onClose={close} padding={padding}>
                
              </Card>
            </PO.Panel>
        </Transition>
    </PO>
    );
  }