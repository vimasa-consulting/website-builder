'use client'
import React, { useEffect, useState } from 'react';
import { getFile } from "@/services/FilesService";
import h337 from "heatmap.js";

export interface NewProjectPayload {
  inputOneData: string;
  inputTwoData: string;
}

export type File = {
  Name: string
  Domain: string
  _id: string
}

export default function Page({ params }: { params: { fileID: string } }) {
  const [fileDataLoaded, setFileDataLoaded] = useState(false);  
  const [hsr, setHsr] = useState<string>()
  const [matomoProjectId, setMatomoProjectId] = useState<string>()
  const fetchFileData = async (fileID: string) => {
    const { data } = await getFile(fileID);    
    console.log(data);
    setFileDataLoaded(true)
    setMatomoProjectId(data.projectinfo?.matomoProjectId)
    setHsr(data.heatmapId);
    //if(!data.heatmapId) {
      setMatomoProjectId('11');
      setHsr('23');
    //}
    var config = {
      container: document.getElementById('heatmapContainer'),
       radius: 10,
       maxOpacity: .5,
       minOpacity: 0,
       blur: .75,
       gradient: {
         // enter n keys between 0 and 1 here
         // for gradient color customization
         '.5': 'blue',
         '.8': 'red',
         '.95': 'white'
       }
     };
    //@ts-ignore
    var heatmapInstance = h337.create(config);
    var point = {
      x: Math.floor(Math.random()*0),
      y: Math.floor(Math.random()*0),
      value: 0
     };
    var points=[point];
    var pointsData = {
      max: 0,
      data: points
    };
    //@ts-ignore
    heatmapInstance.setData(pointsData);
  }
  useEffect(() => {    
    fetchFileData(params.fileID);
   }, []);
  return (
    <>
    {fileDataLoaded &&  <iframe id="heatmapContainer"
        src={`https://development.d13nogs6jpk1jf.amplifyapp.com/matomo/?module=HeatmapSessionRecording&action=embedPage&idSite=${matomoProjectId}&idSiteHsr=${hsr}`} 
        width="1280px" height="100%">          
        </iframe>}     
    </>
  );
}


