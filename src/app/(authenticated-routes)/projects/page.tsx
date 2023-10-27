'use client'
import ItemListing from "@/components/Project/ItemListing";
import List from "@/components/Project/List";
import NewItem from "@/components/Project/NewItem";
import NewItemPopup from "@/components/Project/NewItemPopup";
import RecentSection from "@/components/Project/RecentSection";
import { useState } from "react";
import projects from '@/mockdata/projects/projects.json';

export interface NewProjectPayload {
  inputOneData: string;
  inputTwoData: string;
}

export type Project = {
  Name: string
  Domain: string
  id: string
}

const defaultData: Project[] = [
  {
      Name: 'Project #1',
      Domain: 'www.example1.com',
      id: "1",
  },
  {
      Name: 'Project #2',
      Domain: 'www.example2.com',
      id: "2",
  },
  {
      Name: 'Project #3',
      Domain: 'www.example3.com',
      id: "3",
  },
  {
      Name: 'Project #4',
      Domain: 'www.example1.com',
      id: "4",
  },
  {
      Name: 'Project #5',
      Domain: 'www.example2.com',
      id: "5",
  },
  {
      Name: 'Project #6',
      Domain: 'www.example3.com',
      id: "6",
  },
  {
      Name: 'Project #7',
      Domain: 'www.example1.com',
      id: "7",
  },
  {
      Name: 'Project #8',
      Domain: 'www.example2.com',
      id: "8",
  },
  {
      Name: 'Project #9',
      Domain: 'www.example3.com',
      id: "9",
  },
  {
      Name: 'Project #10',
      Domain: 'www.example1.com',
      id: "10",
  },
  {
      Name: 'Project #11',
      Domain: 'www.example2.com',
      id: "11",
  },
  {
      Name: 'Project #12',
      Domain: 'www.example3.com',
      id: "12",
  },
]

export default function Page() {
  const [isAddNewProjectModalOpen, setIsAddNewProjectModalOpen] = useState(false)
  const [tableData, setTableData] = useState(defaultData)

  const recentProjects = projects.slice(1, 3);

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

  return (
    <div className="flex flex-col pb-14">
      <RecentSection recentItems={recentProjects} />
      <NewItem itemType="Project" setIsAddNewProjectModalOpen={setIsAddNewProjectModalOpen}/>
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
      <ItemListing tableData={tableData} navigationBaseURL="/projects"/>
      {/* <List/> */}
    </div>
  );
}