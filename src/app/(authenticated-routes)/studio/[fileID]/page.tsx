"use client"
import EditorApplication, { CreateEditorOptions } from '@/components/Editor/Editor/EditorApplication';
import React, { useEffect, useState } from 'react';
import { useParams } from "next/navigation";
import { getFile } from "@/services/FilesService";
import '../../../../styles/studio.css'

const createGjsEditor = () => {
    const rootEl = document.querySelector("#editor")
  
    if (!rootEl) return console.error('Root element not found', rootEl);
  };

const EditorPage = () => {
  const [editor, setEditor] = useState<any>()
  const params = useParams();
  const fileID = params.fileID as string;
  
  const [editorDataLoaded, setEditorDataLoaded] = useState(false);
  const fetchEditorData = async (fileID: string) => {
    const { data } = await getFile(fileID);
    // update local storage    
    localStorage.setItem(`gjsFile-${fileID}`, data.builderData || '')
    setEditorDataLoaded(true);
  }
      
  useEffect(() => {
   const editorElement =  createGjsEditor();
   fetchEditorData(fileID);
   setEditor(editorElement)
  }, []);

  return (
    <div>
      <div id="editor"></div>
      <EditorApplication options={editor} fileID={fileID}/>
    </div>
  );
};

export default EditorPage;
