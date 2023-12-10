'use client'

import { NewProjectPayload } from '@/app/(authenticated-routes)/projects/page';
import { Project } from '@/types/project';
import React from 'react';
import DNSConfigurationTable from './DomainConfigurationTable';

interface PopupProps {
    project: Project
    closeHandler(): void;
}

const DomainPopup: React.FC<PopupProps> = ({ 
    project,
    closeHandler,
}) => {

    function handlePopupClose() {
        closeHandler() 
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-40 z-40"></div>
            <div className="bg-[#1F1F1F]  p-6 rounded-lg shadow-lg relative z-50">
                <button
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-lg"
                    onClick={handlePopupClose}
                >
                    ✖️
                </button>
                <h2 className="text-xl font-semibold mb-4 text-white text-center">Domain Settings</h2>
                <DNSConfigurationTable project={project} />
            </div>
        </div>
    );
};

export default DomainPopup;
