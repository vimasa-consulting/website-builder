'use client'

import { NewProjectPayload } from '@/app/(authenticated-routes)/projects/page';
import React, { useState } from 'react';

interface PopupProps {
    inputOneLabel: string;
    inputTwoLabel: string;
    inputOnePlaceHolder: string;
    inputTwoPlaceHolder: string;
    closeHandler(): void;
    handleSubmit(payload: NewProjectPayload): void;
    popupTitle: string;
}

const NewItemPopup: React.FC<PopupProps> = ({ 
    inputOneLabel,
    inputTwoLabel,
    inputOnePlaceHolder,
    inputTwoPlaceHolder,
    closeHandler,
    handleSubmit,
    popupTitle
}) => {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');

    function handlePopupSubmit() {
        handleSubmit({
            inputOneData: input1,
            inputTwoData: input2
        });
        handlePopupClose()
    }

    function handlePopupClose() {
        setInput1('');
        setInput2('');
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
                <h2 className="text-xl font-semibold mb-4 text-white text-center">{popupTitle}</h2>
                <div className="mb-6 mt-6">
                    <div>
                    <label htmlFor="input-field-one" className="block mb-2 text-[12px] font-small text-[#797979] cursor-pointer">{inputOneLabel}</label>
                </div>
                    <input
                        id='input-field-one'
                        type="text"
                        placeholder={inputOnePlaceHolder}
                        className="w-full p-2 border-2 border-transparent rounded text-[15px] text-white bg-[#313131]"
                        value={input1}
                        onChange={(e) => setInput1(e.target.value)}
                    />
                </div>
                <div className="mb-6">
                <div>
                    <label htmlFor="input-field-two" className="block mb-2 text-[12px] font-small text-[#797979] cursor-pointer">{inputTwoLabel}</label>
                </div>
                    <input
                        id="input-field-two"
                        type="text"
                        placeholder={inputTwoPlaceHolder}
                        className="w-full p-2 border-2 border-transparent rounded text-[15px] text-white bg-[#313131]"
                        value={input2}
                        onChange={(e) => setInput2(e.target.value)}
                    />
                </div>
                <button
                    className="w-full h-[44px] mt-[15px] bg-[#DD00FF] text-white text-[15px] rounded hover:bg-hover cursor-pointer"
                    onClick={handlePopupSubmit}
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default NewItemPopup;
