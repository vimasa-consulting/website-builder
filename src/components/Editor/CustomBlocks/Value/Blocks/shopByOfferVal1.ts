import { Editor } from "grapesjs";

const options = {
  id: "Va1",
  label: "Shop By Offer 1 New",
  block: {},
  props: {},
  style: "",
  category: "Value",
  classPrefix: "value-shopByOffer1new",
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

  editor.Components.addType(options.id, {
    model: {
      defaults: {
        classes: [classPrefix],
        traits: [],
        components: `
          <section class="${classPrefix}-section">
            <div class="${classPrefix}-container">
              <div class="${classPrefix}-heading-wrapper">
                <h1 class="${classPrefix}-section-heading">Catchy Headline about Offers & Budget Price Points</h1>
              </div>
              <div class="${classPrefix}-box-container">
                <div class="${classPrefix}-box">
                  <span class="${classPrefix}-box-heading">Save up to</span>
                  <h1 class="${classPrefix}-box-text">50%</h1>
                </div>
                <div class="${classPrefix}-box">
                  <span class="${classPrefix}-box-heading">Starting from</span>
                  <h1 class="${classPrefix}-box-text">$99</h1>
                </div>
                <div class="${classPrefix}-box">
                  <span class="${classPrefix}-box-heading">Save up to</span>
                  <h1 class="${classPrefix}-box-text">50%</h1>
                </div>
              </div>
            </div>
          </section>
        `,
        styles: `
          .${classPrefix}-section {
            padding: 5.5rem 1rem;
            font-family: Inter, sans-serif;
            max-width: 1440px;
            margin: auto;
          }

          .${classPrefix}-container {
            padding: 0 150px;
          }

          .${classPrefix}-heading-wrapper {
            margin: 0 auto 76px 0;
          }

          .${classPrefix}-section-heading {
            color: #000;
            text-align: center;
            font-size: 40px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
          }

          .${classPrefix}-box-container {
            max-width: 100%;
            display: flex;
            flex-wrap: no-wrap;
            justify-content: center;
            gap: 3rem;
          }

          .${classPrefix}-box {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            background: #ccc;
            justify-content: center;
            border-radius: 10px;
            width: 349px;
            height: 355px;
          }

          .${classPrefix}-box-text {
            color: #2c2c2c;
            text-align: center;
            font-size: 96px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            margin: 0;
          }

          .${classPrefix}-box-heading {
            color: #000;
            text-align: center;
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 140%;
          }

          @media (max-width: 480px) {
            .${classPrefix}-section {
              padding: 1.8rem 1rem;
            }
            .${classPrefix}-container {
              padding: 0;
            }

            .${classPrefix}-heading-wrapper {
              margin: 0 auto 36px 0;
            }

            .${classPrefix}-box-container {
              flex-direction: row;
              gap: 7px;
            }

            .${classPrefix}-box {
              width: 90%;
              padding: 0;
              max-width: 113px;
              max-height: 113px;
            }

            .${classPrefix}-section-heading {
              color: #000;
              text-align: center;
              font-size: 26px;
              font-style: normal;
              font-weight: 600;
              line-height: 35px;
            }

            .${classPrefix}-box-heading {
              color: #000;
              text-align: center;
              font-size: 13px;
              font-style: normal;
              font-weight: 500;
              line-height: 140%;
            }

            .${classPrefix}-box-text {
              color: #2c2c2c;
              text-align: center;
              font-size: 38px;
              font-style: normal;
              font-weight: 600;
              line-height: normal;
            }
          }
        `,
      },
    },
  });
};

export {
  block as shopByOfferValue1Block,
  component as shopByOfferValue1Component,
};
