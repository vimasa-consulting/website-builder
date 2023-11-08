import { Editor } from "grapesjs";
import {
  howItWorks1Block,
  howItWorks1Component
} from "./Blocks/howItWorks1";
import {
  howItWorks2Block,
  howItWorks2Component
} from "./Blocks/howItWorks2";
import {
  howItWorks3Block,
  howItWorks3Component
} from "./Blocks/howItWorks3";
import {
  howItWorks4Block,
  howItWorks4Component
} from "./Blocks/howItWorks4";

export default function initLogic(editor: Editor) {
  // Before After 1
  howItWorks1Block(editor);
  howItWorks1Component(editor);
  howItWorks2Block(editor);
  howItWorks2Component(editor);
  howItWorks3Block(editor);
  howItWorks3Component(editor);
  howItWorks4Block(editor);
  howItWorks4Component(editor);
}
