"use client";

import Image from "next/image";
// import BuilderCta from "../../../components/GetStarted/BuilderCta";
import "../../../styles/questionnaire.scss";
import wizard from "../../../public/projects/Wizard2.png";
import { useContext, useState } from "react";
import { PopupButton } from "@typeform/embed-react";
import NewItemPopup from "@/components/Project/NewItemPopup";
import { createProjectForOrganization } from "@/services/ProjectsService";
import { ProjectTableData } from "@/types/project";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import { encode as btoa } from 'base-64';
import { FileStatus } from "@/types/file";
import { createFileForProject } from "@/services/FilesService";
import AuthContext from "@/context/identity/AuthContext";
import BlockPreviewPopup from "@/components/Editor/BlockPreviewPopup";
import "../../../styles/previewblock.css";

export interface NewProjectPayload {
  inputOneData: string;
  inputTwoData: string;
}

const fetchFormResponse = async (formId: string, responseId: string): Promise<string> => {
  // TODO: move to adapter
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_CORE_API_BASE_URL}/typeform?formId=${formId}&responseId=${responseId}`
  );
  console.log(response.data.data);
  const mapping_answer = [
    0, // 0
    1, // 1
    0, // 2
    2, // 3
    4, // 4
    3, // 5
    6, // 6          
    0, // 7
    5, // 8
    7 // 9             
  ];
  if (response.data && response.data.data && response.data.data.items && response.data.data.items.length == 1) {
    var variables = response.data.data.items[0].variables;
    //console.log(variables);
    // @ts-ignore
    const typeform_answer_1 = variables.filter(item => item["key"] == "a_1")[0].number;
    // @ts-ignore
    const typeform_answer_3 = variables.filter(item => item["key"] == "a_3")[0].number;
    // @ts-ignore
    const typeform_answer_4 = variables.filter(item => item["key"] == "a_4")[0].number;
    //console.log(typeform_answer_1,typeform_answer_3,typeform_answer_4);
    const answer_1 = mapping_answer[typeform_answer_1];
    const answer_3 = typeform_answer_3;
    const answer_4 = mapping_answer[typeform_answer_4];
    const mapping: { [key: string]: string } = {
      "A1, B1, C1": "Wa1, Za2, Yc1, Va1, Xb1, Sb1, Ud1, Wa2, Sb1, Vd1",
      "A1, B1, C2": "Za2, Yd1, Va1, Uf1, Xb1, Sb1, Ud1, Wa2, Sb1, Vd1",
      "A1, B1, C3": "Za2, Xa1, Sb1, Uf1, Va1, Ud1, Wa2, Sb1, Vd1, Uc1",
      "A1, B1, C4": "Wa1, Za2, Yd1, Va1, Uf1, Xb1, Sb1, Ud1, Wa2, Sb1, Vd1",
      "A1, B1, C5": "Za2, Yb1, Xb1, Sb1, Uf1, Va1, Ud1, Wa2, Sb1, Vd1, Uc1",
      "A1, B1, C6": "Wa1, Za2, Yb1, Xa1, Sb1, Uf1, Va1, Ud1, Wa2, Sb1, Vd1, Uc1",
      "A1, B1, C7": "Wa1, Za2, Yb1, Xb1, Sb1, Uf1,  Va1, Ud1, Wa2, Sb1, Vd1",
      "A1, B2, C1": "Wa1, Za2, Yb1, Xc1, Va1, Ud1, Wa2, Sb1, Vd1",
      "A1, B2, C2": "Za2, Yb1, Xc1, Va1, Uf1, Tb1, Sb1, Ud1, Wa2, Sb1, Vd1",
      "A1, B2, C3": "Za2, Yb1, Xc1, Sb1, Uf1, Va1, Ud1, Wa2, Sb1, Vd1, Uc1",
      "A1, B2, C4": "Wa1, Za2, Yb1, Sb1, Xc1, Uf1, Va1, Ud1, Wa2, Sb1, Vd1",
      "A1, B2, C5": "Za2, Yb1, Xc1, Sb1, Uf1, Va1, Ud1, Wa2, Sb1, Vd1, Uc1",
      "A1, B2, C6": "Wa1, Za2, Yb1, Sb1, Xc1, Uf1, Va1, Ud1, Wa2, Sb1, Vd1, Uc1",
      "A1, B2, C7": "Wa1, Za2, Yb1, Sb1, Xc1, Va1, Ud1, Wa2, Sb1, Vd1 ",
      "A1, B3, C1": "Wa1, Za2, Ta1, Va1, Tb1, Xb1, Sb1, Ud1, Wa2, Sb1 ",
      "A1, B3, C2": "Za2, Ta1, Va1, Xb1, Tb1, Sb1, Uf1, Wa2, Sb1, Ud1",
      "A1, B3, C3": "Za2, Ta1, Va1, Xa1, Sb1, Tb1, Uf1, Wa2, Sb1, Ud1, Uc1",
      "A1, B3, C4": "Wa1, Za2, Ta1, Va1, Xb1, Tb1, Sb1, Uf1, Wa2, Sb1, Ud1",
      "A1, B3, C5": "Za2, Ta1, Va1, Uf1, Xb1, Sb1, Tb1, Wa2, Sb1, Ud1, Uc1",
      "A1, B3, C6": "Wa1, Za2, Ta1, Va1, Uf1, Xa1, Sb1, Tb1, Wa2, Sb1, Ud1, Uc1",
      "A1, B3, C7": "Wa1, Za2, Ta1, Va1, Uf1, Xb1, Sb1, Tb1, Wa2, Sb1, Ud1",
      "A1, B4, C1": "Wa1, Za2, Yb1, Va1, Xc1, Sb1, Ud1, Wa2, Sb1, Vd1",
      "A1, B4, C2": "Za2, Yb1, Uf1, Va1, Xc1, Sb1, Ud1, Wa2, Sb1, Vd1",
      "A1, B4, C3": "Za2, Xc1, Sb1, Uf1, Yb1, Va1, Ud1, Wa2, Sb1, Vd1, Uc1",
      "A1, B4, C4": "Wa1, Za2, Yb1, Uf1, Va1, Xc1, Sb1, Ud1, Wa2, Sb1, Vd1",
      "A1, B4, C5": "Za2, Yb1, Uf1, Va1, Xc1, Sb1, Ud1, Wa2, Sb1, Vd1, Uc1",
      "A1, B4, C6": "Wa1, Za2, Xc1, Sb1, Uf1, Yb1, Va1, Ud1, Wa2, Sb1, Vd1, Uc1",
      "A1, B4, C7": "Wa1, Za2, Yb1, Uf1, Va1, Xc1, Sb1, Ud1, Wa2, Sb1, Vd1, Uc1",
      "A2, B1, C1": "Zc2, Ta1, Xc1, Va1, Ud1, Sb1, Vd1, Tb1, Sb1",
      "A2, B1, C2": "Zc2, Ta1, Xc1, Sb1, Uf1, Va1, Vd1, Tb1, Sb1, Ud1,",
      "A2, B1, C3": "Zc2, Ta1, Xc1, Sb1, Uf1, Va1, Vd1, Tc1, Sb1, Ud1, Uc1",
      "A2, B1, C4": "Zc2, Ta1, Xc1, Sb1, Uf1, Va1, Vd1, Sb1, Tb1, Ud1,",
      "A2, B1, C5": "Zc2, Ta1, Xc1, Sb1, Uf1, Va1, Vd1, Sb1, Tc1, Ud1, Uc1",
      "A2, B1, C6": "Zc2, Ta1, Xc1, Sb1, Uf1, Va1, Vd1, Tb1, Sb1, Ud1, Uc1",
      "A2, B1, C7": "Zc2, Ta1, Xc1, Sb1, Uf1, Va1, Vd1, Sb1, Tb1, Ud1 ",
      "A2, B2, C1": "Zc2, Ta1, Yb1, Xc1, Va1, Ud1, Vd1, Sb1, Tb1",
      "A2, B2, C2": "Zc2, Ta1, Yb1, Sb1, Uf1, Xc1, Va1, Ud1, Vd1, Sb1",
      "A2, B2, C3": "Zc2, Ta1, Yb1, Sb1, Uf1, Xc1, Va1, Ud1, Vd1, Sb1, Uc1",
      "A2, B2, C4": "Zc2, Ta1, Yb1, Sb1, Uf1, Xc1, Va1, Ud1, Vd1, Sb1",
      "A2, B2, C5": "Zc2, Ta1, Yb1, Sb1, Uf1, Xc1, Va1, Ud1, Vd1, Sb1, Uc1",
      "A2, B2, C6": "Zc2, Ta1, Yb1, Sb1, Uf1, Xc1, Va1, Ud1, Vd1, Sb1, Uc1",
      "A2, B2, C7": "Zc2, Ta1, Yb1, Sb1, Uf1, Xc1, Va1, Ud1, Vd1, Sb1",
      "A2, B3, C1": "Zc2, Ta1, Yf1, Xb1, Sb1, Te1, Va1, Tb1, Ud1, Sb1",
      "A2, B3, C2": "Zc2, Ta1, Yf1, Xc1, Sb1, Uf1, Va1, Tb1, Sb1, Ud1",
      "A2, B3, C3": "Zc2, Ta1, Yf1, Xa1, Sb1, Uf1, Va1, Tc1, Sb1, Ud1, Uc1",
      "A2, B3, C4": "Zc2, Ta1, Yf1, Sb1, Xc1, Uf1, Va1, Tb1, Sb1, Ud1",
      "A2, B3, C5": "Zc2, Ta1, Yf1,  Xa1, Sb1, Uf1, Va1, Tc1, Sb1, Ud1, Uc1",
      "A2, B3, C6": "Zc2, Ta1, Yf1, Xb1, Sb1, Uf1, Va1, Tb1, Sb1, Ud1, Uc1",
      "A2, B3, C7": "Zc2, Ta1, Yf1, Xa1, Sb1, Uf1, Va1, Tb1, Sb1, Ud1",
      "A2, B4, C1": "Zc2, Ta1, Xb1, Sb1, Tb1, Yb1, Va1, Ud1, Vd1, Sb1",
      "A2, B4, C2": "Zc2, Ta1, Xc1, Sb1, Tb1, Uf1, Yb1, Va1, Ud1, Vd1, Sb1",
      "A2, B4, C3": "Zc2, Ta1, Xa1, Sb1, Tb1, Uf1, Sb1, Yb1, Va1, Ud1, Uc1",
      "A2, B4, C4": "Zc2, Ta1, Xb1, Sb1, Tb1, Uf1, Yb1, Va1, Ud1, Vd1, Sb1",
      "A2, B4, C5": "Zc2, Ta1, Xc1, Sb1, Tb1, Uf1, Yb1, Va1, Ud1, Uc1",
      "A2, B4, C6": "Zc2, Ta1, Xb1, Sb1, Tb1, Uf1, Yb1, Va1, Ud1, Uc1",
      "A2, B4, C7": "Zc2, Ta1, Xa1, Sb1, Tb1, Uf1, Yb1, Va1, Ud1, Vd1",
      "A3, B1, C1": "Zb2, Yb1, Va1, Yc1, Ud1, Sb1, Yd1, Vd1, Sb1",
      "A3, B1, C2": "Zb2, Yb1, Va1, Uf1, Yd1, Sb1, Yc1, Ud1, Vd1, Sb1",
      "A3, B1, C3": "Zb2, Yb1, Ya1, Va1, Uf1, Xa1, Sb1, Ud1, Uc1",
      "A3, B1, C4": "Zb2, Yb1, Va1, Uf1, Yd1, Sb1, Yc1, Ud1, Vd1, Sb1",
      "A3, B1, C5": "Zb2, Yb1, Ya1, Va1, Uf1, Xa1, Sb1, Ud1, Uc1",
      "A3, B1, C6": "Zb2, Yb1, Ya1, Va1, Uf1, Yd1, Sb1, Ud1, Uc1",
      "A3, B1, C7": "Zb2, Yb1, Va1, Uf1, Xa1, Sb1, Yc1, Ud1, Vd1, Sb1",
      "A3, B2, C1": "Zb2, Yb1, Va1, Yc1, Ud1, Sb1, Yd1, Vd1, Sb1",
      "A3, B2, C2": "Zb2, Yb1, Va1, Uf1, Xb1, Sb1, Yc1, Ud1, Vd1, Sb1",
      "A3, B2, C3": "Zb2, Yb1, Ya1, Va1, Uf1, Xa1, Sb1, Ud1, Uc1",
      "A3, B2, C4": "Zb2, Yb1, Va1, Uf1, Yd1, Yc1, Sb1, Ud1, Vd1, Sb1",
      "A3, B2, C5": "Zb2, Yb1, Ya1, Va1, Uf1, Xa1, Sb1, Ud1, Uc1",
      "A3, B2, C6": "Zb2, Yb1, Ya1, Va1, Uf1, Yd1, Sb1, Ud1, Uc1",
      "A3, B2, C7": "Zb2, Yb1, Va1, Uf1, Xa1, Sb1, Yc1, Ud1, Vd1, Sb1",
      "A3, B3, C1": "Zb2, Yb1, Yc1, Sb1, Yd1, Ta1, Yf1, Sb1, Ud1",
      "A3, B3, C2": "Zb2, Yb1, Ya1, Xb1, Sb1, Uf1, Ta1, Yf1, Sb1, Ud1",
      "A3, B3, C3": "Zb2, Yb1, Ya1, Sb1, Xa1, Sb1, Uf1, Ta1, Yf1, Ud1, Uc1",
      "A3, B3, C4": "Zb2, Yb1, Ya1, Xb1, Sb1, Uf1, Ta1, Yf1, Sb1, Ud1",
      "A3, B3, C5": "Zb2, Yb1, Ya1, Sb1, Xa1, Sb1, Uf1, Ta1, Yf1, Ud1, Uc1",
      "A3, B3, C6": "Zb2, Yb1, Ya1, Sb1, Yd1, Uf1, Ta1, Yf1, Sb1, Ud1, Uc1",
      "A3, B3, C7": "Zb2, Yb1, Ya1, Sb1, Xa1, Sb1, Uf1, Ta1, Yf1, Sb1, Ud1",
      "A3, B4, C1": "Zb2, Yb1, Va1, Yc1, Ud1, Sb1, Yd1, Vd1, Sb1",
      "A3, B4, C2": "Zb2, Yb1, Va1, Uf1, Yd1, Sb1, Yc1, Ud1, Sb1, Vd1",
      "A3, B4, C3": "Zb2, Yb1, Ya1, Va1, Uf1, Xa1, Sb1, Ud1, Uc1",
      "A3, B4, C4": "Zb2, Yb1, Va1, Uf1, Yd1, Sb1, Yc1, Ud1, Vd1, Sb1",
      "A3, B4, C5": "Zb2, Yb1, Ya1, Va1, Uf1, Xa1, Sb1, Ud1, Uc1",
      "A3, B4, C6": "Zb2, Yb1, Ya1, Va1, Uf1, Yd1, Sb1, Ud1, Uc1",
      "A3, B4, C7": "Zb2, Yb1, Va1, Uf1, Xa1, Sb1, Yc1, Ud1, Vd1, Sb1",
      "A7, B1, C1": "Wa1, Za3, Ta1, Yb1, Sb1, Yd1, Va1, Wa2, Ud1, Vd1, Sb1",
      "A7, B1, C2": "Wa1, Za3, Ta1, Yb1, Sb1, Uf1, Yd1, Va1, Ud1, Vd1, Sb1",
      "A7, B1, C3": "Wa1, Za3, Ta1, Yb1, Sb1, Uf1, Xa1, Va1, Ud1, Uc1",
      "A7, B1, C4": "Wa1, Za3, Ta1, Yb1, Sb1, Uf1, Yd1, Va1, Ud1, Vd1, Sb1",
      "A7, B1, C5": "Wa1, Za3, Ta1, Yb1, Sb1, Uf1, Xa1, Va1, Ud1, Uc1",
      "A7, B1, C6": "Wa1, Za3, Ta1, Yb1, Sb1, Uf1, Xa1, Va1, Ud1, Uc1",
      "A7, B1, C7": "Wa1, Za3, Ta1, Yb1, Sb1, Uf1, Yd1, Va1, Ud1, Vd1, Sb1",
      "A7, B2, C1": "Wa1, Za3, Ta1, Yb1, Sb1, Yd1, Va1, Wa2, Ud1, Vd1, Sb1",
      "A7, B2, C2": "Wa1, Za3, Ta1, Yb1, Sb1, Uf1, Yd1, Va1, Ud1, Vd1, Sb1",
      "A7, B2, C3": "Wa1, Za3, Ta1, Yb1, Sb1, Uf1, Xa1, Va1, Ud1, Uc1",
      "A7, B2, C4": "Wa1, Za3, Ta1, Yb1, Sb1, Uf1, Yd1, Va1, Ud1, Vd1, Sb1",
      "A7, B2, C5": "Wa1, Za3, Ta1, Yb1, Sb1, Uf1, Xa1, Va1, Ud1, Uc1",
      "A7, B2, C6": "Wa1, Za3, Ta1, Yb1, Sb1, Uf1, Xa1, Va1, Ud1, Uc1",
      "A7, B2, C7": "Wa1, Za3, Ta1, Yb1, Sb1, Uf1, Yd1, Va1, Ud1, Vd1, Sb1",
      "A7, B3, C1": "Wa1, Za3, Ta1, Yb1, Sb1, Tb1, Va1, Wa2, Ud1, Vd1, Sb1",
      "A7, B3, C2": "Za3, Ta1, Yb1, Va1, Tb1, Uf1, Sb1, Wa2, Ud1, Vd1, Sb1",
      "A7, B3, C3": "Za3, Ta1, Yb1, Va1, Tc1, Uf1, Sb1, Wa2, Ud1, Vd1, Sb1, Uc1",
      "A7, B3, C4": "Wa1, Za3, Ta1, Yb1, Va1, Tb1, Uf1, Sb1, Wa2, Ud1, Vd1, Sb1",
      "A7, B3, C5": "Za3, Ta1, Yb1, Va1, Tc1, Uf1, Sb1, Wa2, Ud1, Vd1, Sb1",
      "A7, B3, C6": "Wa1, Za3, Ta1, Yb1, Va1, Tc1, Uf1, Sb1, Wa2, Ud1, Vd1, Sb1",
      "A7, B3, C7": "Wa1, Za3, Ta1, Yb1, Va1, Tc1, Uf1, Sb1, Wa2, Ud1, Vd1, Sb1",
      "A7, B4, C1": "Wa1, Za3, Ta1, Yb1, Sb1, Yd1, Va1, Wa2, Ud1, Vd1, Sb1",
      "A7, B4, C2": "Wa1, Za3, Ta1, Yb1, Sb1, Uf1, Yd1, Va1, Ud1, Vd1, Sb1",
      "A7, B4, C3": "Wa1, Za3, Ta1, Yb1, Sb1, Uf1, Xa1, Va1, Ud1, Uc1",
      "A7, B4, C4": "Wa1, Za3, Ta1, Yb1, Sb1, Uf1, Yd1, Va1, Ud1, Vd1, Sb1",
      "A7, B4, C5": "Wa1, Za3, Ta1, Yb1,Sb1,  Uf1, Xa1, Va1, Ud1, Uc1",
      "A7, B4, C6": "Wa1, Za3, Ta1, Yb1, Sb1, Uf1, Xa1, Va1, Ud1, Uc1",
      "A7, B4, C7": "Wa1, Za3, Ta1, Yb1, Sb1, Uf1, Yd1, Va1, Ud1, Vd1, Sb1",
      "A4, B1, C1": "Wa1, Za3, Ta1, Tb1, Va1, Wa2, Sb1, Ud1, Vd1, Sb1",
      "A4, B1, C2": "Wa1, Za3, Ta1, Tb1, Sb1, Uf1, Va1, Wa2, Ud1, Vd1, Sb1",
      "A4, B1, C3": "Wa1, Za3, Ta1, Tb1, Sb1, Uf1, Xa1, Va1, Ud1, Uc1",
      "A4, B1, C4": "Wa1, Za3, Ta1, Tb1, Sb1, Uf1, Va1, Wa2, Ud1, Vd1, Sb1",
      "A4, B1, C5": "Wa1, Za3, Ta1, Tb1, Sb1, Uf1, Xa1, Va1, Wa2, Ud1, Uc1",
      "A4, B1, C6": "Wa1, Za3, Ta1, Tb1, Sb1, Uf1, Xa1, Va1, Wa2, Ud1",
      "A4, B1, C7": "Wa1, Za3, Ta1, Tb1, Sb1, Uf1, Yd1, Va1, Wa2, Ud1, Vd1, Sb1",
      "A4, B2, C1": "Wa1, Za3, Ta1, Yb1, Va1, Wa2, Tb1, Sb1, Ud1, Vd1, Sb1",
      "A4, B2, C2": "Wa1, Za3, Ta1, Yb1, Sb1, Uf1, Tb1, Va1, Wa2, Ud1, Vd1, Sb1",
      "A4, B2, C3": "Wa1, Za3, Ta1, Yb1, Sb1, Uf1, Tc1, Va1, Ud1, Uc1",
      "A4, B2, C4": "Wa1, Za3, Ta1, Yb1, Sb1, Uf1, Tb1, Va1, Wa2, Ud1, Vd1, Sb1",
      "A4, B2, C5": "Wa1, Za3, Ta1, Yb1, Sb1, Uf1, Tc1, Va1, Ud1, Uc1",
      "A4, B2, C6": "Wa1, Za3, Ta1, Yb1, Sb1, Uf1, Tc1, Va1, Wa2, Ud1 ",
      "A4, B2, C7": "Wa1, Za3, Ta1, Yb1, Sb1, Uf1, Tb1, Va1, Wa2, Ud1, Vd1, Sb1",
      "A4, B3, C1": "Wa1, Za3, Ta1, Va1, Wa2, Tb1, Sb1, Ud1, Vd1, Sb1",
      "A4, B3, C2": "Wa1, Za3, Ta1, Uf1, Sb1, Tb1, Va1, Wa2, Ud1, Vd1, Sb1",
      "A4, B3, C3": "Wa1, Za3, Ta1, Uf1, Sb1, Tc1, Va1, Ud1, Uc1",
      "A4, B3, C4": "Wa1, Za3, Ta1, Uf1, Sb1, Tb1, Va1, Wa2, Ud1, Vd1, Sb1",
      "A4, B3, C5": "Wa1, Za3, Ta1, Uf1, Sb1, Tc1, Va1, Ud1, Uc1",
      "A4, B3, C6": "Wa1, Za3, Ta1, Uf1, Tc1, Va1, Wa2, Ud1 ",
      "A4, B3, C7": "Wa1, Za3, Ta1, Uf1, Sb1, Tb1, Va1, Wa2, Ud1, Vd1, Sb1",
      "A4, B4, C1": "Wa1, Za3, Ta1, Yb1, Va1, Wa2, Tb1, Sb1, Ud1, Vd1, Sb1",
      "A4, B4, C2": "Wa1, Za3, Ta1, Yb1, Sb1, Uf1, Tb1, Va1, Wa2, Ud1, Vd1, Sb1",
      "A4, B4, C3": "Wa1, Za3, Ta1, Yb1, Sb1, Uf1, Tc1, Va1, Ud1, Uc1",
      "A4, B4, C4": "Wa1, Za3, Ta1, Yb1, Sb1, Uf1, Tb1, Va1, Wa2, Ud1, Vd1, Sb1",
      "A4, B4, C5": "Wa1, Za3, Ta1, Yb1, Sb1, Uf1, Tc1, Va1, Ud1, Uc1",
      "A4, B4, C6": "Wa1, Za3, Ta1, Yb1, Sb1, Uf1, Tc1, Va1, Wa2, Ud1 ",
      "A4, B4, C7": "Wa1, Za3, Ta1, Yb1, Sb1, Uf1, Tb1, Va1, Wa2, Ud1, Vd1, Sb1",
      "A5, B1, C1": "Zb3, Ta1, Yb1, Sb1, Yd1, Va1, Ud1, Vd1, Sb1",
      "A5, B1, C2": "Zb3, Ta1, Yb1, Sb1, Uf1, Yd1, Va1, Ud1, Vd1, Sb1",
      "A5, B1, C3": "Zb3, Ta1, Yb1, Sb1, Uf1, Xa1, Va1, Ud1, Uc1",
      "A5, B1, C4": "Zb3, Ta1, Yb1, Sb1, Uf1, Yd1, Va1, Ud1, Vd1, Sb1",
      "A5, B1, C5": "Zb3, Ta1, Yb1, Sb1, Uf1, Xa1, Va1, Ud1, Uc1",
      "A5, B1, C6": "Zb3, Ta1, Yb1, Sb1, Uf1, Xa1, Va1, Ud1, Uc1",
      "A5, B1, C7": "Zb3, Ta1, Yb1, Sb1, Uf1, Yd1, Va1, Ud1, Vd1, Sb1",
      "A5, B2, C1": "Zb3, Ta1, Yb1, Sb1, Yd1, Va1, Ud1, Vd1, Sb1",
      "A5, B2, C2": "Zb3, Ta1, Yb1, Sb1, Uf1, Yd1, Va1, Ud1, Vd1, Sb1",
      "A5, B2, C3": "Zb3, Ta1, Yb1, Sb1, Uf1, Xa1, Va1, Ud1, Uc1",
      "A5, B2, C4": "Zb3, Ta1, Yb1, Sb1, Uf1, Yd1, Va1, Ud1, Vd1, Sb1",
      "A5, B2, C5": "Zb3, Ta1, Yb1, Sb1, Uf1, Xa1, Va1, Ud1, Uc1",
      "A5, B2, C6": "Zb3, Ta1, Yb1, Sb1, Uf1, Xa1, Va1, Ud1, Uc1",
      "A5, B2, C7": "Zb3, Ta1, Yb1, Sb1, Uf1, Yd1, Va1, Ud1, Vd1, Sb1",
      "A5, B3, C1": "Zb3, Ta1, Yf1, Yb1, Sb1, Tb1, Va1, Ud1, Vd1, Sb1",
      "A5, B3, C2": "Zb3, Ta1, Yf1, Yb1, Sb1, Uf1, Tb1, Va1, Ud1, Vd1, Sb1",
      "A5, B3, C3": "Zb3, Ta1, Yf1, Yb1, Sb1, Uf1, Tc1, Va1, Ud1, Uc1",
      "A5, B3, C4": "Zb3, Ta1, Yf1, Yb1, Sb1, Uf1, Tb1, Va1, Ud1, Vd1, Sb1",
      "A5, B3, C5": "Zb3, Ta1, Yf1, Yb1, Sb1, Uf1, Tc1,  Va1, Ud1, Uc1",
      "A5, B3, C6": "Zb3, Ta1, Yf1, Yb1, Sb1, Uf1, Tc1,  Va1, Ud1, Uc1",
      "A5, B3, C7": "Zb3, Ta1, Yf1, Yb1, Sb1, Uf1, Tb1, Va1, Ud1, Vd1, Sb1",
      "A5, B4, C1": "Zb3, Ta1, Yb1, Sb1, Yd1, Va1, Ud1, Vd1, Sb1",
      "A5, B4, C2": "Zb3, Ta1, Yb1, Uf1, Yd1, Va1, Ud1, Vd1",
      "A5, B4, C3": "Zb3, Ta1, Yb1, Sb1, Uf1, Xa1, Va1, Ud1, Uc1",
      "A5, B4, C4": "Zb3, Ta1, Yb1, Sb1, Uf1, Yd1, Va1, Ud1, Vd1, Sb1",
      "A5, B4, C5": "Zb3, Ta1, Yb1, Sb1, Uf1, Xa1, Va1, Ud1, Uc1",
      "A5, B4, C6": "Zb3, Ta1, Yb1, Sb1, Uf1, Xa1, Va1, Ud1, Uc1",
      "A5, B4, C7": "Zb3, Ta1, Yb1, Sb1, Uf1, Yd1, Va1, Ud1, Vd1, Sb1",
      "A6, B1, C1": "Wa1, Za2, Yb1, Sb1, Yd1, Va1, Ud1, Wa2, Vd1, Sb1",
      "A6, B1, C2": "Wa1, Za2, Yb1, Sb1, Uf1, Yd1, Va1, Ud1, Wa2, Vd1, Sb1",
      "A6, B1, C3": "Za2, Yb1, Sb1, Uf1, Xa1, Va1, Wa2, Ud1, Sb1, Uc1",
      "A6, B1, C4": "Wa1, Za2, Yb1, Sb1, Uf1, Yd1, Va1, Ud1, Wa2, Vd1, Sb1",
      "A6, B1, C5": "Za2, Yb1, Sb1, Uf1, Xa1, Va1, Wa2, Ud1, Sb1, Uc1",
      "A6, B1, C6": "Wa1, Za2, Yb1, Sb1, Uf1, Xa1, Va1, Wa2, Ud1, Sb1, Uc1",
      "A6, B1, C7": "Wa1, Za2, Yb1, Sb1, Uf1, Yd1, Va1, Ud1, Wa2, Vd1, Sb1",
      "A6, B2, C1": "Wa1, Za2, Yb1, Sb1, Yd1, Va1, Ud1, Wa2, Sb1, Vd1",
      "A6, B2, C2": "Wa1, Za2, Yb1, Sb1, Uf1, Yd1, Va1, Ud1, Wa2, Sb1, Vd1",
      "A6, B2, C3": "Za2, Yb1, Sb1, Uf1, Xa1, Va1, Wa2, Ud1, Sb1, Uc1",
      "A6, B2, C4": "Wa1, Za2, Yb1, Sb1, Uf1, Yd1, Va1, Ud1, Wa2, Sb1, Vd1",
      "A6, B2, C5": "Za2, Yb1, Sb1, Uf1, Xa1, Va1, Wa2, Ud1, Sb1, Uc1",
      "A6, B2, C6": "Wa1, Za2, Yb1, Sb1, Uf1, Xa1, Va1, Wa2, Ud1, Sb1, Uc1",
      "A6, B2, C7": "Wa1, Za2, Yb1, Sb1, Uf1, Yd1, Va1, Ud1, Wa2, Sb1, Vd1",
      "A6, B3, C1": "Wa1, Za2, Yb1, Sb1, Ta1, Va1, Yd1, Ud1, Wa2, Sb1, Vd1",
      "A6, B3, C2": "Za2, Yb1, Sb1, Ta1, Uf1, Yd1, Va1, Ud1, Wa2, Sb1, Vd1",
      "A6, B3, C3": "Za2, Yb1, Sb1, Ta1, Uf1, Xa1, Va1, Wa2, Ud1, Sb1, Uc1",
      "A6, B3, C4": "Wa1, Za2, Yb1, Sb1, Ta1, Uf1, Yd1, Va1, Ud1, Wa2, Sb1, Vd1",
      "A6, B3, C5": "Za2, Yb1, Sb1, Ta1, Uf1, Xa1, Va1, Wa2, Ud1, Sb1, Uc1",
      "A6, B3, C6": "Wa1, Za2, Yb1, Sb1, Ta1, Uf1, Xa1, Va1, Wa2, Ud1, Sb1, Uc1",
      "A6, B3, C7": "Wa1, Za2, Yb1, Sb1, Ta1, Uf1, Yd1, Va1, Wa2, Ud1, Sb1, Vd1",
      "A6, B4, C1": "Wa1, Za2, Yb1, Sb1, Yd1, Va1, Ud1, Wa2, Sb1, Vd1",
      "A6, B4, C2": "Wa1, Za2, Yb1, Sb1, Uf1, Yd1, Va1, Ud1, Wa2, Sb1, Vd1",
      "A6, B4, C3": "Za2, Yb1, Sb1, Uf1, Xa1, Va1, Wa2, Ud1, Sb1, Uc1",
      "A6, B4, C4": "Wa1, Za2, Yb1, Sb1, Uf1, Yd1, Va1, Ud1, Wa2, Sb1, Vd1",
      "A6, B4, C5": "Za2, Yb1, Sb1, Uf1, Xa1, Va1, Wa2, Ud1, Sb1, Uc1",
      "A6, B4, C6": "Wa1, Za2, Yb1, Sb1, Uf1, Xa1, Va1, Wa2, Ud1, Sb1, Uc1",
      "A6, B4, C7": "Wa1, Za2, Yb1, Sb1, Uf1, Yd1, Va1, Ud1, Wa2, Sb1, Vd1"
    };
    const answer_key = `A${answer_1}, B${answer_3}, C${answer_4}`;
    const block_sequence = mapping[answer_key];
    console.log(answer_key, block_sequence);
    return btoa(block_sequence);
  } else {
    return fetchFormResponse(formId, responseId);
  }
};

export default function Page() {
  const router = useRouter();
  const [startQuiz1, setStartQuiz1] = useState(false);
  const [loadingSmartBuilder, setLoadingSmartBuilder] = useState(false)
  const [showPreviewPopup, setShowPreviewPopup] = useState(false)
  const [blockSequenceState, setBlockSequenceState] = useState('')

  const searchParams = useSearchParams();
  const { cachedUser } = useContext(AuthContext);
  const projectID = searchParams.get('projectId');

  // const startQuiz = () => {
  //   setStartQuiz1(!startQuiz1);
  // };

  const onFormSubmit = async (typeformObject: any) => {
    setLoadingSmartBuilder(true)
    const formId = typeformObject.formId;
    const responseId = typeformObject.responseId
    try {
      const blockSequence = await fetchFormResponse(formId, responseId);
      setBlockSequenceState(blockSequence)
      setLoadingSmartBuilder(false)
      setShowPreviewPopup(true)
    } catch(error) {
      console.log(error)
      setLoadingSmartBuilder(false)
    }
  };

  function closeModalHandler() {
    setStartQuiz1(!startQuiz1);
  }

  const startEditingHandler = async () => {
    try {
      setShowPreviewPopup(false)
      setLoadingSmartBuilder(true)
      let id = projectID || ''
      
      if(!projectID) {
        const newProjectPayload = {
          name: 'Untitled',
          collaborators: [],
          files:[],
          organizationId: cachedUser?.organizations[0] || '',
        }
  
        const newProjectResponse = await createProjectForOrganization(newProjectPayload)
        id = newProjectResponse.data._id
      }
  
        const newFilePayload = {
          name: "Untitled",
          slug: "",
          htmlHeadContent: '',
          htmlBodyContent: '',
          status: FileStatus.DRAFT,
          builderData: '',
          projectId: id 
        };
  
      const newFileResponse = await createFileForProject(newFilePayload);
      const newFile = newFileResponse.data;
      router.push(`/studio/${newFile._id}?block_sequence=${blockSequenceState}`);
      } catch(error) {
        console.log(error)
        setLoadingSmartBuilder(false)
      }
  }

  async function handleNewProjectSubmit(payload: NewProjectPayload) {
    // try {
    //   const newProjectPayload = {
    //     name: payload.inputOneData,
    //     projectHostingAlias: payload.inputTwoData,
    //   };

    //   const newProjectResponse = await createProjectForOrganization(
    //     newProjectPayload
    //   );

    //   const newProject = newProjectResponse.data;
    //   console.log("newProject", newProject);
    //   router.push("/projects");

    //   setTableData((prevState) => [newProject, ...prevState]);
    // } catch (error) {
    //   console.log(error);
    // }

    // closeModalHandler();
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
                    onSubmit={onFormSubmit}
                    className="smart-builder"
                  >
                    Let&apos;s Get Started {">"}
                  </PopupButton>
                </div>
                {/* <TypeformModal /> */}
              </div>
            </>
          )}
        </div>
      </div>
      {
        showPreviewPopup && 
        <BlockPreviewPopup blockSequence={blockSequenceState} handleStartEditing={startEditingHandler}/>
      }
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
