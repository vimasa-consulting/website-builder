"use client";
import wizard from "../../../public/projects/wizard.png";
import Image from "next/image";
// import BuilderCta from "../../../components/GetStarted/BuilderCta";
import styles from "../../../styles/getStarted.module.scss";
import Link from "next/link";
import NewItemPopup from "@/components/Project/NewItemPopup";
import {
  createProjectForOrganization,
  deleteProjectByProjectId,
  getAllProjectsByOrganizationId,
} from "@/services/ProjectsService";
import { useState } from "react";
import { FileTableData } from "@/types/file";
import {
  createFileForProject,
  deleteFileByFileId,
  getAllFilesByProjectId,
} from "@/services/FilesService";
export interface NewProjectPayload {
  inputOneData: string;
  inputTwoData: string;
}

export default function Page() {
  const [isAddNewProjectModalOpen, setIsAddNewProjectModalOpen] =
    useState(false);
  const [tableData, setTableData] = useState<FileTableData[]>([]);

  function closeModalHandler() {
    setIsAddNewProjectModalOpen(false);
  }

  async function handleNewFileSubmit(payload: NewProjectPayload) {
    try {
      const newFilePayload = {
        name: payload.inputOneData,
        url: payload.inputTwoData,
      };

      const newFileResponse = await createFileForProject(newFilePayload);
      const newFile = newFileResponse.data;
      console.log(newFile, "newFile");

      setTableData((prevState) => [newFile, ...prevState]);
    } catch (error) {
      console.log(error);
    }

    closeModalHandler();
  }
  const handlePopup = () => {
    setIsAddNewProjectModalOpen(!isAddNewProjectModalOpen);
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainContainerItems}>
        <h4 className={styles.componentHeader}>
          Hi , what are you building today?
        </h4>
        {/* temporary placeholder */}
        <div className={styles.videoSection}>
          <div className={styles.tempPlaceholder}></div>
          <Image src={wizard} alt="wizard" />
        </div>
        <div className={styles.callToAction}>
          {/* <BuilderCta handleNavigation={handleNavigation} /> */}
          <Link href="/questionnaire">
            {" "}
            <button className={styles.smartBuilder}> Use Smart Builder</button>
          </Link>
          <button className={styles.buildIt} onClick={handlePopup}>
            Build it YourSelf{" "}
          </button>
        </div>
        <h2 className={styles.subHeader}>
          Build in 5 mins with <span>Smart Builder</span>
        </h2>
        <ul className={styles.listItem}>
          <li>Answer our expert crafted questions</li>
          <li>Get a personalised page built for your goals</li>
          <li>Add powerful copy & images to finish the page</li>
        </ul>
      </div>

      {isAddNewProjectModalOpen && (
        <NewItemPopup
          inputOneLabel="File Name"
          inputOnePlaceHolder="Enter your file name"
          inputTwoLabel="Path Name"
          inputTwoPlaceHolder="Enter your path name"
          closeHandler={closeModalHandler}
          handleSubmit={handleNewFileSubmit}
          popupTitle="Add New File"
        />
      )}
    </div>
  );
}
