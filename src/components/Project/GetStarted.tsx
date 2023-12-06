"use client";

import wizard from "../../public/projects/wizard.png";
import Image from "next/image";
// import BuilderCta from "../../../components/GetStarted/BuilderCta";
import styles from "../../styles/getStarted.module.scss";
import Link from "next/link";
import NewItemPopup from "@/components/Project/NewItemPopup";
import { useContext, useState } from "react";
import { FileStatus, FileTableData } from "@/types/file";
import {
  createFileForProject,
} from "@/services/FilesService";
import { useRouter } from "next/navigation";
import AuthContext from "@/context/identity/AuthContext";
import checkMark from '../../public/checkmark.png'
import { createProjectForOrganization } from "@/services/ProjectsService";

export interface NewProjectPayload {
  inputOneData: string;
  inputTwoData: string;
}

interface Props {
  projectID?: string
}

const videoURL = "https://www.youtube.com/embed/L3tsYC5OYhQ"

export default function GetStarted({ projectID = '' }: Props) {
  const router = useRouter();
  const [isAddNewProjectModalOpen, setIsAddNewProjectModalOpen] =
    useState(false);
  const [tableData, setTableData] = useState<FileTableData[]>([]);
  const { cachedAuthUser, cachedUser } = useContext(AuthContext);
  const [loadingSmartBuilder, setLoadingSmartBuilder] = useState(false)

  function closeModalHandler() {
    setIsAddNewProjectModalOpen(false);
  }

  async function handleNewFileSubmit() {
    try {
      let id = projectID
      if(!id) {
        setLoadingSmartBuilder(true)
        const newProjectPayload = {
          name: 'Untitled',
          projectHostingAlias: '',
          collaborators: [],
          organizationId: cachedUser?.organizations[0] || '',
        }
  
        const newProjectResponse = await createProjectForOrganization(newProjectPayload)
  
        id = newProjectResponse.data._id
      }
      const newFilePayload = {
        name: "Untitled",
        slug: "test",
        htmlHeadContent: '',
        htmlBodyContent: '',
        status: FileStatus.DRAFT,
        builderData: '',
        projectId: id
      };

      const newFileResponse = await createFileForProject(newFilePayload);
      const newFile = newFileResponse.data;

      router.push(`/editor/${newFile._id}`);
    } catch (error) {
      console.log(error);
    }

    closeModalHandler();
  }

  const navigateToSmartBuilder = async () => {
    try {
    router.push(`/questionnaire?projectId=${projectID}`)
  } catch(error) {
    console.log(error)
  }
  }

  if(loadingSmartBuilder) {
    return (
      <div className="bg-black fixed inset-0 flex items-center justify-center z-50">
            <div className="relative z-50">
            <iframe src="https://giphy.com/embed/TuZ8v66TzGeYJW23as" width="480" height="400" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
            </div>
      </div>
    )
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainContainerItems}>
        <h4 className={styles.componentHeader}>
        Hi <span className={styles.userName}>{cachedAuthUser?.attributes?.givenName}</span>, what are we building today?
        </h4>
        <div className={styles.videoSection}>
          <iframe
            src={videoURL}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded YouTube Video"
            className={styles.video}
            ></iframe>
          <Image src={wizard} alt="wizard" />
        </div>
        <div className={styles.callToAction}>
          {/* <BuilderCta handleNavigation={handleNavigation} /> */}
          {/* <Link href={`/questionnaire?projectId=${projectID}`}>
            {" "} */}
            <button className={styles.smartBuilder} onClick={navigateToSmartBuilder}> Use Smart Builder {'>'}</button>
          {/* </Link> */}
          <button className={styles.buildIt} onClick={handleNewFileSubmit}>
            Build it Yourself {'>'}
          </button>
        </div>
        <h2 className={styles.subHeader}>
          Build in 5 min with <span>Smart Builder</span>
        </h2>
        <ul className={styles.list}>
          <li className={styles.listItem}><Image src={checkMark} alt="checkmark" className={styles.checkmark}/>Answer our expert crafted questions</li>
          <li className={styles.listItem}><Image src={checkMark} alt="checkmark" className={styles.checkmark}/>Get a personalised page built for your goals</li>
          <li className={styles.listItem}><Image src={checkMark} alt="checkmark" className={styles.checkmark}/>Add powerful copy & images to finish the page</li>
        </ul>
        <p className={styles.successNote}>Voila, your persuasive page is ready to publish! <span className={styles.partyEmoji}>🥳</span></p>
      </div>
{/* 
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
      )} */}
    </div>
  );
}
