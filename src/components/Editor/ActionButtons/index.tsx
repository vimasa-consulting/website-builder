import { useEditor } from '@grapesjs/react';
import {
    mdiApplicationBracketsOutline, mdiArrowULeftTop, mdiArrowURightTop, mdiBorderRadius,
    mdiCog, mdiContentSave,
    mdiDelete, mdiEye,
    mdiFolder,
    mdiFullscreen, mdiHelpCircle, mdiNewspaperVariantOutline, mdiTrayArrowDown, mdiXml
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
    const t = (key: string) => i18nStore.t(`actions.${key}`);

    const buttons: ActionButton[] = [
        {
            id: 'component-outline',
            cmd: 'core:component-outline',
            iconPath: mdiBorderRadius,
            title: 'componentOutline.title',
        },
        {
            id: 'preview',
            cmd: 'core:preview',
            iconPath: mdiEye,
            title: 'preview.title',
        },
        {
            id: 'fullscreen',
            cmd: 'core:fullscreen',
            iconPath: mdiFullscreen,
            options: { target: '#root' },
            title: 'fullscreen.title',
        },
        /*{
            id: 'open-code',
            cmd: () => modalStore.open({
                title: t('showCode.title'),
                content: () => <ExportCode/>,
            }),
            iconPath: mdiXml,
            title: 'showCode.title',
        },
        {
            id: 'import-code',
            cmd: () => modalStore.open({
                title: t('importCode.title'),
                content: () => <ImportCodeContent/>,
            }),
            iconPath: mdiTrayArrowDown,
            title: 'importCode.title',
        },*/
        {
            id: 'clear-canvas',
            cmd: () => modalStore.confirm({
                title: t('clearCanvas.title'),
                content: t('clearCanvas.content'),
                onConfirm: () => Commands.run('core:canvas-clear'),
            }),
            iconPath: mdiDelete,
            title: 'clearCanvas.title',
        },
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

    return (
        <Grid space="s" items="center" justify="end" className={cx(pad.xS)}>
            {buttons.map(({ id, cmd, iconPath, disabled, options, title }) => (
                <GridItem key={id}>
                    <ButtonWithTooltip
                        active={Commands.isActive(cmd as string)}
                        onClick={toggleCommand(cmd, options)}
                        disabled={disabled ? disabled() : false}
                        title={t(title)}
                        border={false}
                    >
                        <Icon path={iconPath} size={icon.s}/>
                    </ButtonWithTooltip>
                </GridItem>
            ))}
            <GridItem>
                <Popover pos={posActions} title={false} padding={false} handler={<Icon path={mdiCog} size={icon.s}/>} overlay>
                    {({ close }) => <>
                        {
                            infoItems.map(item => (
                                <MenuItem
                                    key={item.id}
                                    action={onMenuItemClick(item.action, close)}
                                    icon={item.icon}
                                    label={item.label}
                                />
                            ))
                        }
                    </>}
                </Popover>
            </GridItem>
        </Grid>
    );
  });