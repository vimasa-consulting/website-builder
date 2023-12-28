import { Editor } from "grapesjs";

const options = {
  id: "Tb5",
  label: "What We Stand For - 5",
  block: {},
  props: {},
  style: "",
  category: "Brand Connect",
  classPrefix: "brandConnect-whatWeStandFor5",
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
  const methods: any = {
    model: {
      defaults: {
        classes: [classPrefix],
        traits: [],
        components: `
          <section class="${classPrefix}-section">
            <div class="${classPrefix}-container">
              <div class="${classPrefix}-left-container">
                <div class="${classPrefix}-imageWrapper">
                  <img loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=100 100w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=200 200w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=400 400w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=800 800w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1200 1200w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1600 1600w, 
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=2000 2000w, 
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&"
                    class="${classPrefix}-image" />
                </div>
              </div>
              <div class="${classPrefix}-right-container">
                <div class="${classPrefix}-wrapper">
                  <h1 class="${classPrefix}-heading">What you stand for in one bold line</h1>
                  <h3 class="${classPrefix}-content">Elaborate on your core belief & ideology as a brand. Mention specifics about
                    what you stand for, and avoid being vague or generic.</h3>
                  <h3 class="${classPrefix}-content">Use emotionally powerful words to hook your customer with your message. Make
                    your brand stand out from the competitors by positioning it uniquely.</h3>
                  <div class="${classPrefix}-pointer-wrapper">
                    <div class="${classPrefix}-point">
                      <img class="${classPrefix}-point-img" src="https://img.icons8.com/ios-filled/30/checkmark--v1.png" alt="checkmark--v1" />
                      <span class="${classPrefix}-point-text">Pointer 1</span>
                    </div>
                    <div class="${classPrefix}-point">
                      <img class="${classPrefix}-point-img" src="https://img.icons8.com/ios-filled/30/checkmark--v1.png" alt="checkmark--v1" />
                      <span class="${classPrefix}-point-text">Pointer 2</span>
                    </div>
                    <div class="${classPrefix}-point">
                      <img class="${classPrefix}-point-img" src="https://img.icons8.com/ios-filled/30/checkmark--v1.png" alt="checkmark--v1" />
                      <span class="${classPrefix}-point-text">Pointer 3</span>
                    </div>
                    <div class="${classPrefix}-point">
                      <img class="${classPrefix}-point-img" src="https://img.icons8.com/ios-filled/30/checkmark--v1.png" alt="checkmark--v1" />
                      <span class="${classPrefix}-point-text">Pointer 4</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        `,
        styles: `
          .${classPrefix}-section {
            max-width: 1440px;
            margin: auto;
          }

          .${classPrefix}-container {
            margin: 0 auto;
            display: flex;
            gap: 110px;
            align-items: center;
            justify-content: center;
          }

          .${classPrefix}-left-container {
            width: 50%;
            text-align: right;
            background: #E9E9E9;
          }

          .${classPrefix}-right-container {
            width: 50%;
          }

          .${classPrefix}-wrapper {
            max-width: 480px;
          }

          .${classPrefix}-image {
            aspect-ratio: 1;
            object-fit: contain;
            object-position: center;
            align-self: center;
            width: 100%;
            max-width: 100%;
            width: 100%;
            height: 100%;
            max-width: 664px;
            max-height: 762px;
          }

          .${classPrefix}-heading {
            color: #000;
            font-family: Inter, sans-serif;
            font-size: 40px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            margin: 0;
            margin-bottom: 26px;
            max-width: 400px;
          }

          .${classPrefix}-content {
            color: #000;
            font-family: Inter, sans-serif;
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            line-height: 140%;
            margin: 0px;
            margin-bottom: 10px;
          }

          .${classPrefix}-pointer-wrapper {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            margin-top: 24px;
          }

          .${classPrefix}-point {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 5px;
          }
          .${classPrefix}-point-text {
            color: #000;
            font-family: Inter, sans-serif;
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
          }

          .${classPrefix}-point-img {
            width: 30px;
            height: 25px;
          }

          @media (max-width: 400px) {
            .${classPrefix}-container {
              flex-direction: column-reverse;
              padding: 50px 20px;
              gap: 50px;
            }

            .${classPrefix}-left-container {
              width: 100%;
            }
            .${classPrefix}-right-container {
              width: auto;
            }

            .${classPrefix}-heading {
              color: #000;
              font-family: Inter, sans-serif;
              font-size: 26px;
              font-style: normal;
              font-weight: 600;
              line-height: 35px; 
              padding-right: 110px;
            }

            .${classPrefix}-content {
              color: #000;
              font-family: Inter, sans-serif;
              font-size: 13px;
              font-style: normal;
              font-weight: 400;
              line-height: 140%; /* 18.2px */
            }

            .${classPrefix}-point-text {
              color: #000;
              font-family: Inter, sans-serif;
              font-size: 14px;
              font-style: normal;
              font-weight: 400;
              line-height: normal;
            }
            .${classPrefix}-point-img {
              width: 22px;
              height: 22px;
            }

            .${classPrefix}-image {
              width: 100%;
              height: 250px;
            }
          }

        `,
      },
    },
  };
  editor.Components.addType(options.id, methods);
};

export { block as whatWeStandFor5Block, component as whatWeStandFor5Component };
