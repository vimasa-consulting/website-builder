import { Editor } from "grapesjs";
import initFirstImpression from "./FirstImpression/index";
import initTrust from "./Trust";
import initLogic from "./Logic";
import initEmotion from "./Emotion";
import initUrgency from "./Urgency";
import initValue from "./Value";
import initBrandConnect from "./BrandConnect";
import initUserActions from "./UserActions";

export default function init(editor: Editor) {
  // initFirstImpression(editor);
  // initTrust(editor);
  // initLogic(editor);
  // initEmotion(editor);
  // initUrgency(editor);
  // initValue(editor);
  initBrandConnect(editor);
  // initUserActions(editor);
}
