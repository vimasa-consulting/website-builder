import { observer } from 'mobx-react-lite';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { VirtuosoGrid } from 'react-virtuoso';
import { useI18nStore } from '../../../store/I18nStore';
import { useAppEditorStore, useTransitionEnd } from '../../../store/appEditorStore';
import { installPlugin, loadInstalledPlugins, uninstallPlugin, usePluginStore } from '../../../store/pluginStore';
import { cx } from '../../../utils/makeCls';
import { InstallablePlugin, ProjectType } from '../../../utils/types';
import Badge from '../../Badge';
import Button from '../../Button';
import Card from '../../Card';
import Grid from '../../Grid';
import GridItem from '../../GridItem';
import Spinner from '../../Spinner';
import Tabs, { TabOption } from '../../Tabs';
import { cl, fx, icon } from '../../theme';
import Icon from '@mdi/react';
import { mdiChevronLeft } from '@mdi/js';

enum PluginTab {
  All = 'all',
  Installed = 'installed',
}

const availablePlugins: InstallablePlugin[] = [
  {
    id: 'grapesjs-component-countdown',
    name: 'Countdown',
    description: 'Countdown component',
    src: '/unpkg.com/grapesjs-component-countdown@1.0.1/dist/index.js',
    version: '1.0.1',
    projectType: [ProjectType.web],
    options: {
      props: {
        emptyState: true,
      },
    }
  },
  {
    id: 'grapesjs-tabs',
    name: 'Tabs',
    description: 'Tabs component',
    src: '/unpkg.com/grapesjs-tabs@1.0.6/dist/grapesjs-tabs.min.js',
    version: '1.0.6',
    projectType: [ProjectType.web],
    options: { tabsBlock: { category: 'Extra', select: true } },
  },
  {
    id: 'grapesjs-custom-code',
    name: 'Custom code',
    description: 'Component for the embed of custom code',
    src: '/unpkg.com/grapesjs-custom-code@1.0.1/dist/index.js',
    version: '1.0.1',
    projectType: [ProjectType.web],
  },
  {
    id: 'grapesjs-tooltip',
    name: 'Tooltip',
    description: 'Simple, CSS only, tooltip component',
    src: '/unpkg.com/grapesjs-tooltip@0.1.7/dist/index.js',
    version: '0.1.7',
    projectType: [ProjectType.web],
    options: {
      propsTooltip: {
        emptyState: { styleOut: `width: 80px;` },
      },
    }
  },
  {
    id: 'grapesjs-typed',
    name: 'Typed',
    description: 'Typed component based on Typed.js library',
    src: 'https://unpkg.com/grapesjs-typed@2.0.1/dist/index.js',
    version: '2.0.1',
    projectType: [ProjectType.web],
    options: { block: { category: 'Extra' } }
  },
];

const getAvailablePlugins = () => new Promise<InstallablePlugin[]>(res => {
  setTimeout(() => res(availablePlugins), 100)
});

export interface PluginCardProps extends Omit<React.HTMLProps<HTMLDivElement>, 'onSelect'> {
  plugin: InstallablePlugin;
  installed: InstalledMap;
  onInstall: (plugin: InstallablePlugin) => void;
  onSelect?: (plugin: InstallablePlugin) => void;
  onRemove?: (plugin: InstallablePlugin) => void;
};

type InstalledMap = Record<string, string | undefined>;

export const PluginCard = observer(function ProjectCard({
  plugin,
  selected,
  className,
  installed,
  onInstall,
  onSelect,
}: PluginCardProps) {
  const i18nStore = useI18nStore();
  const t = (key: string) => i18nStore.t(`pluginManager.${key}`);
  const isInstalled = installed[plugin.id];

  return (
      <Card className={cx('overflow-hidden max-w-full group px-4 py-3', className)} padding={false}>
        <Grid space="s" col>
          <Grid className="max-w-full" nowrap>
                <GridItem grow className="w-full">
                  <Grid space="s" col>
                    <Grid items="center" space="s" nowrap>
                      <GridItem
                          className={cx(fx.txtEllips, 'cursor-pointer')}
                          onClick={() => onSelect?.(plugin)}
                        >
                          <b>{ plugin.name }</b>
                      </GridItem>
                      <GridItem grow>
                        <Badge className="opacity-90" label={`v${plugin.version}`} s="s" pill border/>
                      </GridItem>
                      <Grid>
                        <Button className="text-sm" size="m2" variant="pr" onClick={() => onInstall(plugin)}>
                            {t(isInstalled ? 'uninstall' : 'install')}
                        </Button>
                      </Grid>
                    </Grid>
                    <GridItem className={cx(!selected && fx.txtEllips, 'text-sm max-w-full')}>
                        { plugin.description }
                    </GridItem>
                  </Grid>
                </GridItem>
            </Grid>
        </Grid>
      </Card>
  )
});

export interface PluginManagerProps {
  selectedId?: string;
}

export default observer(function PluginManager({ selectedId }: PluginManagerProps) {
  const i18nStore = useI18nStore();
  const [tid] = useTransitionEnd();
  const pluginStore = usePluginStore();
  const appEditorStore = useAppEditorStore();
  const [selected, setSelected] = useState<InstallablePlugin>();
  const [installedPlugins, setInstalledPlugins] = useState<InstallablePlugin[]>();
  const [allPlugins, setAllPlugins] = useState<InstallablePlugin[]>();

  const [tab, setTab] = useState(PluginTab.All);
  const itemsToRender = tab === PluginTab.All ? allPlugins : installedPlugins;
  const t = i18nStore.tScoped('pluginManager');

  useEffect(() => {
    const load = async () => {
      !installedPlugins && setInstalledPlugins(await loadInstalledPlugins());
      !allPlugins && setAllPlugins(await getAvailablePlugins());
    };
    load();
  }, [installedPlugins, allPlugins]);

  useEffect(() => {
    if (selectedId && allPlugins && !pluginStore.selectedShown) {
      const plugin = allPlugins.find(plg => plg.id === selectedId);
      plugin && setSelected(plugin);
      pluginStore.setSelectedShown(true);
    }
  }, [allPlugins]);

  const tabs: TabOption<PluginTab>[] = useMemo(() => [
    {
      id: PluginTab.All,
      label: t('all'),
    },
    {
      id: PluginTab.Installed,
      label: t('installed'),
    },
  ], [i18nStore]);

  const onInstall = useCallback(async (plugin: InstallablePlugin) => {
    if (installedPlugins?.find(plg => plg.id === plugin.id)) {
      await uninstallPlugin(plugin);
    } else {
      await installPlugin(plugin);
    }
    setInstalledPlugins(await loadInstalledPlugins());
  }, [installedPlugins]);

  const installedMap: InstalledMap = useMemo(() => (
    installedPlugins?.reduce((res, item) => {
      res[item.id] = item.version;
      return res;
    }, {} as InstalledMap) || {}
  ), [installedPlugins]);

  const showTopRow = !!(selected || pluginStore.hasPending);

  return (
    <Grid col full space="m">
      {
        showTopRow &&
        <Grid>
          {
            !!selected &&
            <Button onClick={() => setSelected(undefined)} className={cl.tAo} border={false}>
              <Grid space="xs" items="center">
                <Icon path={mdiChevronLeft} size={icon.s}/>
                <div>{t('allPlugins')}</div>
              </Grid>
            </Button>
          }
          {
            pluginStore.hasPending &&
            <Button className="text-sm ml-auto" size="m2" variant="out" onClick={appEditorStore.updateStudio}>
                {t('updateStudio')}
            </Button>
          }
        </Grid>
      }
      {
        selected ?
        <GridItem grow className="w-full">
          <PluginCard plugin={selected} installed={installedMap} onInstall={onInstall} selected/>
        </GridItem>
        :
        <>
          <GridItem>
            <Tabs<PluginTab> tabs={tabs} onChange={setTab}/>
          </GridItem>
          <GridItem grow>
              {
                !itemsToRender ? <Spinner/>
                :
                (
                  !itemsToRender.length ?
                    <Grid justify="center">
                      {i18nStore.t('notItemsFound')}
                    </Grid>
                  :
                  <VirtuosoGrid
                    key={tid}
                    data={itemsToRender}
                    listClassName="grid grid-cols-1 gap-2 pr-2"
                    itemContent={(i, plugin) => (
                        <PluginCard
                          key={plugin.id}
                          plugin={plugin}
                          installed={installedMap}
                          onInstall={onInstall}
                          onSelect={setSelected}
                        />
                    )}
                />
                )
              }
          </GridItem>
        </>

      }
    </Grid>
  );
});
