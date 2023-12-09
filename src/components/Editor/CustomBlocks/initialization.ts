import { Editor } from "grapesjs";
import initFirstImpression from "./FirstImpression/index";
import initTrust from "./Trust";
import initLogic from "./Logic";
import initEmotion from "./Emotion";
import initUrgency from "./Urgency";
import initValue from "./Value";
import initBrandConnect from "./BrandConnect";
import initUserActions from "./UserActions";
import { elHasClassName } from "@/components/plugins/web/utils";

export default function init(editor: Editor) {
  initFirstImpression(editor);
  initTrust(editor);
  initLogic(editor);
  initEmotion(editor);
  initUrgency(editor);
  initValue(editor);
  initBrandConnect(editor);
  initUserActions(editor);
  const componentClass = 'gjs-button';
  editor.Components.addType("customButton", {    
    isComponent: (el) => elHasClassName(el, componentClass),
    extend: 'link',
    model: {
      defaults: {
        attributes: { class: "gjs-button" },        
      },
      styles: `
            .${componentClass} {
              background-color: #04AA6D;
              border-radius: 4px;
            }
          `
    },
  });
  const options = {
    id: "customButton",
    label: "Button",
    block: {},
    props: {},
    style: "",
    category: "Basic",
    classPrefix: "customButton",
    styleAdditional: "",
    media: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sign-intersection-fill" viewBox="0 0 16 16">
  <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435ZM7.25 4h1.5v3.25H12v1.5H8.75V12h-1.5V8.75H4v-1.5h3.25V4Z"/>
</svg>`,
};

editor.Blocks.add(options.id, {
    media: options.media,
    label: options.label,
    category: options.category,
    content: { type: options.id , content : "Submit"},
    ...options.block,
});
}
