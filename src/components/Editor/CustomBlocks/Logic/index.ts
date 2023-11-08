import { Editor } from "grapesjs";
import {
  howItWorks1Block,
  howItWorks1Component
} from "./Blocks/howItWorks1";
import {
  howItWorks2Block,
  howItWorks2Component
} from "./Blocks/howItWorks2";
import {
  howItWorks3Block,
  howItWorks3Component
} from "./Blocks/howItWorks3";
import {
  howItWorks4Block,
  howItWorks4Component
} from "./Blocks/howItWorks4";
import {
  howItWorks5Block
  , howItWorks5Component
} from "./Blocks/howItWorks5";
import {
  howItWorks6Block,
  howItWorks6Component
} from "./Blocks/howItWorks6";
import {
  productFeatures1Block,
  productFeatures1Component
} from "./Blocks/productFeatures1";
import {
  productBenefits3Block,
  productBenefits3Component
} from "./Blocks/productBenefits3";
import {
  productFeatures2Block,
  productFeatures2Component
} from "./Blocks/productFeatures2";
import {
  productFeatures3Block,
  productFeatures3Component
} from "./Blocks/productFeatures3";

export default function initLogic(editor: Editor) {
  // Before After 1
  howItWorks1Block(editor);
  howItWorks1Component(editor);
  howItWorks2Block(editor);
  howItWorks2Component(editor);
  howItWorks3Block(editor);
  howItWorks3Component(editor);
  howItWorks4Block(editor);
  howItWorks4Component(editor);
  howItWorks5Block(editor);
  howItWorks5Component(editor);
  howItWorks6Block(editor);
  howItWorks6Component(editor);
  productFeatures1Block(editor);
  productFeatures1Component(editor);
  productFeatures2Block(editor);
  productFeatures2Component(editor);
  productFeatures3Block(editor);
  productFeatures3Component(editor);
  productBenefits3Block(editor);
  productBenefits3Component(editor);
}
