import { Editor } from "grapesjs";
import {
fomo1Block,
fomo1Component
} from "./Blocks/fomo1";

import {
  fomo2Block,
  fomo2Component
  } from "./Blocks/fomo2";
  

export default function initUrgency(editor: Editor) {
  fomo1Block(editor);
  fomo1Component(editor);

  fomo2Block(editor);
  fomo2Component(editor);

}
