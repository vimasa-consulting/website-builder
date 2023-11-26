import { Tab } from '@headlessui/react'
import { isDef, noop } from '../../utils';
import cx from "../../utils/makeCls";
import Grid from '../Grid';
import { pad, cl } from '../theme';

export type TabOption<T extends string = string> = {
  id: T,
  label: React.ReactNode,
  content?: React.ReactNode,
}

export type TabsProps<T extends string> = Omit<React.HTMLProps<HTMLDivElement>, 'onChange'> & {
    label?: React.ReactNode;
    s?: 's' | 'm';
    tabs: TabOption<T>[];
    value?: string;
    classNamePanel?: string;
    variant?: 'pills',
    onChange?: (value: T) => void;
};

export default function Tabs<T extends string = string>({
  tabs,
  label,
  s = 'm',
  className,
  classNamePanel,
  variant,
  onChange = noop,
  value,
}: TabsProps<T>) {
    const isVariantPills = variant === 'pills';
    const classBgList = isVariantPills ? cx('rounded-full text-sm px-[2px] py-[2px]', cl.bgH) : '';
    const classTab = (selected: boolean) => {
      return isVariantPills ? cx('rounded-full px-3 py-1', (selected ? cl.bg : '')) : cx('border-b-2', pad.xy)
    };

    const clearTabIndex = (el: HTMLElement | null) => {
      el && (el.tabIndex = -1);
    };

    const selectedIndex = isDef(value) ? tabs.findIndex(tab => tab.id === value) : undefined;

    return (
      <Tab.Group
        onChange={(i) => onChange(tabs[i].id)}
        defaultIndex={tabs.findIndex(tab => tab.id === value)}
        selectedIndex={selectedIndex}
      >
        <Tab.List as={Grid} className={cx(classBgList)} full nowrap>
          {tabs.map((tab) => (
            // TODO create proper focus effect (eg. 1 bottom border)
            <Tab className={({selected}) => cx('flex-1 focus:outline-none', classTab(selected), selected ? `${cl.tAo} ${cl.bA}` : cl.br)} key={tab.id}>
              {tab.label}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className={cx('hdl-tab-panels overflow-hidden flex-1 mt-2', classNamePanel)}>
          {tabs.map((tab) => (
            <Tab.Panel
              key={tab.id}
              tabIndex={-1}
              className="hdl-tab-panel h-full"
              ref={clearTabIndex}
            >
              {tab.content}
            </Tab.Panel>
          ))}
        </Tab.Panels>
    </Tab.Group>
    );
  }
