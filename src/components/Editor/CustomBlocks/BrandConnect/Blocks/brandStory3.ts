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
              <div class="${classPrefix}-section-container">
                <div class="${classPrefix}-section-header">
                  Compelling header for
                  Your Brand Story
                </div>
                <div class="${classPrefix}-section-info">
                Craft your brand story in a way that sounds authentic, evokes emotions in your users, and is consistent across channels. Tap into emotions such as joy, nostalgia, pain, etc, while narrating your journey.
                <br>Include the origin of the brand, its purpose & the values. Be very specific and simple with your brand message.
                </div>
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
        width: 500px;
        height: 300px;
        padding: 70px;
        }

        .${classPrefix}-left-panel-heading {
        color: #000;
        font-family: Inter;
        font-size: 40px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        margin: 0;
        }

        .${classPrefix}-left-panel-info {
        color: #000;
        font-family: Inter;
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

        .${classPrefix}-section-container {
          padding: 62px 72px 72px; 
          background: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 642px;
          fill: #FFF;
          filter: drop-shadow(0px 8px 24px rgba(0, 0, 0, 0.15));        
          flex-direction: column;
          flex: 1;
          margin-left: 36px;
          border-radius: 10px;
          box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.15);

        }


        .${classPrefix}-section-header {
          color: #000;
          text-align: center;
              font-family: Inter, sans-serif;
          font-size: 40px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          margin-bottom: 36px;
        }

        .${classPrefix}-section-info {
          text-align: center;
              font-family: Inter, sans-serif;
          font-size: 15px;
          font-style: normal;
          font-weight: 400;
          line-height: 140%; /* 21px */ 
          color: #000;
        }

        .${classPrefix}-left-panel-heading {
        color: #000;
        text-align: center;
        font-family: Inter;
        font-size: 26px;
        font-style: normal;
        font-weight: 600;
        line-height: 35px; /* 134.615% */
        }

        @media (max-width: 440px) {
          .${classPrefix}-section {
            width: 100%;
            height: 707px;
            flex-shrink: 0;
            background: #E9E9E9;            
            flex-direction: column-reverse;
          }
          .${classPrefix}-section-container {
            padding: 12px 18px; 
            background: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 358px;
            fill: #FFF;
            filter: drop-shadow(0px 8px 24px rgba(0, 0, 0, 0.15));        
            flex-direction: column;
            flex: 1;
            border-radius: 10px;
            box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.15);
            margin-left: unset;
  
          }
          .${classPrefix}-section-header {
            color: #000;
            text-align: center;
                font-family: Inter, sans-serif;
            font-size: 26px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            margin-bottom: 36px;
          }
          .${classPrefix}-section-info {
            font-size: 13px;
          }
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
