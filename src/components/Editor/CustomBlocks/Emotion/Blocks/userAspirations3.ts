import { Editor } from "grapesjs";

const options = {
  id: "Xb3",
  label: "User Aspirations 3",
  block: {},
  props: {},
  style: "",
  category: "Emotion",
  classPrefix: "emotion-userAspirations3",
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
            <h1 class="${classPrefix}-heading">Hopeful & Optimistic header about User’s aspirations</h1>
            <p class="${classPrefix}-text">Describe how your user’s aspiration will be achieved with the help of your product. Make an emotional connection between your user’s desire and your product</p>
            <div class="${classPrefix}-mainImage">
              <img 
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=800 800w, httpscdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&"
                class="${classPrefix}-image"      
              />
            </div>
            <div class="${classPrefix}-subImage">
              <img 
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=800 800w, httpscdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&"
                class="${classPrefix}-image"      
              />
            </div>
            </div>
          </section>
        `,
        styles: `
          .${classPrefix}-section {
            padding: 5.25rem;
            font-family: Inter, sans-serif;
            padding-bottom: 282px;
          }
          .${classPrefix}-container {
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            max-width: 910px;
            position: relative;
            flex-direction: column;
          }

          .${classPrefix}-smallHeading {
            color: #000;
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 140%; /* 28px */
            text-align: center;
          }

          .${classPrefix}-heading {
            color: #000;
            font-size: 40px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            max-width: 575px;
            margin-top: 53px;
            margin-bottom: 32px;
            z-index: 2;
            margin-right: 14px;
          }

          .${classPrefix}-text {
            color: #000;
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            width: 430px;
            max-width: 377px;
            margin-top: 0px;
            margin-bottom: 75px;
            z-index: 2;
          }
          .${classPrefix}-mainImage {
            border-radius: 10px;
            max-width: 100%;
            margin-right: 110px;
            background: #E9E9E9;
            box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.15);
            width: 424px;
            height: 387px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .${classPrefix}-mainImage img, .${classPrefix}-subImage img {
            outline: none;
            width: 45px;
            height: 45px;
          }
          .${classPrefix}-subImage {
            border-radius: 10px;
            max-width: 100%;
            position: absolute;
            top: 0;
            left: 0px;
            z-index: 1;
            background: #E9E9E9;
            box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.15);
            width: 468px;
            height: 556px;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .${classPrefix}-content-wrapper {
            border-radius: 20px;
            background: #FFF;
            box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.15);
            width: 639px;
            max-width: 100%;
            height: 463px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          @media (max-width: 770px) {
            .${classPrefix}-container {
              position: unset;
             flex-direction: column;
             align-items: center;
            }
            .${classPrefix}-subImage {
              position: unset;
              margin-top: 50px;
            }
            .${classPrefix}-mainImage, .${classPrefix}-heading {
              margin-right: 0px;
            }
          }

          @media (max-width: 425px) {
            .${classPrefix}-section {
              padding: 20px;
             }
            .${classPrefix}-text {
              width: unset; 
             }
          }
        `,
      },
    },
  };
  editor.Components.addType(options.id, methods);
};

export { block as userAspirations3Block, component as userAspirations3Component };
