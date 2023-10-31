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
      blockManager: {
        blocks: [
          {
            category: 'First Impression',
            id: 'section',
            label: '<b>Section</b>',
            attributes: { class:'gjs-block-section' },
            content: `<section>
              <h1>This is a simple title</h1>
              <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
            </section>`,
            media: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sign-intersection-fill" viewBox="0 0 16 16">
            <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435ZM7.25 4h1.5v3.25H12v1.5H8.75V12h-1.5V8.75H4v-1.5h3.25V4Z"/>
          </svg>`,
          }, 
          {
            category: 'First Impression',
            id: 'section2',
            label: '<b>Second section</b>',
            attributes: { class:'gjs-block-section' },
            content: `<section>
              <h1>This is a simple title</h1>
              <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
            </section>`,
            media: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bar-chart" viewBox="0 0 16 16">
            <path d="M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5v12h-2V2h2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z"/>
          </svg>`,
          },
          {
            category: 'Logic',
            id: 'text',
            label: 'Text',
            content: '<div data-gjs-type="text">Insert your text here</div>',
            media: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
            <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
            <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
          </svg>`
          }, 
          {
            category: 'Emotion',
            id: 'image',
            label: 'Image',
            select: true,
            content: { type: 'image' },
            activate: true,
            media: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-basket-fill" viewBox="0 0 16 16">
            <path d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717L5.07 1.243zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3z"/>
          </svg>`
          },
          {
            category: 'Urgency',
            id: 'Section Two',
            label: '<b>Section</b>',
            attributes: { class:'gjs-block-section' },
            content: `<section>
              <h1>This is a simple title</h1>
              <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
            </section>`,
            media: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sign-intersection-fill" viewBox="0 0 16 16">
            <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435ZM7.25 4h1.5v3.25H12v1.5H8.75V12h-1.5V8.75H4v-1.5h3.25V4Z"/>
          </svg>`,
          }, {
            category: 'Value',
            id: 'text two',
            label: 'Text',
            content: '<div data-gjs-type="text">Insert your text here</div>',
            media: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
            <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
            <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
          </svg>`
          }, {
            category: 'Trust',
            id: 'image two',
            label: 'Image',
            select: true,
            content: { type: 'image' },
            activate: true,
            media: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sign-intersection-fill" viewBox="0 0 16 16">
            <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435ZM7.25 4h1.5v3.25H12v1.5H8.75V12h-1.5V8.75H4v-1.5h3.25V4Z"/>
          </svg>`,
          }, {
            category: 'Brand Connect',
            id: 'text three',
            label: 'Text',
            content: '<div data-gjs-type="text">Insert your text here</div>',
            media: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
            <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
            <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
          </svg>`
          }, {
            category: 'User Actions',
            id: 'image three',
            label: 'Image',
            select: true,
            content: { type: 'image' },
            activate: true,
            media: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sign-intersection-fill" viewBox="0 0 16 16">
            <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435ZM7.25 4h1.5v3.25H12v1.5H8.75V12h-1.5V8.75H4v-1.5h3.25V4Z"/>
          </svg>`,
          }

        ]
      },
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
    // editor.Blocks.get('section').set({ 
    //   media: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sign-intersection-fill" viewBox="0 0 16 16">
    //   <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435ZM7.25 4h1.5v3.25H12v1.5H8.75V12h-1.5V8.75H4v-1.5h3.25V4Z"/>
    // </svg>`,
    //  })
  }, []);



  return (
    <>
    <div id="gjs">
      {/* <header className="header-banner">
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
      </header> */}
    </div>
    </>
  );
}

export default GrapesJSComponent;
