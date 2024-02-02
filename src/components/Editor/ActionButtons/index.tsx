import { DevicesProvider, useEditor } from '@grapesjs/react';
import {
    mdiApplicationBracketsOutline, mdiArrowULeftTop, mdiArrowURightTop, mdiBorderRadius,
    mdiCog, mdiContentSave,
    mdiDelete, mdiEye,
    mdiFolder,
    mdiLayers, mdiPaletteSwatch,
    mdiFontAwesome,
    mdiFullscreen, mdiHelpCircle, mdiNewspaperVariantOutline, mdiPublish, mdiTrayArrowDown, mdiXml, mdiDownload, mdiPlus
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
import DeviceSelector from '../DeviceSelector';
import SvgIcon from '../SvgIcon';
import Tooltip from '../Tooltip';
import Button from '../Button';
import { useBlockManagerStore } from '@/components/store/blockManager';

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
    const { installEvent, appInstalled, isBrowserMode, setInstallEvent, toggleLeftSidebar } = appEditorStore;
    const modalStore = useModalStore();
    const i18nStore = useI18nStore();
    const layerManagerStore = useLayerManagerStore();
    const styleManagerStore = useStyleManagerStore();
    const t = (key: string) => i18nStore.t(`actions.${key}`);
    const [fileName, setFileName] = useState(localStorage.getItem(`wb-active-filename`) || '')
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
    /*const buttons: ActionButton[] = [
        {
            id: 'style',
            cmd: () => toggleStyleBar(),
            iconPath: mdiPaletteSwatch,
            title: 'style.title',
        },
        {
            id: 'preview',
            // cmd: 'openProjectUrl',
            cmd: 'core:preview',
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
        },*
        /*
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
            
            title: '',
        },
        {
            id: 'publish',
            cmd: 'publishProject',
            iconPath: mdiPublish,            
            title: '',
        },
    ];*/

    const toggleStyleBar = () => {
        toggleLeftSidebar()
        return styleManagerStore.toggleOpen();
    }
    const toggleDevice= (deviceId:string) => {
        editor?.DeviceManager.select(deviceId);        
    }
    const buttons: ActionButton[] = [
        /*{
            id: 'style',
            cmd: () => toggleStyleBar(),
            iconPath: mdiPaletteSwatch,
            title: 'Style',
        },*/
        {
            id: 'preview',
            cmd: 'core:preview',
            iconPath: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.9998 12C14.9998 13.6569 13.6566 15 11.9998 15C10.3429 15 8.99976 13.6569 8.99976 12C8.99976 10.3431 10.3429 9 11.9998 9C13.6566 9 14.9998 10.3431 14.9998 12Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.0002 5C7.52257 5 3.73228 7.94288 2.45801 12C3.73226 16.0571 7.52256 19 12.0002 19C16.4778 19 20.2681 16.0571 21.5424 12C20.2681 7.94291 16.4778 5 12.0002 5Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
            title: 'Preview',
        },
        {
            
            id: 'download-code',
            cmd: () => exportProject(),
            iconPath: '/editor/download.png',
            title: '',
        },
        {
            id: 'save',
            cmd: 'saveProject',
            iconPath: '',
            title: 'Save',
        },
        {
            id: 'publish',
            cmd: 'publishProject',
            iconPath: '',            
            title: 'Publish',
        },
    ];
    
    const buttonsLeft: ActionButton[] = [              
        {
            id: 'undo',
            cmd: 'core:undo',
            iconPath: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 20V17.6C20 14.2397 20 12.5595 19.346 11.2761C18.7708 10.1471 17.8529 9.2292 16.7239 8.65396C15.4405 8 13.7603 8 10.4 8H4M4 8L8 12M4 8L8 4" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
            disabled: () => !editor?.UndoManager.hasUndo(),
            title: 'Undo',
        },
        {
            id: 'redo',
            cmd: 'core:redo',
            iconPath: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 20V17.6C4 14.2397 4 12.5595 4.65396 11.2761C5.2292 10.1471 6.14708 9.2292 7.27606 8.65396C8.55953 8 10.2397 8 13.6 8H20M20 8L16 12M20 8L16 4" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
            disabled: () => !editor?.UndoManager.hasRedo(),
            title: 'Redo',
        },
        {
            id: 'desktop',
            cmd: () => toggleDevice('desktop'),
            iconPath: '<svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect x="0.5" y="0.5" width="21" height="15" fill="url(#pattern0)"/><defs><pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="#image0_608_2937" transform="scale(0.047619 0.0666667)"/></pattern><image id="image0_608_2937" width="21" height="15" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAPCAYAAAALWoRrAAAA2klEQVQ4je3TsUoDQRSF4S8xShor7YxgiqQQFMRKi7yGhWDncyz7IkKqPEHKFCGtJvYqiIWRIFgqIoxFZmWLGGFdOw9cOAN3fs4wHLhCKHEmlWi6GKKiuAKOcJ5BOxgVIaVp+uWTJDnEZTWet36RMK8GVH/aKqJ/6N9BQ0m8kIdOS4I+Mm9QwBNuLG7ULWrYwQPe0P4mZRONFayijvV4OZspnnGGffPGneIg+nds5PbXYrjesq5vYxMDzHCCC+ziGC+4z9c0U20JtI89vManX8d0HxjjDi0LPvkT6NE+9jAgaiYAAAAASUVORK5CYII="/></defs></svg>',
            title: 'Desktop',
        },
        {
            id: 'mobile',
            cmd: () => toggleDevice('mobilePortrait'),
            iconPath: '<svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect x="0.5" y="0.5" width="12" height="21" fill="url(#pattern0)"/><defs><pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="#image0_608_2950" transform="scale(0.0833333 0.047619)"/></pattern><image id="image0_608_2950" width="12" height="21" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAVCAYAAAByrA+0AAAAw0lEQVQ4je3TIU4DQRgF4G92BejSIzQYTkAwXIFjYNAVTTZjuEGvUMEVuAAJIcgKAhqDYVXTbYvobNIdQnYloi+ZzPvfvPerNwF3mOEUNZa6GGGS+HPALjPcH/AdrnHVCgENXvCJAmUyHi5r0nzRipcxxic9qKpqUSR+1mdOOGkD5cBAKPo9XRwD/yvwNdC/CtjgFo/2jZTugG0WmMO3fWOHnLrw+wPBA6ZYZ3rpj03nMUZ4y98CPjDONr3iHTe61a9/AJeyNnVDf/LqAAAAAElFTkSuQmCC"/></defs></svg>',
            title: 'Mobile',
        }

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

    const setActiveFileName = function(e: any){        
        localStorage.setItem(`wb-active-filename`,e.target.value);
        setFileName(e.target.value)
    }

    const { isOpen, toggleOpen } = useBlockManagerStore();
    return (
        <Grid space="s" items="center" justify="end" className={`${cx(pad.xyS2)} flex-nowrap`}>
            {/*<GridItem>
                <Tooltip title="Blocks">
                    <Button onClick={toggleOpen} className='flex'>
                        <Icon path={mdiPlus} size={icon.s} className={cx('transition-transform', isOpen && 'rotate-45')}/>
                        <GridItem grow>{'Add'} </GridItem>
                    </Button>
                </Tooltip>
            </GridItem>*/}
             {buttonsLeft.map(({ id, cmd, iconPath, disabled, options, title }) => (
                <GridItem id="topBarButton" key={id}>
                    <ButtonWithTooltip
                        id={id}
                        className='flex items-center'
                        active={Commands.isActive(cmd as string)}
                        onClick={toggleCommand(cmd, options)}
                        disabled={disabled ? disabled() : false}
                        title={t(title)}
                        border={false}
                    >
                        <SvgIcon svg={iconPath}></SvgIcon>
                        <GridItem className='px-1' grow>{title} </GridItem>
                    </ButtonWithTooltip>
                </GridItem>
            ))} 
            {/*<GridItem>
                  <DevicesProvider>
                    {(props) => <DeviceSelector {...props}/>}
                  </DevicesProvider>                  
            </GridItem>*/}
            <GridItem id='fileName'>
                <input type="text" value={fileName}
                onChange={setActiveFileName}/>
            </GridItem>            
            {buttons.map(({ id, cmd, iconPath, disabled, options, title }) => (
                <GridItem id='headerRightButtons' key={id}>
                    <ButtonWithTooltip
                        id={id}
                        className='flex'
                        active={Commands.isActive(cmd as string)}
                        onClick={toggleCommand(cmd, options)}
                        disabled={disabled ? disabled() : false}
                        title={t(title)}
                        border={false}
                    >
                        {
                            id === 'download-code' ?
                            <img width={35} height={25} src={iconPath} /> :
                            (
                                <>
                                    <SvgIcon svg={iconPath}></SvgIcon>                        
                                    <p className='px-1 m-auto font-[Inter,sans-serif]'>{title}</p>   
                                </>
                            )
                        }
                    </ButtonWithTooltip>
                </GridItem>
            ))}
        </Grid>
    );
  });