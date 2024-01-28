import { Editor } from "grapesjs";

const options = {
  id: "Tb1",
  label: "What We Stand For - 1",
  block: {},
  props: {},
  style: "",
  category: "Brand Connect",
  classPrefix: "brandConnect-whatWeStandFor1",
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
          <h1 class="${classPrefix}-title">What you stand for in one bold line</h1>
          <p class="${classPrefix}-subTitle">Elaborate on your core belief & ideology as a brand. Mention specific pointers about what you stand for.</p>
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
               <div class="${classPrefix}-card">
                <p class="${classPrefix}-text">Pointer 4</p>
              </div>
              <div class="${classPrefix}-card">
                <p class="${classPrefix}-text">Pointer 5</p>
              </div>
            </div>
            <div class="${classPrefix}-imgWrapper">
              <img loading="lazy" src="/editor/component-icons/image-icon.png" class="${classPrefix}-image-icon" />
            </div>
          </section>
        `,
        styles: `
          .${classPrefix}-section {
            padding: 5.25rem 77px;;
            font-family: Inter, sans-serif;
            background-color: #E9E9E9;
            max-width: 1440px;
            margin-inline: auto;
          }
          .${classPrefix}-firstContainer {
            margin: 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: 77px;
            gap: 80px;
            color: #000;
            flex-wrap: wrap;
            justify-content: center;
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
            width: 375px;
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
            font-family: Inter, sans-serif;
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            line-height: 140%; /* 21px */
          }

          .${classPrefix}-image-icon {
            border-radius: 10px;
            width: 45px;
            width: 45px;
          }
          @media (max-width: 400px) {
            .${classPrefix}-section {
              padding: 53px 18px 34px;
            } 
            .${classPrefix}-title {
              font-size: 26px;
              font-style: normal;
              font-weight: 600;
              line-height: 35px;
            } 
            .${classPrefix}-subTitle {
              font-size: 13px;
              font-style: normal;
              font-weight: 400;
              line-height: 140%;
              margin-bottom: 44px;
            } 
            .${classPrefix}-text {
              font-size: 15px;
              font-style: normal;
              font-weight: 500;
              line-height: normal;
              width: 100px;
            } 
            .${classPrefix}-card {
              padding: 8px 29px;
              border-radius: 8px;
              height: unset;
              width: 158px;
            } 
            .${classPrefix}-firstContainer {
              gap: 28px;
            } 
          }

          @media (max-width: 480px) {
          }
        `,
      },
    },
  };
  editor.Components.addType(options.id, methods);
};

export { block as whatWeStandFor1Block, component as whatWeStandFor1Component };
