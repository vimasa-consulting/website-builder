import { mdiClose, mdiDotsVertical } from '@mdi/js';
import Icon from '@mdi/react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { fx, br, icon } from '../theme';
import { stop } from '../../utils/dom';
import cx from '../../utils/makeCls';
import Grid from '../Grid';
import GridItem from '../GridItem';

export default function StackItem(props: any) {
  const { id, item, className, select, remove, renderItem, previewStyle } = props;
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const onSelect = () => select?.(item);

  return (
    <div ref={setNodeRef} style={style} {...attributes}>
      <Grid space="s" key={item.getIndex ? item.getIndex() : (item.id || item.cid)} onClick={onSelect} className={className} items="center" nowrap>
        <GridItem className={cx(fx.hover, 'cursor-grab')} {...listeners}>
            <Icon path={mdiDotsVertical} size={icon.sx}/>
        </GridItem>
        <GridItem grow>
          <Grid>
            <GridItem grow>
              { renderItem(item) }
            </GridItem>
            {
              !!previewStyle &&
              <GridItem>
                <div className={cx('w-[15px] h-[15px] bg-white', br.b, br.rnd)} style={previewStyle(item)}/>
              </GridItem>
            }
          </Grid>
        </GridItem>
        <GridItem className={cx(fx.click)} onClick={(ev) => { stop(ev); remove?.(item) }}>
            <Icon path={mdiClose} size={icon.sx}/>
        </GridItem>
      </Grid>
    </div>
  );
}