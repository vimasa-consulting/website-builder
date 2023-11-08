import { Editor } from "grapesjs";

const options = {
  id: "brandConnect-brandStory1",
  label: "Brand Story 1",
  block: {},
  props: {},
  style: "",
  category: "Brand Connect",
  classPrefix: "brandConnect-brandStory1",
  styleAdditional: "",
  media: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sign-intersection-fill" viewBox="0 0 16 16">
  <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435ZM7.25 4h1.5v3.25H12v1.5H8.75V12h-1.5V8.75H4v-1.5h3.25V4Z"/>
</svg>`,
};
const brandStory1Block = (editor: Editor) => {
  editor.Blocks.add(options.id, {
    media: options.media,
    label: options.label,
    category: options.category,
    content: { type: options.id },
    ...options.block,
  });
};

const brandStory1Component = (editor: Editor) => {
  const { classPrefix } = options;

  editor.Components.addType(options.id, {
    model: {
      defaults: {
        classes: [classPrefix],
        traits: [],
        components: `
             <section class="${classPrefix}-section">

                      <div class="${classPrefix}-panel">
                      <div class="${classPrefix}-imageWrapper">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&"
                          class="${classPrefix}-image"
                        />
                        </div>
                        <h1 class="${classPrefix}-title">Compelling Header for Your Brand Story</h1>
                        <p class="${classPrefix}-description">Craft your brand story in a way that sounds authentic, evokes emotions in your users, and is consistent across channels. 
                        Include the origin of the brand, its purpose & the values. Be very specific and simple with your brand message.</p>
                      </div>

              </section>
        `,
        styles: `
        .${classPrefix}-section {
            justify-content: center;
            align-items: center;
            background-color: #fff;
            display: flex;
            flex-direction: column;
            padding: 80px 80px;
            max-height: 700px;
          }
          
    
          
          .${classPrefix}-panel {
            border-radius: 10px;
            background-color: #d9d9d9;
            display: flex;
            width: 100%;
            flex-direction: column;
            padding-top: 84px;
            padding-left: 230px;
            padding-right: 230px;
            padding-bottom: 180px;
            justify-content: center;
            align-items: center;
          }
          
          .${classPrefix}-image {
            aspect-ratio: 1;
            object-fit: contain;
            object-position: center;
            width: 90px;
            mix-blend-mode: multiply;
            overflow: hidden;
            align-self: center;
            max-width: 100%;
            border-radius: 50%;
            height: 90px;
          }

         .${classPrefix}-title {
            text-align: center;
            font-family: Inter, sans-serif;
            font-size: 38px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            margin-top: 64px;
            margin-bottom: 0;
          }

          .${classPrefix}-description {
            text-align: center;
            padding: 0 84px;
            font-family: Inter, sans-serif;
            font-size: 18px;
            font-weight: 400;
          }

          @media (max-width: 770px) {
            .${classPrefix}-section {
              margin-top: 80px;
              padding: 20px;
            }
          
            .${classPrefix}-panel {
              padding: 20px;
            }

            .${classPrefix}-cardWrapper {
                width: 100%;
              }
            .${classPrefix}-description {
                padding: 30px;
            }
          }
          
        `,
      },
    },
  });
};

export { brandStory1Block, brandStory1Component };
