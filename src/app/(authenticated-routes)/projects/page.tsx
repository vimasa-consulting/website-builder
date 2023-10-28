'use client'
import ItemListing from "@/components/Project/ItemListing";
import NewItem from "@/components/Project/NewItem";
import NewItemPopup from "@/components/Project/NewItemPopup";
import RecentSection from "@/components/Project/RecentSection";
import { useEffect, useState } from "react";
import { createProjectForOrganization, deleteProjectByProjectId, getAllProjectsByOrganizationId } from "@/services/ProjectsService";
import { getUserBySub } from "@/services/UserService";
import { Auth } from "aws-amplify";
import { CellContext } from "@tanstack/react-table";
export interface NewProjectPayload {
  inputOneData: string;
  inputTwoData: string;
}

export type Project = {
  name: string
  projectHostingAlias: string
  id: string
}

export default function Page() {
  const [isAddNewProjectModalOpen, setIsAddNewProjectModalOpen] = useState(false)
  const [tableData, setTableData] = useState([])

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
      const authUserInfo = await Auth.currentUserInfo();
      const userDetails = await getUserBySub(authUserInfo.attributes?.sub)
      const organizationId = userDetails?.data?.organizations[0] || 'abcd'
      const allProjects = await getAllProjectsByOrganizationId(organizationId)
      setTableData(allProjects.data)
    } catch (error) {
      console.log(error)
    }
  }

  async function handleProjectDeletion(data: CellContext<Project, string>) {
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
      <RecentSection itemType="Project"  recentItems={recentProjects} />
      <NewItem itemType="Project" setIsAddNewProjectModalOpen={setIsAddNewProjectModalOpen} />
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
      <ItemListing
        tableData={tableData}
        navigationBaseURL="/projects"
        handleItemDeletion={handleProjectDeletion}
        columnHeaders={columnHeaders}
      />
    </div>
  );
}