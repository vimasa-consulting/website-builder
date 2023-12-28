import { Editor } from "grapesjs";

const options = {
  id: "Tb3",
  label: "What We Stand For - 3",
  block: {},
  props: {},
  style: "",
  category: "Brand Connect",
  classPrefix: "brandConnect-whatWeStandFor3",
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
              <h1 class="${classPrefix}-heading">
                Crisply and clearly communicate your brand’s<br> message and what it stands for, in one bold line
              </h1>
              <span class="${classPrefix}-text">Source Name</span>
            </div>
            </div>
          </section>
        `,
        styles: `
        .${classPrefix}-section {
        padding: 5.25rem 14.25rem;
        max-width: 1440px;
        margin-inline: auto;
        }

        .${classPrefix}-container {
        margin: auto;
        border-radius: 10px;
        text-align: center;
        max-width: 983px;
        }

        .${classPrefix}-heading {
        color: #000;
        text-align: center;
        font-size: 40px;
        font-style: normal;
        font-family: Inter, sans-serif;
        font-weight: 600;
        line-height: normal;
        margin: 0;
        margin-bottom: 36px;
        }

        .${classPrefix}-text {
        color: #000;
        text-align: center;
        font-family: Inter, sans-serif;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 140%; /* 28px */
        }

        @media (max-width: 480px) {
        .${classPrefix}-section {
        padding: 1.8rem 1rem;
        }

        .${classPrefix}-container {
        }

        .${classPrefix}-heading {
        color: #000;
        text-align: center;
        font-family: Inter, sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 140%; /* 22.4px */
        margin-bottom: 15px;
        }
        .${classPrefix}-text {
        color: #000;
        text-align: center;
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

export { block as whatWeStandFor3Block, component as whatWeStandFor3Component };
