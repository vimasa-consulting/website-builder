import { Editor } from "grapesjs";

import {
  atf1Conversion1block,
  atf1Conversion1Component,
} from "./Blocks/atf1conversion1";
import {
  atf1Conversion2block,
  atf1Conversion2Component,
} from "./Blocks/atf1conversion2";
import {
  atf1Conversion3block,
  atf1Conversion3Component,
} from "./Blocks/atf1conversion3";
import {
  atf1ProductAwareness1block,
  atf1ProductAwareness1Component,
} from "./Blocks/atf1productAwareness1";
import {
  atf1ProductAwareness2block,
  atf1ProductAwareness2Component,
} from "./Blocks/atf1productAwareness2";
import {
  atf1ProductAwareness3block,
  atf1ProductAwareness3Component,
} from "./Blocks/atf1productAwareness3";
import {
  atf1BrandConnect1block,
  atf1BrandConnect1Component,
} from "./Blocks/atf1brandConnect1";
import {
  atf1BrandConnect2block,
  atf1BrandConnect2Component,
} from "./Blocks/atf1brandConnect2";
import atf2Brand from "./atf2Brand";
import {
  atf2BrandConnect1block,
  atf2BrandConnect1Component,
} from "./Blocks/atf2brandConnect1";
import {
  atf2BrandConnect2block,
  atf2BrandConnect2Component,
} from "./Blocks/atf2brandConnect2";
import {
  atf2Conversion1block,
  atf2Conversion1Component,
} from "./Blocks/atf2conversion1";
import {
  atf2Conversion2block,
  atf2Conversion2Component,
} from "./Blocks/atf2conversion2";
import {
  atf2Conversion3block,
  atf2Conversion3Component,
} from "./Blocks/atf2conversion3";

export default function initFirstImpression(editor: Editor) {
  // ATF1CONVERSION1
  atf1Conversion1block(editor);
  atf1Conversion1Component(editor);
  // ATF1CONVERSION2
  atf1Conversion2block(editor);
  atf1Conversion2Component(editor);
  // ATF1CONVERSION3
  atf1Conversion3block(editor);
  atf1Conversion3Component(editor);
  // ATF1PRODUCTAWARENESS1
  atf1ProductAwareness1block(editor);
  atf1ProductAwareness1Component(editor);
  // ATF1PRODUCTAWARENESS2
  atf1ProductAwareness2block(editor);
  atf1ProductAwareness2Component(editor);
  // ATF1PRODUCTAWARENESS3
  atf1ProductAwareness3block(editor);
  atf1ProductAwareness3Component(editor);
  // ATF1BRANDCONNECT1
  atf1BrandConnect1block(editor);
  atf1BrandConnect1Component(editor);
  // ATF1BRANDCONNECT2
  atf1BrandConnect2block(editor);
  atf1BrandConnect2Component(editor);

  // ATF2BRANDCONNECT1
  atf2BrandConnect1block(editor);
  atf2BrandConnect1Component(editor);
  // ATF2BRANDCONNECT2
  atf2BrandConnect2block(editor);
  atf2BrandConnect2Component(editor);
  // ATF2CONVERSION1
  atf2Conversion1block(editor);
  atf2Conversion1Component(editor);
  // ATF2CONVERSION2
  atf2Conversion2block(editor);
  atf2Conversion2Component(editor);
  // ATF2CONVERSION3
  atf2Conversion3block(editor);
  atf2Conversion3Component(editor);
}
