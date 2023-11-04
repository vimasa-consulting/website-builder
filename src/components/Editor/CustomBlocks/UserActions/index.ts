import { Editor } from "grapesjs";
import {
signUp1Block,
signUp1Component
} from "./Blocks/signUp1";

export default function initUserActions(editor: Editor) {
  signUp1Block(editor);
  signUp1Component(editor);
}
