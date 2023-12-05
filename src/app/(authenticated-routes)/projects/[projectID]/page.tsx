'use client'
import ItemListing from "@/components/Project/ItemListing";
import NewItem from "@/components/Project/NewItem";
import NewItemPopup from "@/components/Project/NewItemPopup";
import RecentSection from "@/components/Project/RecentSection";
import { useCallback, useEffect, useState } from "react";
import { createFileForProject, deleteFileByFileId, getAllFilesByProjectId } from "@/services/FilesService";
import { FileStatus, FileTableData } from "@/types/file";
import GetStarted from "@/components/Project/GetStarted";
import NewItemCard from "@/components/Project/NewItemCard";
import ItemCard from "@/components/Project/ItemCard";
import CardItemSkeleton from "@/components/Project/CardItemSkeleton";

export interface NewProjectPayload {
  inputOneData: string;
  inputTwoData: string;
}

export type File = {
  Name: string
  Domain: string
  _id: string
}

export default function Page({ params }: { params: { projectID: string } }) {
  const [isAddNewProjectModalOpen, setIsAddNewProjectModalOpen] = useState(false)
  const [tableData, setTableData] = useState<FileTableData[]>([])

  const columnHeaders = [
    'Name',
    'Path',
    'Actions'
  ]

  const recentFiles = tableData.slice(0, 2);

  function closeModalHandler() {
    setIsAddNewProjectModalOpen(false)
  }

  async function handleNewFileSubmit(payload: NewProjectPayload) {
    try {
      const newFilePayload = {
        name: payload.inputOneData,
        slug: payload.inputTwoData,
        htmlHeadContent: '',
        htmlBodyContent: '',
        status: FileStatus.DRAFT,
        builderData: '',
        projectId: params.projectID
      }

      const newFileResponse = await createFileForProject(newFilePayload);
      const newFile = newFileResponse.data

      setTableData(prevState => [newFile, ...prevState])
    } catch (error) {
      console.log(error)
    }

    closeModalHandler()
  }

  const loadFileDetails = useCallback(async () => {
    try {
      const projectId = params?.projectID
      const allProjects = await getAllFilesByProjectId(projectId)
      setTableData(allProjects.data)
    } catch (error) {
      console.log(error)
    }
  }, [params.projectID])

  async function handleFileDeletion(data: File) {
    try {
      await deleteFileByFileId(data?.['_id'])
      setTableData(prevState => prevState.filter((item: FileTableData) => item['_id'] !== data?.['_id']))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadFileDetails()
  }, [loadFileDetails])

  return (
    <div className="flex flex-col pb-14">
      {/* <RecentSection itemType="File" recentItems={recentFiles} /> */}
      <GetStarted projectID={params.projectID} />
      {/* <NewItem itemType="File" setIsAddNewProjectModalOpen={setIsAddNewProjectModalOpen} /> */}
      {/* {
        isAddNewProjectModalOpen &&
        <NewItemPopup
          inputOneLabel="File Name"
          inputOnePlaceHolder="Enter your file name"
          inputTwoLabel="Path Name"
          inputTwoPlaceHolder="Enter your path name"
          closeHandler={closeModalHandler}
          handleSubmit={handleNewFileSubmit}
          popupTitle="Add New File"
        />
      } */}
      {
        tableData.length > 0 && 
        <>
          <h3 className="text-xl">All Files</h3>
          <div className="flex flex-wrap mt-5 gap-3">
            {
              tableData.map((project: any) => <ItemCard itemType="File" key={project._id} item={project} setTableData={setTableData} />)
            }
          </div>
        </>
      }
  
      {/* <ItemListing
        tableData={tableData}
        navigationBaseURL="/editor"
        handleItemDeletion={handleFileDeletion}
        columnHeaders={columnHeaders}
      /> */}
    </div>
  );
}