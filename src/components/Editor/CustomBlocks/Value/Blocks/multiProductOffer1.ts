import { Editor } from "grapesjs";

const options = {
  id: "Vc1",
  label: "Multi Product Offers - 1",
  block: {},
  props: {},
  style: "",
  category: "Value",
  classPrefix: "value-multiProductOffers1",
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
                <h1 class="${classPrefix}-section-heading">Catchy headline about product range & offers</h1>
              </div>
              <div class="${classPrefix}-image-container">
                <div class="${classPrefix}-image-item">
                  <img loading="lazy"
                    src="/editor/component-icons/image-icon.png"
                    class="${classPrefix}-image" />
                  <div class="${classPrefix}-wrapper">
                    <div class="${classPrefix}-heading">Up to 60% Off</div>
                    <div class="${classPrefix}-sub-heading">Product Name 1</div>
                  </div>
                </div>
                <div class="${classPrefix}-image-item">
                  <img loading="lazy"
                    src="/editor/component-icons/image-icon.png"
                    class="${classPrefix}-image" />
                  <div class="${classPrefix}-wrapper">
                    <div class="${classPrefix}-heading">Up to 60% Off</div>
                    <div class="${classPrefix}-sub-heading">Product Name 2</div>
                  </div>
                </div>
                <div class="${classPrefix}-image-item">
                  <img loading="lazy"
                    src="/editor/component-icons/image-icon.png"
                    class="${classPrefix}-image" />
                  <div class="${classPrefix}-wrapper">
                    <div class="${classPrefix}-heading">Up to 60% Off</div>
                    <div class="${classPrefix}-sub-heading">Product Name 3</div>
                  </div>
                </div>
                <div class="${classPrefix}-image-item">
                  <img loading="lazy"
                    src="/editor/component-icons/image-icon.png"
                    class="${classPrefix}-image" />
                  <div class="${classPrefix}-wrapper">
                    <div class="${classPrefix}-heading">Up to 60% Off</div>
                    <div class="${classPrefix}-sub-heading">Product Name 4</div>
                  </div>
                </div>
                <div class="${classPrefix}-image-item">
                  <img loading="lazy"
                    src="/editor/component-icons/image-icon.png"
                    class="${classPrefix}-image" />
                  <div class="${classPrefix}-wrapper">
                    <div class="${classPrefix}-heading">Up to 60% Off</div>
                    <div class="${classPrefix}-sub-heading">Product Name 5</div>
                  </div>
                </div>
                <div class="${classPrefix}-image-item">
                  <img loading="lazy"
                    src="/editor/component-icons/image-icon.png"
                    class="${classPrefix}-image" />
                  <div class="${classPrefix}-wrapper">
                    <div class="${classPrefix}-heading">Up to 60% Off</div>
                    <div class="${classPrefix}-sub-heading">Product Name 6</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        `,
        styles: `
          .${classPrefix}-section {
            min-width: 1440px;
            padding: 3.5rem 1rem;
            margin: 0 auto;
            font-family: Inter, sans-serif;
          }

          .${classPrefix}-container {
            max-width: 1440px;
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

          .${classPrefix}-image-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            max-width: 100%;
            column-gap: 30px;
          }

          .${classPrefix}-image-item {
            flex: 0 0 calc(33.33% - 10px);
            margin-bottom: 20px;
            text-align: center;
            max-width: 350px;
          }

          .${classPrefix}-image {
            background: grey;
            border-radius: 10px;
            height: 214px;
            max-width: 350px;
            width: 100%;
          }

          .${classPrefix}-wrapper {
            padding: 1rem 0 0;
            text-align: left;
          }

          .${classPrefix}-heading {
            color: #000;
            font-family: Inter, sans-serif;
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            margin-bottom: 10px;
          }

          .${classPrefix}-sub-heading {
            color: #000;
            font-family: Inter, sans-serif;
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            line-height: 140%;
            /* 21px */
          }

          @media (max-width: 480px) {
            .${classPrefix}-section {
              min-width: 400px;
              padding: 22px 18px;
            }

            .${classPrefix}-container {
              max-width: 100%;
            }

            .${classPrefix}-heading-wrapper {
              margin: 0 auto 36px 0;
            }

            .${classPrefix}-section-heading {
              color: black;
              font-size: 26px;
              font-family: Inter, sans-serif;
              font-weight: 600;
              line-height: 35px;
              word-wrap: break-word;
            }

            .${classPrefix}-image-item {
              width: 100%;
              max-width: 154px;
              flex: none;
            }

            .${classPrefix}-image {
              background: grey;
              border-radius: 10px;
              height: 109px;
              max-width: 163px;
              width: 100%;
            }

            .${classPrefix}-wrapper {
              padding-top: 10px;
            }

            .${classPrefix}-heading {
              color: #000;
              font-family: Inter, sans-serif;
              font-size: 16px;
              font-style: normal;
              font-weight: 500;
              line-height: 140%; /* 22.4px */
              margin-bottom: 5px;
            }

            .${classPrefix}-sub-heading {
              font-size: 13px;
            }

            .${classPrefix}-image-container {
              column-gap: 30px;
            }
          }
        `,
      },
    },
  });
};

export {
  block as multiProductOffers1Block,
  component as multiProductOffers1Component,
};
