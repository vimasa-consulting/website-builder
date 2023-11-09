import { Editor } from "grapesjs";
import { brandStory1Block, brandStory1Component } from "./Blocks/brandStory1";
import { brandStory2Block, brandStory2Component } from "./Blocks/brandStory2";
import { brandStory3Block, brandStory3Component } from "./Blocks/brandStory3";
import { brandStory4Block, brandStory4Component } from "./Blocks/brandStory4";
import {
  whatWeStandFor3Block,
  whatWeStandFor3Component,
} from "./Blocks/whatWeStandFor3";
import {
  whatWeStandFor4Block,
  whatWeStandFor4Component,
} from "./Blocks/whatWeStandFor4";
import {
  whatWeStandFor5Block,
  whatWeStandFor5Component,
} from "./Blocks/whatWeStandFor5";
import {
  whatWeDontStandFor5Block,
  whatWeDontStandFor5Component,
} from "./Blocks/whatWeDontStandFor3";
import { whatWeStandFor2Block, whatWeStandFor2Component } from "./Blocks/whatWeStandFor2";
import { whatWeDontStandFor1Block, whatWeDontStandFor1Component } from "./Blocks/whatWeDontStandFor1";
import { whatWeStandFor1Block, whatWeStandFor1Component } from "./Blocks/whatWeStandFor1";
import { whatWeDontStandFor2Block, whatWeDontStandFor2Component } from "./Blocks/whatWeDontStandFor2";
import { socialMedia1Block, socialMedia1Component } from "./Blocks/socialMedia1";
import { socialMedia2Block, socialMedia2Component } from "./Blocks/socialMedia2";
import { socialMedia3Block, socialMedia3Component } from "./Blocks/socialMedia3";
import { fromTheFounder2Block, fromTheFounder2Component } from "./Blocks/fromTheFounder2";
import { fromTheFounder3Block, fromTheFounder3Component } from "./Blocks/fromTheFounder3";

export default function initBrandConnect(editor: Editor) {
  brandStory1Block(editor);
  brandStory1Component(editor);
  brandStory2Block(editor);
  brandStory2Component(editor);
  brandStory3Block(editor);
  brandStory3Component(editor);
  brandStory4Block(editor);
  brandStory4Component(editor);
  whatWeStandFor1Block(editor);
  whatWeStandFor1Component(editor);
  whatWeStandFor2Block(editor);
  whatWeStandFor2Component(editor);
  whatWeStandFor3Block(editor);
  whatWeStandFor3Component(editor);
  whatWeStandFor4Block(editor);
  whatWeStandFor4Component(editor);
  whatWeStandFor5Block(editor);
  whatWeStandFor5Component(editor);
  whatWeDontStandFor1Block(editor);
  whatWeDontStandFor1Component(editor);
  whatWeDontStandFor2Block(editor);
  whatWeDontStandFor2Component(editor);
  whatWeDontStandFor5Block(editor);
  whatWeDontStandFor5Component(editor);
  socialMedia1Block(editor);
  socialMedia1Component(editor);
  socialMedia2Block(editor);
  socialMedia2Component(editor);
  socialMedia3Block(editor);
  socialMedia3Component(editor);
  fromTheFounder2Block(editor);
  fromTheFounder2Component(editor);
  fromTheFounder3Block(editor);
  fromTheFounder3Component(editor);
}
