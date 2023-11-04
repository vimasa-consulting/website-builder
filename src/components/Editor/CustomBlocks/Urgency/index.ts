import { Editor } from "grapesjs";
import {
fomo1Block,
fomo1Component
} from "./Blocks/fomo1";

export default function initUrgency(editor: Editor) {
  fomo1Block(editor);
  fomo1Component(editor);
}
