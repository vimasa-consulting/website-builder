
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
            <div className="gjs-row">
                <div className="gjs-cell">
                    <div >Hi Adharsh</div>
                </div>
            </div>
            <div className="gjs-row">
                <div className="gjs-cell">
                <div>Our experts have built your page for maximum persuasion.
                </div>
                </div>
            </div>            
        </div>
    );
};

export default BlockPreviewPopup;
