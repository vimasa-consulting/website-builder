import { Editor } from "grapesjs";

const options = {
  id: "Ta3",
  label: "Brand Story 3",
  block: {},
  props: {},
  style: "",
  category: "Brand Connect",
  classPrefix: "brandConnect-brandStory3",
  styleAdditional: "",
  media: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sign-intersection-fill" viewBox="0 0 16 16">
    <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435ZM7.25 4h1.5v3.25H12v1.5H8.75V12h-1.5V8.75H4v-1.5h3.25V4Z"/>
  </svg>`,
};
const brandStory3Block = (editor: Editor) => {
  editor.Blocks.add(options.id, {
    media: options.media,
    label: options.label,
    category: options.category,
    content: { type: options.id },
    ...options.block,
  });
};

const brandStory3Component = (editor: Editor) => {
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
                <h5 class="${classPrefix}-left-panel-heading">Compelling Header for Your Brand Story</h5>
                <p class="${classPrefix}-left-panel-info">Craft your brand story in a way that sounds authentic, evokes emotions in your users,
                  and
                  is consistent across channels. Include the origin of the brand, its purpose & the values. Be very specific and
                  simple with your brand message.</p>
                <p class="${classPrefix}-left-panel-info">Include the origin of the brand, its purpose & the values. Be very specific and simple
                  with your brand message.</p>
              </div>
              <div class="${classPrefix}-right-container">
                <video class="${classPrefix}-video-1" controls>
                  <source src="" type="video/mp4">
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </section>
        `,
        styles: `
        .${classPrefix}-section {
        max-height: 700px;
        max-width: 1440px;
        padding: 84px 162px;
        background: #e9e9e9;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: auto;
        }

        .${classPrefix}-container {
        width: 100%;
        max-width: 1117px;
        max-height: 595px;
        display: flex;
        justify-content: space-between;
        }

        .${classPrefix}-left-container {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        background: #fff;
        box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.15);
        width: 600px;
        padding: 70px;
        }

        .${classPrefix}-left-panel-heading {
        color: #000;
        font-family: Inter, sans-serif;
        font-size: 40px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        margin: 0;
        }

        .${classPrefix}-left-panel-info {
        color: #000;
        font-family: Inter, sans-serif;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: 140%; /* 21px */
        padding-top: 26px;
        margin: 0px;
        }

        .${classPrefix}-right-container {
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex:1;
        }

        .${classPrefix}-video-1 {
          height: 100%;
          width: 100%;
        border-radius: 10px;
        }

        @media (max-width: 400px) {
        .${classPrefix}-section {
        padding: 50px 20px;
        }

        .${classPrefix}-container {
        flex-direction: column-reverse;
        align-content: center;
        justify-items: center;
        max-width: none;
        max-height: none;
        width: auto;
        justify-content: space-between;
        row-gap: 30px;
        }

        .${classPrefix}-left-container {
        width: auto;
        heigth: auto;
        padding: 30px;
        }

        .${classPrefix}-left-panel-heading {
        color: #000;
        text-align: center;
        font-family: Inter, sans-serif;
        font-size: 26px;
        font-style: normal;
        font-weight: 600;
        line-height: 35px; /* 134.615% */
        }

        .${classPrefix}-left-panel-info {
        color: #000;
        font-family: Inter, sans-serif;
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: 140%; /* 18.2px */
        text-align: center;
        }

        .${classPrefix}-right-container {
        justify-items: center;
        align-content: center;
        height: auto;
        margin: 0;
        }

        .${classPrefix}-video-1 {
        width: 100%;
        height: 300px;
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
  };
  editor.Components.addType(options.id, methods);
};

export { brandStory3Block, brandStory3Component };
