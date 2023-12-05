import GjsEditor, { AssetsProvider, Canvas, ModalProvider } from '@grapesjs/react';
import { grapesjs, type Editor, PropertyProps } from "grapesjs";
import { observer } from 'mobx-react-lite';
import { useMemo } from 'react';
import { useAppEditorStore } from "../../store/appEditorStore";
import { usePluginStore } from '../../store/pluginStore';
import cx from '../../utils/makeCls';
import AssetManager from '../AssetManager';
import BlockManagerContainer from "../BlockManager/container";
import CanvasSpots from '../CustomCanvasSpot/CanvasSpots';
import Grid from "../Grid";
import GridItem from "../GridItem";
import Modal from "../Modal";
import { br, cl } from "../theme";
import BuiltInRTE from './BuiltInRTE';
import EditorLeftSidebar from "./EditorLeftSidebar";
import EditorRightSidebar from "./EditorRightSidebar";
import EditorTopbar from "./EditorTopbar";
import { getEditorOptions } from "./editorOptions";
import initCustomBlocks from "@/components/Editor/CustomBlocks/initialization";
import blocksBasicPlugin from "grapesjs-blocks-basic";
import formsPlugin from "grapesjs-plugin-forms";
import countdownPlugin from "grapesjs-component-countdown";
import exportPlugin from "grapesjs-plugin-export";
// @ts-ignore
import tabsPlugin from "grapesjs-tabs";
import customCodePlugin from "grapesjs-custom-code";
// @ts-ignore
import touchPlugin from "grapesjs-touch";
import parserPostCSSPlugin from "grapesjs-parser-postcss";
import tooltipPlugin from "grapesjs-tooltip";
import tuiImageEditorPlugin from "grapesjs-tui-image-editor";
import typedPlugin from "grapesjs-typed";
import styleBGPlugin from "grapesjs-style-bg";
import presetWebpagePlugin from "grapesjs-preset-webpage";
import navbar from "grapesjs-navbar";
import BlockSearchPopup from '../BlockSearchPopup';
import { usePlugin } from 'grapesjs'
import grapesjsIcons from 'grapesjs-icons'
//@ts-ignore
import type { PluginOptions } from 'grapesjs-icons'
import { publishFile, updateFile } from "@/services/FilesService";
export interface AppProps {    
  fileID: string
};
export default observer(function EditorApp({fileID}: AppProps) {
  const { projectType, editorConfig, editorKey, setEditor } = useAppEditorStore();
  const pluginStore = usePluginStore();
  const [gjsOpts, gjsPlugins] = useMemo(() => [
    getEditorOptions(projectType), pluginStore.getPluginsToLoad(projectType),
  ], [projectType, editorKey]);
  const onEditor = (editor: Editor) => {    
    const item:any=localStorage.getItem(`gjsFile-${fileID}`)  
    const landingProject=JSON.parse(item);
    editor.loadProjectData(landingProject);
    editor.UndoManager.clear();
        
    setEditor(editor);
    (window as any).editor = editor;    
    const deviceManager = editor.Devices;
    deviceManager.remove("tablet");
    const mobileDevice = deviceManager.get("mobilePortrait");
    mobileDevice?.set({ width: "400px" });
    const desktopDevice = deviceManager.get("desktop");
    desktopDevice?.set({ width: "1440px" });

    initCustomBlocks(editor);
    // Test infinite canvas
    editor.onReady(() => {
      editor.Commands.add("publishProject", {      
        run(editor, sender) {
          console.log('publish project');    
          // open a popup and pass editor as props?
          // const container = document.querySelector("#customModalPopup");
          editor.Modal.open({
            title: "Publishing",
            content: 'Please wait!',
          }).onceClose(() => editor.stopCommand("publishPage"));
          // build html content
          const htmlBody = editor.getHtml();
          const cssBody = editor.getCss();
          const fullHTML = `
          <!DOCTYPE html>
          <html>
            <head>
              <meta name="viewport" content="width=device-width, initial-scale=1.0" >
              <style>${cssBody}</style>
            </head>
            ${htmlBody}
          </html>`;
          // publish file
          publishFile({
            _id: fileID,
            builderData: JSON.stringify(editor.getProjectData()),
            htmlString: fullHTML,
          }).then(() => {
            editor.Modal.close();
          }).catch((error) => {
            console.log('Failed to publish', error);
          });     
        },
        stop() {
          editor.Modal.close();
        },
      });
      
      editor.Commands.add("saveProject", {
        run(editor, sender) {
          // open a popup and pass editor as props?
          console.log('saving project');
          editor.Modal.open({
            title: "Saving",
            content: 'Please wait!',
          }).onceClose(() => editor.stopCommand("savePage"));
          // save file
          updateFile({
            _id: fileID,
            builderData: JSON.stringify(editor.getProjectData())
          }).then(() => {
            editor.Modal.close();
          }).catch((error:any) => {
            console.log('Failed to save', error);
          });
        },
        stop() {
          editor.Modal.close();
        },
      });
      const projectId="dummy-project";
      /*editor.Storage.add('remote', {
        async load() {
          return await axios.get(`projects/${projectId}`);
        },
      
        async store(data) {
          return await axios.patch(`projects/${projectId}`, { data });
        },
      });*/
      
      editor.Commands.add("openPersuasiveBlocks", {
        run(editor, sender) {
          // open a popup and pass editor as props?
          const container = document.querySelector("#customModalPopup");
          editor.Modal.open({
            title: "Persuasive Blocks",
            content: container,
          }).onceClose(() => editor.stopCommand("openPersuasiveBlocks"));
        },
        stop() {
          editor.Modal.close();
        },
      });
      // editor.Canvas.setZoom(70);
      // editor.Canvas.setCoords(-30, -30);
      // const firstFrame = editor.Canvas.getFrames()[0];
      // // Multi frames
      // editor.Canvas.addFrame({
      //   name: 'Mobile home page',
      //   x: firstFrame.width + 100, // Position in canvas
      //   // y: 0,
      //   width: 320, // Frame dimensions
      //   height: 420,
      //   refFrame: firstFrame,
      //   // device: 'DEVICE-ID',
      // });
      // editor.Canvas.fitViewport({ ignoreHeight: true, gap: 50 });
    });
  }

const options: PluginOptions = {
  // see https://icon-sets.iconify.design/
  collections: [
    'ri', // Remix Icon by Remix Design,
    'mdi', // Material Design Icons by Pictogrammers
    'uim', // Unicons Monochrome by Iconscout
    'streamline-emojis' // Streamline Emojis by Streamline
  ]
}
  const plugins=[
    blocksBasicPlugin,
    formsPlugin,
    countdownPlugin,
    exportPlugin,
    //tabsPlugin,
    customCodePlugin,
    touchPlugin,
    parserPostCSSPlugin,
    tooltipPlugin,
    tuiImageEditorPlugin,
    //typedPlugin,
    styleBGPlugin,
    //presetWebpagePlugin,
    navbar,
    usePlugin(grapesjsIcons, options)
    // TODO: Undo once fixed
    // lorySlider,
    // table,
  ];

  return (
    <GjsEditor
      key={editorKey}
      className={cx('app-editor h-full w-full', br.b, cl.br)}
      grapesjs={grapesjs}
      //grapesjs={editorConfig.gjsScript!}
      grapesjsCss={editorConfig.gjsStyle}
      options={gjsOpts}
      plugins={plugins}
      onEditor={onEditor}    
    >
      <Grid className="h-full overflow-hidden">
        <EditorLeftSidebar />
        <GridItem grow>
          <Grid className="relative" col full>
            <EditorTopbar />
            <GridItem grow>
              <Canvas className="app-canvas relative bg-gray-50 dark:bg-zinc-800">
                {/* <WithEditor>
                  <CanvasDebug/>
                </WithEditor> */}
              </Canvas>
            </GridItem>
          </Grid>
        </GridItem>
        <EditorRightSidebar />
      </Grid>
      <BlockManagerContainer/>
      <AssetsProvider>
        {({ assets, select, close, Container }) => (
          <Container>
            <AssetManager assets={assets} select={select} close={close}/>
          </Container>
        )}
      </AssetsProvider>
      {/* <ModalProvider>
        {({ open, title, close, content }) => (
          <Modal open={open} onClose={close} title={title} size="l">
            { content }
          </Modal>
        )}
        </ModalProvider>*/}
      <CanvasSpots/>
      <BuiltInRTE/>
    </GjsEditor>
  );
});
