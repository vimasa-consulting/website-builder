import { Editor } from "grapesjs";

const options = {
  id: "Ve3",
  label: "Product showcase - 3",
  block: {},
  props: {},
  style: "",
  category: "Value",
  classPrefix: "value-productShowcase3",
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
                <h1 class="${classPrefix}-section-heading">Header for your unique product selection</h1>
              </div>
              <div class="${classPrefix}-product-container">
                <div class="${classPrefix}-item">
                  <div class="${classPrefix}-image-wrapper">
                    <img class="${classPrefix}-item-image" src="https://placehold.co/342x342" alt="placeholder-image">
                  </div>
                  <div class="${classPrefix}-item-heading">Up to 60% Off</div>
                  <div class="${classPrefix}-item-sub-heading">Product Name 1</div>
                  <div class="${classPrefix}-rating-image-wrapper">
                    <img class="${classPrefix}-rating-image" src="https://img.icons8.com/ios-glyphs/30/000000/star--v1.png" alt="star--v1" />
                    <img class="${classPrefix}-rating-image" src="https://img.icons8.com/ios-glyphs/30/000000/star--v1.png" alt="star--v1" />
                    <img class="${classPrefix}-rating-image" src="https://img.icons8.com/ios-glyphs/30/000000/star--v1.png" alt="star--v1" />
                    <img class="${classPrefix}-rating-image" src="https://img.icons8.com/ios-glyphs/30/000000/star--v1.png" alt="star--v1" />
                    <img class="${classPrefix}-rating-image" src="https://img.icons8.com/ios-glyphs/30/000000/star--v1.png" alt="star--v1" />
                  </div>
                </div>
                <div class="${classPrefix}-item">
                  <div class="${classPrefix}-image-wrapper">
                    <img class="${classPrefix}-item-image" src="https://placehold.co/342x342" alt="placeholder-image">
                  </div>
                  <div class="${classPrefix}-item-heading">Up to 60% Off</div>
                  <div class="${classPrefix}-item-sub-heading">Product Name 1</div>
                  <div class="${classPrefix}-rating-image-wrapper">
                    <img class="${classPrefix}-rating-image" src="https://img.icons8.com/ios-glyphs/30/000000/star--v1.png" alt="star--v1" />
                    <img class="${classPrefix}-rating-image" src="https://img.icons8.com/ios-glyphs/30/000000/star--v1.png" alt="star--v1" />
                    <img class="${classPrefix}-rating-image" src="https://img.icons8.com/ios-glyphs/30/000000/star--v1.png" alt="star--v1" />
                    <img class="${classPrefix}-rating-image" src="https://img.icons8.com/ios-glyphs/30/000000/star--v1.png" alt="star--v1" />
                    <img class="${classPrefix}-rating-image" src="https://img.icons8.com/ios-glyphs/30/000000/star--v1.png" alt="star--v1" />
                  </div>
                </div>
                <div class="${classPrefix}-item">
                  <div class="${classPrefix}-image-wrapper">
                    <img class="${classPrefix}-item-image" src="https://placehold.co/342x342" alt="placeholder-image">
                  </div>
                  <div class="${classPrefix}-item-heading">Up to 60% Off</div>
                  <div class="${classPrefix}-item-sub-heading">Product Name 1</div>
                  <div class="${classPrefix}-rating-image-wrapper">
                    <img class="${classPrefix}-rating-image" src="https://img.icons8.com/ios-glyphs/22/000000/star--v1.png" alt="star--v1" />
                    <img class="${classPrefix}-rating-image" src="https://img.icons8.com/ios-glyphs/22/000000/star--v1.png" alt="star--v1" />
                    <img class="${classPrefix}-rating-image" src="https://img.icons8.com/ios-glyphs/22/000000/star--v1.png" alt="star--v1" />
                    <img class="${classPrefix}-rating-image" src="https://img.icons8.com/ios-glyphs/22/000000/star--v1.png" alt="star--v1" />
                    <img class="${classPrefix}-rating-image" src="https://img.icons8.com/ios-glyphs/22/000000/star--v1.png" alt="star--v1" />
                  </div>
                </div>
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
            width: 80vw;
            margin: 0 auto;
            max-width: 1170px;
          }

          .${classPrefix}-heading-wrapper {
            margin: 0 auto 4rem 0;
          }

          .${classPrefix}-section-heading {
            color: #000;
            font-size: 40px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            margin: 0;
          }

          .${classPrefix}-product-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            max-width: 100%;
          }

          .${classPrefix}-item {
            max-width: 342px;
          }

          .${classPrefix}-image-wrapper {
            width: 342px;
            height: 342px;
            background: grey;
            border-radius: 10px;
            margin-bottom: 20px;
          }

          .${classPrefix}-item-image {
            border-radius: 10px;
            margin-bottom: 20px;
          }

          .${classPrefix}-item-heading {
            color: #000;
            font-family: Inter, sans-serif;
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            margin-bottom: 12px;
          }

          .${classPrefix}-item-sub-heading {
            color: #000;
            font-family: Inter, sans-serif;
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: 140%;
            margin-bottom: 26px;
          }

          .${classPrefix}-rating-image {
            width: 22px;
            height: 22px;
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

export {
  block as productShowcase3Block,
  component as productShowcase3Component,
};
