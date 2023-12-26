import { Fragment, useEffect, useRef, useState } from "react";
import { Popover, Transition } from '@headlessui/react'
import Card from "../Card";
import cx from "../../utils/makeCls";
import { isDef } from "../../utils/types";
import { toolt } from "../theme";

export declare interface Props {
    children?: React.ReactNode,
    className?: string,
    classNameWrp?: string,
    title?: React.ReactNode,
    size?: 's' | 'm',
    inline?: boolean,
    onClick?: () => void,
};

export type PosOptions = {
  position?: { x?: string, y?: string },
  offset?: { x?: number, y?: number },
};

function scrollPosition() {
  const x = window.pageXOffset || document.documentElement.scrollLeft;
  const y = window.pageYOffset || document.documentElement.scrollTop;

  return { x, y };
}

function getViewportBounds() {
  const { x, y } = scrollPosition();

  return {
    left: x,
    right: x + window.innerWidth,
    top: y,
    bottom: y + window.innerHeight
  };
}

function getBounds(el: HTMLElement) {
  const bounds = el.getBoundingClientRect();
  const viewport = getViewportBounds();

  return {
    left: bounds.left + viewport.left,
    right: bounds.right + viewport.left,
    top: bounds.top + viewport.top,
    bottom: bounds.bottom + viewport.top,
    witdh: bounds.width,
    height: bounds.height,
  }
}

function getSize(el: HTMLElement) {
  return { width: el.offsetWidth, height: el.offsetHeight };
}

function calculatePositionValues(
  position: { x: string, y: string },
  anchorBounds: { left: number; right: number; top: number; bottom: number; },
  bodySize: { width: number; height: number; },
  opts: PosOptions = {}
) {
  const docbounds = getViewportBounds();
  const values: { top: number, left: number } = { top: 0, left: 0 };
  const offset = 5;
  const offsetX = opts?.offset?.x ?? offset;
  const offsetY = opts?.offset?.y ?? offset;
  const anchorWidth = anchorBounds.right - anchorBounds.left;
  const anchorHeight = anchorBounds.bottom - anchorBounds.top;

  if (position.y === "bottom") {
    values.top = anchorBounds.bottom + offsetY;
  } else if (position.y === "top-bottom") {
    values.top = anchorBounds.top + offsetY;
  } else if (position.y === "center") {
    const anchorCenter = anchorBounds.top + anchorHeight / 2;
    values.top = anchorCenter - bodySize.height / 2;
  } else {
    values.top = anchorBounds.top - bodySize.height - offsetY;
  }

  if (position.x === "left") {
    values.left = anchorBounds.right - bodySize.width - offsetX;
  } else if (position.x === "left-edge") {
    values.left = anchorBounds.right - bodySize.width - anchorWidth - offsetX;
  } else if (position.x === "center") {
    const anchorCenter = anchorBounds.left + anchorWidth / 2;
    values.left = anchorCenter - bodySize.width / 2;
  } else {
    values.left = anchorBounds.right + offsetX;
  }

  if (values.left + bodySize.width > docbounds.right) {
    values.left = docbounds.right - bodySize.width - offsetX;
  }

  if (values.left < docbounds.left) {
    values.left = docbounds.left;
  }

  if (values.top + bodySize.height > docbounds.bottom) {
    values.top = docbounds.bottom - bodySize.height - offsetY;
  }

  if (values.top < docbounds.top) {
    values.top = docbounds.top;
  }

  return values;
}

export function calculatePosition(anchorEl: HTMLElement, contentEl: HTMLElement, opts: PosOptions = {}) {
  const docbounds = getViewportBounds();
  const anchorBounds = getBounds(anchorEl);
  const contSize = getSize(contentEl);
  const position = {
    x: anchorBounds.right + contSize.width >= docbounds.right ? 'left' : 'right',
    y: anchorBounds.bottom + contSize.height >= docbounds.bottom ? 'top' : 'bottom',
    ...(opts.position || {})
  };
  if (
    (position.x === 'left' && (anchorBounds.right + (contSize.width / 2) <= docbounds.right)) ||
    (position.x === 'right' && (anchorBounds.right - (contSize.width / 2) >= 0))
  ) {
    if (!opts?.position?.x)
      position.x = 'center';
  }
  return calculatePositionValues(position, anchorBounds, contSize, opts);
}

export default function Tooltip({ className, classNameWrp, children, title, onClick, inline, size }: Props) {
    const refBtn = useRef(null);
    const refPanel = useRef(null);
    const [open, setOpen] = useState(false);
    const [pos, setPos] = useState({ top: 0, left: 0 });
    const hasSize = isDef(size);

    useEffect(() => {
      const refBtnEl = refBtn.current;
      const refPanelEl = refPanel.current;
      if (refBtnEl && refPanelEl && open) {
        const updatePos = () => setPos(calculatePosition(refBtnEl, refPanelEl));
        setTimeout(updatePos);
        window.addEventListener('scroll', updatePos, true);
        return () => window.removeEventListener('scroll', updatePos, true);
      }
    }, [refBtn, refPanel, open]);

    return (
      <Popover className={cx('tooltip relative', classNameWrp)}>
          <span
            ref={refBtn}
            className={cx(!inline && 'block', className, !onClick && 'cursor-auto')}
            onMouseEnter={() => title && setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
              <div
                className={cx(inline && 'inline-block')}
                onClick={() => { setOpen(false); onClick?.() }}
              >
                { children }
              </div>
          </span>
          <Transition
              as={Fragment}
              show={open}
              unmount={false}
              enter="transition ease-out duration-200" enterFrom="opacity-0" enterTo="opacity-100"
              leave="transition ease-in duration-150" leaveFrom="opacity-100" leaveTo="opacity-0"
            >
              <Popover.Panel
                className={cx(
                  'fixed z-30 text-sm', // left-1/2	transform-gpu translate-y-1.5 -translate-x-1/2
                  !hasSize && 'whitespace-nowrap'
                )}
                style={pos}
                static
              >
                <Card ref={refPanel} className={toolt.txt} bg={toolt.bg} size="xs" border={false}>
                  { title }
                </Card>
              </Popover.Panel>
        </Transition>
      </Popover>
    );
  }