import { Menu } from '@headlessui/react';
import Icon from '@mdi/react';
import { isFunction } from '../../utils';
import cx from '../../utils/makeCls';
import Grid from "../Grid";
import GridItem from "../GridItem";
import Popover from '../Popover';
import { br, cl, icon as iconT, pad } from '../theme';

export interface MenuListItem {
    id: string,
    label: React.ReactNode,
    action?: string | Function,
    disabled?: boolean,
    icon?: string,
    className?: string,
};

export interface MenuListProps {
    children?: React.ReactNode,
    className?: string | ((open: boolean) => string),
    handler?: React.ReactNode | ((open: boolean) => React.ReactNode),
    open?: boolean,
    sticky?: boolean,
    items: MenuListItem[],
};

export function MenuItem({ action, icon, label, className }: Omit<MenuListItem, 'id'>) {
    const mainClass = cx([
        'last:border-b-0',
        cl.br,
        pad.xy,
        br.bb,
        ...(action ? [cl.hBgH, 'cursor-pointer'] : []),
        className,
    ]);
    const handleClick = () => isFunction(action) && action();

    return (
        <Grid space="s" items="center" className={mainClass} onClick={handleClick}>
            {
                icon &&
                <GridItem>
                    <Icon path={icon} size={iconT.s}/>
                </GridItem>
            }
            <GridItem grow>{ label }</GridItem>
        </Grid>
    )
}

export default function MenuList({ className, handler, children, items, open: isOpen }: MenuListProps) {
    return (
        <Menu>
            <Menu.Button>
                { children }
            </Menu.Button>
            <Popover>
                <Menu.Items>
                        {
                            items.map(item => (
                                <Menu.Item key={item.id} disabled={item.disabled}>
                                    {({ active }) => (
                                        <div className={cx(active && 'bg-blue-500')}>
                                            {item.label}
                                        </div>
                                    )}
                                </Menu.Item>
                            ))
                        }
                </Menu.Items>
            </Popover>
        </Menu>
        // <Disclosure as="div" defaultOpen={isOpen} className="relative">
        //     <Disclosure.Button className={({ open }) =>
        //         cx(
        //             sticky && 'sticky top-0 z-10',
        //             typeof className === 'function' ? className(open) : className,
        //             'w-full'
        //         )}
        //     >
        //         {({ open }) => (
        //             <Grid items="center" full>
        //                 <GridItem className="text-left" grow>
        //                     { typeof handler === 'function' ? handler(open) : handler }
        //                 </GridItem>
        //                 <GridItem>
        //                     <Icon path={mdiChevronDown} className="w-5 h-5" vertical={open}/>
        //                 </GridItem>
        //             </Grid>
        //         )}
        //     </Disclosure.Button>
        //     <Disclosure.Panel>
        //         { children }
        //     </Disclosure.Panel>
        // </Disclosure>
    );
  }
