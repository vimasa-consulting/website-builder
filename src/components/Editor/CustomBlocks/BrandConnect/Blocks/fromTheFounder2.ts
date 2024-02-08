import { Editor } from "grapesjs";

const options = {
  id: "Te2",
  label: "From The Founder 2",
  block: {},
  props: {},
  style: "",
  category: "Brand Connect",
  classPrefix: "brandConnect-fromTheFounder2",
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
              <div class="${classPrefix}-leftContainer">
                <img loading="lazy" src="/editor/component-icons/image-icon.png" class="${classPrefix}-image-big" />
              </div>
              <div class="${classPrefix}-rightContainer">
                <div class="${classPrefix}-wrapper">
                  <div class="${classPrefix}-imageWrapper">
                    <img loading="lazy" src="/editor/component-icons/image-icon.png" class="${classPrefix}-image-small" />
                  </div>
                  <h1 class="${classPrefix}-heading">From the Founder</h1>
                  <p class="${classPrefix}-content">Use a direct quote from the founder/head of a department. Give a human touch while representing your brand and the products. Let the founder(s) address the users directly, so that it builds a better connect.</p>
                </div>
              </div>
            </div>
          </section>
        `,
        styles: `
          .${classPrefix}-container {
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: Inter, sans-serif;
          max-width: 1440px;          
          }
          .${classPrefix}-section {            
            max-width: 1440px;
            min-width: 1440px;
            margin: 0 auto;
          }
          .${classPrefix}-leftContainer {
          width: 50%;
          display: flex;
          justify-content: center;
          }
          .${classPrefix}-rightContainer {
          width: 50%;
          }
          .${classPrefix}-wrapper {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          }
          .${classPrefix}-image-big {
            max-width: 100%;
            width: 710px;
            height: 762px;
          }
          .${classPrefix}-image-small {
            border-radius: 10px;
            max-width: 100%;
            width: 366px;
            height: 366px;
          }
          ${classPrefix}-imageWrapper {
            border-radius: 10px;
            max-width: 100%;
          }
          .${classPrefix}-heading {
          color: #000;
          font-size: 40px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          margin-top: 47px;
          margin-bottom: 13px;
          }
          .${classPrefix}-content {
          color: #000;
          font-size: 15px;
          font-style: normal;
          font-weight: 400;
          line-height: 140%;
          max-width: 420px;
          text-align: center;
          }

          @media (max-width: 770px) {
            .${classPrefix}-section {            
              min-width: 400px;              
            }
            .${classPrefix}-container {
              min-width: 400px;
              padding: 20px;
              flex-direction: column-reverse;
              gap: 50px;         
            }
          }

          @media (max-width: 480px) {
            .${classPrefix}-rightContainer {
              max-width: 290px;
              width: unset; 
            }
            .${classPrefix}-leftContainer {
              width: unset; 
            }
          }
        `,
      },
    },
  };
  editor.Components.addType(options.id, methods);
};

export { block as fromTheFounder2Block, component as fromTheFounder2Component };
