"use client";

import Image from "next/image";
// import BuilderCta from "../../../components/GetStarted/BuilderCta";
import "../../../styles/questionnaire.scss";
import wizard from "../../../public/projects/Wizard2.png";
import { useState } from "react";
import { PopupButton } from "@typeform/embed-react";
import NewItemPopup from "@/components/Project/NewItemPopup";
import { createProjectForOrganization } from "@/services/ProjectsService";
import { ProjectTableData } from "@/types/project";
import { useRouter } from "next/navigation";
import axios from "axios";

export interface NewProjectPayload {
  inputOneData: string;
  inputTwoData: string;
}
export default function Page() {
  const router = useRouter();
  const [startQuiz1, setStartQuiz1] = useState(false);
  const [tableData, setTableData] = useState<ProjectTableData[]>([]);

  // const startQuiz = () => {
  //   setStartQuiz1(!startQuiz1);
  // };

  const sdc = (typeformObject:any ) => {
    console.log("Sub", typeformObject.formId, typeformObject.responseId);
    const formId =typeformObject.formId;
    const responseId =typeformObject.responseId
    const fetchResponse = async () => {
      try {
        const response = await axios.get(
          `https://api.typeform.com/forms/${formId}/responses/${responseId}`,
          {
            headers: {
              "Authorization": "Bearer YOUR_API_KEY", // Replace with your Typeform API key
            },
          }
        );
        console.log(response.data);
        //setResponse(response.data);
        router.push("/editor/653bb74d9759245f93ca2b92044");
      } catch (error) {
        console.error("Error fetching Typeform response:", error);
      }
    };
    fetchResponse();
  };
  function closeModalHandler() {
    setStartQuiz1(!startQuiz1);
  }

  async function handleNewProjectSubmit(payload: NewProjectPayload) {
    try {
      const newProjectPayload = {
        name: payload.inputOneData,
        projectHostingAlias: payload.inputTwoData,
      };

      const newProjectResponse = await createProjectForOrganization(
        newProjectPayload
      );

      const newProject = newProjectResponse.data;
      console.log("newProject", newProject);
      router.push("/projects");

      setTableData((prevState) => [newProject, ...prevState]);
    } catch (error) {
      console.log(error);
    }

    closeModalHandler();
  }

  return (
    <>
      <div className="smart-builder">
        <div className="smart-builder-item">
          {!startQuiz1 && (
            <>
              <div className="left-section">
                <Image src={wizard} alt="Wizard" />
              </div>
              <div className="right-section">
                <h2 className="component-header">
                  Help our experts build your page
                </h2>

                <p>
                  Answer a set of questions based on Marketing Strategy & User
                  Experience. Our experts will put together a page personalised
                  for your goals
                </p>
                {/* <button className="smart-builder" onClick={startQuiz}>
                  {" "}
                  Let's get started{" "}
                </button> */}
                <div className="custom-modal-content">
                  <PopupButton
                    id="KrKkFkVv"
                    onSubmit={sdc}
                    className="smart-builder"
                  >
                    Lets get started{" "}
                  </PopupButton>
                </div>
                {/* <TypeformModal /> */}
              </div>
            </>
          )}
        </div>
      </div>
      {startQuiz1 && (
        <NewItemPopup
          inputOneLabel="Project Name"
          inputOnePlaceHolder="Enter your project name"
          inputTwoLabel="Domain Name"
          inputTwoPlaceHolder="Enter your domain name"
          closeHandler={closeModalHandler}
          handleSubmit={handleNewProjectSubmit}
          popupTitle="Add New Project"
        />
      )}
    </>
  );
}
