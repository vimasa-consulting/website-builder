import { Editor } from "grapesjs";
import {
shopByOffer1Block,
shopByOffer1Component
} from "./Blocks/shopByOffer1";
import { shopByOffer3Block, shopByOffer3Component } from "./Blocks/shopByOffer3";

export default function initValue(editor: Editor) {
  shopByOffer1Block(editor);
  shopByOffer1Component(editor);
  shopByOffer3Block(editor);
  shopByOffer3Component(editor);
}
