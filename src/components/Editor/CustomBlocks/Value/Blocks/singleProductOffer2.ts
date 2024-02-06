import { Editor } from "grapesjs";

const options = {
  id: "Vb2",
  label: "Single Product Offer 2",
  block: {},
  props: {},
  style: "",
  category: "Value",
  classPrefix: "value-singleProductOffer2",
  styleAdditional: "",
  media: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sign-intersection-fill" viewBox="0 0 16 16">
    <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435ZM7.25 4h1.5v3.25H12v1.5H8.75V12h-1.5V8.75H4v-1.5h3.25V4Z"/>
  </svg>`,
};
const block = (editor: Editor) => {
  editor.Blocks.add(options.id, {
    media: options.media,
    label: options.label,
    category: options.category,
    content: { type: options.id },
    ...options.block,
  });
};

const component = (editor: Editor) => {
  const { classPrefix } = options;
  const methods: any = {
    model: {
      defaults: {
        classes: [classPrefix],
        traits: [],
        components: `
          <section class="${classPrefix}-section">
            <div class="${classPrefix}-container">
              <img class="${classPrefix}-mainImage" src="/editor/component-icons/image-icon.png" alt="" />
              <img class="${classPrefix}-subImage" src="/editor/component-icons/image-icon.png" alt="" />
              <div class="${classPrefix}-contentWrapper">
                <h1 class="${classPrefix}-heading">Product Name</h1>
                <p class="${classPrefix}-firstText">Use this section to describe the important aspects of your product, and make sure to bring out your product’s USP.</p>
                <p class="${classPrefix}-secondText">You can talk about features, benefits, dimensions, etc. You can also talk about the value of the product, in terms of how it will make your user’s life better.</p>
                <a type="button" class="${classPrefix}-cta">CTA ></a>
              </div>
            </div>
          </section>
        `,
        styles: `
          .${classPrefix}-section {
            padding: 5.25rem 0px;
            font-family: Inter, sans-serif;
            padding-bottom: 282px;
            background : #fff;
          }
          .${classPrefix}-container {
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            max-width: 1171px;
            position: relative;
            align-items: center;
          }
          .${classPrefix}-contentWrapper {
            max-width: 444px;
            margin-top: -44px;
          }
          .${classPrefix}-smallHeading {
            color: #000;
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 140%; /* 28px */
            text-align: center;
          }

          .${classPrefix}-heading {
            color: #000;
            font-size: 40px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            margin: 0;
            margin-bottom: 28px;
            z-index: 2;
          }

          .${classPrefix}-firstText {
            color: #000;
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            margin-top: 0px;
            margin-bottom: 28px;
         
          }
          .${classPrefix}-secondText {
            color: #000;
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            margin-bottom: 50px;
          }
          .${classPrefix}-mainImage {
            border-radius: 10px;
            max-width: 100%;
            width: 525px;
            height: 525px;
            object-fit: fill;
            margin-left: 85px;  
            margin-bottom: 44px;
          }
          .${classPrefix}-subImage {
            border-radius: 10px;
            max-width: 100%;
            position: absolute;
            bottom: 0px;
            left: 0px;
            z-index: 1;
            background: #E9E9E9;
            width: 284px;
            height: 284px;
            object-fit: fill;
            box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.15);
          }
          .${classPrefix}-cta {
            width: 180px;
            height: 42px;
            text-align: center;
            border-radius: 10px;
            border: none;
            font-size: 22px;
            font-weight: 500;
            background-color: #d9d9d9;          
          }
          @media (max-width: 770px) {
            .${classPrefix}-container {
              position: unset;
              flex-direction: column;
              align-items: center;
            }
            .${classPrefix}-contentWrapper {
              max-width: 467px;
              margin-top: 50px;
            }
            .${classPrefix}-subImage {
              position: unset;
            }
            .${classPrefix}-mainImage {
              margin-left: 0;
            }
            .${classPrefix}-mainImage, .${classPrefix}-heading {
              margin-right: 0px;
            }
          }

          @media (max-width: 425px) {
            .${classPrefix}-section {
              padding: 20px;
             }
            .${classPrefix}-text {
              width: unset; 
             }
            .${classPrefix}-mainImage {
              margin: 0;
              margin-bottom: 50px;
             }
          }
        `,
      },
    },
  };
  editor.Components.addType(options.id, methods);
};

export {
  block as singleProductOffer2Block,
  component as singleProductOffer2Component,
};
