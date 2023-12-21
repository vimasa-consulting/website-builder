'use client'

import { Card, Dropdown } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

import styles from '@/styles/project.module.css';
import placeHolderImage from '@/public/projects/placeholder.png';
import { Project, ProjectTableData } from "@/types/project";
import { ROUTES } from "@/services/NavigationService";
import { useRouter } from "next/navigation";
import { cloneProjectByProjectId, deleteProjectByProjectId, updateProject } from "@/services/ProjectsService";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import DeleteItemPopup from "./DeleteItemPopup";
import { cloneFileByFileId, deleteFileByFileId, updateFile } from "@/services/FilesService";
import { File, FileTableData } from "@/types/file";
import EditItemPopup from "./EditItemPopup";
import ShareProjectPopup from "./ShareProjectPopup";

interface Props {
    item: Project & {updatedAt: string} | File, 
    itemType: string,
    setTableData: Dispatch<SetStateAction<ProjectTableData[]>> | Dispatch<SetStateAction<FileTableData[]>>
    sharedProject?: boolean
}

const getImageComponent = (url?: string) => {
    if (url) {
        return (
            <Image src={url} objectFit="object-fill" className={styles.itemImage} alt="project image" />
        )
    }
    return (
        <Image src={placeHolderImage} className={styles.itemImage} alt="project image" />
    );
}

export default function ItemCard({ item, itemType, setTableData, sharedProject = false }: Props) {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)
    const [isShareModalOpen, setIsShareModalOpen] = useState(false)
    const [collaboratorsArray, setCollaboratorsArray] = useState<string[]>((item as Project).collaborators)
    const router = useRouter();

    const firstAttribute = item.name
    const secondAttribute = itemType === 'Project' ? (item as Project).projectHostingAlias : (item as File).slug
    const inputLabelOne = 'Name'
    const inputLabelTwo = itemType === 'Project' ? 'Domain Name' : 'Path'

    const handleItemOpen = () => {
        return router.push(`${itemType === 'Project' ? ROUTES.PROJECTS : ROUTES.STUDIO}/${item._id}`)
    }

    const deleteItemHandler = () => {
            setIsDeleteModalOpen(true)
    }

    const deleteItem = async() => {
        let deleteItem: any;
        try {
        if(itemType === 'Project') {
            deleteItem = await deleteProjectByProjectId(item._id)
        } else {
            deleteItem = await deleteFileByFileId(item._id)
        }

        setTableData((prevState: any) => (prevState.filter((data: FileTableData) => data._id !== deleteItem?.data?._id)))
    } catch(error) {
        console.log(error)
    }
        setIsDeleteModalOpen(false)
    }

    const openUpdateModal = () => {
        setIsUpdateModalOpen(true)
    }
    const openUrl =() => {
        if(itemType === 'Project') {
            const url=`https://${item._id}.aayushsoftwares.com/`;
            navigator.clipboard.writeText(url);
            console.log(url);
            //TODO: toast
        } else {
            //@ts-ignore
            if(item.slug){
                //@ts-ignore
                const url=`https://${item.projectId}.aayushsoftwares.com/${item.slug}/`;
                navigator.clipboard.writeText(url);
                console.log(url);
                //TODO: toast
            } else {
                //@ts-ignore
                const url=`https://${item.projectId}.aayushsoftwares.com/`;
                navigator.clipboard.writeText(url);  
                //TODO: toast              
            }                    
        }
    }
    const updateItemHandler = async (firstInput: string, secondInput: string) => {
        let updatedItem: any;
        try {
        if(itemType === 'Project') {
            const updatedProject: Project = {
                ...(item as Project),
                name: firstInput,
                projectHostingAlias: secondInput
            }
            updatedItem = await updateProject(updatedProject)
        } else {
            const updatedFile: File = {
                ...(item as File),
                name: firstInput,
                slug: secondInput
            } 
            updatedItem = await updateFile(updatedFile)
        }


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

    const handleProjectShare = () => {
        setIsShareModalOpen(true)
    }

    const shareProjectHandler = async (collaborators: string[]) => {
        const updatedProjectData: any = {
            ...item,
            collaborators 
        }
        const updatedProjectCollaborators = await updateProject(updatedProjectData);

        setCollaboratorsArray(updatedProjectCollaborators?.data?.collaborators)
        console.log('updated collaborators', updatedProjectCollaborators)
    }

    const duplicateItemHandler = async (item: Project | File) => {
        try {
            if(itemType === 'Project') {
                await cloneProjectByProjectId(item._id)    
            } else {
                await cloneFileByFileId(item._id)
            }
        setTableData((prevState: any) => ([item, ...prevState]))
        }catch(error) {
            console.log(error)
        }
    }
    console.log(item);
    //@ts-ignore
    const firstFileId=item.files[0];
    return (
        <div className="max-w-xs mr-[32px] mb-[15px]">            
            <Link href={`${ROUTES.STUDIO}/${firstFileId}`}>
            <div
            >
                {getImageComponent(item.imageURL)}
            </div>
            </Link>
            <div className={`text-xl font-semibold tracking-tight text-white-700 flex justify-between px-[10px] mt-[12px]`}>
                <div>
                    <p className={styles.projectName}>
                        {item.name}
                    </p>
                    <p className={styles.recentlyEdited}>
                        {item?.updatedAt ? item.updatedAt : 'Mahalaxmi Gupta - Edited 2 months ago '}
                    </p>
                </div>
                <div>
                    <Dropdown
                        onClick={(e) => e.preventDefault()}
                        inline
                        arrowIcon={false}
                        label={
                            <img
                                src="https://img.icons8.com/ios-glyphs/20/52525b/ellipsis.png"
                                alt="ellipsis" />
                            }
                            >
                        <Dropdown.Item onClick={handleItemOpen}>Open</Dropdown.Item>
                        {
                            !sharedProject && (
                                <>
                                <Dropdown.Item onClick={openUpdateModal}>Rename</Dropdown.Item>
                                <Dropdown.Item onClick={openUrl}>Copy URL</Dropdown.Item>
                                <Dropdown.Item onClick={deleteItemHandler}>Delete</Dropdown.Item>
                                <Dropdown.Item onClick={() => duplicateItemHandler(item)}>Duplicate</Dropdown.Item>
                                {
                                    itemType !== 'File' &&  <Dropdown.Item onClick={handleProjectShare}>Share</Dropdown.Item>
                                }
                                </>
                            )
                        }
                    </Dropdown>
                </div>
            </div>
            {
                isDeleteModalOpen &&
                <DeleteItemPopup handleDelete={deleteItem} closeHandler={() => setIsDeleteModalOpen(false)} itemType={itemType} />
            }
            {
                isUpdateModalOpen &&
                <EditItemPopup 
                    handleUpdate={updateItemHandler} 
                    closeHandler={() => setIsUpdateModalOpen(false)} 
                    itemType={itemType} 
                    firstAttribute={firstAttribute}
                    secondAttribute={secondAttribute}
                    inputLabelOne={inputLabelOne}
                    inputLabelTwo={inputLabelTwo}
                    />
            }
            {
                isShareModalOpen &&
                <ShareProjectPopup
                collaborators={collaboratorsArray}
                shareProjectHandler={shareProjectHandler}
                closeHandler={() => setIsShareModalOpen(false)}
                item={item as Project}
                />
            }
        </div>
    )
}