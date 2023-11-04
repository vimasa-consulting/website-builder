import { Editor } from "grapesjs";
import {
beforeAfter1Block,
beforeAfter1Component
} from "./Blocks/beforeAfter1";

export default function initTrust(editor: Editor) {
  // Before After 1
  beforeAfter1Block(editor);
  beforeAfter1Component(editor);
}
