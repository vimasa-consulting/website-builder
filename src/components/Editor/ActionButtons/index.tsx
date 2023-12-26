import { useEditor } from '@grapesjs/react';
import {
    mdiApplicationBracketsOutline, mdiArrowULeftTop, mdiArrowURightTop, mdiBorderRadius,
    mdiCog, mdiContentSave,
    mdiDelete, mdiEye,
    mdiFolder,
    mdiLayers, mdiPaletteSwatch,
    mdiFontAwesome,
    mdiFullscreen, mdiHelpCircle, mdiNewspaperVariantOutline, mdiPublish, mdiTrayArrowDown, mdiXml, mdiDownload
} from '@mdi/js';
import Icon from '@mdi/react';
import { fileOpen, fileSave } from 'browser-fs-access';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { useI18nStore } from '../../store/I18nStore';
import { useAppEditorStore } from '../../store/appEditorStore';
import { ThemeOptions, useLocalSettingsStore } from '../../store/localSettings';
import { useModalStore } from '../../store/modalStore';
import { isFunction } from '../../utils';
import cx from "../../utils/makeCls";
import ButtonWithTooltip from '../Button/ButtonWithTooltip';
import Grid from "../Grid";
import GridItem from "../GridItem";
import { MenuItem, MenuListItem } from '../MenuList';
import AboutContent from '../Modal/contents/AboutContent';
import ExportCode from '../Modal/contents/ExportCode';
import ImportCodeContent from '../Modal/contents/ImportCodeContent';
import ProjectManager from '../Modal/contents/ProjectManager';
import Popover from '../Popover';
import Tabs, { TabOption } from '../Tabs';
import { icon, pad } from '../theme';
import { useLayerManagerStore } from '@/components/store/layerManager';
import { useStyleManagerStore } from '@/components/store/styleManager';
import InputField from '../InputField';
import DownloadCode from '../Modal/contents/DownloadCode';
import { Asset, Editor } from 'grapesjs';
import { getPageSlug, toSafeFilename } from '@/components/plugins/web/utils';

interface ActionButton {
    id: string,
    cmd: string | (() => void),
    iconPath: string,
    title: string,
    options?: Record<string, any>,
    disabled?: () => boolean
};

const posActions = {
    position: { x: 'left', y: 'bottom' },
    offset: { y: 10 },
};

const themeTabs: TabOption[] = [
    { id: 'dark', label: 'Dark' },
    { id: 'light', label: 'Light' },
    { id: 'auto', label: 'Auto' },
];

const gjsExt = '.grapesjs';

export default observer(function ActionButtons() {
    const editor = useEditor();
    const { Commands, UndoManager } = editor;
    const [, setCmdUp] = useState(0);
    const { theme, setTheme } = useLocalSettingsStore();
    const appEditorStore = useAppEditorStore();
    const { installEvent, appInstalled, isBrowserMode, setInstallEvent } = appEditorStore;
    const modalStore = useModalStore();
    const i18nStore = useI18nStore();
    const layerManagerStore = useLayerManagerStore();
    const styleManagerStore = useStyleManagerStore();
    const t = (key: string) => i18nStore.t(`actions.${key}`);
    interface AssetDataUrl {
        mime: string,
        name: string,
        base64: string,
        found?: boolean;
      }
    type AssetDataUrlMap = Record<string, AssetDataUrl>;
    const dataURLAssetsMap = (editor: Editor) => {
        const assets = editor.Assets.getAll();
        const dataUrlAssets:  AssetDataUrlMap = assets.reduce((result: AssetDataUrlMap, asset: Asset) => {
          const src = asset.getSrc();
          const match = src.match(/^data:([^;]+);/);
          if (match) {
            const base64 = src.split(',')[1];
            result[src] = {
              mime: match[1],
              name: toSafeFilename(asset.get('name')),
              base64,
            }
          }
          return result;
        }, {});
      
        return dataUrlAssets;
      };
      
      const escapeRegExpChars = (text: string) => {
        return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
      };
      
      const replaceDataUrlAssets = (str: string, dataUrlMap: AssetDataUrlMap, opts: { pathPfx?: string } = {}) => {
        let result = str;
        const pathPfx = opts.pathPfx || '';
      
        for (const key in dataUrlMap) {
          if (result.includes(key)) {
            const dataUrlAsset = dataUrlMap[key];
            result = result.replace(new RegExp(escapeRegExpChars(key), 'g'), `${pathPfx}${dataUrlAsset.name}`);
            dataUrlAsset.found = true;
          }
        }
      
        return result;
      }
    const exportProject = () => {
        const dataUrlMap = dataURLAssetsMap(editor);
        const ASSETS_DIR = 'assets';
    
        editor.runCommand('gjs-export-zip', {
          filenamePfx: 'builder-',
          root: async (editor: Editor) => {
            const pages = editor.Pages.getAll();
            const pagesHTML = pages.reduce((acc, page) => {
              const filename = "page";//getPageSlug(editor, page);
              let html = `<!doctype html>
                <html lang="en">
                  <head>
                    <meta charset="utf-8">
                    <title>${page.getName()}</title>
                    <meta name="generator" content="GrapesJS Studio">
                    <meta name="viewport" content="width=device-width,initial-scale=1">
                    <meta property="og:type" content="website">
                    <meta name="robots" content="index,follow">
                    <link rel="stylesheet" href="./css/style.css">
                  </head>
                  ${page.getMainComponent().toHTML()}
                </html>
              `;
              html = replaceDataUrlAssets(html, dataUrlMap, {
                pathPfx: `${ASSETS_DIR}/`,
              });
              acc[filename] = html;
    
              return acc;
            }, {} as Record<string, string>);
    
            const assets: Record<string, string> = {};
            const cssString = replaceDataUrlAssets(
              editor.getCss({ keepUnusedStyles: true }) || '',
              dataUrlMap,
              { pathPfx: `../${ASSETS_DIR}/`, },
            );
    
            for (const key in dataUrlMap) {
              const dataUrlAsset = dataUrlMap[key];
              if (dataUrlAsset.found) {
                assets[dataUrlAsset.name] = atob(dataUrlAsset.base64);
              }
            }
    
            const result = {
              'gjs-project.grapesjs': JSON.stringify(editor.getProjectData()),
              // 'testfile.txt': 'Copyright © YEAR Company name € È $%&',
              // 'testfile.html': 'Copyright © YEAR Company name € È $%&',
              css: {
                'style.css': cssString,
              },
              ...pagesHTML,
              ...(!!Object.keys(assets).length && {
                [ASSETS_DIR]: assets,
              })
            };
    
            return result;
          }
        });
        
      }
    const buttons: ActionButton[] = [
        {
            id: 'style',
            cmd: () => styleManagerStore.toggleOpen(),
            iconPath: mdiPaletteSwatch,
            title: 'style.title',
        },
        {
            id: 'preview',
            cmd: 'openProjectUrl',
            iconPath: mdiEye,
            title: 'preview.title',
        },
        {
        
            id: 'open-code',
            cmd: () => modalStore.open({
                title: t('showCode.title'),
                children: <ExportCode />
            }),
            iconPath: mdiXml,
            title: 'showCode.title',
        },
        {
            
            id: 'download-code',
            cmd: () => exportProject(),
            iconPath: mdiDownload,
            title: 'showCode.title',
        },
        /*{{
            id: 'import-code',
            cmd: () => modalStore.open({
                title: t('importCode.title'),
                content: () => <ImportCodeContent/>,
            }),
            iconPath: mdiTrayArrowDown,
            title: 'importCode.title',
        },*/
        /*{
            id: 'clear-canvas',
            cmd: () => modalStore.confirm({
                title: t('clearCanvas.title'),
                content: t('clearCanvas.content'),
                onConfirm: () => Commands.run('core:canvas-clear'),
            }),
            iconPath: mdiDelete,
            title: 'clearCanvas.title',
        },*/
        {
            id: 'undo',
            cmd: 'core:undo',
            iconPath: mdiArrowULeftTop,
            disabled: () => !UndoManager.hasUndo(),
            title: '',
        },
        {
            id: 'redo',
            cmd: 'core:redo',
            iconPath: mdiArrowURightTop,
            disabled: () => !UndoManager.hasRedo(),
            title: '',
        },
        {
            id: 'save',
            cmd: 'saveProject',
            iconPath: mdiContentSave,
            //disabled: () => !UndoManager.hasUndo(),
            title: '',
        },
        {
            id: 'publish',
            cmd: 'publishProject',
            iconPath: mdiPublish,            
            title: '',
        },
    ];

    useEffect(() => {
        const runEvent = 'run';
        const stopEvent = 'stop';
        const dirtyChange = 'change:changesCount';
        const onCommand = (id: string) => {
            if (buttons.find((btn) => btn.cmd === id)) {
                setCmdUp((value) => value + 1);
            }
        };
        const onDirtyChange = () => setCmdUp((value) => value + 1);
        editor.on(runEvent, onCommand);
        editor.on(stopEvent, onCommand);
        editor.on(dirtyChange, onDirtyChange);

        return () => {
            editor.off(runEvent, onCommand);
            editor.off(stopEvent, onCommand);
            editor.off(dirtyChange, onDirtyChange);
        }
                
    }, [editor]); // eslint-disable-line

    const infoItems: MenuListItem[] = [
        /*{
            id: 'about',
            label: t('about.title'),
            icon: mdiHelpCircle,
            action: () => modalStore.open({
                size: 'm',
                title: t('about.title'),
                content: () => <AboutContent/>,
            }),
        },*/
        {
            id: 'open',
            label: t('open.title'),
            icon: mdiFolder,
            action: async () => {
                const blob = await fileOpen({ extensions: [gjsExt] });
                const content = await blob.text();
                appEditorStore.loadProjectData(JSON.parse(content));
            },
        },
        {
            id: 'save',
            label: t('save.title'),
            icon: mdiContentSave,
            action: async () => {
                const project = editor.getProjectData();
                const blob = new Blob([JSON.stringify(project)]);
                const fileName = `Untitled-${(new Date()).toISOString().replace('T', '-').replace(/:|\./g, '').substring(0, 17)}`;
                await fileSave(blob, {
                    fileName: `${fileName}${gjsExt}`,
                    extensions: [gjsExt],
                });
            },
        },
        // {
        //     id: 'shortcuts',
        //     label: 'Shortcuts',
        //     icon: mdiKeyboard,
        //     action: () => alert('Open shortcuts'),
        // },
        /*{
            id: 'newProject',
            label: t('newProject.title'),
            icon: mdiNewspaperVariantOutline,
            action: () => modalStore.open({
                fullH: true,
                title: t('newProject.title'),
                content: () => <ProjectManager/>,
            }),
        },*/
        {
            id: 'installApp',
            label: t(appInstalled ? 'installApp.installed' : 'installApp.title'),
            icon: mdiApplicationBracketsOutline,
            action: async () => {
                if (appInstalled) return;
                installEvent?.prompt();
                const userChoice = await installEvent?.userChoice;
                userChoice?.outcome === 'accepted' && setInstallEvent();
            },
        },
        {
            id: 'theme',
            label: (
                <Grid items="center" space="m">
                    <GridItem>Theme</GridItem>
                    <GridItem>
                        <Tabs tabs={themeTabs} onChange={(value) => setTheme(value as ThemeOptions)} value={theme} variant='pills'/>
                    </GridItem>
                </Grid>
            ),
        }
    ].filter(item => {
        return (!isBrowserMode || !installEvent) && item.id === 'installApp' ? false : true;
    });

    const toggleCommand = (cmd: ActionButton["cmd"], options?: Record<string, any>) => {
        return () => {
            if (isFunction(cmd)) {
                cmd();
            } else {
                Commands.isActive(cmd) ? Commands.stop(cmd) : Commands.run(cmd, options);
            }
        };
    };

    const onMenuItemClick = (action: MenuListItem["action"], close: () => void) => () => {
        if (isFunction(action)) {
            action();
            close();
        }
    }
    const fileName:any=localStorage.getItem(`wb-active-filename`); 

    const setActiveFileName = function(newValue:string){        
        localStorage.setItem(`wb-active-filename`,newValue);
    }
    return (
        <Grid space="s" items="center" justify="end" className={cx(pad.xyS2)}>
            <GridItem>
                <InputField size="s" type="text" value={fileName}
                onInput={setActiveFileName}/>
            </GridItem>            
            {buttons.map(({ id, cmd, iconPath, disabled, options, title }) => (
                <GridItem key={id}>
                    <ButtonWithTooltip
                        active={Commands.isActive(cmd as string)}
                        onClick={toggleCommand(cmd, options)}
                        disabled={disabled ? disabled() : false}
                        title={t(title)}
                        border={false}
                    >
                        <Icon path={iconPath} size={icon.l}/>
                    </ButtonWithTooltip>
                </GridItem>
            ))}
        </Grid>
    );
  });