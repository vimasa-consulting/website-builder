'use client'

import { NewProjectPayload } from '@/app/(authenticated-routes)/projects/page';
import { Project } from '@/types/project';
import React, { useState } from 'react';

interface PopupProps {
    closeHandler(): void;
    emails: string[];
    item: Project;
}

const SendEmailPopup: React.FC<PopupProps> = ({ 
    closeHandler,
    emails,
    item,
}) => {

    function handlePopupSubmit() {
        handlePopupClose()
    }

    function handlePopupClose() {
        closeHandler() 
    }

    const emailString = emails.join(',')

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
                <h2 className="text-xl font-semibold mb-4 text-white text-center">Send invite emails to all?</h2>
                <button
                    className="w-full h-[35px] mt-[15px] bg-[#DD00FF] text-white text-[15px] rounded hover:bg-hover cursor-pointer"
                    onClick={handlePopupSubmit}
                >
                    <a href={`mailto:${emailString}?subject=Exclusive Invitation to Collaborate on ${item.name}&body=Hi, you are invited to ${item.name} project. Come and be part of this project.`}>
                    Send Emails
                    </a>
                </button>
            </div>
        </div>
    );
};

export default SendEmailPopup;
