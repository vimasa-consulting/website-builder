import { Editor } from "grapesjs";

const solutionToUserPain2Block = (editor: Editor) => {
    const options = {
        id: "Xa2",
        label: "Solution To User Pain 2",
        block: {},
        props: {},
        style: "",
        category: "Emotion",
        classPrefix: "emotion-solutionToUserPain2",
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

const solutionToUserPain2Component = (editor: Editor) => {
    const options = {
        id: "Xa2",
        label: "Solution To User Pain 2",
        block: {},
        props: {},
        style: "",
        category: "Emotion",
        classPrefix: "emotion-solutionToUserPain2",
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
            <h1 class="${classPrefix}-title" >Highlight User’s Emotional Struggles</h1>
            <p class="${classPrefix}-subTitle">In empathetic words, give hope that your product can solve their emotional pain & challenges</p>
              <div class="${classPrefix}-cardColumn">
                <div class="${classPrefix}-descriptionContainer">
                  <div class="${classPrefix}-customerProfile">
                    <div class="${classPrefix}-imageContainer">
                    <img 
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=800 800w, httpscdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&"
                      class="${classPrefix}-image"      
                    />
                    </div>
                  </div>
                  <div>
                    <h3 class="${classPrefix}-userPainPoint">User Pain Point 1</h3>
                    <p class="${classPrefix}-description">Description of how your product will solve this issue</p>
                </div>
                </div>
                <div class="${classPrefix}-descriptionContainer">
                  <div class="${classPrefix}-customerProfile">
                    <div class="${classPrefix}-imageContainer">
                    <img 
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=800 800w, httpscdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&"
                      class="${classPrefix}-image"      
                    />
                    </div>
                  </div>
                  <div>
                  <h3 class="${classPrefix}-userPainPoint">User Pain Point 2</h3>
                  <p class="${classPrefix}-description">Description of how your product will solve this issue</p>
                  </div>
                </div>
                <div class="${classPrefix}-descriptionContainer">
                  <div class="${classPrefix}-customerProfile">
                    <div class="${classPrefix}-imageContainer">
                    <img 
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=800 800w, httpscdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&"
                      class="${classPrefix}-image"      
                    />
                    </div>
                  </div>
                  <div>
                  <h3 class="${classPrefix}-userPainPoint">User Pain Point 3</h3>
                  <p class="${classPrefix}-description">Description of how your product will solve this issue</p>
              </div>
                </div>
              </div>
              </section>
        `,
                styles: `
                .${classPrefix}-section {
                  background-color: #fff;
                  font-family: Inter, sans-serif;
                  padding: 62px 0px 117px;
                  margin: 0 auto;
                  max-width: 1440px;
                }
                .${classPrefix}-title {
                  text-align: center;
                  font-size: 40px;
                  font-style: normal;
                  font-weight: 600;
                  line-height: normal;
                  margin-bottom: 18px;
                  margin-top: 0px;
                }
                .${classPrefix}-subTitle {
                  text-align: center;
                  font-size: 20px;
                  margin: 0px auto 90px;
                  max-width: 606px;
                }
              .${classPrefix}-descriptionContainer {
                  display: flex;
                  gap: 22px;
                  justify-content: flex-start;
                  align-items: center;
                  border-radius: 10px;
                  background: #FFF;
                  border-radius: 10px;
                  border: 1px solid rgba(171, 171, 171, 0.70);
                  padding: 15px;
                  width: 100%;
              }
              .${classPrefix}-cardColumn {
                gap: 21px;
                display: flex;
                justify-content: center;
                width: 1341px;
                height: 204px;
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
              }
              .${classPrefix}-imageContainer {
                height: 177px;
                width: 177px;
                display: flex;
                justify-content: center;
                align-items: center;
                background: #E9E9E9;
                border-radius: 10px;
              }
              .${classPrefix}-image {
                object-fit: fill;
                width: 20px;
                height: 20px;
                outline: none;
              }
              .${classPrefix}-description {
                margin: 0;
                font-size: 15px;
                padding-right: 35px;
              }
      
              @media (max-width: 400px) {
                .${classPrefix}-section {
                  padding: 44px 0 64px;
                }
                .${classPrefix}-cardWrapper {
                  flex-direction: column;
                }
                .${classPrefix}-cardColumn {
                  flex-direction:  column;
                  align-items: center;
                  width: 100%;
                  height: 100%;
                }
                .${classPrefix}-descriptionContainer {
                  justify-content: center;
                  align-items: center;
                  padding: 11px;
                  max-width: 320px;
                  gap: 13px;
                } 
                .${classPrefix}-title {
                  font-size: 26px;
                  margin-bottom: 50px;
                }
                .${classPrefix}-subTitle {
                  display: none;
                }
                .${classPrefix}-imageContainer {
                  height: 131px;
                  width: 131px;
                }
                .${classPrefix}-userPainPoint {
                  font-size: 16px;
                  margin-bottom: 10px;
                }
                .${classPrefix}-description {
                  font-size: 13px;
                  padding: 0px;
                }
              }
        `,
            },
        },
    });
};

export { solutionToUserPain2Block, solutionToUserPain2Component };
