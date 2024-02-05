import { Editor } from "grapesjs";

const options = {
  id: "Vb1",
  label: "Single Product Offer - 1",
  block: {},
  props: {},
  style: "",
  category: "Value",
  classPrefix: "value-singleProductOffer1",
  styleAdditional: "",
  media: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-sign-intersection-fill" viewBox="0 0 16 16">
    <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435ZM7.25 4h1.5v3.25H12v1.5H8.75V12h-1.5V8.75H4v-1.5h3.25V4Z"/>
  </svg>`,
  // ...opt,
};
const block = (editor: Editor) => {
  // create a block
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
  // Create component
  editor.Components.addType(options.id, {
    model: {
      defaults: {
        classes: [classPrefix],
        traits: [],
        // @ts-ignore
        components: `
           <section class="${classPrefix}-section">
            <div class="${classPrefix}-left-column">
              <h1 class="${classPrefix}-h1">Product Name</h1>
              <h2 class="${classPrefix}-h2">
                Use this section to describe the important aspects of your product, and make sure to bring out your product’s USP. <br/>
                You can talk about features, benefits, dimensions, etc. You can also talk about the value of the product, in terms of how it will make your user’s life better. 
              </h2>
              <a class="${classPrefix}-offer-cta">CTA ></a>

            </div>
            <div class="${classPrefix}-right-column">
              <img class="${classPrefix}-right-image" />
            </div>
          </section>
          `,
        styles: `
            .${classPrefix}-section {
              display: flex;
              flex-direction: row;
              height: 70vh;
              font-family: Inter, sans-serif;
              background : #fff;
            }

            .${classPrefix}-left-column {
              width: 50vw;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: center;
              padding: 10rem 5rem;
            }

            .${classPrefix}-h1 {
              color: #000;
              font-size: 48px;
              font-style: normal;
              font-weight: 600;
              line-height: 64px;
              margin: 0;
            }

            .${classPrefix}-h2 {
              color: #000;
              font-size: 15px;
              font-style: normal;
              font-weight: 400;
              line-height: 140%;
              margin-bottom: 40px;
            }

            .${classPrefix}-offer-cta {
              color: #000;
              width: 180px;
              text-align: center;
              font-size: 22px;
              font-style: normal;
              font-weight: 500;
              line-height: normal;
              padding: 10px 20px;
              background: #d9d9d9;
              border-radius: 8px;
            }

            .${classPrefix}-right-column {
              width: 50vw;
            }

            .${classPrefix}-right-image {
              width: 100%;
              height: 100%;
            }

            @media only screen and (min-width: 601px) and (max-width: 768px) {
              .${classPrefix}-section {
                height: auto;
                padding: 2rem 2rem;
                flex-direction: column;
              }

              .${classPrefix}-left-column {
                width: auto;
                padding: 2rem 0;
                align-items: center;
              }
              
              .h1,
              .${classPrefix}-h2 {
                text-align: center;
              }
              .${classPrefix}-right-column {
                width: auto;
                padding: 2rem 0;
              }
            }

            @media only screen and (max-width: 600px) {
              .${classPrefix}-section {
                padding: 2rem 2rem;
                height: auto;
                flex-direction: column;
              }
              .${classPrefix}-left-column {
                padding: 2rem 0;
                width: auto;
                align-items: center;
              }
              .${classPrefix}-h1 {
                text-align: center;
                font-size: 26px;
                font-weight: 600;
                line-height: 35px;
                margin-bottom: 20px;
              }
              .${classPrefix}-h2 {
                text-align: center;
                font-size: 13px;
                font-style: normal;
                font-weight: 400;
                line-height: 140%;
                margin-bottom: 38px;
              }
              .${classPrefix}-offer-cta {
                font-size: 18px;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
              }
              .${classPrefix}-right-column {
                padding: 2rem 0;
                width: auto;
              }
              .${classPrefix}-right-image {
                border-radius: 8px;
              }
            }
          `,
      },
    },
  });
};

export {
  block as singleProductOffer1block,
  component as singleProductOffer1Component,
};
