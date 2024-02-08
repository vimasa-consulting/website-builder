import { Editor } from "grapesjs";

const personaUseCase3Block = (editor: Editor) => {
    const options = {
        id: "Xc3",
        label: "Persona/Use Case 3",
        block: {},
        props: {},
        style: "",
        category: "Emotion",
        classPrefix: "emotion-personaUseCase3",
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

const personaUseCase3Component = (editor: Editor) => {
    const options = {
        id: "Xc3",
        label: "Persona/Use Case 3",
        block: {},
        props: {},
        style: "",
        category: "Emotion",
        classPrefix: "emotion-personaUseCase3",
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
            <h1 class="${classPrefix}-title" >Catchy Header about Users’ Unique Identity</h1>
              <div class="${classPrefix}-cardColumn">
                <div class="${classPrefix}-descriptionContainer">
                  <div class="${classPrefix}-customerProfile">
                    <div class="${classPrefix}-imageContainer">
                    <img loading="lazy" src="/editor/component-icons/image-icon.png" class="${classPrefix}-image" />
                    </div>
                    <p class="${classPrefix}-name">Name</p>
                  </div>
                  <div>
                    <h3 class="${classPrefix}-userPainPoint">Persona</h3>
                    <p class="${classPrefix}-descriptionOne">Use emotionally bonding words to describe how the user’s persona and your product is made for each other, by highlighting different lifestyle scenarios in which the product plays a crucial role in favour of the user.</p>
                    <p class="${classPrefix}-descriptionTwo">Make sure to include words and sentences that your persona will use on a daily basis.</p>
                    <div class="${classPrefix}-quoteWrapper">
                    <img src="https://img.icons8.com/ios-filled/50/999999/quote-left.png" alt="quotes" class="${classPrefix}-quotes" />
                    <p class="${classPrefix}-quote"> 
                    “Write appreciative words about your product from the User’s point of view”
                    </p>
                    </div>
                </div>
                </div>
                </div>
              </div>
              </section>
        `,
                styles: `
                .${classPrefix}-section {
                  background-color: #fff;
                  font-family: Inter, sans-serif;
                  padding: 62px 0px 67px;
                  margin: 0 auto;
                  max-width: 1440px;
                  min-width: 1440px;
                }
                .${classPrefix}-title {
                  text-align: center;
                  font-size: 40px;
                  font-style: normal;
                  font-weight: 600;
                  line-height: normal;
                  margin: 0 auto;
                  margin-bottom: 48px;
                  margin-top: 0px;
                  width: 459px;
                  max-width: 100%;
                }
                .${classPrefix}-subTitle {
                  text-align: center;
                  font-size: 15px;
                  margin: 0px auto 90px;
                  max-width: 606px;
                }
              .${classPrefix}-descriptionContainer {
                  display: flex;
                  border-radius: 20px;;
                  background: #FFF;
                  padding: 65px 92px 105px;
                  width: 100%;
                  gap: 22px;
                  position: relative;
                  border: 1px solid rgba(171, 171, 171, 0.70);
              }
              .${classPrefix}-cardColumn {
                gap: 33px;
                display: flex;
                justify-content: center;
                width: 602px;
                margin: 0 auto;
                max-width: 100%;
              }
              .${classPrefix}-quoteWrapper {
                display: flex;
              }
              .${classPrefix}-quotes {
                width: 40px;
                height: 40px;
                margin-right: 19px;
              }
              .${classPrefix}-ratingImg {
                  width: 25px;
                  height: 25px;
              }
              .${classPrefix}-largerSection {
                min-height: 131px;
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
                  margin-bottom: 16px;
              }
              .${classPrefix}-review {
                  color: #000;
                  font-size: 15px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 140%;
                  margin: 0;
                  margin-bottom: 31px;
              }
              .${classPrefix}-userPainPoint {
                  color: #000;
                  font-size: 20px;
                  font-style: normal;
                  font-weight: 500;
                  margin-right: auto;
                  margin-bottom: 32px;
                  margin-top: 0px;
                }
              .${classPrefix}-customerProfile {
                display: flex;
                align-items: center;
                gap: 12px;
                position: absolute;
                top: -79px;
                left: -180px;
                flex-direction: column;
              }
              .${classPrefix}-name {
                margin: 0;
              }
              .${classPrefix}-imageContainer {
                height: 233px;
                width: 233px;
                display: flex;
                justify-content: center;
                align-items: center;
                background: #E9E9E9;
                border-radius: 50%;
                max-width: 100%;
                max-height: 100%;
              }
              .${classPrefix}-image {
                object-fit: fill;
                width: 100%;
                height: 100%;
                border-radius: 50%;
                outline: none;
              }
              .${classPrefix}-descriptionOne {
                margin: 0;
                font-size: 15px;
                padding-right: 60px;
                margin-bottom: 32px;
                line-height: 21px;
              }
              .${classPrefix}-descriptionTwo {
                margin: 0;
                font-size: 15px;
                margin-bottom: 79px;
                line-height: 21px;
                padding-right: 75px;
              }
              .${classPrefix}-quote {
                margin: 0;
                color: #595959;
                font-size: 15px;
                padding-right: 20px;
                line-height: 140%;
              }
      
              @media (max-width: 400px) {
                .${classPrefix}-section {
                  min-width: 400px;
                  padding: 32px 20px 82px;
                }
                .${classPrefix}-imageContainer {
                  height: 121px;
                  width: 121px;
                }
                .${classPrefix}-image {
                  width: 25px;
                  height: 25px;
                }
                .${classPrefix}-userPainPoint {
                  margin-bottom: 13px;
                }
                .${classPrefix}-title {
                  font-size: 26px;
                  margin-bottom: 102px;
                }
                .${classPrefix}-customerProfile {
                  top: -62px;
                  left: -56px;
                  flex-direction: row;
                }
                .${classPrefix}-cardColumn {
                  width: 295px;
                  margin-right: 0;
                }
                .${classPrefix}-descriptionOne {
                  font-size: 13px;
                  padding: 0px;
                }
                .${classPrefix}-descriptionTwo {
                  font-size: 13px;
                  padding: 0px;
                  margin-bottom: 44px;
                }
                .${classPrefix}-descriptionContainer {
                  padding: 65px 21px 41px 33px;
                }
                .${classPrefix}-quote {
                  padding: 0;
                  font-size: 13px;
              }
                .${classPrefix}-quotes {
                  margin-right: 9px;
                  width: 35px;
                  height: 35px;
              }
                .${classPrefix}-name {
                  margin-top: -43px;
                  font-size: 13px;
              }
              }`,
            },
        },
    });
};

export { personaUseCase3Block, personaUseCase3Component };
