import { Editor } from "grapesjs";

const options = {
  id: "Vd1",
  label: "Brand Benefits - 1",
  block: {},
  props: {},
  style: "",
  category: "Value",
  classPrefix: "value-brandBenefits1",
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

  editor.Components.addType(options.id, {
    model: {
      defaults: {
        classes: [classPrefix],
        traits: [],
        components: `
<section class="${classPrefix}-section">
            <div class="${classPrefix}-container">
              <div class="${classPrefix}-heading-wrapper">
                <h1 class="${classPrefix}-section-heading">Header for Brand Benefits</h1>
                <div class="${classPrefix}-grey-bar"></div>
                <span class="${classPrefix}-sub-heading">A short description about the added value your customer will get if they purchase from
                  you
                </span>
              </div>
              <div class="${classPrefix}-benefits-wrapper">
                <div class="${classPrefix}-benefit-item">
                <span data-gjs-type="icon" draggable="true" class="icon-display ${classPrefix}-rating-img">
                <span data-icon="material-symbols:star" data-width="25px" class="iconify"></span>
              </span>
                  <span class="${classPrefix}-item-heading">Brand Benefits 1</span>
                  <span class="${classPrefix}-item-sub-heading">Short description</span>
                </div>
                <div class="${classPrefix}-benefit-item">
                <span data-gjs-type="icon" draggable="true" class="icon-display ${classPrefix}-rating-img">
                <span data-icon="material-symbols:star" data-width="25px" class="iconify"></span>
              </span>
                  <span class="${classPrefix}-item-heading">Brand Benefits 2</span>
                  <span class="${classPrefix}-item-sub-heading">Short description</span>
                </div>
                <div class="${classPrefix}-benefit-item">
                <span data-gjs-type="icon" draggable="true" class="icon-display ${classPrefix}-rating-img">
                <span data-icon="material-symbols:star" data-width="25px" class="iconify"></span>
              </span>
                  <span class="${classPrefix}-item-heading">Brand Benefits 3</span>
                  <span class="${classPrefix}-item-sub-heading">Short description</span>
                </div>
              </div>
            </div>
          </section>
        `,
        styles: `
          .${classPrefix}-section {
          padding: 3.5rem 1rem;
          margin: 0 auto;
          font-family: Inter, sans-serif;
          min-width: 1440px;
          }

          .${classPrefix}-container {
          margin: 0 auto;
          max-width: 1440px;
          }

          .${classPrefix}-heading-wrapper {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          margin: 0 auto 7rem 0;
          }

          .${classPrefix}-grey-bar {
          width: 74px;
          height: 4px;
          border-radius: 5px;
          background: #d9d9d9;
          margin: 20px auto;
          }

          .${classPrefix}-section-heading {
          color: #000;
          font-size: 40px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          margin: 0;
          }

          .${classPrefix}-benefits-wrapper {
          display: flex;
          flex-direction: row;
          justify-content: center;
          column-gap: 100px;
          }

          .${classPrefix}-benefit-item {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 247px;
          }

          .${classPrefix}-image {
          margin-bottom: 20px;
          }

          .${classPrefix}-item-heading {
          color: #000;
          text-align: center;
          font-size: 20px;
          font-style: normal;
          font-weight: 500;
          line-height: 140%;
          }

          .${classPrefix}-sub-heading {
          color: #000;
          text-align: center;
          font-size: 15px;
          font-style: normal;
          font-weight: 400;
          line-height: 140%;
          }

          .${classPrefix}-rating-img {
            width: 25px;
            height: 25px;
            color: #ddd;
            @media only screen and (max-width: 600px) {
              width: 17px;
            height: 17px;
              
            }
          }

          .${classPrefix}-item-sub-heading {
          color: #000;
          text-align: center;
          font-size: 15px;
          font-style: normal;
          font-weight: 400;
          line-height: 140%;
          }

          @media (max-width: 480px) {
          .${classPrefix}-section {
            min-width: 400px;
          padding: 36px 35px 48px;
          }

          .${classPrefix}-container {
          max-width: 100%;
          }

          .${classPrefix}-section-heading {
          color: #000;
          font-size: 18px;
          font-style: normal;
          font-weight: 500;
          line-height: 140%;
          }

          .${classPrefix}-sub-heading {
          text-align: left;
          font-size: 13px;
          font-style: normal;
          font-weight: 400;
          line-height: 140%; 
          }

          .${classPrefix}-grey-bar {
          display: none;
          }

          .${classPrefix}-heading-wrapper {
          margin: 0 auto 36px 0;
          align-items: flex-start;
          row-gap: 10px;
          }

          .${classPrefix}-benefits-wrapper {
          column-gap: 0px;
          justify-content: space-between;
          }

          .${classPrefix}-benefit-item {
          width: 82px;
          }

          .${classPrefix}-item-heading {
          color: #000;
          text-align: center;
          font-family: Inter, sans-serif;
          font-size: 13px;
          font-style: normal;
          font-weight: 400;
          line-height: 140%;
          }

          .${classPrefix}-item-sub-heading {
          color: #000;
          text-align: center;
          font-family: Inter, sans-serif;
          font-size: 10px;
          font-style: normal;
          font-weight: 400;
          line-height: 140%; 
          }

          .${classPrefix}-image {
            width: 35px;
            height: 35px;
            margin-bottom: 10px;
          }
          }
        `,
      },
    },
  });
};

export { block as brandBenefits1Block, component as brandBenefits1Component };
