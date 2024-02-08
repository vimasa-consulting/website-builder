import { Editor } from "grapesjs";
import image from "../../../../../public/verifiedCheckMark.png"

const reviewsAndRatings1Block = (editor: Editor) => {
    const options = {
        id: "Ud1",
        label: "Review & Rating 1",
        block: {},
        props: {},
        style: "",
        category: "Trust",
        classPrefix: "trust-reviewsAndRatings1",
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

const reviewsAndRatings1Component = (editor: Editor) => {
    const options = {
        id: "Ud1",
        label: "Review & Rating 1",
        block: {},
        props: {},
        style: "",
        category: "Trust",
        classPrefix: "trust-reviewsAndRatings1",
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
                <div class="${classPrefix}-card">
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
                    <hr class="${classPrefix}-horizontalLine"/>
                    <h2 class="${classPrefix}-productName">Product Name</h2>
                    <p class="${classPrefix}-review">
                    “Insert a realistic & relatable customer quote here. Be specific with the pointers. Make the language resonate with your target audience.”
                    </p>
                    <h3 class="${classPrefix}-customerName">Customer Name</h3>
                    <p class="${classPrefix}-verifiedBuyer"><span class="${classPrefix}-verifiedCheckMark">&#10003;</span>Verified Buyer</p>
                </div>
                <div class="${classPrefix}-card">
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
                    <hr class="${classPrefix}-horizontalLine"/>
                    <h2 class="${classPrefix}-productName">Product Name</h2>
                    <p class="${classPrefix}-review">
                    “Insert a realistic & relatable customer quote here. Be specific with the pointers. Make the language resonate with your target audience.”
                    </p>
                    <h3 class="${classPrefix}-customerName">Customer Name</h3>
                    <p class="${classPrefix}-verifiedBuyer">
                    <span class="${classPrefix}-verifiedCheckMark">&#10003;</span>
                    Verified Buyer</p>
                </div>
                <div class="${classPrefix}-card">
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
                    <hr class="${classPrefix}-horizontalLine"/>
                    <h2 class="${classPrefix}-productName">Product Name</h2>
                    <p class="${classPrefix}-review">
                    “Insert a realistic & relatable customer quote here. Be specific with the pointers. Make the language resonate with your target audience.”
                    </p>
                    <h3 class="${classPrefix}-customerName">Customer Name</h3>
                    <p class="${classPrefix}-verifiedBuyer"><span class="${classPrefix}-verifiedCheckMark">&#10003;</span>Verified Buyer</p>
                </div>
                </div>
              </section>
        `,
                styles: `
        .${classPrefix}-section {
            background-color: #fff;
            padding: 76px 0px 91px;
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
            margin-top: 0px;
            margin-bottom: 70px;
        }
        .${classPrefix}-reviewsContainer {
            display: flex;
            justify-content: center;
            gap: 29px;
            margin: 0 auto;
        }
        .${classPrefix}-card {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            border-radius: 10px;
            border: 1px solid rgba(171, 171, 171, 0.70);
            padding: 56px 41px 53px;
            max-width: 397px;
        }
        .${classPrefix}-ratingImg {
            width: 23.5px;
            height: 23.5px;
          }
        .${classPrefix}-ratingsContainer {
            height: 23.5px;
          }
        .${classPrefix}-horizontalLine {
            width: 78.5px;
            color: #ABABAB;
            margin-top: 31px;
            margin-bottom: 0px;
        }
        .${classPrefix}-productName {
            color: #000;
            text-align: center;
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            margin-top: 19px;
            margin-bottom: 16px;
        }
        .${classPrefix}-review {
            color: #000;
            text-align: center;
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            line-height: 140%;
            margin: 0;
        }
        .${classPrefix}-customerName {
            color: #000;
            text-align: center;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            margin-top: 27px;
            margin-bottom: 0px;
        }
        .${classPrefix}-verifiedCheckMark {
            font-size: 19px;
            margin-right: 2px;
            opacity: 0.7;
        }
        .${classPrefix}-verifiedBuyer {
            color: #5F5F5F;
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            margin-top: 7px;
            line-height: 21px;
            margin-bottom: -7px;
        } 
        
.${classPrefix}-rating-img {
    width: 25px;
    height: 25px;
    color: #ddd;
  }
        @media (max-width: 400px) {
            .${classPrefix}-section {
                min-width: 400px;
                padding: 22px 36px 29px 35px;
            } 

.${classPrefix}-rating-img {
    width: 17px;
    height: 17px;
    color: #ddd;
  }
            .${classPrefix}-title {
                color: #000;
                text-align: center;
                font-size: 26px;
                font-style: normal;
                font-weight: 600;
                margin-bottom: 32px;
                padding: 0 40px;
            } 
            .${classPrefix}-reviewsContainer {
                display: flex;
                justify-content: center;
                gap: 29px;
                flex-direction: column;
            } 
            .${classPrefix}-horizontalLine {
                margin-top: 20.5px;
            }
            .${classPrefix}-review {
                color: #000;
                text-align: center;
                font-size: 13px;
                font-style: normal;
                font-weight: 400;
                line-height: 140%;
            }
            .${classPrefix}-customerName {
                margin-top: 13px;
            }
            .${classPrefix}-verifiedBuyer {
                margin-top: 2px;
                font-size: 13px;
            } 
            .${classPrefix}-verifiedCheckMark {
                font-size: 17px;
            } 
            .${classPrefix}-productName {
                font-size: 18px;
            } 
            .${classPrefix}-card {
                padding: 34px 22px 31px;
            } 
        }
        `,
            },
        },
    });
};

export { reviewsAndRatings1Block, reviewsAndRatings1Component };
