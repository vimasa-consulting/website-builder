'use client'
import NewItemPopup from "@/components/Project/NewItemPopup";
import { useContext, useEffect, useState } from "react";
import { createProjectForOrganization, deleteProjectByProjectId, getAllProjectsByOrganizationId, getAllProjectsSharedToMe } from "@/services/ProjectsService";
import { ProjectTableData } from "@/types/project";
import AuthContext from "@/context/identity/AuthContext";
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
  const [sharedToMeProjects, setSharedToMeProjects] = useState<ProjectTableData[]>([])
  const { cachedUser, cachedAuthUser } = useContext(AuthContext);

  function closeModalHandler() {
    setIsAddNewProjectModalOpen(false)
  }

  async function handleNewProjectSubmit(payload: NewProjectPayload) {
    try {
      const newProjectPayload = {
        name: payload.inputOneData,
        projectHostingAlias: payload.inputTwoData,
        collaborators: [],
        files:[],
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
      const email = cachedAuthUser?.attributes?.email || ''
      const promises = [getAllProjectsByOrganizationId(organizationId), getAllProjectsSharedToMe(email)]
      const [allProjects, allSharedProjects] = await Promise.all(promises)
      setTableData(allProjects.data)
      setSharedToMeProjects(allSharedProjects?.data)
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
    if(cachedAuthUser && cachedUser) {
      loadProjectDetails()
    }
  }, [cachedAuthUser, cachedUser])

  return (
    <div className="flex flex-col pb-14">
      <h3 className="text-xl">All Projects</h3>
      <div className="flex flex-wrap mt-5 gap-3">
        {/*<NewItemCard itemType="Project" setIsAddNewProjectModalOpen={setIsAddNewProjectModalOpen} />*/}
        {tableData?.length > 0 && 
          
            tableData.map((project: any) => <ItemCard itemType="Project" key={project._id} item={project} setTableData={setTableData}/>)
        }
      </div>
      {
        sharedToMeProjects.length > 0 && (
          <>
            <h3 className="text-xl mt-[50px]">Shared To Me</h3>
            <div className="flex flex-wrap mt-5 gap-3">
                {
                  sharedToMeProjects.map((project: any) => <ItemCard sharedProject itemType="Project" key={project._id} item={project} setTableData={setTableData}/>)
                }
            </div>
          </>
        )
      }
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
    </div>
  );
}