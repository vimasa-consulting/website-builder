import { Editor } from "grapesjs";
import {
  beforeAfter1Block,
  beforeAfter1Component
  } from "./Blocks/beforeAfter1";
import {
  beforeAfter3Block,
  beforeAfter3Component
  } from "./Blocks/beforeAfter3";
import { clientListLogos1Block, clientListLogos1Component } from "./Blocks/clientListLogos1";
import { clientListLogos4Block, clientListLogos4Component } from "./Blocks/clientListLogos4";
import { clientListLogos3Block, clientListLogos3Component } from "./Blocks/clientListLogos3";
import { clientListLogos2Block, clientListLogos2Component } from "./Blocks/clientListLogos2";
import { reviewsAndRatings1Block, reviewsAndRatings1Component } from "./Blocks/reviewsAndRatings1";
import { reviewsAndRatings2Block, reviewsAndRatings2Component } from "./Blocks/reviewsAndRatings2";
  

export default function initTrust(editor: Editor) {
  beforeAfter1Block(editor);
  beforeAfter1Component(editor);
  beforeAfter3Block(editor);
  beforeAfter3Component(editor);
  clientListLogos1Block(editor);
  clientListLogos1Component(editor);
  clientListLogos2Block(editor);
  clientListLogos2Component(editor);
  clientListLogos3Block(editor);
  clientListLogos3Component(editor);
  clientListLogos4Block(editor);
  clientListLogos4Component(editor);
  reviewsAndRatings1Block(editor);
  reviewsAndRatings1Component(editor);
  reviewsAndRatings2Block(editor);
  reviewsAndRatings2Component(editor);
}
