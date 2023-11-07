import { Editor } from "grapesjs";
import {
fomo1Block,
fomo1Component
} from "./Blocks/fomo1";

import {
  fomo2Block,
  fomo2Component
} from "./Blocks/fomo2";

import {
  fomo3Block,
  fomo3Component
} from "./Blocks/fomo3";
 
import {
  fomo4Block,
  fomo4Component
} from "./Blocks/fomo4";

import {
  fomo5Block,
  fomo5Component
} from "./Blocks/fomo5";

export default function initUrgency(editor: Editor) {
  fomo1Block(editor);
  fomo1Component(editor);

  fomo2Block(editor);
  fomo2Component(editor);

  fomo3Block(editor);
  fomo3Component(editor);

  fomo4Block(editor);
  fomo4Component(editor);

  fomo5Block(editor);
  fomo5Component(editor);

}
