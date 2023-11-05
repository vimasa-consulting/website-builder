import { Editor } from "grapesjs";
import {
  brandStory1Block,
  brandStory1Component
} from "./Blocks/brandStory1";
import {
  brandStory2Block,
  brandStory2Component
} from "./Blocks/brandStory2";
import { 
  brandStory3Block, 
  brandStory3Component
} from "./Blocks/brandStory3";
import { 
  brandStory4Block, 
  brandStory4Component
} from "./Blocks/brandStory4";

export default function initBrandConnect(editor: Editor) {
  brandStory1Block(editor);
  brandStory1Component(editor);
  brandStory2Block(editor);
  brandStory2Component(editor);
  brandStory3Block(editor);
  brandStory3Component(editor);
  brandStory4Block(editor);
  brandStory4Component(editor);
}
