import { Editor } from "grapesjs";

const options = {
  id: "Zc3",
  label: "ATF2 BrandConnect1",
  block: {},
  props: {},
  style: "",
  category: "First Impression",
  classPrefix: "firstImpression-atf2-brand-connect1",
  styleAdditional: "",
  media: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-sign-intersection-fill" viewBox="0 0 16 16">
    <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435ZM7.25 4h1.5v3.25H12v1.5H8.75V12h-1.5V8.75H4v-1.5h3.25V4Z"/>
  </svg>`,
  // ...opt,
};
const atf2BrandConnect1block = (editor: Editor) => {
  // create a block
  editor.Blocks.add(options.id, {
    media: options.media,
    label: options.label,
    category: options.category,
    content: { type: options.id },
    ...options.block,
  });
};

const atf2BrandConnect1Component = (editor: Editor) => {
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
            <div class="${classPrefix}-container">
              <div class="${classPrefix}-left-column">
                <h1 class="${classPrefix}-h1">Your Brand Positioning In one bold line</h1>
                <h2 class="${classPrefix}-h2">
                  Use this section to establish a connection between your brand positioning and the line of products you offer as a solution. This helps convey your brand story strongly.
                </h2>
                <a class="${classPrefix}-offer-cta">Explore More ></a>
              </div>
              <div class="${classPrefix}-right-column">
                <div class="${classPrefix}-imageWrapper">
                  <img loading="lazy" src="/editor/component-icons/image-icon.png" class="${classPrefix}-image" />
                </div>
              </div>
            </div>
          </section>
          `,
        styles: `
            .${classPrefix}-section {
              margin: auto;
              max-width: 1440px;
              min-width: 1440px;
              height: auto;
              background: #E9E9E9;
            }
            .${classPrefix}-container {
              font-family: Inter, sans-serif;
              display: flex;
              flex-direction: row;
              width: 100%;
              height: 100%;
            }

            .${classPrefix}-left-column {
              width: 50%;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: center;
              padding: 10rem 6rem
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
              color: #FFF;
              text-align: center;
              font-size: 25px;
              font-style: normal;
              font-weight: 500;
              line-height: 30px;
              padding: 10px 36px;
              background: #676767;
              border-radius: 8px;
            }

            .${classPrefix}-right-column {
              width: 50%;
              height: auto;
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .${classPrefix}-image {
              width: 100%;
              height: 100%;
              object-fit: fill;
              object-position: center;
              mix-blend-mode: multiply;
              overflow: hidden;
              align-self: center;
              max-width: 100%;
            }

            .${classPrefix}-rating-img {
              width: 25px;
              height: 25px;
              color: #ddd;
            }

            @media only screen and (min-width: 601px) and (max-width: 768px) {
              .${classPrefix}-section {
                height: auto;
                min-width: 400px;  
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
              }
              
              .${classPrefix}-container {
                height: auto;
                flex-direction: column;
              }

              .${classPrefix}-left-column {
                padding: 2rem;
                width: auto;
                align-items: center;
              }

              .${classPrefix}-rating-img {
                width: 18px;
                height: 18px;
                color: #ddd;
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
                padding: 10px 36px;
                font-size: 18px;
                font-style: normal;
                font-weight: 500;
                line-height: 21px;
              }

              .${classPrefix}-right-column {
                padding: 2rem;
                width: auto;
                height: auto;
              }

              .${classPrefix}-image {
                border-radius: 8px;
                width: 321px;
                height: 299px;
              }
            }
          `,
      },
    },
  });
};

export { atf2BrandConnect1block, atf2BrandConnect1Component };
