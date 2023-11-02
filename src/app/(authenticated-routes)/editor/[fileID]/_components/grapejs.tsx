'use client'

import React, { useState } from 'react';
import GjsEditor from '@grapesjs/react';
import { grapesjs, type Editor } from 'grapesjs';
import "grapesjs/dist/css/grapes.min.css";
import blocksBasicPlugin from 'grapesjs-blocks-basic';
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

// import styles from '@/styles/grapejs.module.css';
import CustomBlockPopup from "@/components/Editor/CustomBlockPopup";
import firstImpressionMapping from "@/components/Editor/CustomBlocks/FirstImpression/firstImpressionMapping";
import customBlockMapping from "@/components/Editor/CustomBlocks/customBlockMapping";
import logicMapping from "@/components/Editor/CustomBlocks/Logic/logicMapping";
import emotionMapping from "@/components/Editor/CustomBlocks/Emotion/emotionMapping";
import urgencyMapping from "@/components/Editor/CustomBlocks/Urgency/urgencyMapping";
import valueMapping from "@/components/Editor/CustomBlocks/Value/valueMapping";
import trustMapping from "@/components/Editor/CustomBlocks/Trust/trustMapping";
import brandConnectMapping from "@/components/Editor/CustomBlocks/BrandConnect/brandConnectMapping";
import userActionsMapping from "@/components/Editor/CustomBlocks/UserActions/userActionsMapping";
import { BlockDetails } from "@/types/blockDetails";

export interface BlockOptions {
  label: string;
  key: string;
  content: string;
}

function getBlockOptions(blockType: string) {
  switch (blockType) {
    case 'First Impression':
      return firstImpressionMapping
    case 'Logic':
      return logicMapping
    case 'Emotion':
      return emotionMapping
    case 'Urgency':
      return urgencyMapping
    case 'Value':
      return valueMapping
    case 'Trust':
      return trustMapping
    case 'Brand Connect':
      return brandConnectMapping
    case 'User Actions':
      return userActionsMapping
    default:
      return firstImpressionMapping
  }
}

export default function GrapesJSComponent() {
  const [isAddNewProjectModalOpen, setIsAddNewProjectModalOpen] = useState(false);
  const [blockDetails, setBlockDetails] = useState<BlockDetails | null>(null);
  const [grapeJSEditor, setGrapeJSEditor] = useState<Editor | null>(null);
  const [blockOptions, setBlockOptions] = useState<BlockOptions[]>([]);

  const onEditor = (editor: Editor) => {

    editor.on('block', function (event) {
      if (event.model && event.event === "block:drag:stop") {
        const options = getBlockOptions(event?.options?.attributes?.id)
        setBlockOptions(options)
        console.log('block event', event)
        setBlockDetails(event?.options?.attributes)
        setIsAddNewProjectModalOpen(true)
      }
    });

    editor.on('block:add', function (event) {
      if (event?.option?.content) {
        editor.addComponents(event.option.content)
      }
      setIsAddNewProjectModalOpen(false)
      setBlockDetails(null)
      setBlockOptions([])
    });

    setGrapeJSEditor(editor)

  };

  return (
    <>
      <GjsEditor
        grapesjs={grapesjs}
        // grapesjsCss="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
        options={{
          height: '100vh', // TODO: fix bad height
          storageManager: false, // check persistance per file id & remove
          blockManager: {
            blocks: customBlockMapping
          },
        }}
        plugins={[
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
          presetWebpagePlugin
        ]}
        onEditor={onEditor}
      />
      {
        isAddNewProjectModalOpen &&
        <CustomBlockPopup
          onClose={() => setIsAddNewProjectModalOpen(false)}
          grapeJSEditor={grapeJSEditor}
          blockDetails={blockDetails}
          blockOptions={blockOptions}
        />
      }
    </>
  );
}