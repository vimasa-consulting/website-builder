'use client'

import { NewProjectPayload } from '@/app/(authenticated-routes)/projects/page';
import { Project } from '@/types/project';
import React from 'react';

interface PopupProps {
    project: Project
    closeHandler(): void;
}

const NewItemPopup: React.FC<PopupProps> = ({ 
    project,
    closeHandler,
}) => {

    function handlePopupClose() {
        closeHandler() 
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-40 z-40"></div>
            <div className="bg-[#1F1F1F] w-600 h-360 p-6 rounded-lg shadow-lg relative z-50">
                <button
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-lg"
                    onClick={handlePopupClose}
                >
                    ✖️
                </button>
                <h2 className="text-xl font-semibold mb-4 text-white text-center">Domain Settings</h2>
                <div className="mb-6 mt-6">
                    <div>
                    <label htmlFor="input-field-one" className="block mb-2 text-[12px] font-small text-[#797979] cursor-pointer">{project.name}</label>
                    </div>
                </div>
                <div className="mb-6">
                    <div>
                        <label htmlFor="input-field-two" className="block mb-2 text-[12px] font-small text-[#797979] cursor-pointer">{project.projectHostingAlias || 'www.example.com'}</label>
                    </div>
                </div>
                <div className="mb-6">
                    <div>
                        <label htmlFor="input-field-two" className="block mb-2 text-[12px] font-small text-[#797979] cursor-pointer">Third line of label</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewItemPopup;
