import { Editor } from "grapesjs";

const options = {
  id: "Za4",
  label: "ATF2 Conversion1",
  block: {},
  props: {},
  style: "",
  category: "First Impression",
  classPrefix: "firstImpression-atf2-conversion1",
  styleAdditional: "",
  media: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-sign-intersection-fill" viewBox="0 0 16 16">
    <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435ZM7.25 4h1.5v3.25H12v1.5H8.75V12h-1.5V8.75H4v-1.5h3.25V4Z"/>
  </svg>`,
  // ...opt,
};
const atf2Conversion1block = (editor: Editor) => {
  // create a block
  editor.Blocks.add(options.id, {
    media: options.media,
    label: options.label,
    category: options.category,
    content: { type: options.id },
    ...options.block,
  });
};

const atf2Conversion1Component = (editor: Editor) => {
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
            <div class="${classPrefix}-left-column">
              <div class="${classPrefix}-rating-wrapper">
                <div class="${classPrefix}-image-wrapper">
                <span data-gjs-type="icon" draggable="true" class="icon-display ${classPrefix}-rating-img">
                <span data-icon="material-symbols:star" data-width="25px" class="iconify"></span>
              </span>
              <span data-gjs-type="icon" draggable="true" class="icon-display ${classPrefix}-rating-img">
              <span data-icon="material-symbols:star" data-width="25px" class="iconify"></span>
            </span>
            <span data-gjs-type="icon" draggable="true" class="icon-display ${classPrefix}-rating-img">
            <span data-icon="material-symbols:star" data-width="25px" class="iconify"></span>
          </span>
          <span data-gjs-type="icon" draggable="true" class="icon-display ${classPrefix}-rating-img">
          <span data-icon="material-symbols:star" data-width="25px" class="iconify"></span>
        </span>
        <span data-gjs-type="icon" draggable="true" class="icon-display ${classPrefix}-rating-img">
        <span data-icon="material-symbols:star" data-width="25px" class="iconify"></span>
      </span>
                </div>
                <span class="${classPrefix}-rating">4.5/5 (2400 reviews)</span>
              </div>
              <h1 class="${classPrefix}-h1">Talk about the dream outcome for your user</h1>
              <h2 class="${classPrefix}-h2">
                Elaborate on the features and benefits of your product that will help your
                users achieve the aformentioned dream outcome
              </h2>
              <a class="${classPrefix}-offer-cta">Offer based CTA ></a>

            </div>
            <div class="${classPrefix}-right-column">
              <div class="${classPrefix}-imageWrapper">
              <img loading="lazy" src="/editor/component-icons/image-icon.png" class="${classPrefix}-image" />
              </div>
            </div>
          </section>
          `,
        styles: `
            .${classPrefix}-section {
            font-family: Inter, sans-serif;
            display: flex;
            flex-direction: row;
            height: auto;
            max-width: 1440px;
            margin: auto;
            background: #E9E9E9;
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
            color: #ddd;
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
          }

          .${classPrefix}-right-column {
            width: 50vw;
            background: #e9e9e9;
          }

          .${classPrefix}-right-image {
            width: 100%;
            height: 100%;
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
            width: 100%;
            height: 100%;
          }
          @media only screen and (min-width: 601px) and (max-width: 768px) {
            .${classPrefix}-section {
              height: auto;
              padding: 2rem 2rem;
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
          }

          @media only screen and (max-width: 600px) {
            .${classPrefix}-section {
              padding: 2rem 2rem;
              height: auto;
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
              color: #ddd;
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
              width: auto;
            }
            .${classPrefix}-right-image {
              border-radius: 8px;
            }
          }
          `,
      },
    },
  });
};

export { atf2Conversion1block, atf2Conversion1Component };
