'use client'
import React, { useEffect, useState } from 'react';
import { getFile, getFileWithHeatmapDataByFileId } from "@/services/FilesService";
import h337 from "heatmap.js";
import $ from 'jquery';

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

  const offset=function(selector:string) {
    var heamapIframe=document.querySelector("#heatmapContainer")
    //@ts-ignore
    const iframeWindow=heamapIframe.contentWindow;
    //@ts-ignore
    const docElem = iframeWindow.document.documentElement;
    var el=iframeWindow.document.querySelector(selector);
    const box = el.getBoundingClientRect();    
    return {
      top: box.top + iframeWindow.pageYOffset - docElem.clientTop,
      left: box.left + iframeWindow.pageXOffset - docElem.clientLeft
    };
  }
   const outerWidth=function(selector:string) {
    var heamapIframe=document.querySelector("#heatmapContainer")
    //@ts-ignore
    const iframeWindow=heamapIframe.contentWindow;
    //@ts-ignore
    const docElem = iframeWindow.document.documentElement;
    var el=iframeWindow.document.querySelector(selector);
    const style = iframeWindow.getComputedStyle(el);
    return (
      el.getBoundingClientRect().width +
      parseFloat(style.marginLeft) +
      parseFloat(style.marginRight)
    );
  }
  const outerHeight=function(selector:string) {
    var heamapIframe=document.querySelector("#heatmapContainer")
    //@ts-ignore
    const iframeWindow=heamapIframe.contentWindow;
    //@ts-ignore
    const docElem = iframeWindow.document.documentElement;
    var el=iframeWindow.document.querySelector(selector);

    const style = iframeWindow.getComputedStyle(el);
    return (
      el.getBoundingClientRect().height +
      parseFloat(style.marginTop) +
      parseFloat(style.marginBottom)
    );
  }
  const getCoordinatesInFrame = function (selector:string, offsetx:number, offsety:number, offsetAccuracy:number, ignoreHiddenElement:boolean,value:number) {
    var $node = $(selector);
    console.log($node);
    var width =  Number(outerWidth(selector));  
    var height = Number(outerHeight(selector));
    console.log(width,height);
    if (ignoreHiddenElement && ignoreHiddenElement === true && width === 0 || height === 0 || !$node.is(':visible')) {
        // not visible
        console.log('here?');
        return;
    }

    var width = width / offsetAccuracy;
    var height = height / offsetAccuracy;
    var coordinates:any = offset(selector)||{};

    var dataPoint = {
        x: parseInt(coordinates.left, 10) + parseInt(String(offsetx * width), 10),
        y: parseInt(coordinates.top, 10) + parseInt(String(offsety * height), 10),
        value: value
    }
    console.log('here??');
    return dataPoint;
};
  const fetchFileData = async (fileID: string) => {
    const { data } = await getFile(fileID);    

    setFileDataLoaded(true)
    setMatomoProjectId(data.projectinfo?.matomoProjectId)
    setHsr(data.heatmapId);
    //if(!data.heatmapId) {
      setMatomoProjectId('11');
      setHsr('23');
    //}
    const response:any = await getFileWithHeatmapDataByFileId('11','23');    
    var pointsdata=response.data;
    var points=[];
    for(var index=0;index<pointsdata.length;index++){
      const point=pointsdata[index];
      let converted=getCoordinatesInFrame(point.selector,point.offset_x,point.offset_y,2000,false,point?.value);
      console.log(point,converted);
      points.push(converted);
    }
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
    var pointsData = {      
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
      <iframe id="heatmapContainer"
        src={`https://development.d13nogs6jpk1jf.amplifyapp.com/matomo/?module=HeatmapSessionRecording&action=embedPage&idSite=${matomoProjectId}&idSiteHsr=${hsr}`} 
        width="1280px" height="100%">          
        </iframe> 
    </>
  );
}


