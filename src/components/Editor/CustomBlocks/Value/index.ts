import { Editor } from "grapesjs";
import {
  shopByOfferValue1Block,
  shopByOfferValue1Component,
} from "./Blocks/shopByOfferVal1";
import { shopByOfferValue2Block } from "./Blocks/shopByOfferVal2";

export default function initValue(editor: Editor) {
  shopByOfferValue1Block(editor);
  shopByOfferValue1Component(editor);

  shopByOfferValue2Block(editor);
  shopByOfferValue1Component(editor);
}
