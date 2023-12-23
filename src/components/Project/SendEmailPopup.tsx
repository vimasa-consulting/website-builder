'use client'
import { Project } from '@/types/project';
import React, { useState } from 'react';

interface PopupProps {
    closeHandler(): void;
    emails: string[];
    item: Project;
}

const initialTextAreaValue = `Dear,

We are reaching out to invite you to collaborate with us on a project that we believe aligns well with your expertise and interests. Your unique skills and insights would be an invaluable addition, and we are excited about the potential for us to create something impactful together. 
Join us at https://development.d13nogs6jpk1jf.amplifyapp.com/signup/

Looking forward to hearing from you.

Regards,`

const initialSubjectValue = 'Invitation to Collaborate on a project'

const SendEmailPopup: React.FC<PopupProps> = ({ 
    closeHandler,
    emails,
    item,
}) => {
    const [textAreaValue, setTextAreaValue] = useState(initialTextAreaValue)
    const [subjectText, setSubjectText] = useState(initialSubjectValue)

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

    const copyTextHandler = (text: string) => {
        navigator.clipboard.writeText(text)
        .then(() => {
            console.log('Text copied to clipboard');
        })
        .catch(err => {
            console.error('Failed to copy text: ', err);
        });
    }

    const listOfEmails = emails.join("; ")

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-[0.9] z-40"></div>
            <div className="bg-[#1F1F1F] w-600 p-6 rounded-lg shadow-lg relative z-50">
                <button
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-lg"
                    onClick={handlePopupClose}
                >
                    ✖️
                </button>
                <h2 className="text-xl font-semibold mb-4 text-white text-center">Send invite emails to all?</h2>
                <div className="mb-6 mt-6">
                    <div className='flex justify-between mb-[10px] pr-[8px]'>
                    <label htmlFor="input-field-one" className="block text-[12px] font-small text-[#797979] cursor-pointer">To</label>
                    <button onClick={() => copyTextHandler(listOfEmails)}>
                        <img width="15" height="15" src="https://img.icons8.com/officel/15/documents.png" alt="documents"/>
                    </button>
                </div>
                    <input
                        id='input-field-one'
                        type="text"
                        className="w-full p-2 border-2 border-transparent rounded text-[15px] text-white bg-[#313131]"
                        value={listOfEmails}
                        readOnly
                    />
                </div>
                <div className="mb-6 mt-6">
                    <div className='flex justify-between mb-[10px] pr-[8px]'>
                    <label htmlFor="input-field-one" className="block text-[12px] font-small text-[#797979] cursor-pointer">Subject</label>
                    <button onClick={() => copyTextHandler(subjectText)}>
                        <img width="15" height="15" src="https://img.icons8.com/officel/15/documents.png" alt="documents"/>
                    </button>
                </div>
                    <input
                        id='input-field-one'
                        type="text"
                        className="w-full p-2 border-2 border-transparent rounded text-[15px] text-white bg-[#313131]"
                        value={subjectText}
                        onChange={(e) => setSubjectText(e.target.value)}
                    />
                </div>
                <div className="mb-6 mt-6">
                <div className='flex justify-between mb-[10px] pr-[8px]'>
                    <label htmlFor="input-field-one" className="block text-[12px] font-small text-[#797979] cursor-pointer">Body</label>
                    <button onClick={() => copyTextHandler(textAreaValue)}>
                        <img width="15" height="15" src="https://img.icons8.com/officel/15/documents.png" alt="documents"/>
                    </button>
                </div>
                <textarea className='w-[100%] text-black h-[300px]' value={textAreaValue} onChange={textAreaChangeHandler}/>
                </div>
                <button
                    className="w-full h-[35px] mt-[15px] bg-[#DD00FF] text-white text-[15px] rounded hover:bg-hover cursor-pointer"
                    onClick={handlePopupSubmit}
                >
                    <a href={`mailto:${emailString}?subject=Exclusive Invitation to Collaborate on ${item.name}&body=Hi, you are invited to ${item.name} project. Come and be part of this project at https://development.d13nogs6jpk1jf.amplifyapp.com/signup/.`}>
                    Send Emails
                    </a>
                </button>
            </div>
        </div>
    );
};

export default SendEmailPopup;
