import { Editor } from "grapesjs";

const options = {
  id: "Vb3",
  label: "Single Product Offer - 3",
  block: {},
  props: {},
  style: "",
  category: "Value",
  classPrefix: "value-singleProductOffer3",
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
                Use this section to describe the important aspects of your product, and make sure to bring out your product’s USP.
              </h2>
              <a class="${classPrefix}-offer-cta">CTA ></a>

            </div>
            <div class="${classPrefix}-right-column">
            <div class="${classPrefix}-image-wrapper">
            <img loading="lazy" src="/editor/component-icons/image-icon.png" class="${classPrefix}-image-icon" />
          </div>
            </div>
          </section>
          `,
        styles: `
            .${classPrefix}-section {
              display: flex;
              min-width: 1440px;
              flex-direction: row;
              height: 566px;
              background: #E9E9E9;
              font-family: Inter, sans-serif;
              position: relative;
            }

            .${classPrefix}-left-column {
              width: 50vw;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: center;
              padding: 10rem 5rem;
              z-index: 99;
            }

            .${classPrefix}-h1 {
              color: #000;
              font-size: 48px;
              font-style: normal;
              font-weight: 600;
              line-height: 64px;
              margin: 0;
              z-index: 99;
            }

            .${classPrefix}-h2 {
              color: #000;
              font-size: 15px;
              font-style: normal;
              font-weight: 400;
              line-height: 140%;
              margin-bottom: 40px;
              z-index: 99;
            }

            .${classPrefix}-offer-cta {
              color: #000;
              text-align: center;
              font-size: 22px;
              font-style: normal;
              font-weight: 500;
              line-height: 26px;
              padding: 10px 20px;
              width: 180px;
              background: #CACACA;              
              border-radius: 8px;
              z-index: 99;
            }

            .${classPrefix}-right-column {
              width: 50vw;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .${classPrefix}-image-wrapper {
              width: 90px;
              height: 90px;
              border-color: #AEAEAE;
              display: flex;
              border-radius: 50%;  
              border-style: dotted;
              border-width: 2px;   
              align-self: center;   
            }
            .${classPrefix}-image-icon {
              aspect-ratio: 1;
              object-fit: contain;
              object-position: center;
              width: 45px;
              margin: auto;
              mix-blend-mode: multiply;
              overflow: hidden;
              align-self: center;
              max-width: 100%;
              border-radius: 50%;
              height: 45px;
              z-index: 1;
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
                min-width: unset;
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
                min-width: 400px;
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
          script: function () {
            const componentRoot = this;
            const img = componentRoot.querySelector('img');
            if(!img.src.includes('/editor/component-icons/image-icon.png')) {
                  onSrcChange()
                }
          
            function onSrcChange() {
              console.log('The src attribute has changed!');
              console.log('The src attribute has changed!');
                  img.style.width = '100%';
                  img.style.height = '100%';
                  img.style.position = 'absolute';
                  img.style.top = '0';
                  img.style.left = '0';
                  img.style.borderRadius = 'unset';
                  img.style.objectFit = 'fill'
                  const imageWrapper = componentRoot.querySelector(`.value-singleProductOffer3-image-wrapper`) as any
                  imageWrapper.style.border = 'none'
            }
          
            const observer = new MutationObserver(mutations => {
              mutations.forEach(mutation => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'src') {
                  onSrcChange();
                }
              });
            });
          
            if (img) {
              observer.observe(img, {
                attributes: true,
                attributeFilter: ['src']
              });
            } else {
              console.log('Image element not found within the component');
            }
          },
      },
    },
  });
};

export {
  block as singleProductOffer3block,
  component as singleProductOffer3Component,
};
