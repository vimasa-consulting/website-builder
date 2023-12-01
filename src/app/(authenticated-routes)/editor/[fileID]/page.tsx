'use client'

import { useParams } from "next/navigation";
import GrapesJSComponent from "./_components/grapejs";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import { getFile } from "@/services/FilesService";
import "@/styles/editor-legacy.css";

const EditorPage = () => {

  const params = useParams();
  const fileID = params.fileID as string;

  const [editorDataLoaded, setEditorDataLoaded] = useState(false);

  //const location = useLocation();

  // Parse query parameters from the location search string
  //const searchParams = new URLSearchParams(location.search);

  // Access specific query parameters by name
  //const block_sequence:string = searchParams.get('block_sequence')||'';

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
    <div>
      {editorDataLoaded && <GrapesJSComponent fileID={fileID} />}
    </div>
  );
};

export default EditorPage;
