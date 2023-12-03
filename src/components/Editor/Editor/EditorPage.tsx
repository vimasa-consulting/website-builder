import { Transition } from "@headlessui/react";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Fragment } from "react";
import EditorApp from ".";
import { useAppEditorStore } from "../../store/appEditorStore";
import { useI18nStore } from "../../store/I18nStore";
import { useModalStore } from "../../store/modalStore";
import { loadScript } from "../../utils/dom";
import { cx } from "../../utils/makeCls";
import Grid from "../Grid";
import ProjectManager from "../Modal/contents/ProjectManager";
import Spinner from "../Spinner";
import { cl, tsOpac } from "../theme";
import PluginManager from "../Modal/contents/PluginManager";
import { usePluginStore } from "../../store/pluginStore";
import BlockSearchPopup from "../BlockSearchPopup";

export default observer(function EditorPage() {
    const appEditorStore = useAppEditorStore();
    const { projectIdToLoad, editor, updateAppShell, analytics, isDev, editorKey, isAuthorized, setIsAuthorized } = appEditorStore;
    const modalStore = useModalStore();
    const i18nStore = useI18nStore();
    const pluginStore = usePluginStore();

    useEffect(() => {
        if (!projectIdToLoad && editor) {
            /*modalStore.open({
                fullH: true,
                closable: false,
                title: i18nStore.t('modals.openProject.title'),
                content: () => <ProjectManager/>,
            })*/
        }
    }, [projectIdToLoad, editor]);

    useEffect(() => {
        if (updateAppShell) {
            const bodyEl = document.querySelector('body')!;
            bodyEl.classList.add(...cl.bg.split(' '), 'overflow-hidden');
        }

        if (analytics && !isDev) {
            loadScript('https://www.googletagmanager.com/gtag/js?id=G-5ZWDJH0H6G');
            (window as any).dataLayer = (window as any).dataLayer || [];
            const gtag = function(...args: any) { (window as any).dataLayer.push(arguments) };
            (window as any).gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'G-5ZWDJH0H6G');
        }

        if (![
            'studio.grapesjs.com',
            'studio-stage.grapesjs.com',
            'localhost'
        ].includes(window.location.hostname)) {
            setTimeout(() => {
                setIsAuthorized(false);
            }, 1000);
        }
    }, []);

    useEffect(() => {
        if ('launchQueue' in window && 'LaunchParams' in window && editor) {
            (window as any).launchQueue.setConsumer(
                async (launchParams: { files: any[] }) => {
                if (!launchParams.files.length) return;
                const fileHandle = launchParams.files[0];
                const blob: Blob = await fileHandle.getFile();
                const content = await blob.text();
                appEditorStore.loadProjectData(JSON.parse(content));
                },
            );
        }

        const { plg } = appEditorStore.queryParams;

        if (editor && plg && !pluginStore.selectedShown) {
            /*modalStore.open({
                fullH: true,
                title: i18nStore.t('pluginManager.plugins'),
                content: () => <PluginManager selectedId={plg}/>,
            });*/
        }
    }, [editor]);

    return (
        <Grid className={cx('relative transition-colors h-full', cl.bg, cl.txt)} justify="center" items="center" col>
            <EditorApp/>
            <div style={{ display: "none" }}>
                <BlockSearchPopup />
            </div>
            <Transition show={!projectIdToLoad || !editorKey} as={Fragment} {...tsOpac}>
                <Spinner className={cx('z-10', cl.bg)} abs/>
            </Transition>
        </Grid>
    )
});