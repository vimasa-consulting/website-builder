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
import loadComponents from "@/components/Editor/CustomBlocks/Accordion/index";
import loadBlocks from "@/components/Editor/CustomBlocks/Accordion/blocks";
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
        styles: `
            .gjs-button {
              vertical-align:top;
              max-width:100%;
              display:inline-block;
              text-decoration:none;
              color:white;
              padding-right:15px;
              padding-bottom:10px;
              padding-left:15px;
              background-color:rgb(36,99,235);
              border-top-left-radius:5px;
              border-top-right-radius:5px;
              border-bottom-right-radius:5px;
              border-bottom-left-radius:5px;
              padding-top:10px;
              font-size:1.1rem;
              text-align:center;
            }
        `
      },      
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

  const attrAccordion = "data-accordion";
  const attrAccordions = "data-accordions";
  const attrAccordionContent = "data-accordion-content";
  const attrAccordionContainer = "data-accordion-container";
  const accordionOptions = {
    ...{
      // Object to extend the default accordions block, eg. `{ label: 'Accordions', attributes: { ... } }`
      // Pass a falsy value to avoid adding the block
      accordionsBlock: {},

      // Object to extend the default accordions properties, eg. `{ name: 'My Accordions', droppable: false, ... }`
      accordionsProps: {},

      // Object to extend the default accordion properties
      accordionProps: {},

      // Object to extend the default accordion content properties
      accordionContentProps: {},

      // Object to extend the default accordion container properties
      accordionContainerProps: {},

      // Accordions attribute identifier (main component)
      attrAccordions,

      // Accordion attribute identifier
      attrAccordion,

      // Accordion content attribute identifier
      attrAccordionContent,

      // Accordion container attribute identifier
      attrAccordionContainer,

      // Default class to use on accordion
      classAccordion: "accordion",

      // Class used on accordions when active
      classAccordionActive: "accordion-active",

      // Default class to use on accordion content
      classAccordionContent: "accordion-content",

      // Default class to use on accordion container
      classAccordionContainer: "accordion-container",

      // The attribute used inside accordions as a selector for accordion contents
      selectorAccordion: "href",

      // Default accordions template
      template: `
      <div ${attrAccordionContainer}>
        <a  ${attrAccordion}>Accordion 1</a>
        <div ${attrAccordionContent}>
          <div>Accordion 1 Content</div>
        </div>
      </div>
      <div ${attrAccordionContainer}>
        <a  ${attrAccordion}>Accordion 2</a>
        <div ${attrAccordionContent}>
          <div>Accordion 2 Content</div> 
        </div>      
      </div>
      <div ${attrAccordionContainer}>
        <a  ${attrAccordion}>Accordion 3</a>
        <div ${attrAccordionContent}>
          <div>Accordion 3 Content</div>
        </div>
      </div>
    `,

      // Default template for new added accordion contents
      templateAccordionContent: `<div>New Accordion Content</div>`,

      style: `
      .accordion {
        text-decoration: none;
        color: inherit;
        padding: 7px 14px;
        transition: opacity 0.3s;
        display: block;
        border-radius: 3px;
        margin-right: 10px;
        background-color: #eee;
        margin-top: 5px;
      }

      .accordion-content {
        display: none;
        padding: 6px 12px;
        min-height: 100px;
        border: solid 1px #eee;
      }

    `,
    },    
  };
  // Add components
  //loadComponents(editor, options);
  // Add blocks
  //loadBlocks(editor, options);

}
