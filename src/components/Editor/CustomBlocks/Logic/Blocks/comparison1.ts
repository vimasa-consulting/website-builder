import { Editor } from "grapesjs";

const comparison1Block = (editor: Editor) => {
    const options = {
        id: "Yd1",
        label: "Comparison 1",
        block: {},
        props: {},
        style: "",
        category: "Logic",
        classPrefix: "Yd1",
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

const comparison1Component = (editor: Editor) => {
    const options = {
        id: "Yd1",
        label: "Comparison 1",
        block: {},
        props: {},
        style: "",
        category: "Logic",
        classPrefix: "Yd1",
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
                <div class="${classPrefix}-container">
                <div class="${classPrefix}-card">
                  <h2 class="${classPrefix}-title">Your Product Name</h2>
                  <img class="${classPrefix}-mainImage" src="/editor/component-icons/image-icon.png" alt="Your Product">
                  <ul class="${classPrefix}-advantageList">
                    <li>
                      <span data-gjs-type="icon" draggable="true" class="icon-display ${classPrefix}-rating-img-tick">
                    <span data-icon="teenyicons:tick-circle-outline" data-width="33px" class="iconify"></span>
                  </span>
                      <p class="${classPrefix}-listText">Your brand's key advantage 1</p>
                    </li>
                    <li>
                      <span data-gjs-type="icon" draggable="true" class="icon-display ${classPrefix}-rating-img-tick">
                    <span data-icon="teenyicons:tick-circle-outline" data-width="33px" class="iconify"></span>
                  </span>
                      <p class="${classPrefix}-listText">Your brand's key advantage 2</p>
                    </li>
                    <li>
                      <span data-gjs-type="icon" draggable="true" class="icon-display ${classPrefix}-rating-img-tick">
                    <span data-icon="teenyicons:tick-circle-outline" data-width="33px" class="iconify"></span>
                  </span>
                      <p class="${classPrefix}-listText">Your brand's key advantage 3</p>
                    </li>
                    <li>
                      <span data-gjs-type="icon" draggable="true" class="icon-display ${classPrefix}-rating-img-tick">
                    <span data-icon="teenyicons:tick-circle-outline" data-width="33px" class="iconify"></span>
                  </span>
                      <p class="${classPrefix}-listText">Your brand's key advantage 4</p>
                    </li>
                  </ul>
                </div>
                <div class="${classPrefix}-card">
                  <h2 class="${classPrefix}-title">Others</h2>
                  <img class="${classPrefix}-mainImage" src="/editor/component-icons/image-icon.png" alt="Competitor Product">
                  <ul class="${classPrefix}-shortComingList">
                    <li>
                    <span data-gjs-type="icon" draggable="true" class="icon-display ${classPrefix}-rating-img-tick">
                      <span data-icon="ph:placeholder-light" data-width="33px" class="iconify"></span>
                    </span>
                    <p class="${classPrefix}-listText">Competitor's Shortcoming 1</p>
                    </li>
                    <li>
                    <span data-gjs-type="icon" draggable="true" class="icon-display ${classPrefix}-rating-img-tick">
                    <span data-icon="ph:placeholder-light" data-width="33px" class="iconify"></span>
                  </span>
                    <p class="${classPrefix}-listText">Competitor's Shortcoming 2</p>
                    </li>
                    <li>
                    <span data-gjs-type="icon" draggable="true" class="icon-display ${classPrefix}-rating-img-tick">
                    <span data-icon="ph:placeholder-light" data-width="33px" class="iconify"></span>
                  </span>
                    <p class="${classPrefix}-listText">Competitor's Shortcoming 3</p>
                    </li>
                    <li>
                    <span data-gjs-type="icon" draggable="true" class="icon-display ${classPrefix}-rating-img-tick">
                    <span data-icon="ph:placeholder-light" data-width="33px" class="iconify"></span>
                  </span>
                    <p class="${classPrefix}-listText">Competitor's Shortcoming 4</p>
                    </li>
                  </ul>
                </div>
              </div>
                `,
                styles: `
                .${classPrefix}-container {
                  display: flex;
                  justify-content: space-around;
                  font-family: Inter, sans-serif;
                  max-width: 1440px;
                  min-width: 1440px;
                  margin: 0 auto;
                }
                .${classPrefix}-card {
                  width: 50%;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                }
                .${classPrefix}-card:nth-child(1) {
                  border-right: 1px solid #ccc;
                  padding-right: 10px;
                }
                .${classPrefix}-card:nth-child(2) {
                  border-left: 1px solid #ccc;
                  padding-left: 10px;
                }
                .${classPrefix}-checkMark {
                  display: inline-block;
                  margin-bottom: -6px;
                  margin-right: 6px;
                }
                .${classPrefix}-title {
                  text-align: center;
                  margin-top: 109px;
                  margin-bottom: 75px;
                  font-size: 40px;
                  font-weight: 600;
                }
                .${classPrefix}-advantageList, .${classPrefix}-shortComingList {
                  list-style: none;
                  padding: 0;
                  margin-top: 70px;
                  margin-bottom: 37px;
                }
                .${classPrefix}-advantageList li::before, .${classPrefix}-shortComingList li::before {
                  padding-right: 10px;
                  font-weight: bold;
                }
                .${classPrefix}-shortComingList li {
                  margin-bottom: 47px;
                  font-size: 15px;
                }
                .${classPrefix}-advantageList li {
                  margin-bottom: 47px;
                  font-size: 15px;
                }
                .${classPrefix}-mainImage {
                  width: 446px;
                  height: 303px;
                  object-fit: fill;
                  aspect-ratio: 1;                  
                  border-radius: 10px;
                }
                .${classPrefix}-listText {
                  margin: 0px;
                  display: inline-block;
                }
                .${classPrefix}-rating-img-tick {
                  width: 44px;
                  height: 45px;
                  color: #ccc;
                }
                @media (max-width: 400px) {
                  .${classPrefix}-container {
                    align-items: center;
                    min-width: 400px;
                  }
                  .${classPrefix}-card {
                    width: 100%;
                    border: none !important;
                  }
                  .${classPrefix}-mainImage {
                    width: 172px;
                    height: 117px;
                  }
                  .${classPrefix}-rating-img-tick {
                    width: 33px;
                    height: 33px;
                    color: #ccc;
                  }
                  .${classPrefix}-shortComingList li {
                    margin-bottom: 16px;
                    font-size: 13px;
                    display: flex;
                    align-items: center;
                    gap: 2px;
                    line-height: normal;
                  }
                  .${classPrefix}-advantageList {
                    padding-left: 14px;
                    margin-top: 37px;
                    margin-bottom: 41px;
                  }
                  .${classPrefix}-shortComingList {
                    padding-left: 14px;
                    padding-right: 14px;
                    margin-top: 37px;
                    margin-bottom: 41px;
                  }

                  .${classPrefix}-advantageList li {
                    margin-bottom: 16px;
                    font-size: 13px;
                    display: flex;
                    align-items: center;
                    gap: 2px;
                    line-height: normal;
                  }
                  .${classPrefix}-checkMark {
                    height: 20px;
                    margin-bottom: unset;
                  }
                  .${classPrefix}-title {
                    margin-bottom: 28px;
                    font-size: 18px;
                    margin-top: 45px;
                  }
                }
                `,
            },
        },
    });
};

export { comparison1Block, comparison1Component };
