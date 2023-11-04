import { Editor } from "grapesjs";
import {
howItWorks1Block,
howItWorks1Component
} from "./Blocks/howItWorks1";

export default function initLogic(editor: Editor) {
  // Before After 1
  howItWorks1Block(editor);
  howItWorks1Component(editor);
}
