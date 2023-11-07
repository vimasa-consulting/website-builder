import { Editor } from "grapesjs";
import {
  solutionToUserPain1Block,
  solutionToUserPain1Component
} from "./Blocks/solutionToUserPain1";

import {
  solutionToUserPain2Block,
  solutionToUserPain2Component
} from "./Blocks/solutionToUserPain2";

import {
  solutionToUserPain3Block,
  solutionToUserPain3Component
} from "./Blocks/solutionToUserPain3";

import {
  userAspirations1Block,
  userAspirations1Component
} from "./Blocks/usersAspirations1";
import { userAspirations2Block, userAspirations2Component } from "./Blocks/userAsepirations2";
  


export default function initEmotion(editor: Editor) {
  solutionToUserPain1Block(editor);
  solutionToUserPain1Component(editor);

  solutionToUserPain2Block(editor);
  solutionToUserPain2Component(editor);

  solutionToUserPain3Block(editor);
  solutionToUserPain3Component(editor);

  userAspirations2Block(editor);
  userAspirations2Component(editor);

}
