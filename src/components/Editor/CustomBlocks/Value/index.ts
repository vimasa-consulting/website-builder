import { Editor } from "grapesjs";
import {
shopByOffer1Block,
shopByOffer1Component
} from "./Blocks/shopByOffer1";

export default function initValue(editor: Editor) {
  shopByOffer1Block(editor);
  shopByOffer1Component(editor);
}
