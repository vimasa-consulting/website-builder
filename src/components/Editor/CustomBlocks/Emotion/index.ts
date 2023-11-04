import { Editor } from "grapesjs";
import {
solutionToUserPain1Block,
solutionToUserPain1Component
} from "./Blocks/solutionToUserPain1";

export default function initEmotion(editor: Editor) {
  solutionToUserPain1Block(editor);
  solutionToUserPain1Component(editor);
}
