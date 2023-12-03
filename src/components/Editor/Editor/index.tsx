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

export default observer(function EditorApp() {
  const { projectType, editorConfig, editorKey, setEditor } = useAppEditorStore();
  const pluginStore = usePluginStore();
  const [gjsOpts, gjsPlugins] = useMemo(() => [
    getEditorOptions(projectType), pluginStore.getPluginsToLoad(projectType),
  ], [projectType, editorKey]);
  const onEditor = (editor: Editor) => {
    setEditor(editor);
    (window as any).editor = editor;    
    const deviceManager = editor.Devices;
    deviceManager.remove("tablet");
    const mobileDevice = deviceManager.get("mobilePortrait");
    //mobileDevice?.set({ width: "400px" });
    const desktopDevice = deviceManager.get("desktop");
    //desktopDevice?.set({ width: "1440px" });

    initCustomBlocks(editor);
    // Test infinite canvas
    editor.onReady(() => {
      editor.Commands.add("publishProject", {      
        run(editor, sender) {
          console.log('publish project');         
        },
        stop() {
          editor.Modal.close();
        },
      });
      
      editor.Commands.add("saveProject", {
        run(editor, sender) {
          // open a popup and pass editor as props?
          console.log('saving project');
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
          //const container = document.querySelector("#customModalPopup");
          editor.Modal.open({
            title: "Persuasive Blocks",
            //content: container,
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
  const plugins=[
    blocksBasicPlugin,
    formsPlugin,
    countdownPlugin,
    exportPlugin,
    tabsPlugin,
    customCodePlugin,
    touchPlugin,
    parserPostCSSPlugin,
    tooltipPlugin,
    tuiImageEditorPlugin,
    typedPlugin,
    styleBGPlugin,
    //presetWebpagePlugin,
    navbar,
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
      <ModalProvider>
        {({ open, title, close, content }) => (
          <Modal open={open} onClose={close} title={title} size="l">
            { content }
          </Modal>
        )}
      </ModalProvider>
      <CanvasSpots/>
      <BuiltInRTE/>
    </GjsEditor>
  );
});
