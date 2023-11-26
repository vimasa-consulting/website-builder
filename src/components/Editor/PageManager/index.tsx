import { PagesResultProps } from '@grapesjs/react';
import { mdiDotsVertical, mdiPlus, mdiTextBoxMultiple } from '@mdi/js';
import Icon from '@mdi/react';
import type { Page } from 'grapesjs';
import { MouseEvent, useState } from 'react';
import { prevent, stop } from '../../utils/dom';
import cx from '../../utils/makeCls';
import Accordion from '../Accordion';
import Grid from "../Grid";
import GridItem from "../GridItem";
import InputRename from '../InputRename';
import { MenuItem } from '../MenuList';
import Popover from '../Popover';
import Resizable from '../Resizable';
import { br, cl, icon, pad } from '../theme';

const posActions = {
    position: { x: 'right', y: 'top-bottom' },
    offset: { y: 0 },
  };

export default function PageManager({ pages, selected, select, add, remove }: PagesResultProps) {
    const [rename, setRename] = useState<Page>();

    const addPage = (ev: MouseEvent<HTMLDivElement>) => {
        stop(ev);
        const num = pages.length + 1;
        const page = add({
            name: `Page ${num}`,
            component: `<div>New page ${num}</div>`,
        }, { select: true });
        page! && setRename(page);
    }

    const handleRename = (name: string) => {
        rename?.set({ name });
        setRename(undefined);
    }

    const isSelected = (page: Page) => selected === page;
    const isToRename = (page: Page) => page === rename;
    const getName = (page: Page) => page.getName() || page.getId();

    const selectPage = (page: Page) => select(page);
    const removePage = (page: Page) => {
        const nI = pages.indexOf(page);
        const nP = pages[nI + 1] || pages[0];
        select(nP);
        remove(page);
    };
    const duplicatePage = (page: Page) => {
        const wrapper = page.getMainComponent();
        const newPage = add({
            name: `${page.getName()} (Copy)`,
            component: wrapper.clone(),
        }, { select: true });
        newPage! && setRename(newPage);
    };

    const action: any[] = [
        { title: 'Rename', cmd: setRename },
        { title: 'Duplicate', cmd: duplicatePage },
        pages.length > 1 && { title: 'Delete', cmd: removePage },
    ].filter(Boolean);

    return (
        <Accordion className={pad.xy} handler={(
            <Grid space="s" items="center">
                <GridItem>
                    <Icon path={mdiTextBoxMultiple} size={icon.s}/>
                </GridItem>
                <GridItem grow>Pages</GridItem>
                <GridItem onClick={addPage}>
                    <Icon path={mdiPlus} size={icon.s}/>
                </GridItem>
            </Grid>
        )} open>
            <Resizable className={cx(['text-sm overflow-auto', br.bt, cl.br])} height={200} bottom>
                {pages.map((page: Page) => (
                    <Grid
                        space="s"
                        items="center"
                        key={page.getId()} onClick={() => selectPage(page)}
                        className={cx(['cursor-default', pad.xy, isSelected(page) && cl.bgH, !isSelected(page) && cl.hBgH2 ])}
                    >
                        <GridItem className="truncate" grow>
                            {
                                isToRename(page) ?
                                <InputRename value={getName(page)} onChange={handleRename}/> :
                                <>{ getName(page) }</>
                            }
                        </GridItem>
                        <GridItem onClick={prevent}>
                            {
                                isSelected(page) &&
                                <Popover pos={posActions} handler={<Icon path={mdiDotsVertical} size={icon.s}/>} title={false} padding={false} fixed overlay>
                                    {({ close }) => (
                                        action.map(action => <MenuItem  key={action.title} label={action.title} action={() => { close(); action.cmd(page) }}/>)
                                    )}
                                </Popover>
                            }
                        </GridItem>
                    </Grid>
                ))}
            </Resizable>
        </Accordion>
    );
  }