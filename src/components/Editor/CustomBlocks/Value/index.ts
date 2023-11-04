import { Editor } from "grapesjs";
import {
howItWorks1Block,
howItWorks1Component
} from "./Blocks/shopByOffer1";

export default function initValue(editor: Editor) {
  // Before After 1
  howItWorks1Block(editor);
  howItWorks1Component(editor);
}
