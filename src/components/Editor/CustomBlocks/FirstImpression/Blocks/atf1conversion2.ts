import { Editor } from "grapesjs";

const options = {
  id: "Za2",
  label: "ATF1 Conversion2",
  block: {},
  props: {},
  style: "",
  category: "First Impression",
  classPrefix: "firstImpression-atf1-conversion2",
  styleAdditional: "",
  media: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-sign-intersection-fill" viewBox="0 0 16 16">
    <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435ZM7.25 4h1.5v3.25H12v1.5H8.75V12h-1.5V8.75H4v-1.5h3.25V4Z"/>
  </svg>`,
  // ...opt,
};

const atf1Conversion2block = (editor: Editor) => {
  // create a block
  // TODO: check if we need block check
  editor.Blocks.add(options.id, {
    media: options.media,
    label: options.label,
    category: options.category,
    content: { type: options.id },
    ...options.block,
  });
};

const atf1Conversion2Component = (editor: Editor) => {
  const { classPrefix } = options;
  // Create component
  editor.Components.addType(options.id, {
    model: {
      defaults: {
        classes: [classPrefix],
        traits: [],
        // @ts-ignore
        components: `
            <section class="${classPrefix}-section">
              <div class="${classPrefix}-two-column-wrapper">
                <div class="${classPrefix}-left-column">
                  <div class="${classPrefix}-rating-wrapper">
                    <div class="${classPrefix}-image-wrapper">
                      <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=100 100w,
                                        https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=200 200w,
                                        https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=400 400w,
                                        https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=800 800w,
                                        https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1200 1200w,
                                        https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1600 1600w, 
                                        https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=2000 2000w, 
                                        https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&" class="${classPrefix}-rating-img" />
                      <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=100 100w,
                                        https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=200 200w,
                                        https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=400 400w,
                                        https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=800 800w,
                                        https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1200 1200w,
                                        https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1600 1600w, 
                                        https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=2000 2000w, 
                                        https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&" class="${classPrefix}-rating-img" />
                      <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=100 100w,
                                        https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=200 200w,
                                        https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=400 400w,
                                        https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=800 800w,
                                        https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1200 1200w,
                                        https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1600 1600w, 
                                        https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=2000 2000w, 
                                        https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&" class="${classPrefix}-rating-img" />
                      <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=100 100w,
                                        https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=200 200w,
                                        https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=400 400w,
                                        https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=800 800w,
                                        https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1200 1200w,
                                        https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1600 1600w, 
                                        https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=2000 2000w, 
                                        https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&" class="${classPrefix}-rating-img" />
                      <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=100 100w,
                                        https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=200 200w,
                                        https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=400 400w,
                                        https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=800 800w,
                                        https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1200 1200w,
                                        https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1600 1600w, 
                                        https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=2000 2000w, 
                                        https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&" class="${classPrefix}-rating-img" />
                    </div>
                    <span class="${classPrefix}-rating">4.5/5 (2400 reviews)</span>
                  </div>
                  <h1 class="${classPrefix}-h1">Talk about the dream outcome for your user</h1>
                  <h2 class="${classPrefix}-h2">
                    Elaborate on the features and benefits of your product that will
                    help your users achieve the aformentioned dream outcome
                  </h2>
                  <div class="${classPrefix}-list-wrapper">
                    <div class="${classPrefix}-list-item">
                      <img class="${classPrefix}-item-image" src="https://img.icons8.com/ios/50/6C6C6C/checked--v1.png" alt="checked--v1" />
                      <span class="${classPrefix}-item-content">Mention a point to bring trust</span>
                    </div>
                    <div class="${classPrefix}-list-item">
                      <img class="${classPrefix}-item-image" src="https://img.icons8.com/ios/50/6C6C6C/checked--v1.png" alt="checked--v1" />
                      <span class="${classPrefix}-item-content">Mention a point to bring trust</span>
                    </div>
                    <div class="${classPrefix}-list-item">
                      <img class="${classPrefix}-item-image" src="https://img.icons8.com/ios/50/6C6C6C/checked--v1.png" alt="checked--v1" />
                      <span class="${classPrefix}-item-content">Mention a point to bring trust</span>
                    </div>
                  </div>
                  <button class="${classPrefix}-offer-cta">Offer based CTA ></button>
                </div>
                <div class="${classPrefix}-right-column">
                  <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=100 100w,
                                        https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=200 200w,
                                        https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=400 400w,
                                        https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=800 800w,
                                        https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1200 1200w,
                                        https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1600 1600w, 
                                        https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=2000 2000w, 
                                        https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&" class="${classPrefix}-image" />
                </div>
              </div>
            </section>
          `,
        styles: `
        .${classPrefix}-section {
          font-family: Inter;
          margin-left: auto;
          margin-right: auto;
          max-width: 1440px;
          height: 744px;
        }

        .${classPrefix}-two-column-wrapper {
          display: flex;
          flex-direction: row;
        }

        .${classPrefix}-left-column {
          width: 50vw;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          padding: 10rem 5rem;
        }

        .${classPrefix}-rating-wrapper {
          display: flex;
          flex-direction: row;
          gap: 20px;
          margin-bottom: 20px;
        }
        
        .${classPrefix}-image-wrapper {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
        }

        .${classPrefix}-rating-img {
          width: 25px;
          height: 25px;
        }

        .${classPrefix}-rating {
          color: rgba(0, 0, 0, 0.5);
        }

        .${classPrefix}-h1 {
          color: #000;
          font-size: 48px;
          font-style: normal;
          font-weight: 600;
          line-height: 64px;
          margin: 0;
        }

        .${classPrefix}-h2 {
          color: #000;
          font-size: 15px;
          font-style: normal;
          font-weight: 400;
          line-height: 140%;
          margin-bottom: 40px;
        }

        .${classPrefix}-offer-cta {
          padding: 10px 36px;
          font-size: 18px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          margin-top: 40px;
          border-radius: 8px;
          border: 1px solid transparent;
        }

        .${classPrefix}-right-column {
          width: 50vw;
          display: flex;
          align-items: center;
          align-content: center;
          justify-content: center;
          background: #e9e9e9;
          border-radius: 8px;
        }

        .${classPrefix}-image {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          mix-blend-mode: multiply;
          overflow: hidden;
          align-self: center;
          max-width: 100%;
        }

        .${classPrefix}-list-wrapper {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .${classPrefix}-list-item {
          display: flex;
          flex-direction: row;
          justify-content: center;
          gap: 10px;
          align-items: center;
        }

        .${classPrefix}-item-image {
          width: 25px;
          height: 25px;
        }

        @media only screen and (min-width: 601px) and (max-width: 768px) {
          .${classPrefix}-section {
            padding: 1rem;
          }

          .${classPrefix}-two-column-wrapper {
            display: flex;
            flex-direction: column;
          }

          .${classPrefix}-left-column {
            width: auto;
            padding: 2rem 0;
            align-items: center;
          }

          .h1,
          .${classPrefix}-h2 {
            text-align: center;
          }

          .${classPrefix}-right-column {
            width: auto;
            padding: 2rem 0;
          }

          .${classPrefix}-right-image {
            width: 100%;
            height: 100%;
          }
        }

        @media only screen and (max-width: 600px) {
          .${classPrefix}-section {
            padding: 10px 10px 50px 10px;
            height: auto;
          }

          .${classPrefix}-two-column-wrapper {
            display: flex;
            flex-direction: column;
          }

          .${classPrefix}-left-column {
            padding: 2rem 0;
            width: auto;
            align-items: center;
          }

          .${classPrefix}-rating-wrapper {
            flex-direction: row;
            gap: 10px;
            margin-bottom: 20px;
          }

          .${classPrefix}-image-wrapper {
            flex-direction: row;
            gap: 10px;
            margin-bottom: 20px;
          }

          .${classPrefix}-rating-img {
            width: 18px;
            height: 18px;
          }

          .${classPrefix}-rating {
            font-size: 10px;
            font-style: normal;
            font-weight: 400;
            line-height: 140%;
          }

          .${classPrefix}-h1 {
            text-align: center;
            font-size: 26px;
            font-weight: 600;
            line-height: 35px;
            margin-bottom: 20px;
          }

          .${classPrefix}-h2 {
            text-align: center;
            font-size: 13px;
            font-style: normal;
            font-weight: 400;
            line-height: 140%;
            margin-bottom: 38px;
          }

          .${classPrefix}-offer-cta {
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
          }

          .${classPrefix}-right-column {
            padding: 2rem 0;
            width: 100%;
            height: 100%;
          }

          .${classPrefix}-image {
            width: 321px;
            height: 299px;
          }
        }
          `,
      },
    },
  });
};

export { atf1Conversion2block, atf1Conversion2Component };
