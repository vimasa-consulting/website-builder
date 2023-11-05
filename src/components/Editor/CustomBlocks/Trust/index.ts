import { Editor } from "grapesjs";
import {
  beforeAfter1Block,
  beforeAfter1Component
  } from "./Blocks/beforeAfter1";
import {
  beforeAfter3Block,
  beforeAfter3Component
  } from "./Blocks/beforeAfter3";
  

export default function initTrust(editor: Editor) {
  beforeAfter1Block(editor);
  beforeAfter1Component(editor);
  beforeAfter3Block(editor);
  beforeAfter3Component(editor);

}
