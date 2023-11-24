import { Editor } from "grapesjs";

const options = {
  id: "Vd5",
  label: "Brand Benefits - 5",
  block: {},
  props: {},
  style: "",
  category: "Value",
  classPrefix: "value-brandBenefits5",
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
                <div class="${classPrefix}-benefits-wrapper">
                  <div class="${classPrefix}-benefit-item">
                    <div class="${classPrefix}-circlular-div">
                      <img class="${classPrefix}-cir-image" src="" alt"" />
                      <div class="${classPrefix}-cir-text">Brand Benefit 1</div>
                    </div>
                    <span class="${classPrefix}-item-description">Short description</span>
                  </div>
                  <div class="${classPrefix}-benefit-item">
                    <div class="${classPrefix}-circlular-div">
                      <img class="${classPrefix}-cir-image" src="" alt"" />
                      <div class="${classPrefix}-cir-text">Brand Benefit 2</div>
                    </div>
                    <span class="${classPrefix}-item-heading">Short description</span>
                  </div>
                  <div class="${classPrefix}-benefit-item">
                    <div class="${classPrefix}-circlular-div">
                      <img class="${classPrefix}-cir-image" src="" alt"" />
                      <div class="${classPrefix}-cir-text">Brand Benefit 3</div>
                    </div>
                    <span class="${classPrefix}-item-heading">Short description</span>
                  </div>
                  <div class="${classPrefix}-benefit-item">
                    <div class="${classPrefix}-circlular-div">
                      <img class="${classPrefix}-cir-image" src="" alt"" />
                      <div class="${classPrefix}-cir-text">Brand Benefit 4</div>
                    </div>
                    <span class="${classPrefix}-item-heading">Short description</span>
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
          }

          .${classPrefix}-benefits-wrapper {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }

          .${classPrefix}-benefit-item {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 20px;
          }

          .${classPrefix}-circlular-div {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            background-color: #e9e9e9;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .${classPrefix}-cir-text {
            color: #4b4b4b;
            text-align: center;
            font-family: Inter;
            font-size: 22px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            width: 50%;
          }

          .${classPrefix}-item-description {
            color: #000;
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: 140%;
            /* 25.2px */
          }

          @media (max-width: 768px) {
            .${classPrefix}-section {
              padding: 2rem 1rem;
            }

            .${classPrefix}-container {
              width: auto;
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

export { block as brandBenefits5Block, component as brandBenefits5Component };
