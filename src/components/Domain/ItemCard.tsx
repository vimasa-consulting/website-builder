'use client'
import { Project } from "@/types/project";
import { useState } from "react";
import NewItemPopup from "./DomainPopup";

interface Props {
    item: Project & {updatedAt: string};
}

export default function DomainItemCard({ item}: Props) {
const [showDomainSettingsModal, setShowDomainSettingsModal] = useState(false)

const openDomainSettingsHandler = () => {
    setShowDomainSettingsModal(true)
}
    
    return (
        <div className="max-w-xs mr-[32px]">
            <div onClick={openDomainSettingsHandler} className="w-[286px] h-[166px] bg-gray-300 border-none flex flex-col justify-center rounded-[10px] p-[40px] text-black gap-[10px] cursor-pointer">
                <h2 className="font-[600] text-[20px]">{item.name}</h2>
                <p className="text-[16px]">{item.projectHostingAlias}</p>
            </div>
            {
                showDomainSettingsModal && (
                    <NewItemPopup 
                        project={item}
                        closeHandler={() => setShowDomainSettingsModal(false)}
                    />
                )
            }
        </div>
    )
}