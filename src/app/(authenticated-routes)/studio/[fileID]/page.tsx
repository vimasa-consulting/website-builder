'use client'

import { useParams } from "next/navigation";
import GrapesJSComponent from "./_components/grapejs";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import { getFile } from "@/services/FilesService";
import EditorApplication, { AppProps } from "@/components/Editor/Editor/EditorApplication";
import { isString } from "@/components/utils";

const EditorPage = ({ options }:AppProps) => {

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
    fetchEditorData(fileID);
  }, [fileID])

  return (
    <div id="root">
      {editorDataLoaded && <EditorApplication options={options}/>}
    </div>
  );
};

export default EditorPage;
