import { Transition } from '@headlessui/react';
import type { Coordinates } from 'grapesjs';
import { observer } from 'mobx-react-lite';
import { useEffect, useMemo, useState } from 'react';
import { usePointerBadgeStore } from '../../store/PointerBadgeStore';
import { cx } from '../../utils/makeCls';
import Badge from '../Badge';
import { cl, tsOpac } from '../theme';

const offset = 15;

export default observer(function PointerBadge() {
    const { isActive, content } = usePointerBadgeStore();
    const [coords, setCoords] = useState<Coordinates>({ x: 0, y: 0 });

    useEffect(() => {
      const onPointer = (ev: PointerEvent) => {
        setCoords({ x: ev.clientX, y: Math.max(0, ev.clientY) });
      };

      isActive && window.addEventListener('pointermove', onPointer)

      return () => {
        window.removeEventListener('pointermove', onPointer);
      }

    }, [isActive]);

    const style = useMemo(() => ({
      transform: `translate(${coords.x + offset}px, ${coords.y + offset}px)`,
    }), [coords]);

    return (
      <Transition show={isActive} {...tsOpac}>
        <div className="fixed top-0 left-0 pointer-badge pointer-events-none z-10" style={style}>
          <Badge
            className={cx('px-4 py-2', cl.bgBlur, cl.txtHighEmphasis)}
            pill border nopad
          >
            { content }
          </Badge>
        </div>
      </Transition>
    )
});