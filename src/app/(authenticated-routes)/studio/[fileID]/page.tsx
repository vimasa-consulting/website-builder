"use client"
import EditorApplication, { CreateEditorOptions } from '@/components/Editor/Editor/EditorApplication';
import React, { useEffect, useState } from 'react';
import '../../../../styles/studio.css'

const createGjsEditor = () => {
    const rootEl = document.querySelector("#editor")
  
    if (!rootEl) return console.error('Root element not found', rootEl);
  };

const EditorPage = () => {
    const [editor, setEditor] = useState<any>()
    
  useEffect(() => {
   const editorElement =  createGjsEditor();
   setEditor(editorElement)
  }, []);

  return (
    <div>
      <div id="editor"></div>
      <EditorApplication options={editor} />
    </div>
  );
};

export default EditorPage;
