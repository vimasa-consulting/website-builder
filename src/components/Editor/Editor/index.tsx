import GjsEditor, { AssetsProvider, Canvas, ModalProvider, WithEditor } from '@grapesjs/react';
import { grapesjs, type Editor, PropertyProps } from "grapesjs";
import { observer } from 'mobx-react-lite';
import { useMemo, useEffect, useState } from 'react';
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
import plugin from 'grapesjs-google-material-icons';

//import plugin from '@silexlabs/grapesjs-fonts';
//@ts-ignore
import type { PluginOptions } from 'grapesjs-icons'
import { publishFile, updateFile, getFile } from "@/services/FilesService";
import { updateProject } from '@/services/ProjectsService';
import { getStore } from '@/components/store';
import SavePopupContent from './SavePopupContent';
import CheckMark from './CheckMark';
import { Project } from '@/types/project';
import SlackAndHelp from './SlackAndHelp';
export interface AppProps {
  fileID: string
};
export default observer(function EditorApp({ fileID }: AppProps) {
  const [showPersuasiveBlocks, setShowPersuasiveBlocks] = useState(false)
  const [showSlackAndHelp, setShowSlackAndHelp] = useState(true);
  const { appEditorStore, blockManagerStore, layerManagerStore } = getStore()
  const { projectType, editorConfig, editorKey, setEditor, editor } = useAppEditorStore();
  const pluginStore = usePluginStore();
  const [gjsOpts, gjsPlugins] = useMemo(() => [
    getEditorOptions(projectType), pluginStore.getPluginsToLoad(projectType),
  ], [projectType, editorKey]);

  const onEditor = (editor: Editor) => {
    initCustomBlocks(editor);
    const matomoProjectId = localStorage.getItem(`wb-${fileID}-matomo_projectid`);
    editor.Commands.add("publishProject", {
      run(editor, sender) {
        console.log('publish project');
        // open a popup and pass editor as props?
        // const container = document.querySelector("#customModalPopup");
        const savePopupContent = document.querySelector("#savePopupContent")
        const checkMarkContent = document.querySelector("#checkMarkContent")
        const popupSubTitle = savePopupContent?.querySelector(".savePopupSubTitle")
        const checkmarkSubTitle = checkMarkContent?.querySelector(".savePopupSubTitle")
        if (popupSubTitle && checkmarkSubTitle) {
          popupSubTitle.textContent = "On our way to publish your content"
          checkmarkSubTitle.textContent = "On our way to publish your content"
        }
        editor.Modal.open({
          title: "Publishing",
          content: savePopupContent,
        }).onceClose(() => editor.stopCommand("publishProject"));
        // build html content
        const htmlBody = editor.getHtml();
        const cssBody = editor.getCss();
        const fullHTML = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0" >
            <style>${cssBody}</style>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&v=1704404084845"/>
            <link rel="stylesheet"  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&v=1704404087635"/>
            <link rel="stylesheet"  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&v=1704404089108"/>
            <!-- Matomo -->
            <script>
              var _paq = window._paq = window._paq || [];
              /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
              _paq.push(['trackPageView']);
              _paq.push(['enableLinkTracking']);
              (function() {
                var u="https://aayushsoftwarescom.matomo.cloud/";
                _paq.push(['setTrackerUrl', u+'matomo.php']);
                _paq.push(['setSiteId', '${matomoProjectId}']);
                var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
                g.async=true; g.src='//cdn.matomo.cloud/aayushsoftwarescom.matomo.cloud/matomo.js'; s.parentNode.insertBefore(g,s);
              })();
              document.querySelectorAll('a').forEach(function(item) { 
                item.onclick=function() { 
                    _paq.push(['trackEvent', 'Click', item.innerText, item.attributes.href,1]);
                } 
              });
            </script>
            <!-- End Matomo Code -->

          </head>
          ${htmlBody}
        </html>`;
        // publish file
        publishFile({
          _id: fileID,
          //builderData: JSON.stringify(editor.getProjectData()),
          htmlString: fullHTML,
        }).then(() => {
          editor.Modal.setContent(checkMarkContent as HTMLElement);
          setTimeout(function () {
            editor.Modal.close();
          }, 2000)

        }).catch((error) => {
          console.log('Failed to publish', error);
        });
      },
      stop() {
        editor.Modal.close();
      },
    });

    editor.on('component:selected', (component) => {
      if(!blockManagerStore.isOpen && !appEditorStore.isInPreview){
        blockManagerStore.toggleOpen();
      }        
      // Your update logic here
      console.log('Component selected:', component);
      // console.log('Component selected:', editor);
      //grapesjs.editors[0] = editor
      //setEditor(editor)
      // Update your editor instance or perform other actions
    });

    editor.Commands.add("saveProject", {
      run(editor, sender) {
        // open a popup and pass editor as props?
        console.log('saving project');
        const savePopupContent = document.querySelector("#savePopupContent")
        const checkMarkContent = document.querySelector("#checkMarkContent")
        editor.Modal.open({
          title: "Saving",
          content: savePopupContent,
        })
          .onceClose(() => editor.stopCommand("saveProject"));
        // save file
        //@ts-ignore
        let updatedProject: Project = JSON.parse(localStorage.getItem(`wb-${fileID}-project`));
        updatedProject.name=String(localStorage.getItem(`wb-active-filename`));
        updateProject(updatedProject).then(() => {
          updateFile({
            _id: fileID,
            //name: localStorage.getItem(`wb-active-filename`) || '',
            builderData: JSON.stringify(editor.getProjectData())
          }).then(() => {
            editor.Modal.setContent(checkMarkContent as HTMLElement);
            setTimeout(function () {
              editor.Modal.close();
            }, 2000)
  
          }).catch((error: any) => {
            console.log('Failed to save', error);
          });          
        });
      },
      stop() {
        editor.Modal.close();
      },
    });

    editor.Commands.add("openProjectUrl", {
      run(editor, sender) {
        // open a popup and pass editor as props?
        console.log('opening project url in a new tab');
        /*editor.Modal.open({
          title: "Saving",
          content: 'Please wait!',
        }).onceClose(() => editor.stopCommand("saveProject"));*/
        // save file
        getFile(fileID).then((response) => {
          console.log(response);
          if (response.data) {
            var data = response.data;
            if (data.slug) {
              const url = `https://${data.projectinfo._id}.aayushsoftwares.com/${data.slug}/`;
              window.open(url, "_blank");
            } else {
              const url = `https://${data.projectinfo._id}.aayushsoftwares.com/`;
              window.open(url, "_blank");
            }
          }
          //editor.Modal.close();
        }).catch((error: any) => {
          //console.log('Failed to save', error);
        });
      },
      stop() {
        //editor.Modal.close();
      },
    });

    editor.Commands.add("core:preview", {
      run(editor, sender) {
        appEditorStore.setLeftSidebarSize("0px");
        appEditorStore.setPreview(true);
        blockManagerStore.setOpen(false);
        appEditorStore.setSelectingTarget(true)
        layerManagerStore.setOpen(false);
        setShowSlackAndHelp(false);
      },
      stop() {
        appEditorStore.setLeftSidebarSize("300px");
        appEditorStore.setPreview(false);
        appEditorStore.setSelectingTarget(false);
        layerManagerStore.setOpen(true);
        setShowSlackAndHelp(true);
      },
    });

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
        setShowPersuasiveBlocks(true)
        editor.Modal.open({
          title: "Persuation Blocks",
          content: container,
        }).onceClose(() => editor.stopCommand("openPersuasiveBlocks"));
      },
      stop() {
        editor.Modal.close();
      },
    });
    const styleManager = editor.StyleManager;
    var fonts = styleManager.getProperty("typography", "font-family");
    // @ts-ignore
    var fontOptions = fonts?.attributes?.options;
    fontOptions.push({ id: "Inter, sans-serif", label: "Inter" });
    //console.log(fontOptions);
    // @ts-ignore
    fonts?.set("options", fontOptions);
    /*
    const item:any=localStorage.getItem(`gjsFile-${fileID}`)  
    if(item){
      const landingProject=JSON.parse(item);
      editor.loadProjectData(landingProject);
      editor.UndoManager.clear()  
    }    
    */
    const item: any = localStorage.getItem(`wb-${fileID}`)
    if (item) {
      const landingProject = JSON.parse(item);
      editor.loadProjectData(landingProject);
      editor.UndoManager.clear()
    } else {
      const url = new URL(window.location.href);
      const block_sequence = url.searchParams.get("block_sequence") || "";
      const blocks = atob(block_sequence).split(",");
      blocks.forEach((item) => {
        //console.log(item.trim());
        editor.addComponents({ type: item.trim() });
      });
    }
    setEditor(editor);
    (window as any).editor = editor;
    const deviceManager = editor.Devices;
    deviceManager.remove("tablet");
    deviceManager.remove("mobileLandscape");
    const mobileDevice = deviceManager.get("mobilePortrait");
    mobileDevice?.set({ width: "400px" });
    const desktopDevice = deviceManager.get("desktop");
    //desktopDevice?.set({ width: "1440px" });


    // Test infinite canvas
    editor.onReady(() => {

      /*if(editor.getComponents().length<2){
        const url = new URL(window.location.href);
        const block_sequence = url.searchParams.get("block_sequence") || "";
        const blocks = atob(block_sequence).split(",");
        blocks.forEach((item) => {
          console.log(item.trim());
          editor.addComponents({ type: item.trim() });
        });
      }*/

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

  const iconPluginOptions: PluginOptions = {
    // see https://icon-sets.iconify.design/
    collections: [
      'ri', // Remix Icon by Remix Design,
      'mdi', // Material Design Icons by Pictogrammers
      'uim', // Unicons Monochrome by Iconscout
      'streamline-emojis' // Streamline Emojis by Streamline
    ],
    modal: {
      title: 'Icons'
    }
  }
  const fontPluginOptions: PluginOptions = {
    api_key: "AIzaSyAdJTYSLPlKz4w5Iqyy-JAF2o8uQKd1FKc"
  };
  const iconPluginOptions2: PluginOptions = {
  }
  const plugins = [
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
    //@ts-ignore
    usePlugin(plugin,iconPluginOptions2),
    //usePlugin(grapesjsIcons, iconPluginOptions),
    //usePlugin(plugin, iconPluginOptions),
    //usePlugin(plugin, fontPluginOptions)    
    // TODO: Undo once fixed
    // lorySlider,
    // table,
  ];

  const disablePreviewMode = () => {
    editor?.Commands.stop('core:preview')
  }

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
        {<EditorLeftSidebar />}
        {<EditorRightSidebar />}
        <GridItem grow>
          <Grid className="relative" col full>
            <EditorTopbar />
            {
              showSlackAndHelp && 
              <SlackAndHelp setShowSlackAndHelp={setShowSlackAndHelp} />
            }
            <GridItem grow>
              <Canvas className="gjs-editor-wrapper relative bg-gray-50 dark:bg-zinc-800">
                <WithEditor>

                </WithEditor>
              </Canvas>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
      <BlockManagerContainer />
      <AssetsProvider>
        {({ assets, select, close, Container }) => (
          <Container>
            <AssetManager assets={assets} select={select} close={close} />
          </Container>
        )}
      </AssetsProvider>
      {/* <ModalProvider>
        {({ open, title, close, content }) => (
          <Modal open={open} onClose={close} title={title} size="l">
            { content }
          </Modal>
        )}
        </ModalProvider> */}
      {
        editor?.Components &&
        <BlockSearchPopup grapeJSEditor={editor} />
      }
      <CanvasSpots />
      {
        !appEditorStore.isInPreview && <BuiltInRTE />
      }
      {
        appEditorStore.isInPreview && <button onClick={disablePreviewMode} className='z-100 absolute top-[1px] left-[15px] w-[30px] h-[30px] previewIcon'><img className='z-111 absolute cursor-pointer' width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/hide.png" alt="hide" /></button>
      }
      <div style={{ display: 'none' }}>
        <SavePopupContent />
        <CheckMark />
      </div>
    </GjsEditor>
  );
});
