
import { Editor } from 'grapesjs';
import React from 'react';

interface BlockPreviewPopupProps {
    grapeJSEditor: Editor | null
}

const BlockPreviewPopup: React.FC<BlockPreviewPopupProps> = ({ grapeJSEditor }) => {
    const url = new URL(window.location.href);
    const block_sequence = url.searchParams.get("block_sequence") || "";     
    const blocks:string[] = atob(block_sequence).split(",");
    var uniqueBlocks:string[]=[];
    var uniqueBlocksCount:number[]=[];
    var totalBlocks=blocks.length;
    for(var index=0;index<blocks.length;index++) {
        var i=blocks[index].trim().charAt(0);
        if(uniqueBlocks.indexOf(i)==-1){
            uniqueBlocks.push(i);
            uniqueBlocksCount.push(0);
        }
    }
    for(var index=0;index<blocks.length;index++) {
        var i=blocks[index].trim().charAt(0);
        uniqueBlocksCount[uniqueBlocks.indexOf(i)]++;        
    }
    for(var index=0;index<uniqueBlocksCount.length;index++) {
        uniqueBlocksCount[index]= Math.floor(uniqueBlocksCount[index]/totalBlocks*100);
    }
    console.log(uniqueBlocks)
    console.log(uniqueBlocksCount)
    const prefix='/editor/blocks/';
    function imageLink(block:string){
        return  prefix+block.trim()+".png";
    }
    function getBlockName(firstChar:string){                
        switch (firstChar) {
            case "S":
              return "User Actions";
            case "T":
              return "Brand Connect";
            case "U":
              return "Trust";
            case "V":
              return "Value";
            case "W":
              return "Urgency";
            case "X":
              return "Emotion";
            case "Y":
              return "Logic";
            case "Z":
              return "First Impression";
            default:
              return "";
          }
        return ""
    }
    function getBlockDescription(firstChar:string){ 
        switch (firstChar) {
            case "S":
              return "User Actions";
            case "T":
              return "Brand Connect";
            case "U":
              return "Trust";
            case "V":
              return "Value";
            case "W":
              return "Urgency";
            case "X":
              return "Emotion";
            case "Y":
              return "Logic";
            case "Z":
              return "First Impression";
            default:
              return "";
          }
        return ""
    }
    function getBlockStyle(firstChar:string){
        switch (firstChar) {
            case "S":
              return "pill bg-1";
            case "T":
              return "pill bg-2";
            case "U":
              return "pill bg-3";
            case "V":
              return "pill bg-4";
            case "W":
              return "pill bg-5";
            case "X":
              return "pill bg-6";
            case "Y":
              return "pill bg-7";
            case "Z":
              return "pill bg-8";
            default:
              return "";
          }
        return ""
    }
    function getSpanStyle(firstChar:string){
        switch (firstChar) {
            case "S":
              return "color-1";
            case "T":
              return "color-2";
            case "U":
              return "color-3";
            case "V":
              return "color-4";
            case "W":
              return "color-5";
            case "X":
              return "color-6";
            case "Y":
              return "color-7";
            case "Z":
              return "color-8";
            default:
              return "";
          }
        return ""
    }
    return (
        <div id="customModalPreviewPopup" className="preview-modal">     
            <div className="container">
                <p className="f25">Hi Adarsh!</p>
                <p className="f30">Our experts have built your page for maximum pursuasion</p>
                <p className="f60">Its built with &nbsp;
                {
                uniqueBlocksCount.length && uniqueBlocksCount.map((count, index) => (
                <span key={index} className={getSpanStyle(uniqueBlocks[index])}>{count}% {getBlockName(uniqueBlocks[index])},</span>                            
                ))
            }
                </p>
            </div>
            <div className="filter-container">
            {
                blocks.length && blocks.map((block, index) => (
                <div key={index} className="filter-section">
                    <div className="left">
                        <p className={getBlockStyle(block.trim().charAt(0))}>{getBlockName(block.trim().charAt(0))}</p>
                        <p className="data">{getBlockDescription(block.trim().charAt(0))}</p>
                    </div>
                    <div className="right">
                        <img src={imageLink(block)} />
                    </div>
                </div>
                ))
            }
            </div>
        </div>
    );
};

export default BlockPreviewPopup;
