import { Editor } from "grapesjs";

const options = {
  id: "Tb4",
  label: "What We Stand For - 4",
  block: {},
  props: {},
  style: "",
  category: "Brand Connect",
  classPrefix: "brandConnect-whatWeStandFor4",
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
              <img loading="lazy" src="/editor/component-icons/image-icon.png" class="${classPrefix}-image" />
              <div class="${classPrefix}-content-wrapper">
                <span class="${classPrefix}-small-heading">Highlight</span>
                <h1 class="${classPrefix}-heading">What you stand for in one bold line</h1>
                <span class="${classPrefix}-text">Elaborate on your core belief & ideology as a brand. Mention specific pointers
                  about what you stand for, and avoid being vague or generic.</span>
              </div>
            </div>
          </section>
        `,
        styles: `
          .${classPrefix}-section {
          padding: 5.25rem;
          max-width: 1440px;
          min-width: 1440px;
          margin: auto;
          }
          .${classPrefix}-container {
          margin: 0 auto;
          display: flex;
          gap: 50px;
          justify-content: center;
          align-items: center;
          }

          .${classPrefix}-content-wrapper {
          max-width: 400px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          gap: 10px;
      
          }

          .${classPrefix}-small-heading {
          color: #000;
          font-family: Inter, sans-serif;
          font-size: 20px;
          font-style: normal;
          font-weight: 500;
          line-height: 140%; 
          }

          .${classPrefix}-heading {
          color: #000;
          font-family: Inter, sans-serif;
          font-size: 40px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          margin: 0;
          }

          .${classPrefix}-text {
          color: #000;
          font-family: Inter, sans-serif;
          font-size: 15px;
          font-style: normal;
          font-weight: 400;
          line-height: 140%;
          display: block;
          width: 350px;
          }

          .${classPrefix}-image {
          border-radius: 10px;
          width: 595px;
          height: 412px;
          }

          @media (max-width: 480px) {
          .${classPrefix}-section {
          padding: 10px;
          padding-bottom: 60px;
          min-width: 400px;
          }
          .${classPrefix}-container {
          gap: 30px;
          padding: 30px 20px;
          text-align: center;
          flex-direction: column-reverse;
          }

          .${classPrefix}-content-wrapper {
          width: auto;
          gap: 0px;
          }

          .${classPrefix}-small-heading {
          color: #000;
          text-align: center;
          font-family: Inter, sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: 140%; /* 22.4px */
          margin-bottom: 20px;
          }
          .${classPrefix}-heading {
          color: #000;
          text-align: center;
          font-family: Inter, sans-serif;
          font-size: 26px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          margin-bottom: 20px;
          }
          .${classPrefix}-text {
          color: #000;
          font-family: Inter, sans-serif;
          font-size: 13px;
          font-style: normal;
          font-weight: 400;
          line-height: 140%; /* 18.2px */
          }
          }
        `,
      },
    },
  };
  editor.Components.addType(options.id, methods);
};

export { block as whatWeStandFor4Block, component as whatWeStandFor4Component };
