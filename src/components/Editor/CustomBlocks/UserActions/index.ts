import { Editor } from "grapesjs";
import {
signUp1Block,
signUp1Component
} from "./Blocks/signUp1";

import {
  signUp2Block,
  signUp2Component
} from "./Blocks/signUp2";
  

export default function initUserActions(editor: Editor) {
  signUp1Block(editor);
  signUp1Component(editor);

  signUp2Block(editor);
  signUp2Component(editor);
}
