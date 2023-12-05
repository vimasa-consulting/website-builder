import { landingPageProject } from '../Modal/contents/ProjectManager';
import AppWrapper from '../AppWrapper';
import { StoreProvider, StoreProviderProps } from './../../store';
import { getLocalState } from './../../utils/localState';
import { ProjectItem, ProjectType } from './../../utils/types';
import EditorPage from './EditorPage';
import { ProjectData } from 'grapesjs';

export interface CreateEditorOptions {
  /**
   * Root element on which to mount the editor.
   */
  root: string | HTMLElement;

  /**
   * Enable service worker.
   */
  serviceWorker?: boolean;

  /**
   * Enable debug mode.
   * @private
   */
  debug?: boolean,

  /**
   * CDN URL for the GrapesJS JS file.
   * @example 'https://unpkg.com/grapesjs@0.20.3'
   */
  gjsScript?: string,

  /**
   * CDN URL for the GrapesJS CSS file.
   * @example 'https://unpkg.com/grapesjs@0.20.3/dist/css/grapes.min.css'
   */
  gjsStyle?: string,
};

export interface AppProps {
  options: CreateEditorOptions
  fileID: string
};

const GJS_VERSION = '0.21.7';

function EditorApplication({ options, fileID}: AppProps) {  
  const isDev = process.env.NODE_ENV !== 'production';
  const initialState: StoreProviderProps['initialState'] = {
    localSettingsStore: getLocalState(),
    appEditorStore: {
      isDev,      
      projectType: ProjectType.web,
      rootEl: document.querySelector("#root") as HTMLElement,
      updateAppShell: true,
      editorConfig: {
        defaultProject: landingPageProject,
        gjsScript: `https://unpkg.com/grapesjs@${GJS_VERSION}/grapes.min.js`,
        gjsStyle: `/unpkg.com/grapesjs@${GJS_VERSION}/dist/css/grapes.min.css`,
      }
    },
  };

  return (
    <StoreProvider initialState={initialState}>
      <AppWrapper>
        <EditorPage fileID={fileID}/>
        <div id="headlessui-portal-root">
          {/*
              This is necessary to make modals work in fullscreen mode.
              It needs at least one child, so that HeadlessUI doesn't remove this portal root workaround:
              ( https://github.com/tailwindlabs/headlessui/blob/main/packages/@headlessui-react/src/components/portal/portal.tsx#L84 )
          */}
          <div />
        </div>
      </AppWrapper>
    </StoreProvider>
  );
}

export default EditorApplication;
