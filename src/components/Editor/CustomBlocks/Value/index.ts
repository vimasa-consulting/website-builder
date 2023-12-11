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
import {
  singleProductOffer1Component,
  singleProductOffer1block,
} from "./Blocks/singleProductOffer1";
import {
  singleProductOffer3Component,
  singleProductOffer3block,
} from "./Blocks/singleProductOffer3";
import {
  shopByOfferVal3Block,
  shopByOfferVal3Component,
} from "./Blocks/shopByOfferVal3";
import { showcaseV2Block, showcaseV2Component } from "./Blocks/showcaseV2";
import { showcaseV1Block, showcaseV1Component } from "./Blocks/showcaseV1";
import {
  singleProductOffer2Block,
  singleProductOffer2Component,
} from "./Blocks/singleProductOffer2";
import { showcaseV3Block, showcaseV3Component } from "./Blocks/showcaseV3";

export default function initValue(editor: Editor) {
  showcaseV1Block(editor);
  showcaseV1Component(editor);

  showcaseV2Block(editor);
  showcaseV2Component(editor);

  shopByOfferValue1Block(editor);
  shopByOfferValue1Component(editor);

  shopByOfferValue2Block(editor);
  shopByOfferValue2Component(editor);

  shopByOfferVal3Block(editor);
  shopByOfferVal3Component(editor);

  multiProductOffers1Block(editor);
  multiProductOffers1Component(editor);

  multiProductOffers2Block(editor);
  multiProductOffers2Component(editor);

  multiProductOffers3Block(editor);
  multiProductOffers3Component(editor);

  // productShowcase3Block(editor);
  // productShowcase3Component(editor);

  showcaseV3Block(editor);
  showcaseV3Component(editor);

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

  singleProductOffer1block(editor);
  singleProductOffer1Component(editor);

  singleProductOffer2Block(editor);
  singleProductOffer2Component(editor);

  singleProductOffer3block(editor);
  singleProductOffer3Component(editor);
}
