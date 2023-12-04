'use client'

import { NewProjectPayload } from '@/app/(authenticated-routes)/projects/page';
import React, { useState } from 'react';

interface PopupProps {
    itemType: string;
    closeHandler(): void;
    handleDelete(): void;
}

const DeleteItemPopup: React.FC<PopupProps> = ({ 
    itemType,
    closeHandler,
    handleDelete
}) => {

    function handlePopupSubmit() {
        handleDelete();
        handlePopupClose()
    }

    function handlePopupClose() {
        closeHandler() 
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-40 z-40"></div>
            <div className="bg-[#1F1F1F] w-600 h-[170px] p-6 rounded-lg shadow-lg relative z-50">
                <button
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-lg"
                    onClick={handlePopupClose}
                >
                    ✖️
                </button>
                <h2 className="text-xl font-semibold mb-4 text-white text-center">Are you sure you want to delete this {itemType.toLowerCase()}?</h2>
                <button
                    className="w-full h-[35px] mt-[15px] bg-[#DD00FF] text-white text-[15px] rounded hover:bg-hover cursor-pointer"
                    onClick={handlePopupSubmit}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default DeleteItemPopup;
