"use client"

import React, { useEffect, useRef } from 'react';
import grapesjs from 'grapesjs';
import plugin from 'grapesjs-preset-webpage'; // Import the preset
import 'grapesjs/dist/css/grapes.min.css';


function GrapesJSComponent() {

  useEffect(() => {
    const editor = grapesjs.init({
      container: "#gjs",
      fromElement: true, // Whether to load existing HTML from the element
      plugins: [plugin], // Include the preset
    });
  }, []);

  return <div id="gjs">Hello World</div>;
}

export default GrapesJSComponent;
