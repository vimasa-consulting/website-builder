"use client";

import React, { useEffect, useRef } from "react";
import grapesjs from "grapesjs";
import plugin from "grapesjs-preset-webpage"; // Import the preset
import "grapesjs/dist/css/grapes.min.css";
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

function GrapesJSComponent() {
  useEffect(() => {
    const editor = grapesjs.init({
      container: "#gjs",
      fromElement: true, // Whether to load existing HTML from the element
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
    </div>
  );
}

export default GrapesJSComponent;
