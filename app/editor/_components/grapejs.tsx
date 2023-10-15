"use client";

import React, { useEffect, useRef } from "react";
import grapesjs from "grapesjs";
import plugin from "grapesjs-preset-webpage"; // Import the preset
import "grapesjs/dist/css/grapes.min.css";
import "toastr/build/toastr.min.css";

// plugins import
import gjsForm from "grapesjs-plugin-forms";
import gjsCountdown from "grapesjs-component-countdown";
import gjsPluginExport from "grapesjs-plugin-export";
//@ts-ignore import gjsTabs from "grapesjs-tabs";
import gjsCustomCode from "grapesjs-custom-code";
//@ts-ignore import gjsTouch from "grapesjs-touch";
import gjsParserPostCss from "grapesjs-parser-postcss";
import gjsTooltip from "grapesjs-tooltip";
import gjsImageEditor from "grapesjs-tui-image-editor";
import gjsTyped from "grapesjs-typed";
import gjsStyleBg from "grapesjs-style-bg";

import toastr from "toastr";

function GrapesJSComponent() {
  useEffect(() => {
    var lp = "./img/";
    var plp = "https://via.placeholder.com/350x250/";
    var images = [
      lp + "team1.jpg",
      lp + "team2.jpg",
      lp + "team3.jpg",
      plp + "78c5d6/fff",
      plp + "459ba8/fff",
      plp + "79c267/fff",
      plp + "c5d647/fff",
      plp + "f28c33/fff",
      plp + "e868a2/fff",
      plp + "cc4360/fff",
      lp + "work-desk.jpg",
      lp + "phone-app.png",
      lp + "bg-gr-v.png",
    ];
    const editor = grapesjs.init({
      container: "#gjs",
      fromElement: true,
      showOffsets: true,
      assetManager: {
        embedAsBase64: true,
        assets: images,
      },
      selectorManager: { componentFirst: true },
      // styleManager: {
      //   sectors: [
      //     {
      //       name: "General",
      //       properties: [
      //         {
      //           extend: "float",
      //           type: "radio",
      //           default: "none",
      //           // options: [
      //           //   { value: "none", className: "fa fa-times" },
      //           //   { value: "left", className: "fa fa-align-left" },
      //           //   { value: "right", className: "fa fa-align-right" },
      //           // ],
      //         },
      //         "display",
      //         { extend: "position", type: "select" },
      //         "top",
      //         "right",
      //         "left",
      //         "bottom",
      //       ],
      //     },
      //     {
      //       name: "Dimension",
      //       open: false,
      //       properties: [
      //         "width",
      //         {
      //           id: "flex-width",
      //           type: "integer",
      //           name: "Width",
      //           // units: ["px", "%"],
      //           property: "flex-basis",
      //           toRequire: true,
      //         },
      //         "height",
      //         "max-width",
      //         "min-height",
      //         "margin",
      //         "padding",
      //       ],
      //     },
      //     {
      //       name: "Typography",
      //       open: false,
      //       properties: [
      //         "font-family",
      //         "font-size",
      //         "font-weight",
      //         "letter-spacing",
      //         "color",
      //         "line-height",
      //         {
      //           extend: "text-align",
      //           // options: [
      //           //   { id: "left", label: "Left", className: "fa fa-align-left" },
      //           //   {
      //           //     id: "center",
      //           //     label: "Center",
      //           //     className: "fa fa-align-center",
      //           //   },
      //           //   {
      //           //     id: "right",
      //           //     label: "Right",
      //           //     className: "fa fa-align-right",
      //           //   },
      //           //   {
      //           //     id: "justify",
      //           //     label: "Justify",
      //           //     className: "fa fa-align-justify",
      //           //   },
      //           // ],
      //         },
      //         {
      //           property: "text-decoration",
      //           type: "radio",
      //           default: "none",
      //           // options: [
      //           //   { id: "none", label: "None", className: "fa fa-times" },
      //           //   {
      //           //     id: "underline",
      //           //     label: "underline",
      //           //     className: "fa fa-underline",
      //           //   },
      //           //   {
      //           //     id: "line-through",
      //           //     label: "Line-through",
      //           //     className: "fa fa-strikethrough",
      //           //   },
      //           // ],
      //         },
      //         "text-shadow",
      //       ],
      //     },
      //     {
      //       name: "Decorations",
      //       open: false,
      //       properties: [
      //         "opacity",
      //         "border-radius",
      //         "border",
      //         "box-shadow",
      //         "background", // { id: 'background-bg', property: 'background', type: 'bg' }
      //       ],
      //     },
      //     {
      //       name: "Extra",
      //       open: false,
      //       buildProps: ["transition", "perspective", "transform"],
      //     },
      //     {
      //       name: "Flex",
      //       open: false,
      //       properties: [
      //         {
      //           name: "Flex Container",
      //           property: "display",
      //           type: "select",
      //           defaults: "block",
      //           // list: [
      //           //   { value: "block", name: "Disable" },
      //           //   { value: "flex", name: "Enable" },
      //           // ],
      //         },
      //         {
      //           name: "Flex Parent",
      //           property: "label-parent-flex",
      //           type: "integer",
      //         },
      //         {
      //           name: "Direction",
      //           property: "flex-direction",
      //           type: "radio",
      //           defaults: "row",
      //           // list: [
      //           //   {
      //           //     value: "row",
      //           //     name: "Row",
      //           //     className: "icons-flex icon-dir-row",
      //           //     title: "Row",
      //           //   },
      //           //   {
      //           //     value: "row-reverse",
      //           //     name: "Row reverse",
      //           //     className: "icons-flex icon-dir-row-rev",
      //           //     title: "Row reverse",
      //           //   },
      //           //   {
      //           //     value: "column",
      //           //     name: "Column",
      //           //     title: "Column",
      //           //     className: "icons-flex icon-dir-col",
      //           //   },
      //           //   {
      //           //     value: "column-reverse",
      //           //     name: "Column reverse",
      //           //     title: "Column reverse",
      //           //     className: "icons-flex icon-dir-col-rev",
      //           //   },
      //           // ],
      //         },
      //         {
      //           name: "Justify",
      //           property: "justify-content",
      //           type: "radio",
      //           defaults: "flex-start",
      //           // list: [
      //           //   {
      //           //     value: "flex-start",
      //           //     className: "icons-flex icon-just-start",
      //           //     title: "Start",
      //           //   },
      //           //   {
      //           //     value: "flex-end",
      //           //     title: "End",
      //           //     className: "icons-flex icon-just-end",
      //           //   },
      //           //   {
      //           //     value: "space-between",
      //           //     title: "Space between",
      //           //     className: "icons-flex icon-just-sp-bet",
      //           //   },
      //           //   {
      //           //     value: "space-around",
      //           //     title: "Space around",
      //           //     className: "icons-flex icon-just-sp-ar",
      //           //   },
      //           //   {
      //           //     value: "center",
      //           //     title: "Center",
      //           //     className: "icons-flex icon-just-sp-cent",
      //           //   },
      //           // ],
      //         },
      //         {
      //           name: "Align",
      //           property: "align-items",
      //           type: "radio",
      //           defaults: "center",
      //           // list: [
      //           //   {
      //           //     value: "flex-start",
      //           //     title: "Start",
      //           //     className: "icons-flex icon-al-start",
      //           //   },
      //           //   {
      //           //     value: "flex-end",
      //           //     title: "End",
      //           //     className: "icons-flex icon-al-end",
      //           //   },
      //           //   {
      //           //     value: "stretch",
      //           //     title: "Stretch",
      //           //     className: "icons-flex icon-al-str",
      //           //   },
      //           //   {
      //           //     value: "center",
      //           //     title: "Center",
      //           //     className: "icons-flex icon-al-center",
      //           //   },
      //           // ],
      //         },
      //         {
      //           name: "Flex Children",
      //           property: "label-parent-flex",
      //           type: "integer",
      //         },
      //         {
      //           name: "Order",
      //           property: "order",
      //           type: "integer",
      //           defaults: 0,
      //           min: 0,
      //         },
      //         {
      //           name: "Flex",
      //           property: "flex",
      //           type: "composite",
      //           properties: [
      //             {
      //               name: "Grow",
      //               property: "flex-grow",
      //               type: "integer",
      //               defaults: 0,
      //               min: 0,
      //             },
      //             {
      //               name: "Shrink",
      //               property: "flex-shrink",
      //               type: "integer",
      //               defaults: 0,
      //               min: 0,
      //             },
      //             {
      //               name: "Basis",
      //               property: "flex-basis",
      //               type: "integer",
      //               units: ["px", "%", ""],
      //               unit: "",
      //               defaults: "auto",
      //             },
      //           ],
      //         },
      //         {
      //           name: "Align",
      //           property: "align-self",
      //           type: "radio",
      //           defaults: "auto",
      //           list: [
      //             {
      //               value: "auto",
      //               name: "Auto",
      //             },
      //             {
      //               value: "flex-start",
      //               title: "Start",
      //               className: "icons-flex icon-al-start",
      //             },
      //             {
      //               value: "flex-end",
      //               title: "End",
      //               className: "icons-flex icon-al-end",
      //             },
      //             {
      //               value: "stretch",
      //               title: "Stretch",
      //               className: "icons-flex icon-al-str",
      //             },
      //             {
      //               value: "center",
      //               title: "Center",
      //               className: "icons-flex icon-al-center",
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //   ],
      // },
      plugins: [
        plugin,
        gjsForm,
        gjsCountdown,
        gjsPluginExport,
        gjsCustomCode,
        gjsParserPostCss,
        gjsTooltip,
        gjsImageEditor,
        gjsTyped,
        gjsStyleBg,
      ],
      pluginsOpts: {
        "gjs-blocks-basic": { flexGrid: true },
        "grapesjs-tui-image-editor": {
          script: [
            // 'https://cdnjs.cloudflare.com/ajax/libs/fabric.js/1.6.7/fabric.min.js',
            "https://uicdn.toast.com/tui.code-snippet/v1.5.2/tui-code-snippet.min.js",
            "https://uicdn.toast.com/tui-color-picker/v2.2.7/tui-color-picker.min.js",
            "https://uicdn.toast.com/tui-image-editor/v3.15.2/tui-image-editor.min.js",
          ],
          style: [
            "https://uicdn.toast.com/tui-color-picker/v2.2.7/tui-color-picker.min.css",
            "https://uicdn.toast.com/tui-image-editor/v3.15.2/tui-image-editor.min.css",
          ],
        },
        "grapesjs-tabs": {
          tabsBlock: { category: "Extra" },
        },
        "grapesjs-typed": {
          block: {
            category: "Extra",
            content: {
              type: "typed",
              "type-speed": 40,
              strings: ["Text row one", "Text row two", "Text row three"],
            },
          },
        },
        "grapesjs-preset-webpage": {
          modalImportTitle: "Import Template",
          modalImportLabel:
            '<div style="margin-bottom: 10px; font-size: 13px;">Paste here your HTML/CSS and click Import</div>',
          modalImportContent: function (editor: { getHtml: () => string; getCss: () => string; }) {
            return editor.getHtml() + "<style>" + editor.getCss() + "</style>";
          },
        },
      },
    });
  }, []);

  return (
    <div id="gjs">
      <header className="header-banner">
        <div className="container-width">
          <div className="logo-container">
            <div className="logo">GrapesJS</div>
          </div>
          <nav className="menu">
            <div className="menu-item">BUILDER</div>
            <div className="menu-item">TEMPLATE</div>
            <div className="menu-item">WEB</div>
          </nav>
          <div className="clearfix"></div>
          <div className="lead-title">Build your templates without coding</div>
          <div className="sub-lead-title">
            All text blocks could be edited easily with double clicking on it.
            You can create new text blocks with the command from the left panel
          </div>
          <div className="lead-btn">Hover me</div>
        </div>
      </header>

      <div id="info-panel" className=" hidden">
        <br/>
        <svg className="info-panel-logo" xmlns="https://www.w3.org/2000/svg" version="1"><g id="gjs-logo">
          <path d="M40 5l-12.9 7.4 -12.9 7.4c-1.4 0.8-2.7 2.3-3.7 3.9 -0.9 1.6-1.5 3.5-1.5 5.1v14.9 14.9c0 1.7 0.6 3.5 1.5 5.1 0.9 1.6 2.2 3.1 3.7 3.9l12.9 7.4 12.9 7.4c1.4 0.8 3.3 1.2 5.2 1.2 1.9 0 3.8-0.4 5.2-1.2l12.9-7.4 12.9-7.4c1.4-0.8 2.7-2.2 3.7-3.9 0.9-1.6 1.5-3.5 1.5-5.1v-14.9 -12.7c0-4.6-3.8-6-6.8-4.2l-28 16.2" className="infoPanelLogoInside"/>
        </g></svg>
        <br/>
        <div className="info-panel-label">
          <b>GrapesJS Webpage Builder</b> is a simple showcase of what is possible to achieve with the
          <a className="info-panel-link gjs-four-color" target="_blank" href="https://github.com/artf/grapesjs">GrapesJS</a>
          core library
          <br/><br/>
          For any hint about the demo check the
          <a className="info-panel-link gjs-four-color" target="_blank" href="https://github.com/artf/grapesjs-preset-webpage">Webpage Preset repository</a>
          and open an issue. For problems with the builder itself, open an issue on the main
          <a className="info-panel-link gjs-four-color" target="_blank" href="https://github.com/artf/grapesjs">GrapesJS repository</a>
          <br/><br/>
          Being a free and open source project contributors and supporters are extremely welcome.
          If you like the project support it with a donation of your choice or become a backer/sponsor via
          <a className="info-panel-link gjs-four-color" target="_blank" href="https://opencollective.com/grapesjs">Open Collective</a>
        </div>
      </div>
    </div>
  );
}

export default GrapesJSComponent;
