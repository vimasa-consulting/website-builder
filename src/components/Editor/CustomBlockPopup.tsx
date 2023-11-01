import { BlockOptions } from '@/app/(authenticated-routes)/editor/[fileID]/_components/grapejs';
import { BlockDetails } from '@/types/blockDetails';
import { Editor } from 'grapesjs';
import React from 'react';

interface CustomPopupProps {
    onClose: () => void;
    grapeJSEditor: Editor
    blockDetails: BlockDetails
    blockOptions:  BlockOptions[]
}

const CustomBlockPopup: React.FC<CustomPopupProps> = ({ onClose, grapeJSEditor, blockDetails, blockOptions }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-40 z-40"></div>
            <div className="bg-white w-7/10 p-6 rounded-lg shadow-lg relative z-50">
                <button
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-lg"
                    onClick={onClose}
                >
                    ✖️
                </button>
                <h2 className="text-xl font-semibold mb-4 text-black text-center">{blockDetails.id}</h2>
                <div className="mb-6 mt-6">
                </div>
                <div className="flex flex-wrap flex-col max-h-80 justify-center">
                    {
                        blockOptions.length && blockOptions.map(option => (
                            <button
                            key={option.key}
                            className="bg-primary text-white px-4 py-2 rounded font-bold hover:bg-hover m-4"
                            onClick={() => grapeJSEditor.trigger("block:add", {blockDetails, option})}
                        >
                            {option.label}
                        </button>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default CustomBlockPopup;
