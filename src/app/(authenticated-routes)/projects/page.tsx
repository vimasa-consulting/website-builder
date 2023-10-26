'use client'
import List from "@/components/Project/List";
import NewItem from "@/components/Project/NewItem";
import NewItemPopup from "@/components/Project/NewItemPopup";
import RecentSection from "@/components/Project/RecentSection";
import { useState } from "react";

export interface NewProjectPayload {
  inputOneData: string;
  inputTwoData: string;
}

export default function Page() {
  const [isAddNewProjectModalOpen, setIsAddNewProjectModalOpen] = useState(false)

  function closeModalHandler() {
    setIsAddNewProjectModalOpen(false)
  }

  function handleNewProjectSubmit(payload: NewProjectPayload) {
    console.log('payload', payload)
    closeModalHandler()
  }

  return (
    <div className="flex flex-col pb-14">
      <RecentSection />
      <NewItem setIsAddNewProjectModalOpen={setIsAddNewProjectModalOpen}/>
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
      <List/>
    </div>
  );
}