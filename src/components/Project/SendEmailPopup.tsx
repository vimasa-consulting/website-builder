'use client'
import { Project } from '@/types/project';
import React, { useState } from 'react';

interface PopupProps {
    closeHandler(): void;
    emails: string[];
    item: Project;
}

const initialTextAreaValue = `Subject: Invitation to Collaborate on a project

Dear,

We are reaching out to invite you to collaborate with us on a project that we believe aligns well with your expertise and interests. Your unique skills and insights would be an invaluable addition, and we are excited about the potential for us to create something impactful together.

Looking forward to hearing from you.

Regards,`

const SendEmailPopup: React.FC<PopupProps> = ({ 
    closeHandler,
    emails,
    item,
}) => {
    const [textAreaValue, setTextAreaValue] = useState(initialTextAreaValue)

    function handlePopupSubmit() {
        handlePopupClose()
    }

    function handlePopupClose() {
        closeHandler() 
    }

    const emailString = emails.join(',')

    const textAreaChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextAreaValue(e.target.value)
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-[0.9] z-40"></div>
            <div className="bg-[#1F1F1F] w-600 h-[515px] p-6 rounded-lg shadow-lg relative z-50">
                <button
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-lg"
                    onClick={handlePopupClose}
                >
                    ✖️
                </button>
                <h2 className="text-xl font-semibold mb-4 text-white text-center">Send invite emails to all?</h2>
                <textarea className='w-[100%] text-black h-[350px]' value={textAreaValue} onChange={textAreaChangeHandler}/>
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
