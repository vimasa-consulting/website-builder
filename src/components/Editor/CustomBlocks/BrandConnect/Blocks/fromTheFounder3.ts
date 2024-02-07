import { Editor } from "grapesjs";

const options = {
  id: "Te3",
  label: "From The Founder 3",
  block: {},
  props: {},
  style: "",
  category: "Brand Connect",
  classPrefix: "brandConnect-fromTheFounder3",
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
              <div class="${classPrefix}-imageWrapper">
                <video class="${classPrefix}-video" controls>
                  <source src="" type="video/mp4">
                </video>
              </div>
              <div class="${classPrefix}-content-wrapper">
                <h1 class="${classPrefix}-heading">From the Founder</h1>
                <p class="${classPrefix}-text">Use a direct quote from the founder/head of a department. Give a human touch while representing your brand and the products. Let the founder(s) address the users directly, so that it builds a better connect.</p>
                <p class="${classPrefix}-smallHeading">Founder Name</p>
                </div>
            </div>
          </section>
        `,
        styles: `
          .${classPrefix}-section {
            padding: 88px 0px;
            font-family: Inter, sans-serif;
            max-width: 1440px;
            margin-inline: auto;
          }
          .${classPrefix}-container {
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 955px;
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
            margin: 0;
            text-align: center;
          }

          .${classPrefix}-text {
            color: #000;
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            width: 430px;
            max-width: 100%;
            text-align: center;
            margin-top: 26px;
            margin-bottom: 60px;
          }

          .${classPrefix}-image {
            max-width: 100%;
            width: 384px;
            height: 463px;
          }
          @media (max-width: 770px) {
            .${classPrefix}-container {
             flex-direction: column;
             gap: 50px;
            }
          }

          @media (max-width: 425px) {
            .${classPrefix}-section {
              padding: 71px 20px 69px;
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

export { block as fromTheFounder3Block, component as fromTheFounder3Component };
