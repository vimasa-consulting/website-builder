import { Editor } from "grapesjs";

const options = {
  id: "Vd3",
  label: "Brand Benefits - 3",
  block: {},
  props: {},
  style: "",
  category: "Value",
  classPrefix: "value-brandBenefits3",
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
    </div>
    <div class="${classPrefix}-benefits-wrapper">
      <div class="${classPrefix}-row1">
        <div class="${classPrefix}-benefit-item">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=100 100w,
  https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=200 200w,
  https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=400 400w,
  https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=800 800w,
  https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1200 1200w,
  https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1600 1600w, 
  https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=2000 2000w, 
  https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&" class="${classPrefix}-image" />
          <div class="${classPrefix}-item-content-wrapper">
            <span class="${classPrefix}-item-heading">Benefit 1</span>
            <span class="${classPrefix}-sub-heading">Short description</span>
          </div>
        </div>
        <div class="${classPrefix}-benefit-item">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=100 100w,
  https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=200 200w,
  https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=400 400w,
  https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=800 800w,
  https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1200 1200w,
  https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1600 1600w, 
  https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=2000 2000w, 
  https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&" class="${classPrefix}-image" />
          <div class="${classPrefix}-item-content-wrapper">
            <span class="${classPrefix}-item-heading">Benefit 2</span>
            <span class="${classPrefix}-sub-heading">Short description</span>
          </div>
        </div>
      </div>
      <div class="${classPrefix}-row2">
        <div class="${classPrefix}-benefit-item">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=100 100w,
  https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=200 200w,
  https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=400 400w,
  https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=800 800w,
  https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1200 1200w,
  https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1600 1600w, 
  https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=2000 2000w, 
  https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&" class="${classPrefix}-image" />
          <div class="${classPrefix}-item-content-wrapper">
            <span class="${classPrefix}-item-heading">Benefit 3</span>
            <span class="${classPrefix}-sub-heading">Short description</span>
          </div>
        </div>
        <div class="${classPrefix}-benefit-item">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=100 100w,
  https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=200 200w,
  https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=400 400w,
  https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=800 800w,
  https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1200 1200w,
  https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1600 1600w, 
  https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=2000 2000w, 
  https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&" class="${classPrefix}-image" />
          <div class="${classPrefix}-item-content-wrapper">
            <span class="${classPrefix}-item-heading">Benefit 4</span>
            <span class="${classPrefix}-sub-heading">Short description</span>
          </div>
        </div>
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
          }

          .${classPrefix}-container {
            max-width: 1440px;
            margin: 0 auto;
          }

          .${classPrefix}-heading-wrapper {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            margin: 0 auto 7rem 0;
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
            justify-content: space-between;
          }

          .${classPrefix}-row1 {
            width: 50%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            column-gap: 10vw;
          }

          .${classPrefix}-row2 {
            width: 50%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            column-gap: 10vw;
          }

          .${classPrefix}-benefit-item {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 10px;
          }

          .${classPrefix}-item-image {
            height: 40px;
            width: 40px;
          }

          .${classPrefix}-item-heading {
            display: block;
            color: #000;
            text-align: left;
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 140%;
          }

          .${classPrefix}-sub-heading {
            display: block;
            color: #000;
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            line-height: 140%;
            /* 21px */
          }

          @media (max-width: 480px) {
            .${classPrefix}-section {
              padding: 10px;
            }

            .${classPrefix}-container {
              max-width: 100%;
            }

            .${classPrefix}-section-heading {
              color: #000;
              text-align: center;
              font-family: Inter, sans-serif;
              font-size: 26px;
              font-style: normal;
              font-weight: 600;
              line-height: 35px; /* 134.615% */
            }

            .${classPrefix}-heading-wrapper {
              margin: 0 auto 36px 0;
            }

            .${classPrefix}-item-heading {
              color: #000;
              font-family: Inter, sans-serif;
              font-size: 16px;
              font-style: normal;
              font-weight: 500;
              line-height: 140%; /* 22.4px */
              display: inline;
            }
            .${classPrefix}-row1 {
              width: auto;
              justify-content: center;
              column-gap: 70px;
            }
            .${classPrefix}-row2 {
              width: auto;
              justify-content: center;
              column-gap: 70px;
            }
            .${classPrefix}-sub-heading {
              color: #000;
              font-family: Inter, sans-serif;
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              line-height: 140%; /* 16.8px */
            }

            .${classPrefix}-benefits-wrapper {
              flex-direction: column;
              row-gap: 40px;
            }
          }
        `,
      },
    },
  });
};

export { block as brandBenefits3Block, component as brandBenefits3Component };
