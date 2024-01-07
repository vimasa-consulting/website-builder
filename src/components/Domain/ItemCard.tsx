'use client'
import { Project, ProjectTableData } from "@/types/project";
import { Dispatch, SetStateAction, useState } from "react";
import NewItemPopup from "./DomainPopup";
import EditItemPopup from "../Project/EditItemPopup";
import { updateProject } from "@/services/ProjectsService";

interface Props {
    item: Project & {updatedAt: string};
    setTableData: Dispatch<SetStateAction<ProjectTableData[]>>;
}

export default function DomainItemCard({ item, setTableData}: Props) {
const [showDomainSettingsModal, setShowDomainSettingsModal] = useState(false);
const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)

const openDomainSettingsHandler = () => {
    if(item.projectHostingAlias) {
        setShowDomainSettingsModal(true)
        return
    }

    setIsUpdateModalOpen(true)
}

const updateItemHandler = async (firstInput: string, secondInput: string) => {
    try {

        const updatedProject: Project = {
            ...(item as Project),
            name: firstInput,
            projectHostingAlias: secondInput
        }

       let updatedItem = await updateProject(updatedProject)


    setTableData((prevState: any) => prevState.map((data: any) => {
        if(data._id === updatedItem.data._id) {
            return updatedItem.data
        }

        return data
    } ))
}catch(error) {
    console.log(error)
}
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
            {
                isUpdateModalOpen && (
                    <EditItemPopup 
                    handleUpdate={updateItemHandler} 
                    closeHandler={() => setIsUpdateModalOpen(false)} 
                    itemType='Project' 
                    firstAttribute={item.name}
                    secondAttribute={item.projectHostingAlias}
                    inputLabelOne='Name'
                    inputLabelTwo='Domain Name'
                    />
                )
            }
        </div>
    )
}