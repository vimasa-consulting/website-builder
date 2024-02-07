import { Editor } from "grapesjs";

const comparison2Block = (editor: Editor) => {
    const options = {
        id: "Yd2",
        label: "Comparison 2",
        block: {},
        props: {},
        style: "",
        category: "Logic",
        classPrefix: "Yd2",
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

const comparison2Component = (editor: Editor) => {
    const options = {
        id: "Yd2",
        label: "Comparison 2",
        block: {},
        props: {},
        style: "",
        category: "Logic",
        classPrefix: "Yd2",
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
                <div class="${classPrefix}-vsWrapper">
                  <p class="${classPrefix}-vsText">Vs.</p>
                </div>
                <div class="${classPrefix}-card ${classPrefix}-advantagesCard">
                  <h2 class="${classPrefix}-title">Your Product Name</h2>
                  <div class="${classPrefix}-imageWrapper">
                   <img class="${classPrefix}-image" src="https://placehold.co/45x45" alt="Your Product">
                  </div>
                  <div class="${classPrefix}-iconWrapper">
                  <span data-gjs-type="icon" draggable="true" class="icon-display ${classPrefix}-rating-img-tick">
                    <span data-icon="teenyicons:tick-circle-outline" data-width="33px" class="iconify"></span>
                  </span>
                  </div>
                  <ul class="${classPrefix}-advantageList">
                    <li>Your brand's key advantage 1</li>
                    <hr />
                    <li>Your brand's key advantage 2</li>
                    <hr />
                    <li>Your brand's key advantage 3</li>
                  </ul>
                </div>
                <div class="${classPrefix}-card ${classPrefix}-shortComingsCard">
                  <h2 class="${classPrefix}-title">Others</h2>
                  <div class="${classPrefix}-imageWrapper">
                    <img class="${classPrefix}-image" src="https://placehold.co/45x45" alt="Competitor Product">
                  </div>
                  <div class="${classPrefix}-iconWrapper">
                  <img class="${classPrefix}-icon" src="https://img.icons8.com/fluency-systems-filled/40/FFFFFF/x.png" alt="X Mark" />
                 </div>
                  <ul class="${classPrefix}-shortComingList">
                    <li>Competitor's Shortcoming 1</li>
                    <hr />
                    <li>Competitor's Shortcoming 2</li>
                    <hr />
                    <li>Competitor's Shortcoming 3</li>
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
                  position: relative;
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
                .${classPrefix}-shortComingsCard {
                  background-color: #F6F6F6;
                }
                .${classPrefix}-advantagesCard {
                  background-color: #DFDFDF
                }
                .${classPrefix}-card img {
                  max-width: 100%;
                  background: #4B4B4B;
                }
                .${classPrefix}-rating-img-tick {
                  width: 25px;
                  height: 25px;
                  color: #ccc;
                }
                .${classPrefix}-title {
                  text-align: center;
                  margin-top: 5.25rem;
                  margin-bottom: 134px;
                  font-size: 40px;
                  font-weight: 600;
                }
                .${classPrefix}-imageWrapper {
                  border: 3px dashed #AEAEAE;
                  width: 90px;
                  height: 90px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  border-radius: 50%;
                }
                .${classPrefix}-image {
                  width: 100%;
                  height: 100%;
                  object-fit: fill;
                  aspect-ratio: 1;
                  display: flex;
                  border-radius: 50%;
                }
                .${classPrefix}-iconWrapper {
                  width: 50px;
                  height: 50px;
                  margin-top: 135px;
                }
                .${classPrefix}-icon {
                  border-radius: 50%;
                  padding: 8px;
                }
                .${classPrefix}-advantageList, .${classPrefix}-shortComingList {
                  list-style: none;
                  padding: 0;
                  margin-top: 62px;
                  height: 160px;
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                  align-items: center;
                  margin-bottom: 148px;
                }
                .${classPrefix}-advantageList li::before, .${classPrefix}-shortComingList li::before {
                  padding-right: 10px;
                  font-weight: bold;
                }
                .${classPrefix}-advantageList li:nth-child(1),  .${classPrefix}-shortComingList li:nth-child(1) {
                 border: none !important;
                }
                li {
                  font-size: 20px;
                  margin: 0 15px;
                }
                hr {
                  height: 1px;
                  width: 100%;
                }
                .${classPrefix}-vsWrapper {
                  position: absolute;
                  border-radius: 50%;
                  width: 90px;
                  height: 90px;
                  background-color: #FFFFFF;
                  bottom: 438px;
                }
                .${classPrefix}-vsText {
                  font-size: 32px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: normal;
                  text-align: center;
                  
                }
                @media (max-width: 400px) {
                  .${classPrefix}-container {
                    align-items: center;
                  }
                  .${classPrefix}-card {
                    width: 100%;
                    border: none !important;
                    padding: 0px;
                  }
                  .${classPrefix}-vsWrapper {
                    display: none;
                  }
                  .${classPrefix}-iconWrapper {
                    width: 25px;
                    height: 25px;
                    margin-top: 65px;                
                  }
                  .${classPrefix}-icon {
                    padding: 4px;               
                  }
                  .${classPrefix}-imageWrapper {
                    width: 47px;
                    height: 47px;
                  }
                  .${classPrefix}-title {
                    font-size: 18px;
                    margin-top: 44px;
                    margin-bottom: 58px;
                  }
                  li {
                    font-size: 13px;
                    font-style: normal;
                    font-weight: 400;
                    margin: 0px;
                  }
                  .${classPrefix}-advantageList, .${classPrefix}-shortComingList {
                    margin-top: 25px;
                    margin-bottom: 54px;
                    height: 89px;
                  }
                  hr {
                    width: 75%;
                  }
                  .${classPrefix}-card:nth-child(2) {
                    padding-left: unset;
                }
                }
                `,
            },
        },
    });
};

export { comparison2Block, comparison2Component };
