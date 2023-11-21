
import { Editor } from 'grapesjs';
import React from 'react';

interface BlockPreviewPopupProps {
    grapeJSEditor: Editor | null
}

const BlockPreviewPopup: React.FC<BlockPreviewPopupProps> = ({ grapeJSEditor }) => {
    const url = new URL(window.location.href);
    const block_sequence = url.searchParams.get("block_sequence") || "";     
    const blocks = atob(block_sequence).split(",");
    const prefix='/editor/blocks/';
    function imageLink(block:string){
        return  "/editor/blocks/"+block.trim()+".png";
    }
    return (
        <div id="customModalPreviewPopup" className="preview-modal">     
            <div className="container">
                <p className="f25">Hi Adarsh!</p>
                <p className="f30">our experts have built your page for maximum pursuassion</p>
                <p className="f60">It's built with <span className="color-1">20% Trsut,</span><span  className="color-2">50% Logic,</span></p>
                <p className="f60"><span  className="color-3">25% Brand Connect,</span><span  className="color-4">5% FOMO</span>&<span  className="color-5">10% value</span></p>
            </div>
            <div className="filter-container">
                <div className="filter-section">
                    <div className="left">
                        <p className="pill  bg-1">Above the Fold</p>
                        <p className="data"> this block helps you create powerful first impression by bringing together all the strengths of your prosuct and brands in one place</p>
                    </div>
                    <div className="right">
                        <img src="https://development.d13nogs6jpk1jf.amplifyapp.com/editor/blocks/Za1.png" />
                    </div>
                </div>
                <div className="filter-section">
                    <div className="left">
                        <p className="pill bg-2">Above the Fold</p>
                        <p className="data"> this block helps you create powerful first impression by bringing together all the strengths of your prosuct and brands in one place</p>
                    </div>
                    <div className="right">
                        <img src="https://development.d13nogs6jpk1jf.amplifyapp.com/editor/blocks/Za1.png" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlockPreviewPopup;
