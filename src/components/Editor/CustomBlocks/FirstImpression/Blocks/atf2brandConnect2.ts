import { Editor } from "grapesjs";

const options = {
  id: "Zc4",
  label: "ATF2 BrandConnect2",
  block: {},
  props: {},
  style: "",
  category: "First Impression",
  classPrefix: "firstImpression-atf2-brand-connect2",
  styleAdditional: "",
  media: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-sign-intersection-fill" viewBox="0 0 16 16">
    <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435ZM7.25 4h1.5v3.25H12v1.5H8.75V12h-1.5V8.75H4v-1.5h3.25V4Z"/>
  </svg>`,
  // ...opt,
};
const atf2BrandConnect2block = (editor: Editor) => {
  // create a block
  editor.Blocks.add(options.id, {
    media: options.media,
    label: options.label,
    category: options.category,
    content: { type: options.id },
    ...options.block,
  });
};

const atf2BrandConnect2Component = (editor: Editor) => {
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
                <div class="${classPrefix}-mb-50"></div>
                <div class="${classPrefix}-four-item">
                  <div class="${classPrefix}-item-row">
                    <div class="${classPrefix}-item">
                    <span data-gjs-type="icon" draggable="true" class="icon-display ${classPrefix}-rating-img">
                    <span data-icon="ph:placeholder-light" data-width="25px" class="iconify"></span>
                  </span>
                      <span class="${classPrefix}-item-text">Brand Benefit 1</span>
                    </div>
                    <div class="${classPrefix}-item">
                    <span data-gjs-type="icon" draggable="true" class="icon-display ${classPrefix}-rating-img">
                    <span data-icon="ph:placeholder-light" data-width="25px" class="iconify"></span>
                  </span>
                      <span class="${classPrefix}-item-text">Brand Benefit 2</span>
                    </div>
                  </div>
                  <div class="${classPrefix}-item-row">
                    <div class="${classPrefix}-item">
                    <span data-gjs-type="icon" draggable="true" class="icon-display ${classPrefix}-rating-img">
                    <span data-icon="ph:placeholder-light" data-width="25px" class="iconify"></span>
                  </span>
                      <span class="${classPrefix}-item-text">Social Proof 1</span>
                    </div>
                    <div class="${classPrefix}-item">
                    <span data-gjs-type="icon" draggable="true" class="icon-display ${classPrefix}-rating-img">
                    <span data-icon="ph:placeholder-light" data-width="25px" class="iconify"></span>
                  </span>
                      <span class="${classPrefix}-item-text">Social Proof 2</span>
                    </div>
                  </div>
                </div>
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
              height: auto;
              background: #E9E9E9;
            }
            .${classPrefix}-container {
              font-family: Inter, sans-serif;
              display: flex;
              flex-direction: row;
              width: 100%;
              height: 100%;
              justify-content: space-between;
            }

            .${classPrefix}-left-column {
              width: 50%;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: center;
              padding: 10rem 8rem;
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

            .${classPrefix}-rating-img {
              width: 25px;
              height: 25px;
              color: #ddd;
            }

            .${classPrefix}-offer-cta {
              color: #FFF;
              text-align: center;
              font-size: 25px;
              font-style: normal;
              font-weight: 500;
              line-height: 30px;
              padding: 10px 36px;
              background: #d9d9d9;
              border-radius: 8px;
            }

            .${classPrefix}-right-column {
              width: 684px;
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

            .${classPrefix}-four-item {
              display: flex;
              flex-direction: column;
              row-gap: 50px;
            }

            .${classPrefix}-item-row {
              display: flex;
              flex-direction: row;
              gap: 50px;
              justify-content: space-around;
            }

            .${classPrefix}-item {
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 10px;
            }

            .${classPrefix}-item-image {
              aspect-ratio: 1;
              object-fit: contain;
              object-position: center;
              mix-blend-mode: multiply;
              overflow: hidden;
              align-self: center;
              max-width: 100%;
              width: 40px;
              height: 40px;
            }

            .${classPrefix}-item-text {
              color: #000;
              font-family: Inter, sans-serif;
              font-size: 20px;
              font-style: normal;
              font-weight: 500;
              line-height: 140%; /* 28px */
            }

            .${classPrefix}-mb-50 {
              margin-bottom: 50px;
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
              }

              .${classPrefix}-container {
                height: auto;
                flex-direction: column;
              }

              .${classPrefix}-rating-img {
                width: 18px;
                height: 18px;
                color: #ddd;
              }

              .${classPrefix}-left-column {
                padding: 2rem 2rem 0 2rem;
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

              .${classPrefix}-four-item {
                gap: 5px;
              }
              .${classPrefix}-item {
                gap: 5px;
              }
              .${classPrefix}-item-text {
                color: #000;
                font-family: Inter, sans-serif;
                font-size: 13px;
                font-style: normal;
                font-weight: 500;
                line-height: 140%; /* 18.2px */
              }

              .${classPrefix}-item-image {
                width: 18px;
                heigth: 18px;
              }
            }
          `,
      },
    },
  });
};

export { atf2BrandConnect2block, atf2BrandConnect2Component };
