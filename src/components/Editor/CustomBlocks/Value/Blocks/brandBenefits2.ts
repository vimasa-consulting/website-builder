import { Editor } from "grapesjs";

const options = {
  id: "Vd2",
  label: "Brand Benefits - 2",
  block: {},
  props: {},
  style: "",
  category: "Value",
  classPrefix: "value-brandBenefits2",
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
                <h1 class="${classPrefix}-section-heading">Brand Benefits Header</h1>
                <span class="${classPrefix}-sub-heading">A short description about the added value your customer will get if they purchase from
                  you
                </span>
              </div>
              <div class="${classPrefix}-benefits-wrapper">
                <div class="${classPrefix}-benefit-item">
                  <img class="${classPrefix}-item-image" src="" alt="benefit-image" />
                  <span class="${classPrefix}-item-decription">Brand 1</span>
                </div>
                <div class="${classPrefix}-benefit-item">
                  <img class="${classPrefix}-item-image" src="" alt="benefit-image" />
                  <span class="${classPrefix}-item-decription">Brand 2</span>
                </div>
                <div class="${classPrefix}-benefit-item">
                  <img class="${classPrefix}-item-image" src="" alt="benefit-image" />
                  <span class="${classPrefix}-item-decription">Brand 3</span>
                </div>
              </div>
            </div>
          </section>
        `,
        styles: `
          .${classPrefix}-section {
            padding: 3.5rem 1rem;
            margin: 0 auto;
            font-family: Inter, sans-serif;
          }

          .${classPrefix}-container {
            width: 50vw;
            margin: 0 auto;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          }

          .${classPrefix}-heading-wrapper {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            width: 38%;
            gap: 20px;
          }

          .${classPrefix}-section-heading {
            color: #000;
            font-size: 28px;
            font-style: normal;
            font-weight: 500;
            line-height: 140%;
            margin: 0;
          }

          .${classPrefix}-sub-heading {
            color: #000;
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            line-height: 140%;
          }

          .${classPrefix}-benefits-wrapper {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            align-content: center;
            gap: 100px;
          }

          .${classPrefix}-benefit-item {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .${classPrefix}-item-image {
            margin-bottom: 18px;
          }

          .${classPrefix}-item-decription {
            color: #000;
            text-align: center;
            font-family: Inter;
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: 140%;
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
          }

          @media (max-width: 480px) {
            .${classPrefix}-section {
              padding: 1.8rem 1rem;
            }

            .${classPrefix}-container {
              max-width: 100%;
            }
          }
        `,
      },
    },
  });
};

export { block as brandBenefits2Block, component as brandBenefits2Component };
