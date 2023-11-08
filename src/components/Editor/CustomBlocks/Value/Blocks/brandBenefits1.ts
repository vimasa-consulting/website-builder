import { Editor } from "grapesjs";

const options = {
  id: "value-brandBenefits1",
  label: "Brand Benefits - 1",
  block: {},
  props: {},
  style: "",
  category: "Value",
  classPrefix: "value-brandBenefits1",
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
                <h1 class="${classPrefix}-section-heading">Header for Brand Benefits</h1>
                <div class="${classPrefix}-grey-bar"></div>
                <span class="${classPrefix}-sub-heading">A short description about the added value your customer will get if they purchase from
                  you
                </span>
              </div>
              <div class="${classPrefix}-benefits-wrapper">
                <div class="${classPrefix}-benefit-item">
                  <img class="${classPrefix}-item-image" src="" alt="benefit-image" />
                  <span class="${classPrefix}-item-heading">Brand Benefits 1</span>
                  <span class="${classPrefix}-sub-heading">Short description</span>
                </div>
                <div class="${classPrefix}-benefit-item">
                  <img class="${classPrefix}-item-image" src="" alt="benefit-image" />
                  <span class="${classPrefix}-item-heading">Brand Benefits 2</span>
                  <span class="${classPrefix}-sub-heading">Short description</span>
                </div>
                <div class="${classPrefix}-benefit-item">
                  <img class="${classPrefix}-item-image" src="" alt="benefit-image" />
                  <span class="${classPrefix}-item-heading">Brand Benefits 3</span>
                  <span class="${classPrefix}-sub-heading">Short description</span>
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
            width: 40vw;
            margin: 0 auto;
          }

          .${classPrefix}-heading-wrapper {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            margin: 0 auto 7rem 0;
          }

          .${classPrefix}-grey-bar {
            width: 74px;
            height: 4px;
            border-radius: 5px;
            background: #d9d9d9;
            margin: 20px auto;
          }

          .${classPrefix}-section-heading {
            color: #000;
            font-size: 40px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            margin: 0;
          }

          .${classPrefix}-benefits-wrapper {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          }

          .${classPrefix}-benefit-item {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .${classPrefix}-item-image {
            margin-bottom: 20px;
          }

          .${classPrefix}-item-heading {
            color: #000;
            text-align: center;
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 140%;
          }

          .${classPrefix}-sub-heading {
            color: #000;
            text-align: center;
            font-size: 15px;
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

            .${classPrefix}-section-heading {
            text-align: center;
            font-size: 26px;
            line-height: 35px;
            }

            .${classPrefix}-heading-wrapper {
            margin: 0 auto 36px 0;
            }

            .${classPrefix}-section-heading {
            font-size: 26px;
            }
          }
        `,
      },
    },
  });
};

export { block as brandBenefits1Block, component as brandBenefits1Component };
