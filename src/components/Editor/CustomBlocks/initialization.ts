import { Editor } from "grapesjs";
import initFirstImpression from "./FirstImpression/index";
import initTrust from "./Trust";

export default function init(editor: Editor) {
  initFirstImpression(editor);
  initTrust(editor)
}
