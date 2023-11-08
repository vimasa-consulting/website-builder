import { Editor } from "grapesjs";
import {
  shopByOfferValue1Block,
  shopByOfferValue1Component,
} from "./Blocks/shopByOfferVal1";
import {
  shopByOfferValue2Block,
  shopByOfferValue2Component,
} from "./Blocks/shopByOfferVal2";
import {
  multiProductOffers1Block,
  multiProductOffers1Component,
} from "./Blocks/multiProductOffer1";
import {
  multiProductOffers2Block,
  multiProductOffers2Component,
} from "./Blocks/multiProductOffer2";
import {
  multiProductOffers3Block,
  multiProductOffers3Component,
} from "./Blocks/multiProductOffer3";
import {
  productShowcase3Block,
  productShowcase3Component,
} from "./Blocks/productShowcase3";
import {
  brandBenefits1Block,
  brandBenefits1Component,
} from "./Blocks/brandBenefits1";
import {
  brandBenefits2Block,
  brandBenefits2Component,
} from "./Blocks/brandBenefits2";
import {
  brandBenefits3Block,
  brandBenefits3Component,
} from "./Blocks/brandBenefits3";
import {
  brandBenefits4Block,
  brandBenefits4Component,
} from "./Blocks/brandBenefits4";
import {
  brandBenefits5Block,
  brandBenefits5Component,
} from "./Blocks/brandBenefits5";

export default function initValue(editor: Editor) {
  shopByOfferValue1Block(editor);
  shopByOfferValue1Component(editor);

  shopByOfferValue2Block(editor);
  shopByOfferValue2Component(editor);

  multiProductOffers1Block(editor);
  multiProductOffers1Component(editor);

  multiProductOffers2Block(editor);
  multiProductOffers2Component(editor);

  multiProductOffers3Block(editor);
  multiProductOffers3Component(editor);

  productShowcase3Block(editor);
  productShowcase3Component(editor);

  brandBenefits1Block(editor);
  brandBenefits1Component(editor);

  brandBenefits2Block(editor);
  brandBenefits2Component(editor);

  brandBenefits3Block(editor);
  brandBenefits3Component(editor);

  brandBenefits4Block(editor);
  brandBenefits4Component(editor);

  brandBenefits5Block(editor);
  brandBenefits5Component(editor);
}
