'use client'
import ItemListing from "@/components/Project/ItemListing";
import List from "@/components/Project/List";
import NewItem from "@/components/Project/NewItem";
import NewItemPopup from "@/components/Project/NewItemPopup";
import RecentSection from "@/components/Project/RecentSection";
import { useState } from "react";
import files from '@/mockdata/projects/files.json';

export interface NewProjectPayload {
  inputOneData: string;
  inputTwoData: string;
}

export type File = {
  Name: string
  Domain: string
  id: string
}

const defaultData: File[] = [
  {
      Name: 'File #1',
      Domain: 'www.example1.com',
      id: "1",
  },
  {
      Name: 'File #2',
      Domain: 'www.example2.com',
      id: "2",
  },
  {
      Name: 'File #3',
      Domain: 'www.example3.com',
      id: "3",
  },
  {
      Name: 'File #4',
      Domain: 'www.example1.com',
      id: "4",
  },
  {
      Name: 'File #5',
      Domain: 'www.example2.com',
      id: "5",
  },
  {
      Name: 'File #6',
      Domain: 'www.example3.com',
      id: "6",
  },
  {
      Name: 'File #7',
      Domain: 'www.example1.com',
      id: "7",
  },
  {
      Name: 'File #8',
      Domain: 'www.example2.com',
      id: "8",
  },
  {
      Name: 'File #9',
      Domain: 'www.example3.com',
      id: "9",
  },
  {
      Name: 'File #10',
      Domain: 'www.example1.com',
      id: "10",
  },
  {
      Name: 'File #11',
      Domain: 'www.example2.com',
      id: "11",
  },
  {
      Name: 'File #12',
      Domain: 'www.example3.com',
      id: "12",
  },
]

export default function Page({ params }: { params: { projectID: string } }) {
  const [isAddNewProjectModalOpen, setIsAddNewProjectModalOpen] = useState(false)
  const [tableData, setTableData] = useState(defaultData)

  const recentFiles = files.slice(1, 3);

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
      <RecentSection recentItems={recentFiles} />
      <NewItem itemType="File" setIsAddNewProjectModalOpen={setIsAddNewProjectModalOpen}/>
      {
        isAddNewProjectModalOpen &&
        <NewItemPopup 
        inputOneLabel="File Name" 
        inputOnePlaceHolder="Enter your file name"
        inputTwoLabel="Domain Name"
        inputTwoPlaceHolder="Enter your domain name"
        closeHandler={closeModalHandler}
        handleSubmit={handleNewProjectSubmit}
        popupTitle="Add New File"
        />
      }
      <ItemListing tableData={tableData} navigationBaseURL="/editor"/>
    </div>
  );
}