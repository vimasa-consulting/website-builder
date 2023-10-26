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
            <div className="bg-white w-600 h-360 p-6 rounded-lg shadow-lg relative z-50">
                <button
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-lg"
                    onClick={handlePopupClose}
                >
                    ✖️
                </button>
                <h2 className="text-xl font-semibold mb-4 text-black text-center">{popupTitle}</h2>
                <div className="mb-6 mt-6">
                    <div>
                    <label htmlFor="input-field-one" className="block mb-2 text-base font-small text-gray-900 cursor-pointer">{inputOneLabel}</label>
                </div>
                    <input
                        id='input-field-one'
                        type="text"
                        placeholder={inputOnePlaceHolder}
                        className="w-full p-2 border border-gray-300 rounded text-black"
                        value={input1}
                        onChange={(e) => setInput1(e.target.value)}
                    />
                </div>
                <div className="mb-6">
                <div>
                    <label htmlFor="input-field-two" className="block mb-2 text-base font-small text-gray-900 cursor-pointer">{inputTwoLabel}</label>
                </div>
                    <input
                        id="input-field-two"
                        type="text"
                        placeholder={inputTwoPlaceHolder}
                        className="w-full p-2 border border-gray-300 rounded text-black"
                        value={input2}
                        onChange={(e) => setInput2(e.target.value)}
                    />
                </div>
                <button
                    className="w-full bg-primary text-white px-4 py-2 rounded font-bold hover:bg-hover"
                    onClick={handlePopupSubmit}
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default NewItemPopup;
