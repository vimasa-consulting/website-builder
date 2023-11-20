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
} from "./Blocks/userAspirations1";
import { userAspirations2Block, userAspirations2Component } from "./Blocks/userAspirations2";
import { personaUseCase2Block, personaUseCase2Component } from "./Blocks/personaUseCase2";
import { personaUseCase1Block, personaUseCase1Component } from "./Blocks/personaUseCase1";
import { personaUseCase3Block, personaUseCase3Component } from "./Blocks/personaUseCase3";
import { userAspirations3Block, userAspirations3Component } from "./Blocks/userAspirations3";
  


export default function initEmotion(editor: Editor) {
  solutionToUserPain1Block(editor);
  solutionToUserPain1Component(editor);

  solutionToUserPain2Block(editor);
  solutionToUserPain2Component(editor);

  solutionToUserPain3Block(editor);
  solutionToUserPain3Component(editor);

  userAspirations1Block(editor);
  userAspirations1Component(editor);

  userAspirations2Block(editor);
  userAspirations2Component(editor);

  userAspirations3Block(editor);
  userAspirations3Component(editor);

  personaUseCase1Block(editor);
  personaUseCase1Component(editor);

  personaUseCase2Block(editor);
  personaUseCase2Component(editor);

  personaUseCase3Block(editor);
  personaUseCase3Component(editor);

}
