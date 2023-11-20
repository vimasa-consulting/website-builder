import { Editor } from "grapesjs";

const options = {
  id: "Za6",
  label: "ATF2 Conversion3",
  block: {},
  props: {},
  style: "",
  category: "First Impression",
  classPrefix: "firstImpression-atf2-conversion3",
  styleAdditional: "",
  media: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-sign-intersection-fill" viewBox="0 0 16 16">
    <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435ZM7.25 4h1.5v3.25H12v1.5H8.75V12h-1.5V8.75H4v-1.5h3.25V4Z"/>
  </svg>`,
  // ...opt,
};

const atf2Conversion3block = (editor: Editor) => {
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

const atf2Conversion3Component = (editor: Editor) => {
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
                    <img class="${classPrefix}-rating-img" src="https://img.icons8.com/ios-glyphs/30/000000/star--v1.png" alt="star--v1" />
                    <img class="${classPrefix}-rating-img" src="https://img.icons8.com/ios-glyphs/30/000000/star--v1.png" alt="star--v1" />
                    <img class="${classPrefix}-rating-img" src="https://img.icons8.com/ios-glyphs/30/000000/star--v1.png" alt="star--v1" />
                    <img class="${classPrefix}-rating-img" src="https://img.icons8.com/ios-glyphs/30/000000/star--v1.png" alt="star--v1" />
                    <img class="${classPrefix}-rating-img" src="https://img.icons8.com/ios-glyphs/30/000000/star--v1.png" alt="star--v1" />
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
                    <img class="${classPrefix}-item-image" src="https://img.icons8.com/ios/50/000000/checked--v1.png" alt="checked--v1" />
                    <span class="${classPrefix}-item-content">Mention a point to bring trust</span>
                  </div>
                  <div class="${classPrefix}-list-item">
                    <img class="${classPrefix}-item-image" src="https://img.icons8.com/ios/50/000000/checked--v1.png" alt="checked--v1" />
                    <span class="${classPrefix}-item-content">Mention a point to bring trust</span>
                  </div>
                  <div class="${classPrefix}-list-item">
                    <img class="${classPrefix}-item-image" src="https://img.icons8.com/ios/50/000000/checked--v1.png" alt="checked--v1" />
                    <span class="${classPrefix}-item-content">Mention a point to bring trust</span>
                  </div>
                </div>
                <button class="${classPrefix}-offer-cta">Offer based CTA ></button>
              </div>
              <div class="${classPrefix}-right-column">
                <img class="${classPrefix}-right-image" />
              </div>
            </div>
            <div class="${classPrefix}-three-column-wrapper">
              <div class="${classPrefix}-benefits-wrapper">
                <img class="${classPrefix}-benefit-img" src="https://img.icons8.com/ios-glyphs/50/000000/star--v1.png" />
                <span class="${classPrefix}-benefits-text">Brand Benefit 1</span>
              </div>
              <div class="${classPrefix}-benefits-wrapper">
                <img class="${classPrefix}-benefit-img" src="https://img.icons8.com/ios-glyphs/50/000000/star--v1.png" />
                <span class="${classPrefix}-benefits-text">Brand Benefit 2</span>
              </div>
              <div class="${classPrefix}-benefits-wrapper">
                <img class="${classPrefix}-benefit-img" src="https://img.icons8.com/ios-glyphs/50/000000/star--v1.png" />
                <span class="${classPrefix}-benefits-text">Brand Benefit 3</span>
              </div>
            </div>
          </section>
          `,
        styles: `
          .${classPrefix}-section {
              font-family: Inter;
              margin-left: auto;
              margin-right: auto;
              background: #E9E9E9;
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
              align-items: center;
              gap: 20px;
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
              color: #fff;
              text-align: center;
              font-size: 25px;
              font-style: normal;
              font-weight: 500;
              line-height: normal;
              padding: 10px 20px;
              background: #676767;
              border-radius: 8px;
              margin-top: 40px;
            }

            .${classPrefix}-right-column {
              width: 50vw;
            }

            .${classPrefix}-right-image {
              width: 100%;
              height: 100%;
            }

            .${classPrefix}-list-item {
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 10px;
              margin-bottom: 10px;
            }

            .${classPrefix}-item-image {
              width: 33px;
              height: 33px;
            }

            /* THREE COLUMN */
            .${classPrefix}-three-column-wrapper {
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              gap: 200px;
              margin: 5rem auto;
              padding: 2rem;
              border-radius: 10px;
              background: #fff;
              box-shadow: 0px 6px 24px 0px rgba(0, 0, 0, 0.18);
              width: 80vw;
            }

            .${classPrefix}-benefit-img {
              margin-bottom: 20px;
            }

            .${classPrefix}-benefits-wrapper {
              display: flex;
              flex-direction: column;
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

            /* Benefits */
            .${classPrefix}-three-column-wrapper {
              margin: 4rem auto;
              padding: 2rem;
              width: 80vw;
              justify-content: center;
              gap: 100px;
            }
            }

          @media only screen and (max-width: 600px) {
            .${classPrefix}-section {
              padding: 1rem;
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

            .${classPrefix}-right-image {
              width: 100%;
              height: 100%;
            }

            /* Benefits */
            .${classPrefix}-three-column-wrapper {
              gap: 10px;
              padding: 10px;
              margin: 2rem auto;
              width: 90vw;
              box-shadow: none;
              justify-content: space-between;
            }

            .${classPrefix}-benefits-wrapper {
              gap: 5px;
              flex-direction: row;
            }

            .${classPrefix}-benefit-text {
              color: #000;
              font-family: Inter;
              font-size: 12px;
              font-style: normal;
              font-weight: 500;
              line-height: 140%;
            }

            .${classPrefix}-benefit-img {
              width: 18px;
              height: 18px;
            }
          }
          `,
      },
    },
  });
};

export { atf2Conversion3block, atf2Conversion3Component };
