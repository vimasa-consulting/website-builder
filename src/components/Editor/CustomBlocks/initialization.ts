import { Editor } from "grapesjs";
import initFirstImpression from "./FirstImpression/index";
import initTrust from "./Trust";
import initLogic from "./Logic";
import initEmotion from "./Emotion";
import initUrgency from "./Urgency";
import initValue from "./Value";
import initBrandConnect from "./BrandConnect";
import initUserActions from "./UserActions";
import { elHasAttribute, elHasClassName } from "@/components/plugins/web/utils";
import loadComponents from "@/components/Editor/CustomBlocks/Accordion/index";
import loadBlocks from "@/components/Editor/CustomBlocks/Accordion/blocks";
import debounce from '@/components/utils/debounce';
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
  editor.BlockManager.add('svg-block', {
    label:'Icons', 
    content:`<svg width="45" height="45" version="1.1" viewBox="0 0 297.5 297.5" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m277.71 158.52v85.7h-257.92v-85.7h6.53v40.54c0 16.98 13.81 30.78 30.78 30.78s30.78-13.8 30.78-30.78v-40.54h30.09v40.54c0 16.98 13.81 30.78 30.78 30.78 16.98 0 30.78-13.8 30.78-30.78v-40.54h30.1v40.54c0 16.98 13.8 30.78 30.78 30.78 16.97 0 30.78-13.8 30.78-30.78v-40.54h6.52z" fill="#ACBFC7"/><rect x="218.66" y="53.28" width="43.49" height="10.53" fill="#CDD9DD"/><rect x="229.17" y="83.35" width="22.48" height="23.92" fill="#CDD9DD"/><rect x="137.51" y="83.35" width="22.48" height="23.92" fill="#CDD9DD"/><rect x="127.01" y="53.28" width="43.49" height="10.53" fill="#CDD9DD"/><rect x="35.35" y="53.28" width="43.49" height="10.53" fill="#CDD9DD"/><rect x="45.86" y="83.35" width="22.48" height="23.92" fill="#CDD9DD"/><path d="m251.65 126.81v72.25c0 6.2-5.05 11.24-11.24 11.24-6.2 0-11.24-5.04-11.24-11.24v-72.25h22.48z" fill="#FF4855"/><path d="m68.34 126.81v72.25c0 6.2-5.04 11.24-11.24 11.24s-11.24-5.04-11.24-11.24v-72.25h22.48z" fill="#D61616"/><path d="m159.99 126.81v72.25c0 6.2-5.04 11.24-11.24 11.24s-11.24-5.04-11.24-11.24v-72.25h22.48z" fill="#FFD63F"/><path d="m297.25 148.75v105.24c0 5.4-4.37 9.77-9.77 9.77h-277.46c-5.39 0-9.77-4.37-9.77-9.77v-105.24c0-5.4 4.38-9.77 9.77-9.77h16.3v-55.63h-0.74c-5.39 0-9.77-4.38-9.77-9.77v-30.07c0-5.4 4.38-9.77 9.77-9.77h63.03c5.4 0 9.77 4.37 9.77 9.77v30.07c0 5.39-4.37 9.77-9.77 9.77h-0.73v55.63h30.09v-55.63h-0.73c-5.4 0-9.77-4.38-9.77-9.77v-30.07c0-5.4 4.37-9.77 9.77-9.77h63.03c5.39 0 9.77 4.37 9.77 9.77v30.07c0 5.39-4.38 9.77-9.77 9.77h-0.74v55.63h30.1v-55.63h-0.74c-5.39 0-9.77-4.38-9.77-9.77v-30.07c0-5.4 4.38-9.77 9.77-9.77h63.03c5.4 0 9.77 4.37 9.77 9.77v30.07c0 5.39-4.37 9.77-9.77 9.77h-0.73v55.63h16.29c5.4 0 9.77 4.37 9.77 9.77zm-19.54 95.47v-85.7h-6.52v40.54c0 16.98-13.81 30.78-30.78 30.78-16.98 0-30.78-13.8-30.78-30.78v-40.54h-30.1v40.54c0 16.98-13.8 30.78-30.78 30.78-16.97 0-30.78-13.8-30.78-30.78v-40.54h-30.09v40.54c0 16.98-13.81 30.78-30.78 30.78s-30.78-13.8-30.78-30.78v-40.54h-6.53v85.7h257.92zm-15.56-180.41v-10.53h-43.49v10.53h43.49zm-10.5 135.25v-72.25h-22.48v72.25c0 6.2 5.04 11.24 11.24 11.24 6.19 0 11.24-5.04 11.24-11.24zm0-91.79v-23.92h-22.48v23.92h22.48zm-81.15-43.46v-10.53h-43.49v10.53h43.49zm-10.51 135.25v-72.25h-22.48v72.25c0 6.2 5.04 11.24 11.24 11.24s11.24-5.04 11.24-11.24zm0-91.79v-23.92h-22.48v23.92h22.48zm-81.15-43.46v-10.53h-43.49v10.53h43.49zm-10.5 135.25v-72.25h-22.48v72.25c0 6.2 5.04 11.24 11.24 11.24s11.24-5.04 11.24-11.24zm0-91.79v-23.92h-22.48v23.92h22.48z"/></svg>`
})

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

  /*const componentId = 'icon';
  const iconComponentClass = 'gjs-icon';
  const componentAttrType = 'data-type-icon';
  const resizableAngles = { ratioDefault: true, tc: false, cl: false, cr: false, bc: false };

  const svgContent = `<svg viewBox="0 0 24 24">
    <path d="M16 9h3l-5 7m-4-7h4l-2 8M5 9h3l2 7m5-12h2l2 3h-3m-5-3h2l1 3h-4M7 4h2L8 7H5m1-5L2 8l10 14L22 8l-4-6H6z"></path>
  </svg>`;
  editor.Blocks.add(componentId, {
    label: componentId,
    media: svgContent,
    content: { type: componentId },
  },
  //{ at: getBlockIndex(editor, 'link') + 1 }
  );

  editor.Components.addType(componentId, {
    isComponent: (el) => elHasClassName(el, iconComponentClass) || elHasAttribute(el, componentAttrType),
    model: {
      defaults: {
        droppable: false,
        attributes: { class: iconComponentClass, [componentAttrType]: true },
        resizable: resizableAngles,
        components: svgContent,
        traits: [
          'id',
          'title',
          {
            type: 'code',
            label: 'Content',
            // @ts-ignore
            typeProps: {
              language: 'html',
              clean: true,
              padding: 5,
            },
            getValue({ component }: any) {
              return component.getInnerHTML();
            },
            setValue: debounce(({ editor, component, value }: any) => {
              const parsed = editor.Parser.parseHtml(value).html;
              const result = Array.isArray(parsed) ? parsed[0] : parsed;
              const isSVG = result && result.tagName === 'svg';
              isSVG && component.components(result);
            }, 500),
          }
        ],
        styles: `
          .${iconComponentClass} {
            display: inline-block;
            text-decoration: none;
            color: inherit;
            vertical-align: middle;
            fill: currentColor;
            width: 50px;
            height: 50px;
          }
        `
      },

      init() {
        this.listenTo(this.components(), 'change add', this.disableLayers);
        this.disableLayers();
      },

      disableLayers() {
        //@ts-ignore
        this.components().forEach(model => model.set('layerable', false));
      },
    },
    view: {
      init() {
        const { model } = this;
        this.listenTo(model.components(), 'change', this.disableChildren);
      },

      onRender() {
        this.disableChildren();
      },

      disableChildren() {
        //@ts-ignore
        this.model.components().forEach(model => {
          const el = model.view?.el;
          if (el) {
            el.style.pointerEvents = 'none';
          }
        });
      },
    }
  });*/
}
