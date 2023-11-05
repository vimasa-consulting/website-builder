import { Editor } from "grapesjs";
import {
solutionToUserPain1Block,
solutionToUserPain1Component
} from "./Blocks/solutionToUserPain1";

import {
  solutionToUserPain2Block,
  solutionToUserPain2Component
  } from "./Blocks/solutionToUserPain2";

  
export default function initEmotion(editor: Editor) {
  solutionToUserPain1Block(editor);
  solutionToUserPain1Component(editor);

  solutionToUserPain2Block(editor);
  solutionToUserPain2Component(editor);

}
