import { Editor } from "grapesjs";

const personaUseCase1Block = (editor: Editor) => {
    const options = {
        id: "Xc1",
        label: "Persona/Use Case 1",
        block: {},
        props: {},
        style: "",
        category: "Emotion",
        classPrefix: "emotion-personaUseCase1",
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

const personaUseCase1Component = (editor: Editor) => {
    const options = {
        id: "Xc1",
        label: "Persona/Use Case 1",
        block: {},
        props: {},
        style: "",
        category: "Emotion",
        classPrefix: "emotion-personaUseCase1",
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
            <h1 class="${classPrefix}-title" >Catchy Header about your Users’ Unique Identity</h1>
            <hr class="${classPrefix}-hr"/>
            <p class="${classPrefix}-subTitle">Curiosity-inducing description about how your product is perfect for the below mentioned personas/use case</p>
              <div class="${classPrefix}-cardColumn">
                <div class="${classPrefix}-descriptionContainer">
                  <div class="${classPrefix}-customerProfile">
                    <div class="${classPrefix}-imageContainer">
                    <img loading="lazy" src="/editor/component-icons/image-icon.png" class="${classPrefix}-image-icon" />
                    </div>
                  </div>
                  <div>
                    <h3 class="${classPrefix}-userPainPoint">Persona/Use Case 1</h3>
                    <p class="${classPrefix}-description">Describe how your product is a perfect fit for this persona’s habits & needs</p>
                </div>
                </div>
                <div class="${classPrefix}-descriptionContainer">
                  <div class="${classPrefix}-customerProfile">
                    <div class="${classPrefix}-imageContainer">
                    <img loading="lazy" src="/editor/component-icons/image-icon.png" class="${classPrefix}-image-icon" />
                    </div>
                  </div>
                  <div>
                  <h3 class="${classPrefix}-userPainPoint">Persona/Use Case 2</h3>
                  <p class="${classPrefix}-description">Describe how your product is a perfect fit for this persona’s habits & needs</p>
                  </div>
                </div>
                <div class="${classPrefix}-descriptionContainer">
                  <div class="${classPrefix}-customerProfile">
                    <div class="${classPrefix}-imageContainer">
                    <img loading="lazy" src="/editor/component-icons/image-icon.png" class="${classPrefix}-image-icon" />
                    </div>
                  </div>
                  <div>
                  <h3 class="${classPrefix}-userPainPoint">Persona/Use Case 3</h3>
                  <p class="${classPrefix}-description">Describe how your product is a perfect fit for this persona’s habits & needs</p>
              </div>
                </div>
              </div>
              </section>
        `,
                styles: `
                .${classPrefix}-section {
                  background-color: #fff;
                  font-family: Inter, sans-serif;
                  padding: 88px 20px 122px;
                  margin: 0 auto;
                  max-width: 1440px;
                }
                .${classPrefix}-title {
                  text-align: center;
                  font-size: 40px;
                  font-style: normal;
                  font-weight: 600;
                  line-height: normal;
                  margin-bottom: 23px;
                  margin-top: 0px;
                  line-height: 35px;
                }
                .${classPrefix}-hr {
                  width: 73px;
                  height: 4px;
                  border-radius: 5px;
                  background: #D9D9D9;
                  border: none;
                  margin: 0px auto;
                  margin-bottom: 21px;
                }
                .${classPrefix}-subTitle {
                  text-align: center;
                  font-size: 15px;
                  margin: 0px auto 126px;
                  max-width: 687px;
                  line-height: 140%;
                }
              .${classPrefix}-descriptionContainer {
                  display: flex;
                  gap: 22px;
                  justify-content: flex-start;
                  align-items: center;
                  border-radius: 10px;
                  background: #FFF;
                  padding: 30px;
                  width: 100%;
                  gap: 22px;
                  position: relative;
                  border: 1px solid rgba(171, 171, 171, 0.70);
              }
              .${classPrefix}-cardColumn {
                gap: 33px;
                display: flex;
                justify-content: center;
                width: 1233px;
                height: 201px;
                margin: 0 auto;
                max-width: 100%;
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
                  margin-bottom: 16px;
                  margin-top: 0px;
                }
              .${classPrefix}-customerProfile {
                display: flex;
                align-items: center;
                gap: 24px;
                position: absolute;
                top: -52px;
                left: 20px;
              }
              .${classPrefix}-imageContainer {
                height: 82px;
                width: 82px;
                display: flex;
                justify-content: center;
                align-items: center;
                background: #E9E9E9;
                border-radius: 50%;
              }
              .${classPrefix}-image-icon {
                object-fit: fill;
                width: 50px;
                height: 50px;
                outline: none;
              }
              .${classPrefix}-description {
                margin: 0;
                font-size: 15px;
                padding-right: 40px;
                line-height: 140%;
              }
      
              @media (max-width: 400px) {
                .${classPrefix}-section {
                  padding: 22px 20px 117px;
                }
                .${classPrefix}-cardWrapper {
                  flex-direction: column;
                }
                .${classPrefix}-imageContainer {
                  height: 55px;
                  width: 55px;
                }
                .${classPrefix}-image {
                  width: 33.5px;
                  height: 33.5px;
                }
                .${classPrefix}-customerProfile {
                  top: -30px;
                  left: 30px;
                }
                .${classPrefix}-hr {
                  margin-bottom: 15px;
                }
                .${classPrefix}-cardColumn {
                  flex-direction:  column;
                  align-items: center;
                  width: 100%;
                  height: 100%;
                  gap: 49px;
                }
                .${classPrefix}-descriptionContainer {
                  min-width: unset;
                  width: 100%;
                  padding: 30px;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                }
                .${classPrefix}-title {
                  font-size: 26px;
                  margin-bottom: 14px;
                }
                .${classPrefix}-userPainPoint {
                  font-size: 18px;
                  margin-bottom: 8px;
                }
                .${classPrefix}-description {
                  font-size: 13px;
                  padding-right: 16px;
                }
                .${classPrefix}-subTitle {
                  font-size: 13px;
                  margin-bottom: 73px;
                }
              }
        `,
            },
        },
    });
};

export { personaUseCase1Block, personaUseCase1Component };
