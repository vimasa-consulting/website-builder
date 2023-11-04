import { Editor } from "grapesjs";
import initFirstImpression from "./FirstImpression/index";
import initTrust from "./Trust";
import initLogic from "./Logic";

export default function init(editor: Editor) {
  initFirstImpression(editor);
  initTrust(editor)
  initLogic(editor)
}
