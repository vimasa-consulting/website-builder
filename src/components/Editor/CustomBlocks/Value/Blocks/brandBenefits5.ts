import { Editor } from "grapesjs";

const options = {
  id: "Vd5",
  label: "Brand Benefits - 5",
  block: {},
  props: {},
  style: "",
  category: "Value",
  classPrefix: "value-brandBenefits5",
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
              <div class="${classPrefix}-benefits-wrapper">
                <div class="${classPrefix}-benefit-item">
                  <div class="${classPrefix}-circlular-div">
                  <span data-gjs-type="icon" draggable="true" class="icon-display ${classPrefix}-rating-img">
                  <span data-icon="ph:placeholder-light" data-width="25px" class="iconify"></span>
                </span>
                    <div class="${classPrefix}-cir-text">Brand Benefit 1</div>
                  </div>
                  <span class="${classPrefix}-item-description">Short description</span>
                </div>
                <div class="${classPrefix}-benefit-item">
                  <div class="${classPrefix}-circlular-div">
                  <span data-gjs-type="icon" draggable="true" class="icon-display ${classPrefix}-rating-img">
                  <span data-icon="ph:placeholder-light" data-width="25px" class="iconify"></span>
                </span>
                    <div class="${classPrefix}-cir-text">Brand Benefit 2</div>
                  </div>
                  <span class="${classPrefix}-item-heading">Short description</span>
                </div>
                <div class="${classPrefix}-benefit-item">
                  <div class="${classPrefix}-circlular-div">
                  <span data-gjs-type="icon" draggable="true" class="icon-display ${classPrefix}-rating-img">
                  <span data-icon="ph:placeholder-light" data-width="25px" class="iconify"></span>
                </span>
                    <div class="${classPrefix}-cir-text">Brand Benefit 3</div>
                  </div>
                  <span class="${classPrefix}-item-heading">Short description</span>
                </div>
                <div class="${classPrefix}-benefit-item">
                  <div class="${classPrefix}-circlular-div">
                  <span data-gjs-type="icon" draggable="true" class="icon-display ${classPrefix}-rating-img">
                  <span data-icon="ph:placeholder-light" data-width="25px" class="iconify"></span>
                </span>
                    <div class="${classPrefix}-cir-text">Brand Benefit 4</div>
                  </div>
                  <span class="${classPrefix}-item-heading">Short description</span>
                </div>
              </div>
            </div>
          </section>
        `,
        styles: `
          .${classPrefix}-section {
            min-width: 1440px;
            padding: 3.5rem 1rem;
            margin: 0 auto;
            font-family: Inter, sans-serif;
          }

          .${classPrefix}-container {
            max-width: 1440px;
            margin: 0 auto;
          }

          .${classPrefix}-benefits-wrapper {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            column-gap: 100px;
            flex-wrap: wrap;
          }

          .${classPrefix}-benefit-item {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 20px;
          }

          .${classPrefix}-circlular-div {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            background-color: #e9e9e9;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            row-gap: 16px;
          }

          .${classPrefix}-cir-text {
            color: #4b4b4b;
            text-align: center;
            font-family: Inter, sans-serif;
            font-size: 22px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            width: 50%;
          }

          .${classPrefix}-item-description {
            color: #000;
            text-align: center;
            font-family: Inter, sans-serif;
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: 140%; /* 25.2px */
          }

          .${classPrefix}-image {
            width: 50px;
            height: 50px;
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

          @media (max-width: 480px) {
            .${classPrefix}-section {
              min-width: 400px;
              padding: 10px;
            }

            .${classPrefix}-container {
              max-width: 100%;
            }
            .${classPrefix}-benefits-wrapper {
              gap: 36px;
            }
            .${classPrefix}-circlular-div {
              width: 146px;
              height: 146px;
              gap: 5px;
            }

            .${classPrefix}-image {
              width: 35px;
              height: 35px;
            }

            .${classPrefix}-cir-text {
              color: #4b4b4b;
              text-align: center;
              font-family: Inter, sans-serif;
              font-size: 18px;
              font-style: normal;
              font-weight: 500;
              line-height: normal;
              width: 70%;
            }
          }
        `,
      },
    },
  });
};

export { block as brandBenefits5Block, component as brandBenefits5Component };
