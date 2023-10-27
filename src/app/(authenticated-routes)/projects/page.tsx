'use client'
import ItemListing from "@/components/Project/ItemListing";
import List from "@/components/Project/List";
import NewItem from "@/components/Project/NewItem";
import NewItemPopup from "@/components/Project/NewItemPopup";
import RecentSection from "@/components/Project/RecentSection";
import { useEffect, useState } from "react";
import projects from '@/mockdata/projects/projects.json';
import { getAllProjectsByOrganizationId } from "@/services/ProjectsService";
import { getUserBySub } from "@/services/UserService";
import { Auth } from "aws-amplify";

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

  const recentProjects = tableData.slice(0, 2);

  function closeModalHandler() {
    setIsAddNewProjectModalOpen(false)
  }

  function handleNewProjectSubmit(payload: NewProjectPayload) {
    console.log('payload', payload)
    const latestId = [...tableData].sort((a, b) => +b.id - +a.id)[0].id
    const newProject = {
      Name: payload.inputOneData,
      Domain: payload.inputTwoData,
      id: String(+latestId + 1)
    }

    setTableData(prevState => [newProject, ...prevState])
    closeModalHandler()
  }

  async function loadProjectDetails() {
    try {
      const authUserInfo = await Auth.currentUserInfo();
      const userDetails = await getUserBySub(authUserInfo.attributes?.sub)
      const organizationId = userDetails?.data?.organizations[0] || 'abcd'
      const allProjects = await getAllProjectsByOrganizationId(organizationId)
      setTableData(allProjects.data)
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadProjectDetails()
  }, [])

  return (
    <div className="flex flex-col pb-14">
      <RecentSection recentItems={recentProjects} />
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
      <ItemListing tableData={tableData} navigationBaseURL="/projects" />
    </div>
  );
}