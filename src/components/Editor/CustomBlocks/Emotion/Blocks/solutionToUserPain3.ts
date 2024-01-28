import { Editor } from "grapesjs";

const solutionToUserPain3Block = (editor: Editor) => {
    const options = {
        id: "Xa3",
        label: "Solution To User Pain 3",
        block: {},
        props: {},
        style: "",
        category: "Emotion",
        classPrefix: "emotion-solutionToUserPain3",
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

const solutionToUserPain3Component = (editor: Editor) => {
    const options = {
        id: "Xa3",
        label: "Solution To User Pain 3",
        block: {},
        props: {},
        style: "",
        category: "Emotion",
        classPrefix: "emotion-solutionToUserPain3",
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
                  <div class="${classPrefix}-contentContainer">
                    <h1 class="${classPrefix}-title">Highlight User’s Emotional Struggles</h1>
                    <hr class="${classPrefix}-hr" />
                    <p class="${classPrefix}-subTitle">
                      In empathetic words, give hope that your product can solve their
                      emotional pain & challenges
                    </p>          
                    <div class="${classPrefix}-painPointsContainer">
                      <div class="${classPrefix}-painPointsWrapper">
                        <div class="${classPrefix}-painPoint">
                        <p class="${classPrefix}-painPointText">Pain Point 1</p>
                        </div>
                        <div class="${classPrefix}-painPoint">
                        <p class="${classPrefix}-painPointText">Pain Point 2</p>
                        </div>
                      </div>
                      <div class="${classPrefix}-painPointsWrapper">
                        <div class="${classPrefix}-painPoint">
                        <p class="${classPrefix}-painPointText">Pain Point 3</p>
                        </div>
                        <div class="${classPrefix}-painPoint">
                        <p class="${classPrefix}-painPointText">Pain Point 4</p>
                        </div>
                      </div>
                      <div class="${classPrefix}-painPointsWrapper">
                        <div class="${classPrefix}-painPoint">
                        <p class="${classPrefix}-painPointText">Pain Point 5</p>
                        </div>
                        <div class="${classPrefix}-painPoint">
                        <p class="${classPrefix}-painPointText">Pain Point 6</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="${classPrefix}-imageWrapper">
                    <img class="${classPrefix}-image" src="/editor/component-icons/image-icon.png" alt="Image" />
                  </div>
                </section>
                                `,
                styles: `
                .${classPrefix}-section {
                    background-color: #fff;
                    display: flex;
                    justify-content: flex-end;
                    gap: 190px;
                    max-width: 1440px;
                    margin: 0 auto;
                  }
                 .${classPrefix}-contentContainer {
                  margin-top: 145px;
                  margin-bottom: 195px;
                  max-width: 552px;
                 } 
                  .${classPrefix}-title {
                    font-family: Inter, sans-serif;
                    margin: 0px;
                    margin-bottom: 27px;
                    max-width: 450px;
                    font-size: 40px;
                    font-style: normal;
                    font-weight: 600;
                    line-height: normal;
                  }
                  .${classPrefix}-subTitle {
                    font-family: Inter, sans-serif;
                    font-size: 15px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 140%;
                    margin-top: 27px;
                    margin-bottom: 50px;
                    padding-right: 100px;
                  }
                  .${classPrefix}-imageWrapper {
                    width: 403px;
                    height: 793px;
                    border-top-left-radius: 30px;
                    border-bottom-left-radius: 30px;
                  }
                  .${classPrefix}-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-top-left-radius: 30px;
                    border-bottom-left-radius: 30px;
                  }
                  .${classPrefix}-painPointsContainer {
                    display: flex;
                    flex-direction: column;
                    gap: 34px;
                  }
                  .${classPrefix}-painPointsWrapper {
                    display: flex;
                    gap: 65px;
                  }
                  .${classPrefix}-painPoint {
                    border-radius: 20px;
                    background: #E9E9E9;
                    width: 244px;
                    height: 48px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  }
                  .${classPrefix}-painPointText {
                    color: #000;
                    text-align: center;
                    font-family: Inter, sans-serif;
                    font-size: 20px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: normal;
                    margin: 0px;
                  }
                  @media (max-width: 400px) {
                    .${classPrefix}-section {
                      flex-direction: column;
                    }
                    .${classPrefix}-title {
                      margin-bottom: 13px;
                      max-width: 310px;
                      font-size: 26px;
                      line-height: 35px;
                    }
                    .${classPrefix}-subTitle {
                      font-size: 13px;
                      font-style: normal;
                      font-weight: 400;
                      line-height: 140%;
                      margin-top: 19px;
                      margin-bottom: 35px;
                      padding-right: 50px;
                    }
                    .${classPrefix}-hr {
                      max-width: 320px;
                      margin-left: 0;
                    } 
                    .${classPrefix}-contentContainer {
                      margin-top: 41px;
                      margin-left: 30px;
                      margin-bottom: 37px;
                     }
                     .${classPrefix}-painPointsContainer {
                      gap: 20px;
                      margin-top: 20px;
                      padding-top: 20px;
                    }
                     .${classPrefix}-painPointsWrapper {
                      flex-direction: column;
                      gap: 20px;
                    }
                    .${classPrefix}-painPoint {
                      width: 148px;
                      height: 30px;
                      border-radius: 20px;
                    }
                    .${classPrefix}-painPointText {
                      font-size: 13px;
                      font-style: normal;
                      font-weight: 500;
                      line-height: normal;
                    }
                     .${classPrefix}-imageWrapper {
                      position: absolute;
                      width: 167px;
                      height: 267px;
                      right: 0;
                      top: 215px;
                      border-top-left-radius: 10px;
                      border-bottom-left-radius: 10px;
                    } 
                     .${classPrefix}-image {
                      border-top-left-radius: 10px;
                      border-bottom-left-radius: 10px;
                    } 
                  }
                  
                `,
            },
        },
    });
};

export { solutionToUserPain3Block, solutionToUserPain3Component };
