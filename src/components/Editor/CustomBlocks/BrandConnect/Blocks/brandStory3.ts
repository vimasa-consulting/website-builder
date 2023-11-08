import { Editor } from "grapesjs";

const options = {
  id: "brandConnect-brandStory3",
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
                Include the origin of the brand, its purpose & the values. Be very specific and simple with your brand message.
                </div>
              </div>
              <div class="${classPrefix}-right-pane"></div>
           </section>
        `,
        styles: `
        .${classPrefix}-section {
          width: 100%;
          height: 707px;
          flex-shrink: 0;
          background: #E9E9E9;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .${classPrefix}-section-container {
          padding: 62px 72px 72px; 
          background: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 726px;
          fill: #FFF;
          filter: drop-shadow(0px 8px 24px rgba(0, 0, 0, 0.15));        
          flex-direction: column;
          flex: 1;
          margin-left: 36px;
        }


        .${classPrefix}-section-header {
          color: #000;
          text-align: center;
          font-family: Inter;
          font-size: 40px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          margin-bottom: 36px;
        }

        .${classPrefix}-section-info {
          text-align: center;
          font-family: Inter;
          font-size: 15px;
          font-style: normal;
          font-weight: 400;
          line-height: 140%; /* 21px */ 
        }

        .${classPrefix}-right-pane {
          flex: 1;
        }

        @media (max-width: 770px) {
          .${classPrefix}-section {
          }
        }
      `,
      },
    },
  };
  editor.Components.addType(options.id, methods);
};

export { brandStory3Block, brandStory3Component };
