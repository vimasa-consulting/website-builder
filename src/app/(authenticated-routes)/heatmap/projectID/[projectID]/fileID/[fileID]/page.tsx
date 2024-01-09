'use client'
import React, { useEffect, useState } from 'react';
import { getFile, getFileWithHeatmapDataByFileId } from "@/services/FilesService";
import h337 from "heatmap.js";
import $ from 'jquery';
import ToggleComponent from '@/components/Heatmap/ToggleButton';

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
  const [heatmapInstance, setHeatmapInstance] = useState(null);  
  const [hsr, setHsr] = useState<string>('23')
  const [matomoProjectId, setMatomoProjectId] = useState<string>('11')
  const [isMobileView, setIsMobileView] = useState(false);
  const [iframeHeight, setIframeHeight] = useState('')

  const offset=function(selector:string) {
    var heamapIframe=document.querySelector("#heatmapContainerIframe")
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
    var heamapIframe=document.querySelector("#heatmapContainerIframe")
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
    var heamapIframe=document.querySelector("#heatmapContainerIframe")
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
    var width =  Number(outerWidth(selector));  
    var height = Number(outerHeight(selector));
    //|| !$node.is(':visible')
    if (ignoreHiddenElement && ignoreHiddenElement === true && width === 0 || height === 0 ) {
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
    return dataPoint;
};
  const fetchFileData = async (fileID: string) => {
    const { data } = await getFile(fileID);    
    setFileDataLoaded(true)
    setMatomoProjectId(data.projectinfo?.matomoProjectId)
    setHsr(data.heatmapId);
    if(!data.heatmapId) {
      console.log(data);
      setMatomoProjectId('11');
      setHsr('23');
    } else {
      const response:any = await getFileWithHeatmapDataByFileId(matomoProjectId,hsr,isMobileView);    
      var pointsdata=response.data;
      var points=[];
      for(var index=0;index<pointsdata.length;index++){
        const point=pointsdata[index];
        let converted=getCoordinatesInFrame(point.selector,point.offset_x,point.offset_y,2000,false,point?.value);
        points.push(converted);
      }    
      var pointsData = {      
        data: points
      };
      //@ts-ignore
      heatmapInstance.setData(pointsData);  
    }
  }

  const handleMobileToggle = () => {
    setIsMobileView((prevState) => !prevState)
    fetchFileData(params.fileID);
  }

  const iFrameSrc = isMobileView ? `https://development.d13nogs6jpk1jf.amplifyapp.com/matomo/?module=HeatmapSessionRecording&action=embedPage&idSite=${matomoProjectId}&idSiteHsr=${hsr}` :
  `https://development.d13nogs6jpk1jf.amplifyapp.com/matomo/?module=HeatmapSessionRecording&action=embedPage&idSite=${matomoProjectId}&idSiteHsr=${hsr}`

  const getIframeHeight = () => {
    const iframe: any = document?.getElementById('heatmapContainerIframe');
    const innerDoc = iframe?.contentDocument || iframe?.contentWindow?.document;
    const html = innerDoc?.querySelector("html");
    const iframeHeight = html?.offsetHeight || '2400px'
    console.log('iframe height', html?.offsetHeight)
    return iframeHeight;
  }

  useEffect(() => {    
    var config = {
      container: document.getElementById('heatmapContainer')!,
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
    var heatmapInstance:any = h337.create(config);
    setHeatmapInstance(heatmapInstance);
    fetchFileData(params.fileID);
   }, [params.fileID]);

  const iFrameComputedHeight = getIframeHeight() 

  return (
    <>
      <div>
          <ToggleComponent isMobileView={isMobileView} handleMobileToggle={handleMobileToggle} />
      </div>
      <div id="heatmapContainer" className="heatmapContainer">  
        <iframe id="heatmapContainerIframe"
        src={iFrameSrc} 
        width={isMobileView ? '400px' : '1400px'} height={iFrameComputedHeight}>
        </iframe> 
      </div>
    </>
  );
}
