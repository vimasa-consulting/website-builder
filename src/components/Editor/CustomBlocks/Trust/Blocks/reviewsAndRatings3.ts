import { Editor } from "grapesjs";
import image from "../../../../../public/verifiedCheckMark.png"

const reviewsAndRatings3Block = (editor: Editor) => {
    const options = {
        id: "Ud3",
        label: "Review & Rating 3",
        block: {},
        props: {},
        style: "",
        category: "Trust",
        classPrefix: "trust-reviewsAndRatings3",
        styleAdditional: "",
        media: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sign-intersection-fill" viewBox="0 0 16 16">
      <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435ZM7.25 4h1.5v3.25H12v1.5H8.75V12h-1.5V8.75H4v-1.5h3.25V4Z"/>
    </svg>`,
    };

    editor.Blocks.add(options.id, {
        media: options.media,
        label: options.label,
        category: options.category,
        content: { type: options.id },
        ...options.block,
    });
};

const reviewsAndRatings3Component = (editor: Editor) => {
    const options = {
        id: "trust-reviewsAndRatings3",
        label: "Review & Rating 3",
        block: {},
        props: {},
        style: "",
        category: "Trust",
        classPrefix: "trust-reviewsAndRatings3",
        styleAdditional: "",
        media: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-sign-intersection-fill" viewBox="0 0 16 16">
    <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435ZM7.25 4h1.5v3.25H12v1.5H8.75V12h-1.5V8.75H4v-1.5h3.25V4Z"/>
    </svg>`,
    };
    const { classPrefix } = options;

    editor.Components.addType(options.id, {
        model: {
            defaults: {
                classes: [classPrefix],
                traits: [],
                components: `
             <section class="${classPrefix}-section">
             <div class="${classPrefix}-rating-wrapper">
               <div class="${classPrefix}-image-wrapper">
                 <img class="${classPrefix}-rating-img" src="https://img.icons8.com/ios-glyphs/30/808080/star--v1.png" alt="star--v1" />
                 <img class="${classPrefix}-rating-img" src="https://img.icons8.com/ios-glyphs/30/808080/star--v1.png" alt="star--v1" />
                 <img class="${classPrefix}-rating-img" src="https://img.icons8.com/ios-glyphs/30/808080/star--v1.png" alt="star--v1" />
                 <img class="${classPrefix}-rating-img" src="https://img.icons8.com/ios-glyphs/30/808080/star--v1.png" alt="star--v1" />
                 <img class="${classPrefix}-rating-img" src="https://img.icons8.com/ios-glyphs/30/808080/star--v1.png" alt="star--v1" />
               </div>
               <span class="${classPrefix}-rating">2,500+ 5-Star Reviews</span>
             </div>
             <h1 class="${classPrefix}-title">“Insert a realistic & relatable customer quote here. The more specific, the better.“</h1>
             <h2 class="${classPrefix}-sourceName">
             Source Name
             </h2>
              </section>
        `,
                styles: `
        .${classPrefix}-section {
            background-color: #fff;
            padding: 20px 80px;
            font-family: Inter, sans-serif;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 95px 215px;
            align-items: center;
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

          .${classPrefix}-title {
            color: #000;
            font-size: 40px;
            font-style: normal;
            font-weight: 600;
            line-height: 64px;
            margin: 0;
            text-align: center;
            margin-bottom: 40px;
          }
          .${classPrefix}-sourceName {
            text-align: center;
            font-size: 13px;
            font-style: normal;
            font-weight: 400;
            line-height: 140%;
            margin-bottom: 0px;
          }
          .${classPrefix}-offer-cta {
            color: #000;
            text-align: center;
            font-size: 25px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            padding: 10px 20px;
            background: #d9d9d9;
            border-radius: 8px;
          }

          .${classPrefix}-right-column {
            width: 50vw;
          }

          .${classPrefix}-right-image {
            width: 100%;
            height: 100%;
          }

          @media (max-width: 770px) {
            .${classPrefix}-section {
                padding: 95px;
            }
          }

          @media (max-width: 425px) {
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
            .${classPrefix}-sourceName {
              text-align: center;
              font-size: 13px;
              font-style: normal;
              font-weight: 400;
              line-height: 140%;
            }
            .${classPrefix}-title {
              font-size: 28px;
              line-height: unset;
            }
            .${classPrefix}-section {
                padding: 95px 20px;
            }
          }
        `,
            },
        },
    });
};

export { reviewsAndRatings3Block, reviewsAndRatings3Component };
