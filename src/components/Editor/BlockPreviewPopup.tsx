
import React, { useContext } from 'react';
import '../../styles/previewblock.css'
import '../../styles/persuasiveblock.css'
import AuthContext from '@/context/identity/AuthContext';
import { useRouter } from 'next/navigation';
import magicWand from '../../public/projects/magic-wand.png'
import Image from 'next/image';

interface BlockPreviewPopupProps {
    blockSequence: string
    handleStartEditing: () => void
}

const BlockPreviewPopup: React.FC<BlockPreviewPopupProps> = ({blockSequence, handleStartEditing}) => {
  const {cachedAuthUser} = useContext(AuthContext)
  const router = useRouter();

    const blocks:string[] = atob(blockSequence).split(",");
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
    }
    function getBlockDescription(firstChar:string){ 
        switch (firstChar) {
            case "S":
              return "";
            case "T":
              return "This block helps your brand to position itself uniquely and to establish a connect with your users. This leads to brand love & increased recall, giving you a competitive advantage.";
            case "U":
              return "This block helps develop trust in the your brand/product, effectively clearing their doubts & apprehensions. Increasing trust in your users is proven to increase conversions directly. ";
            case "V":
              return "This block helps create a high value perception of your product in the users eyes, so that they feel your product gives great value for money. This will ultimately persuade them towards making the decision. ";
            case "W":
              return "This block helps to create a sense of urgency and Fear-of-Missing-Out in your users, that can strongly persuade them towards making the purchase without delay.  ";
            case "X":
              return "This block helps connect your product with the emotional needs of your users. For customers who are emotionally driven to shop, this will help persuade them powerfully towards the purchase.";
            case "Y":
              return "This block helps you logically convey the strengths & advantages of your product. For the buyer who emphasises on taking informed decisions, this will persuade them towards making their purchase ";
            case "Z":
              return "This block helps you to create a powerful first impression, by bringing together all the strengths of your product & brand in one place, leading to increase in conversion and decrease in page drop-off.";
            default:
              return "";
          }
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
    }

    const cancelEditingHandler = ()=> {
      router.push(`/get-started`)
    }
    return (
        <div id="customModalPreviewPopup" className="preview-modal">     
            <div className="container">
                <div className='flex justify-end'>
                  {/* <button onClick={cancelEditingHandler} className='cancelCta'>Cancel</button> */}
                  <button className='startEditingCta' onClick={handleStartEditing}>
                    <Image src={magicWand} alt="Magic Wand" className='magicWand' />
                    Start Editing
                    </button>
                </div>
                <p className="f25">Hi {cachedAuthUser?.attributes?.givenName}!</p>
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
