import type { Editor } from 'grapesjs';
import { makeAutoObservable } from 'mobx';
import { useEffect, useState } from 'react';
import { getStore, InitialStoreState, Store, useStore } from ".";
import { createId, parseParamsToObject } from '../utils';
import { updateLocalState } from '../utils/localState';
import { BeforeInstallPromptEvent, InstallablePlugin, ProjectData, ProjectDataCustom, ProjectItem, ProjectType } from '../utils/types';
import { loadAvailableProjects } from '../Editor/Modal/contents/ProjectManager';

export interface AppEditorConfig {
    project?: ProjectItem,
    defaultProject?: ProjectItem,
    gjsScript?: string,
    gjsStyle?: string,
};

type DisplayMode =  'browser' | 'standalone';
type DesignerTab =  'style' | 'props';

export class AppEditorStore {
    store: Store;
    projectType: ProjectType = ProjectType.web;
    editor?: Editor;
    editorConfig: AppEditorConfig = {};
    isInPreview = false;
    isCssPanelActive = false;
    isLeftSidebarOpen = true;
    isRightSidebarOpen = true;
    isSelectingTarget = false;
    leftSidebarSize = 240;
    rightSidebarSize = 240;
    transitionTime = 152;
    topBarSize = 54;
    updateAppShell = true;
    isDev  = false;
    isAuthorized = true;
    editorKey = 0;
    ads: boolean = true;
    analytics: boolean = true;
    rootEl?: HTMLElement;
    installEvent?: BeforeInstallPromptEvent;
    appInstalled: boolean = false;
    projectDataCustom: ProjectDataCustom = {};
    displayMode: DisplayMode = 'browser';
    projectPlugins: InstallablePlugin[] = [];
    queryParams: Record<string, string> = {};
    isCanvasPanning = false;
    selectedDesignerTab: DesignerTab = 'style';

    constructor(store: Store, initialState?: InitialStoreState<AppEditorStore>) {
        this.store = store;

        initialState && Object.keys(initialState).forEach((key) => {
            const keyId = key as keyof InitialStoreState<AppEditorStore>;
            const value = initialState[keyId];
            if (value !== undefined) {
                // @ts-ignore Have to prevent readonly properties
                this[keyId] = value;
            }
        });

        this.queryParams = parseParamsToObject(window.location.search);
        makeAutoObservable(this, {}, { autoBind: true });
    }

    get projectId() {
        return this.editorConfig.project?.id || this.editorConfig.defaultProject?.id || '';
    }

    get projectIdToLoad() {
        return this.store.localSettingsStore.lastProjectId || this.projectId;
    }

    get isBrowserMode() {
        return this.displayMode === 'browser';
    }

    *init() {
        const { lastProjectId }  = this.store.localSettingsStore;
        const { project, defaultProject } = this.editorConfig;

        let lastProjectData: ProjectData | undefined;
        let projectDataToLoad: ProjectData | undefined;

        if (lastProjectId) {
            const availableProjects: ProjectItem[] = yield loadAvailableProjects();
            lastProjectData = availableProjects.find(p => p.id === lastProjectId);
        }

        if (lastProjectData) {
            projectDataToLoad = lastProjectData;
        } else if (project) {
            projectDataToLoad = project.data;
        } else if (defaultProject) {
            projectDataToLoad = defaultProject.data;
        }

        const customData = projectDataToLoad?.custom || {};
        const projectType = customData.projectType;

        if (projectType) {
            this.projectType = projectType;
        }

        customData.projectType = this.projectType;
        this.setProjectDataCustom({ ...customData, id: this.projectIdToLoad });
        yield this.store.pluginStore.initProjectPlugins(this.projectType);
        this.editorKey++;
    }

    setIsAuthorized(value: boolean) {
        this.isAuthorized = value;
    }

    setInstallEvent(value?: BeforeInstallPromptEvent) {
        this.installEvent = value;
    }

    setAppInstalled(value: boolean) {
        this.appInstalled = value;
    }

    setDisplayMode(value: DisplayMode) {
        this.displayMode = value;
    }

    setProject(project: ProjectItem) {
        const editor = this.editor!;
        this.editorConfig.project = project;
        const id = project.id;
        this.loadProjectData(project.data);
        const storageOptions = editor.Storage.getConfig().options?.local!;
        const key = project.isTemplate ? `${id}__${createId()}` : id;
        storageOptions.key = key;
        // TODO already called from loadProjectData
        this.setProjectDataCustom({
            ...project.data.custom,
            id: key,
        });
    }

    setProjectDataCustom(data: ProjectDataCustom | undefined) {
        const newCustomData = {
            ...this.projectDataCustom,
            ...data || {}
        };
        this.projectDataCustom = newCustomData;

        if (newCustomData.id) {
            updateLocalState({ lastProjectId: newCustomData.id });
        }

        // THIS was from defaultProject;
        // appEditorStore.setProjectDataCustom({
        //     ...data.custom,
        //     projectName: defaultProject.name || 'Untitled'
        // });
    }

    /**
     * Load new GrapesJS JSON (eg. from .grapesjs file)
     */
    loadProjectData(projectData: ProjectData) {
        const editor = this.editor!;
        editor.loadProjectData(projectData);
        editor.UndoManager.clear();
        const custom = projectData.custom || {};
        this.setProjectDataCustom(custom);
    }

    setLeftSidebarSize(value: number) {
        this.leftSidebarSize = value;
    }

    setRightSidebarSize(value: number) {
        this.rightSidebarSize = value;
    }

    setEditor(value: any) {
        this.editor = value;
    }

    setPreview(value: boolean) {
        this.isInPreview = value;
    }

    toggleCssPanel() {
        this.isCssPanelActive = !this.isCssPanelActive;
    }

    toggleLeftSidebar() {
        this.isLeftSidebarOpen = !this.isLeftSidebarOpen;
        this.refreshEditorPostTransition();
    }

    toggleRightSidebar() {
        this.isRightSidebarOpen = !this.isRightSidebarOpen;
        this.refreshEditorPostTransition();
    }

    refreshEditorPostTransition() {
        setTimeout(() => this.editor?.refresh(), this.transitionTime);
    }

    setCanvasPanning(value: boolean) {
        this.isCanvasPanning = value;
    }

    setSelectingTarget(value: boolean) {
        this.isSelectingTarget = value;
    }

    setSelectedDesignerTab(value: DesignerTab) {
        this.selectedDesignerTab = value;
    }

    *updateStudio() {
        const { pluginStore } = this.store;
        const { projectType } = this.projectDataCustom;
        yield pluginStore.initProjectPlugins(projectType!);
        this.editorKey++;
    }
};

export const useAppEditorStore = () => {
    return useStore().appEditorStore;
}

export const getAppEditorStore = () => {
    return getStore().appEditorStore;
}

export const useTransitionEnd = () => {
    const [id, setId] = useState(0);
    const appEditor = useStore().appEditorStore;
    const { transitionTime } = appEditor;

    useEffect(() => {
        setTimeout(() => setId(id => ++id), transitionTime);
    }, [transitionTime]);

    return [id];
}