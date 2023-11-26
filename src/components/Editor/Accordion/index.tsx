import { Disclosure } from '@headlessui/react'
import Grid from "../Grid";
import GridItem from "../GridItem";
import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';
import cx from '../../utils/makeCls';

export interface Props {
    children?: React.ReactNode,
    className?: string | ((open: boolean) => string),
    handler?: React.ReactNode | ((open: boolean) => React.ReactNode),
    open?: boolean,
    sticky?: boolean,
};

export default function Accordion({ className, handler, children, sticky, open: isOpen }: Props) {
    return (
        <Disclosure as="div" defaultOpen={isOpen} className="relative">
            <Disclosure.Button className={({ open }) =>
                cx(
                    sticky && 'sticky top-0 z-10',
                    typeof className === 'function' ? className(open) : className,
                    'w-full'
                )}
            >
                {({ open }) => (
                    <Grid items="center" full>
                        <GridItem className="text-left" grow>
                            { typeof handler === 'function' ? handler(open) : handler }
                        </GridItem>
                        <GridItem>
                            <Icon path={mdiChevronDown} className={cx('w-5 h-5 transition-transform', open && 'rotate-180')}/>
                        </GridItem>
                    </Grid>
                )}
            </Disclosure.Button>
            {/* <Transition {...ts}> Issues in StyleManager  */}
                <Disclosure.Panel>
                    { children }
                </Disclosure.Panel>
            {/* </Transition> */}
        </Disclosure>
    );
  }
