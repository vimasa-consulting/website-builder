import { Editor } from "grapesjs";

const options = {
  id: "Tc3",
  label: "What We Dont Stand For - 5",
  block: {},
  props: {},
  style: "",
  category: "Brand Connect",
  classPrefix: "brandConnect-whatWeDontStandFor5",
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
              <div class="${classPrefix}-left-container">
                <img class="${classPrefix}-image" src="https://placehold.co/664x712" alt="" />
              </div>
              <div class="${classPrefix}-right-container">
                <div class="${classPrefix}-wrapper">
                  <h1 class="${classPrefix}-heading">What you don’t stand for in one bold line</h1>
                  <h3 class="${classPrefix}-content">Give a short description positioning yourself against the bad things that may harm the customer.</h3>
                  <h3 class="${classPrefix}-content">Bring out your integrity as a brand and make a strong statement that your brand’s purpose is focussed on the true well-being of the customers, which other brands in the market aren’t doing.</h3>
                  <div class="${classPrefix}-pointer-wrapper">
                    <div class="${classPrefix}-point">
                      <img class="${classPrefix}-point-img"  src="https://img.icons8.com/material-rounded/30/multiply--v1.png" alt="multiply--v1"/>
                      <span class="${classPrefix}-point-text">Pointer 1</span>
                    </div>
          <div class="${classPrefix}-point">
                      <img class="${classPrefix}-point-img"  src="https://img.icons8.com/material-rounded/30/multiply--v1.png" alt="multiply--v1"/>
                      <span class="${classPrefix}-point-text">Pointer 2</span>
                    </div>
          <div class="${classPrefix}-point">
                      <img class="${classPrefix}-point-img"  src="https://img.icons8.com/material-rounded/30/multiply--v1.png" alt="multiply--v1"/>
                      <span class="${classPrefix}-point-text">Pointer 3</span>
                    </div>
          <div class="${classPrefix}-point">
                      <img class="${classPrefix}-point-img"  src="https://img.icons8.com/material-rounded/30/multiply--v1.png" alt="multiply--v1"/>
                      <span class="${classPrefix}-point-text">Pointer 4</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        `,
        styles: `
          .${classPrefix}-container {
          margin: 0 auto;
          display: flex;
          gap: 50px;
          align-items: center;
          justify-content: center;
          }

          .${classPrefix}-left-container {
          width: 50%;
          text-align: right;
          }

          .${classPrefix}-right-container {
          width: 50%;
          }

          .${classPrefix}-wrapper {
          max-width: 480px;
          }

          .${classPrefix}-image {
          max-width: 100%;
          }

          .${classPrefix}-heading {
          color: #000;
          font-family: Inter;
          font-size: 40px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          margin: 0;
          margin-bottom: 26px;
          }

          .${classPrefix}-content {
          color: #000;
          font-family: Inter;
          font-size: 15px;
          font-style: normal;
          font-weight: 400;
          line-height: 140%;
          margin: 0px;
          margin-bottom: 10px;
          }

          .${classPrefix}-pointer-wrapper {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          margin-top: 24px;
          }

          .${classPrefix}-point {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          gap: 5px;
          }

          .${classPrefix}-point-img {
          width: 30px;
          height: 30px;
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
  block as whatWeDontStandFor5Block,
  component as whatWeDontStandFor5Component,
};