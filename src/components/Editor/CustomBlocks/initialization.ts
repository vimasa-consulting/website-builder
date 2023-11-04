import { Editor } from "grapesjs";
import initFirstImpression from "./FirstImpression/index";
import initTrust from "./Trust";
import initLogic from "./Logic";
import initEmotion from "./Emotion";

export default function init(editor: Editor) {
  initFirstImpression(editor);
  initTrust(editor)
  initLogic(editor)
  initEmotion(editor)
}
