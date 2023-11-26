import { br, cl, icon } from '../theme';
import cx from '../../utils/makeCls';
import Popover from "../Popover";
import Grid from '../Grid';
import GridItem from '../GridItem';
import Tooltip from '../Tooltip';
import Button from '../Button';
import Icon from '@mdi/react';
import { mdiPlus } from '@mdi/js';
import StackItem from './StackItem';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import { SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { restrictToVerticalAxis, restrictToFirstScrollableAncestor } from '@dnd-kit/modifiers';
import LabelField from '../LabelField';

export interface Props<T> {
    className?: string;
    items: T[];
    selected: T | null;
    renderItem: (item: T) => React.ReactNode,
    select?: (item: T) => void,
    add?: () => void,
    remove?: (item: T) => void,
    move?: (item: T, index: number) => void,
    reset?: (items: T[]) => void,
    previewStyle?: (items: T) => Record<string, string>,
    label?: React.ReactNode,
    children?: React.ReactNode,
    title?: React.ReactNode,
    titleAdd?: React.ReactNode,
};

const pos = {
  position: { x: 'left-edge', y: 'top-bottom' },
  offset: { x: 7, y: 0 },
};

const getItemId = (item: any) => {
  return item.cid ?? item.id;
}

export default function StackField({
  className,
  items,
  selected,
  children,
  title,
  titleAdd,
  label,
  select,
  add,
  move,
  reset,
  remove,
  renderItem,
  previewStyle,
}: Props<any>) {
    const sensors = useSensors(
      useSensor(PointerSensor),
      useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
    );
    function handleDragEnd(event: DragEndEvent) {
      const {active, over} = event;
      if (active.id !== over?.id) {
        const item = items.find(i => getItemId(i) === active.id);
        const newIndex = items.findIndex(i => getItemId(i) === over?.id);
        item && move?.(item, newIndex);
      }
    }

    const clsItems = cx(
      br.rnd,
      cl.br,
      items.length && br.b,
      items.length && 'mt-1',
    );

    return (
      <div className={cx(className, 'w-full')}>
        {
          !!(label || add) &&
          <Grid items="center">
            <GridItem grow>
              <LabelField size="s">{ label }</LabelField>
            </GridItem>
            {
              !!add &&
              <GridItem>
                <Tooltip title={titleAdd} inline>
                    <Button onClick={add}>
                        <Icon path={mdiPlus} size={icon.s}/>
                    </Button>
                </Tooltip>
              </GridItem>
            }
          </Grid>
        }
        <Popover
          pos={pos}
          size="s"
          buttonAs="div"
          title={title}
          open={!!selected}
          onClose={() => select?.(null)}
          handler={(
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
              modifiers={[restrictToVerticalAxis, restrictToFirstScrollableAncestor]}
            >
              <SortableContext items={items.map(getItemId)} strategy={verticalListSortingStrategy}>
                <div className={clsItems}>
                  {items.map((item: any, i: number) => {
                    const id = getItemId(item);
                    const isSelected = item === selected;
                    const clsRow = cx('px-2 py-2 text-xs', cl.br, i && br.bt, !isSelected && cl.hBgH2, isSelected && cl.bgH);

                    return (
                      <StackItem key={id} id={id} item={item} className={clsRow} select={select} remove={remove} renderItem={renderItem} previewStyle={previewStyle}/>
                    )
                  })}
                </div>
              </SortableContext>
            </DndContext>
          )}
        >
          { children }
        </Popover>
      </div>
    );
  }