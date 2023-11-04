import { Editor } from "grapesjs";
import {
brandStory1Block,
brandStory1Component
} from "./Blocks/brandStory1";

export default function initBrandConnect(editor: Editor) {
  brandStory1Block(editor);
  brandStory1Component(editor);
}
