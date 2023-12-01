'use client'

import { NewProjectPayload } from '@/app/(authenticated-routes)/projects/page';
import AuthContext from '@/context/identity/AuthContext';
import { Avatar } from 'flowbite-react';
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import Profile from './Profile';
import Security from './Security';
import Team from './Team';
import Billing from './Billing';

interface PopupProps {
    closeHandler: () => void;
}

enum Tabs {
    PROFILE = 'profile',
    SECURITY = 'security',
    TEAM = 'team',
    BILLING = 'billing'
}

const ProfilePopup: React.FC<PopupProps> = ({ 
    closeHandler,
}) => {
    const [activeTab, setActiveTab] = useState('profile');

    const handleTabChange = (currentTab: string) => {
        setActiveTab(currentTab)
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-40 z-40"></div>
            <div className="bg-[#1F1F1F] w-[900px] h-[527px] px-[20px] py-[35.5px]  rounded-[25px] shadow-lg relative z-50">
                <button
                    className="absolute top-2 right-[20px] text-gray-600 hover:text-gray-800 text-lg"
                    onClick={closeHandler}
                >
                    ✖️
                </button>
                <div className='flex gap-[80px]'>
                    <div className='w-[150px]'>
                        <p className='font-sans text-xs font-normal mb-[8px] text-white'>Account</p>
                        <p onClick={() => handleTabChange(Tabs.PROFILE)} className={`font-sans text-[15px] font-normal leading-7 tracking-wider mb-[8px] ${activeTab === Tabs.PROFILE ? 'text-white' : 'text-[#888]'} cursor-pointer`}>Profile</p>
                        <p onClick={() => handleTabChange(Tabs.SECURITY)} className={`font-sans text-[15px] font-normal leading-7 tracking-wider mb-[8px] ${activeTab === Tabs.SECURITY ? 'text-white' : 'text-[#888]'} cursor-pointer`}>Security</p>
                        <p onClick={() => handleTabChange(Tabs.TEAM)} className={`font-sans text-[15px] font-normal leading-7 tracking-wider mb-[8px] ${activeTab === Tabs.TEAM ? 'text-white' : 'text-[#888]'} cursor-pointer`}>Team</p>
                        <p onClick={() => handleTabChange(Tabs.BILLING)} className={`font-sans text-[15px] font-normal leading-7 tracking-wider mb-[8px] ${activeTab === Tabs.BILLING ? 'text-white' : 'text-[#888]'} cursor-pointer`}>Plan & Billings</p>
                    </div>
                    <div className='w-[100%]'>
                        {
                            activeTab === Tabs.PROFILE && (
                                <Profile />
                            )
                        }
                        {
                            activeTab === Tabs.SECURITY && (
                                <Security />
                            )
                        }
                        {
                            activeTab === Tabs.TEAM && (
                                <Team />
                            )
                        }
                             {
                            activeTab === Tabs.BILLING && (
                                <Billing />
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePopup;
