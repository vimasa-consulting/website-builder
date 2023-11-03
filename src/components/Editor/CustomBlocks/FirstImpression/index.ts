import { Editor } from "grapesjs";
import {
  atf1Conversion1block,
  atf1Conversion1Component,
} from "./Blocks/atf1conversion1";

export default function initFirstImpression(editor: Editor) {
  // ATF1CONVERSION1
  atf1Conversion1block(editor);
  atf1Conversion1Component(editor);
}
