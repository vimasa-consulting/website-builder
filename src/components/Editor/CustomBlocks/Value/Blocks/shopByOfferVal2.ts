import { Editor } from "grapesjs";

const options = {
  id: "Va2",
  label: "Shop By Offer - Val 2",
  block: {},
  props: {},
  style: "",
  category: "Value",
  classPrefix: "value-shopByOffer2",
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
              <div class="${classPrefix}-subheading-wrapper ">
                <h3 class="${classPrefix}-section-subheading">
                  A salesy description about how much your users will save with the attractive offers& budgeted collection you
                  have
                </h3>
              </div>
              <div class="${classPrefix}-box-container">
                <div class="${classPrefix}-box">
                  <span class="${classPrefix}-box-heading">FLAT</span>
                  <h1 class="${classPrefix}-box-text">80</h1>
                  <span class="${classPrefix}-box-footer-text">$ OFF</span>
                </div>
                <div class="${classPrefix}-box">
                  <span class="${classPrefix}-box-heading">FROM</span>
                  <h1 class="${classPrefix}-box-text">
                    <span class="${classPrefix}-supertext">₹</span>
                    99
                  </h1>
                  <span class="${classPrefix}-box-footer-text">ONLY</span>
                </div>
                <div class="${classPrefix}-box">
                  <span class="${classPrefix}-box-heading">FLAT</span>
                  <h1 class="${classPrefix}-box-text">60</h1>
                  <span class="${classPrefix}-box-footer-text">% OFF</span>
                </div>
              </div>
            </div>
          </section>
        `,
        styles: `
          .${classPrefix}-section {
            padding: 3.5rem 1rem;
            margin: 0 auto;
          }

          .${classPrefix}-container {
            width: 50%;
            margin: 0 auto;
          }

          .${classPrefix}-heading-wrapper {
            margin: 0 auto 26px 0;
          }

          .${classPrefix}-section-heading {
            color: #000;
            text-align: center;
            font-size: 40px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            margin: 0;
          }

          .${classPrefix}-subheading-wrapper {
            margin: 0 auto 76px auto;
          }

          .${classPrefix}-section-subheading {
            color: #000;
            text-align: center;
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            line-height: 140%;
          }

          .${classPrefix}-box-container {
            max-width: 100%;
            display: flex;
            flex-wrap: no-wrap;
            justify-content: center;
            gap: 0.8rem;
          }

          .${classPrefix}-box {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            justify-content: center;
            padding: 1rem 1.2rem;
            max-width: 349px;
            max-height: 355px;
          }

          .${classPrefix}-box-text {
            color: #2c2c2c;
            text-align: center;
            font-size: 80px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            margin: 0;
          }

          .${classPrefix}-box-heading {
            color: #2c2c2c;
            text-align: center;
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
          }

          .${classPrefix}-box-footer-text {
            color: #2c2c2c;
            text-align: center;
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
          }

          .${classPrefix}-box:nth-child(2) {
            border-right: 1px solid #ababab;
            border-left: 1px solid #ababab;
          }

          .${classPrefix}-supertext {
            color: #2c2c2c;
            text-align: center;
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            position: relative;
            top: -2.5rem;
            left: 0.6rem;
          }

          @media (max-width: 768px) {
            .${classPrefix}-section {
              padding: 2rem 1rem;
            }

            .${classPrefix}-container {
              width: auto;
            }

            .${classPrefix}-subheading-wrapper {
              margin: 0 auto 36px auto;
            }

            .${classPrefix}-box-container {
              gap: 1rem;
              flex-direction: row;
            }

            .${classPrefix}-box {
              padding: 1.5rem 1.2rem;
            }

            .${classPrefix}-box-text {
              font-size: 44px;
            }

            .${classPrefix}-supertext {
              top: -1.2rem;
              left: 0.1rem;
            }
          }

          @media (max-width: 480px) {
            .${classPrefix}-section {
              padding: 1.8rem 1rem;
            }

            .${classPrefix}-heading-wrapper {
              margin: 0 auto 36px 0;
            }

            .${classPrefix}-box-container {
              flex-direction: row;
              gap: 7px;
            }

            .${classPrefix}-box {
              width: auto;
              padding: 1rem 1rem;
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

            .${classPrefix}-supertext {
              top: -0.8rem;
              left: 0.1rem;
            }
          }
        `,
      },
    },
  });
};

export {
  block as shopByOfferValue2Block,
  component as shopByOfferValue2Component,
};
