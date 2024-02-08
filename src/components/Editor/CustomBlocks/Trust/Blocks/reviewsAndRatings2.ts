import { Editor } from "grapesjs";
import image from "../../../../../public/verifiedCheckMark.png"

const reviewsAndRatings2Block = (editor: Editor) => {
    const options = {
        id: "Ud2",
        label: "Review & Rating 2",
        block: {},
        props: {},
        style: "",
        category: "Trust",
        classPrefix: "trust-reviewsAndRatings2",
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

const reviewsAndRatings2Component = (editor: Editor) => {
    const options = {
        id: "Ud2",
        label: "Review & Rating 2",
        block: {},
        props: {},
        style: "",
        category: "Trust",
        classPrefix: "trust-reviewsAndRatings2",
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
                <h1 class="${classPrefix}-title">Header for Customer Reviews</h1>
                <div class="${classPrefix}-reviewsContainer">
                <div class="${classPrefix}-panel">
                <img class="${classPrefix}-img" src="/editor/component-icons/image-icon.png" alt="Placeholder"/>
              </div>
                <div class="${classPrefix}-descriptionContainer">
                <div class="${classPrefix}-ratingsContainer">
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
                <p class="${classPrefix}-review">“Insert a realistic & relatable customer quote here. Be specific with the pointers. Make the language resonate with your target audience.”</p>
                <h3 class="${classPrefix}-customerName">Customer Name</h3>
                </div>
                </div>
              </section>
        `,
                styles: `
        .${classPrefix}-section {
            background-color: #fff;
            padding: 91px 0px;
            font-family: Inter, sans-serif;
            max-width: 1440px;
            min-width: 1440px;
            margin: 0 auto;
          }
        .${classPrefix}-title{
            color: #000;
            text-align: center;
            font-size: 40px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            margin-bottom: 83px;
            margin-top: 0px;
        }
        .${classPrefix}-reviewsContainer {
            display: flex;
            justify-content: center;
            align-items: flex-end;
            gap: 105px;
            
        }
                
.${classPrefix}-rating-img {
    width: 25px;
    height: 25px;
    color: #ddd;
  }
        .${classPrefix}-card {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            border-radius: 10px;
            border: 1px solid rgba(171, 171, 171, 0.70);
            padding: 56px 41px 53px;
        }
        .${classPrefix}-descriptionContainer {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-bottom: 69px;
            max-width: 391px;
        }
        .${classPrefix}-ratingImg {
            width: 27.7px;
            height: 27.7px;
          }
        .${classPrefix}-horizontalLine {
            width: 78.5px;
            color: #ABABAB;
            margin-top: 31px;
        }
        .${classPrefix}-productName {
            color: #000;
            text-align: center;
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 140%;
            margin-top: 19px;
            margin-bottom: 16px;
        }
        .${classPrefix}-ratingsContainer {
            margin-right: auto;
            margin-bottom: 16.28px;
        }
        .${classPrefix}-review {
            color: #000;
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: 140%;
            margin: 0;
            line-height: 140%;
            height: 137px;
        }
        .${classPrefix}-customerName {
            color: #000;
            text-align: center;
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 140%;
            margin-right: auto;
            margin-top: 0px;
            margin-bottom: 0px;
        }
        .${classPrefix}-verifiedCheckMark {
            font-size: 22px;
            margin-right: 2px;
            opacity: 0.7;
        }
        .${classPrefix}-panel {
            border-radius: 10px;
            background-color: #d9d9d9;
            display: flex;
            width: 289px;
            flex-direction: column;
            margin: 0;
            height: 339px;
            align-items: center;
            justify-content: center;
        }
          .${classPrefix}-img {
            object-fit: fill;
            width: 100%;
            height: 100%;
            overflow: hidden;
            align-self: center;
            max-width: 100%;
            border-radius: 10px;
          }
        .${classPrefix}-verifiedBuyer {
            color: #5F5F5F;
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            line-height: 140%;
        } 
        @media (max-width: 400px) {
            .${classPrefix}-section {
                min-width: 400px;
                padding: 53px 26px 68px 34px;
            } 
                    
.${classPrefix}-rating-img {
    width: 17px;
    height: 17px;
    color: #ddd;
  }
            .${classPrefix}-reviewsContainer {
                display: flex;
                justify-content: center;
                gap: 37px;
                flex-direction: column;
                align-items: center;
            } 
            .${classPrefix}-ratingsContainer {
                margin-bottom: 11.5px;
            } 
            .${classPrefix}-descriptionContainer {
                align-items: flex-start;
                margin-bottom: 0px;
            } 
            .${classPrefix}-title {
                font-size: 26px;
                margin-bottom: 43px;
                line-height: 35px;
                padding: 0 40px;
              } 
            .${classPrefix}-panel {
                width: 100%;
                height: 294px;
              } 
            .${classPrefix}-img {
                width: 100%;
                height: 100%;
                object-fit: fill;
              } 
            .${classPrefix}-review {
                color: #000;
                font-size: 13px;
                font-style: normal;
                font-weight: 400;
                line-height: 140%; 
                height: unset;
                padding-right: 10px;
              } 
            .${classPrefix}-customerName {
                text-align: unset;
                font-size: 15px;
                margin-top: 8px;
              } 
        }
        `,
            },
        },
    });
};

export { reviewsAndRatings2Block, reviewsAndRatings2Component };
