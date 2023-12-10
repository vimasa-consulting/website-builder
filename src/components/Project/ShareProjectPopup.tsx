'use client'

import React, { useState } from 'react';
import ItemListing from './ItemListing';
import EmailMultiSelect from './EmailMultiSelectInput';
import SendEmailPopup from './SendEmailPopup';
import { Project } from '@/types/project';

interface PopupProps {
    collaborators: string[];
    closeHandler(): void;
    shareProjectHandler: (invites: string[]) => Promise<void>;
    item: Project
}

const ShareProjectPopup: React.FC<PopupProps> = ({ 
    collaborators,
    closeHandler,
    shareProjectHandler,
    item
}) => {
    const [input1, setInput1] = useState('');
    const [emails, setEmails] = useState<string[]>([])
    const [showSendEmailPopup, setShowSendEmailPopup] = useState(false)

    async function handlePopupSubmit() {
        try {
            if(emails.length) {
                await shareProjectHandler([...emails, ...collaborators]);
                setShowSendEmailPopup(true)
                setInput1('');
            }
        } catch(error) {
            console.log(error)
        }
    }

    function handlePopupClose() {
        setInput1('');
        closeHandler() 
    }

    function handleRemoveEmail(email: string) {
        setEmails((prevState) => prevState.filter(data => data !== email))
    }

    function handleKeyPress(event: any) {
        if (event.key === 'Enter' && input1) {
          setEmails([...emails, input1]);
          setInput1('');
        }
      };

      async function removeCollaboratorsHandler(data: any) {
        const remainingCollaborators = collaborators.filter(col => col !== data.email)
        try {
            await shareProjectHandler(remainingCollaborators);
        }catch(error) {
            console.log(error)
        }
      }

      const closeSendEmailPopup = () => {
        setShowSendEmailPopup(false); 
        setEmails([]);
      }
   
      const modifiedTableData = collaborators?.map((collaborator) => ({email: collaborator}))

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-40 z-40"></div>
            <div className="bg-[#1F1F1F] w-[800px] h-[650px] p-6 rounded-lg shadow-lg relative z-50">
                <button
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-lg"
                    onClick={handlePopupClose}
                >
                    ✖️
                </button>
                <h2 className="text-xl font-semibold mb-4 text-white text-center">Invite details for the project</h2>
                <div className="mb-6 mt-6">
                    <div>
                    <label htmlFor="input-field-one" className="block mb-2 text-[12px] font-small text-[#797979] cursor-pointer">Invite users by Email</label>
                </div>
                <div className='flex height-[44px] gap-[30px]'>
                  <EmailMultiSelect setEmails={setEmails} emails={emails}/>
                  {/* <input
                        id='input-field-one'
                        type="text"
                        placeholder="Add emails to invite"
                        className="w-full p-2 border-2 border-transparent rounded text-[15px] text-white bg-[#313131]"
                        value={input1}
                        onChange={(e) => setInput1(e.target.value)}
                        onKeyUp={handleKeyPress}
                    /> */}
                    <button
                    className="w-[130px] h-[44px] bg-[#DD00FF] text-white text-[15px] rounded hover:bg-hover cursor-pointer"
                    onClick={handlePopupSubmit}
                    >
                        Invite
                    </button>
                </div>
                {/* <ul className='w-[77%] bg-[#ada8aefc] text-[#131010] font-[600] py[6px px-[8px] rounded-bl-md rounded-br-md absolute'>
                    { emails.length > 0 && emails.map(email => (
                    <li key={email} className="flex justify-between items-center h-[44px]">
                        {email}
                        <button onClick={() => handleRemoveEmail(email)} className="ml-4">X</button>
                    </li>
                    ))}
                </ul> */}
                <ItemListing 
                    tableData={modifiedTableData}
                    handleItemDeletion={removeCollaboratorsHandler}
                    columnHeaders={['Invited emails', 'Delete Invite']}
                    item={item}
                />
            </div>
            </div>
            {
                showSendEmailPopup &&
                <SendEmailPopup 
                    closeHandler={closeSendEmailPopup} 
                    emails={emails}
                    item={item}
                />
            }
        </div>
    );
};

export default ShareProjectPopup;
