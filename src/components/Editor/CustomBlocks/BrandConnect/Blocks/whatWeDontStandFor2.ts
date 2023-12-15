import { Editor } from "grapesjs";

const options = {
  id: "Tc2",
  label: "What We Don't Stand For - 2",
  block: {},
  props: {},
  style: "",
  category: "Brand Connect",
  classPrefix: "brandConnect-whatWeDontStandFor2",
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
          <h1 class="${classPrefix}-title">Header for What you don’t stand for</h1>
          <p class="${classPrefix}-subTitle">Give a short description positioning yourself against the bad things that may harm the customer.</p>
            <div class="${classPrefix}-firstContainer">
              <div class="${classPrefix}-card">
                <p class="${classPrefix}-text">Pointer 1</p>
              </div>
              <div class="${classPrefix}-card">
                <p class="${classPrefix}-text">Pointer 2</p>
              </div>
              <div class="${classPrefix}-card">
                <p class="${classPrefix}-text">Pointer 3</p>
              </div>
            </div>
            <div class="${classPrefix}-secondContainer">
              <div class="${classPrefix}-card">
                <p class="${classPrefix}-text">Pointer 4</p>
              </div>
              <div class="${classPrefix}-card">
                <p class="${classPrefix}-text">Pointer 5</p>
              </div>
            </div>
            <div class="${classPrefix}-imgWrapper">
              <img src="https://placehold.co/45x45" alt="Placeholder"/>
            </div>
          </section>
        `,
        styles: `
          .${classPrefix}-section {
            padding: 5.25rem 77px;;
            font-family: Inter, sans-serif;
            background-color: #E9E9E9;
          }
          .${classPrefix}-firstContainer {
            margin: 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: 77px;
            justify-content: space-between;
            gap: 80px;
          }
          .${classPrefix}-secondContainer {
            margin: 0 auto;
            display: flex;
            gap: 80px;
            justify-content: center;
            align-items: center;
          }

          .${classPrefix}-contentWrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 45px;
          }
          .${classPrefix}-content {
            display: flex;
            gap: 20px;
            text-align: center;
          }
          .${classPrefix}-card {
            max-width: 376px;
            width: 100%;
            height: 80px;
            border-radius: 10px;
            box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.15);
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #fff;
          }
          .${classPrefix}-title {
            text-align: center;
            font-size: 40px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            margin-top: 0;
            margin-bottom: 18px;
            color: #000;
          }
          .${classPrefix}-subTitle {
            text-align: center;
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            margin: 0 auto;
            margin-bottom: 89px;
            color: #000;
          }
          .${classPrefix}-text {
            font-size: 28px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            margin: 0;
            text-align: center;
            color: #000;
          }
          .${classPrefix}-imgWrapper {
            width: 90px;
            height: 90px;
            border-radius: 50%;
            border: 1px dashed gray;
            margin: 0 auto;
            margin-top: 64px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .${classPrefix}-text {
            color: #000;
            font-family: Inter;
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            line-height: 140%; /* 21px */
          }

          .${classPrefix}-image {
            border-radius: 10px;
          }
          @media (max-width: 770px) {
          }

          @media (max-width: 480px) {
          }
        `,
      },
    },
  };
  editor.Components.addType(options.id, methods);
};

export {
  block as whatWeDontStandFor2Block,
  component as whatWeDontStandFor2Component,
};
