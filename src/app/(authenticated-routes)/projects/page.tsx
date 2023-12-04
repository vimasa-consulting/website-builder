'use client'
import ItemListing from "@/components/Project/ItemListing";
import NewItem from "@/components/Project/NewItem";
import NewItemPopup from "@/components/Project/NewItemPopup";
import RecentSection from "@/components/Project/RecentSection";
import { useContext, useEffect, useState } from "react";
import { createProjectForOrganization, deleteProjectByProjectId, getAllProjectsByOrganizationId } from "@/services/ProjectsService";
import { getCurrentUser } from "@/services/UserService";
import { Auth } from "aws-amplify";
import { CellContext } from "@tanstack/react-table";
import { ProjectTableData } from "@/types/project";
import AuthContext from "@/context/identity/AuthContext";
import RecentItem from "@/components/Project/RecentItem";
import CardItemSkeleton from "@/components/Project/CardItemSkeleton";
import ItemCard from "@/components/Project/ItemCard";
import NewItemCard from "@/components/Project/NewItemCard";
import "@/styles/editor-legacy.css";

export interface NewProjectPayload {
  inputOneData: string;
  inputTwoData: string;
}

export type Project = {
  name: string
  projectHostingAlias: string
  _id: string
}

export default function Page() {
  const [isAddNewProjectModalOpen, setIsAddNewProjectModalOpen] = useState(false)
  const [tableData, setTableData] = useState<ProjectTableData[]>([])
  const { cachedUser } = useContext(AuthContext);

  const columnHeaders = [
    'Name',
    'Domain',
    'Actions'
  ]

  const recentProjects = tableData.slice(0, 2);

  function closeModalHandler() {
    setIsAddNewProjectModalOpen(false)
  }

  async function handleNewProjectSubmit(payload: NewProjectPayload) {
    try {
      const newProjectPayload = {
        name: payload.inputOneData,
        projectHostingAlias: payload.inputTwoData,
        collaborators: [],
        organizationId: cachedUser?.organizations[0] || '',
      }

      const newProjectResponse = await createProjectForOrganization(newProjectPayload)

      const newProject = newProjectResponse.data

      setTableData(prevState => [newProject, ...prevState])
    } catch (error) {
      console.log(error)
    }

    closeModalHandler()
  }

  async function loadProjectDetails() {
    try {
      const organizationId = cachedUser?.organizations[0] || '';
      const allProjects = await getAllProjectsByOrganizationId(organizationId)
      setTableData(allProjects.data)
    } catch (error) {
      console.log(error)
    }
  }

  async function handleProjectDeletion(data: Project) {
    try {
      await deleteProjectByProjectId(data?.['_id'])
      setTableData(prevState => prevState.filter(item => item['_id'] !== data?.['_id']))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadProjectDetails()
  }, [])

  return (
    <div className="flex flex-col pb-14">
      {/* <RecentSection itemType="Project" recentItems={recentProjects} /> */}
      <h3 className="text-xl">All Projects</h3>
      <div className="flex flex-wrap mt-5 gap-3">
        {tableData?.length ?
        <>
          <NewItemCard itemType="Project" setIsAddNewProjectModalOpen={setIsAddNewProjectModalOpen} />
          {
            tableData.map((project: any) => <ItemCard itemType="Project" key={project._id} item={project} setTableData={setTableData}/>)
          }
          </>
         :
        Array.from({length: 2}).map((_, index) => <CardItemSkeleton key={index} />)
        }
      </div>
      {/* <hr className="h-px my-8 bg-gray-600 border-0 w-3/4" />
      <NewItem itemType="Project" setIsAddNewProjectModalOpen={setIsAddNewProjectModalOpen} /> */}
      {
        isAddNewProjectModalOpen &&
        <NewItemPopup
          inputOneLabel="Project Name"
          inputOnePlaceHolder="Enter your project name"
          inputTwoLabel="Domain Name"
          inputTwoPlaceHolder="Enter your domain name"
          closeHandler={closeModalHandler}
          handleSubmit={handleNewProjectSubmit}
          popupTitle="Add New Project"
        />
      }
      {/* <ItemListing
        tableData={tableData}
        navigationBaseURL="/projects"
        handleItemDeletion={handleProjectDeletion}
        columnHeaders={columnHeaders}
      /> */} 
    </div>
  );
}