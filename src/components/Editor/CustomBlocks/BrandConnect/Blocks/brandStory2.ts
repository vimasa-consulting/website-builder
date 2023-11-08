import { Editor } from "grapesjs";

const options = {
  id: "brandConnect-brandStory2",
  label: "Brand Story 2",
  block: {},
  props: {},
  style: "",
  category: "Brand Connect",
  classPrefix: "brandConnect-brandStory2",
  styleAdditional: "",
  media: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sign-intersection-fill" viewBox="0 0 16 16">
    <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435ZM7.25 4h1.5v3.25H12v1.5H8.75V12h-1.5V8.75H4v-1.5h3.25V4Z"/>
  </svg>`,
};
const brandStory2Block = (editor: Editor) => {
  editor.Blocks.add(options.id, {
    media: options.media,
    label: options.label,
    category: options.category,
    content: { type: options.id },
    ...options.block,
  });
};

const brandStory2Component = (editor: Editor) => {
  const { classPrefix } = options;
  const methods: any = {
    model: {
      defaults: {
        classes: [classPrefix],
        traits: [],
        components: `
           <section class="${classPrefix}-section">
              <div class="${classPrefix}-left-panel">
               <h5 class="${classPrefix}-left-panel-heading">Compelling Header for Your Brand Story</h5> 
              <div class="${classPrefix}-left-panel-img">
              </div>
               <p class="${classPrefix}-left-panel-info">Craft your brand story in a way that sounds authentic, evokes emotions in your users, and is consistent across channels. Include the origin of the brand, its purpose & the values. Be very specific and simple with your brand message.</p>
              </div>
              <div class="${classPrefix}-panel">
             </div>
           </section>
                    `,
        styles: `
        .${classPrefix}-section {
          padding: 84px 161px 83px 162px;
          justify-content: center;
          align-items: center;
          justify-content: center;
          align-items: center;
          background-color: white;
          display: flex;
          max-height: 700px;
        }
        
        .${classPrefix}-left-panel {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          flex: 1;
        }

        .${classPrefix}-left-panel-img {
          display: none;
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 90px;
          mix-blend-mode: multiply;
          overflow: hidden;
          align-self: center;
          max-width: 100%;
          border-radius: 50%;
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
        }

        .${classPrefix}-panel {
          border-radius: 10px;
          background-color: #d9d9d9;
          display: flex;
          flex: 1;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 595px;
          margin-left: 90px;
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
            padding: 20px;
            height: 693px;
          }
        
          .${classPrefix}-panel {
            display: none;
          }

          .${classPrefix}-image {
            display: none;
          }
          .${classPrefix}-cardWrapper {
              width: 100%;
            }
          .${classPrefix}-description {
              padding: 30px;
          }

          .${classPrefix}-left-panel-info {
              color: #000;
              font-family: Inter;
              font-size: 13px;
              font-style: normal;
              font-weight: 400;
              line-height: 140%; /* 18.2px */
              padding-top: 31px;
          }

          .${classPrefix}-left-panel-img {
            display: block;
            border-radius: 10px;
            background-color: #d9d9d9;
            display: flex;
            flex: 1;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 595px;
            margin-left: 90px;
          }

          .${classPrefix}-left-panel-heading {
              color: #000;
              text-align: center;
              font-size: 26px;
              font-style: normal;
              font-weight: 600;
              line-height: 35px; /* 134.615% */
              margin-bottom: 45px;
          }
        }
        
      `,
      },
    },
  };
  editor.Components.addType(options.id, methods);
};

export { brandStory2Block, brandStory2Component };
