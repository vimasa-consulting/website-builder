import { Editor } from "grapesjs";

const solutionToUserPain1Block = (editor: Editor) => {
    const options = {
        id: "Xa1",
        label: "Solution To User Pain 1",
        block: {},
        props: {},
        style: "",
        category: "Emotion",
        classPrefix: "emotion-solutionToUserPain1",
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

const solutionToUserPain1Component = (editor: Editor) => {
    const options = {
        id: "Xa1",
        label: "Solution To User Pain 1",
        block: {},
        props: {},
        style: "",
        category: "Emotion",
        classPrefix: "emotion-solutionToUserPain1",
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
                  <h1 class="${classPrefix}-title">Highlight User’s Emotional Struggles</h1>
                  <h3 class="${classPrefix}-subTitle">
                     In empathetic words, give hope that your product can solve their
                     emotional pain & challenges
                  </h3>
                  <div class="${classPrefix}-cardsWrapper">
                    <div class="${classPrefix}-cards">
                      <div class="${classPrefix}-card">
                        <div class="${classPrefix}-imageWrapper">
                        <img loading="lazy" src="/editor/component-icons/image-icon.png" class="${classPrefix}-image-icon" />
                        </div>
                        <div class="${classPrefix}-cardTitle">
                          <div class="${classPrefix}-stepTitle">User Pain Point 1</div>
                          <div class="${classPrefix}-stepDescription">Description of how your product will solve this issue</div>
                        </div>
                      </div>
                      <div class="${classPrefix}-card">
                        <div class="${classPrefix}-imageWrapper">
                        <img loading="lazy" src="/editor/component-icons/image-icon.png" class="${classPrefix}-image-icon" />
                        </div>
                        <div class="${classPrefix}-cardTitle">
                        <div class="${classPrefix}-stepTitle">User Pain Point 2</div>
                        <div class="${classPrefix}-stepDescription">Description of how your product will solve this issue </div>
                      </div>
                      </div>
                      <div class="${classPrefix}-card">
                        <div class="${classPrefix}-imageWrapper">
                        <img loading="lazy" src="/editor/component-icons/image-icon.png" class="${classPrefix}-image-icon" />
                        </div>
                        <div class="${classPrefix}-cardTitle">
                          <div class="${classPrefix}-stepTitle">User Pain Point 3</div>
                          <div class="${classPrefix}-stepDescription">Description of how your product will solve this issue</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                                `,
                styles: `
                .${classPrefix}-section {
                    background-color: #fff;
                    display: flex;
                    flex-direction: column;
                    padding: 86px 107px;
                    margin: 0 auto;
                    max-width: 1440px;
                    min-width: 1440px;
                  }
                  
                  .${classPrefix}-title {
                    color: #000;
                    text-align: center;
                    font-family: Inter, sans-serif;
                    font-size: 40px;
                    font-style: normal;
                    font-weight: 600;
                    line-height: normal;
                    margin-top: 0px;
                    margin-bottom: 18px;
                  }

                  .${classPrefix}-subTitle {
                    text-align: center;
                    padding: 0px 27%;
                    font-family: Inter, sans-serif;
                    font-weight: 500;
                    color: #000;
                    margin: 0;
                    font-size: 20px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: normal;
                  }
                  
                  .${classPrefix}-cardTitle {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                  }
                  
                  .${classPrefix}-cardNumber {
                    color: #000;
                    border-radius: 50%;
                    font: 400 32px Inter, sans-serif;
                    background-color: #d9d9d9;
                    width: 63px;
                    height: 63px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  }
                  
                  .${classPrefix}-tag {
                    margin: 0;
                  }
                  
                  .${classPrefix}-stepTitle {
                    color: #000;
                    margin-top: 13px;
                    font: 500 20px Inter, sans-serif;
                    text-align: center;
                  }
                  
                  .${classPrefix}-stepDescription {
                    color: #000;
                    margin-top: 19px;
                    font: 400 15px/140% Inter, -apple-system, Roboto, Helvetica, sans-serif;
                    text-align: center;
                    padding: 0 48px;
                    height: 79px;
                    width: 299px;
                  }
                  
                  .${classPrefix}-column {
                    display: flex;
                    flex-direction: column;
                    line-height: normal;
                    width: 67%;
                    margin-left: 0px;
                  }
                  
                  .${classPrefix}-cardsWrapper {
                    margin: 49px 20px 0px;
                  }
                  
                  .${classPrefix}-cards {
                    gap: 77px;
                    display: flex;
                    justify-content: center;
                  }
                  
                  .${classPrefix}-card {
                    line-height: normal;
                    margin-left: 0px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 30px;
                  }
                  
                  .${classPrefix}-imageWrapper {
                    background-color: #e9e9e9;
                    display: flex;
                    width: 210px;
                    flex-direction: column;
                    height: 210px;
                    max-width: 210px;
                    border-radius: 50%;
                    align-items: center;
                    justify-content: center;
                  }
                  
                  .${classPrefix}-image-icon {
                    object-fit: fill;
                    object-position: center;
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    mix-blend-mode: multiply;
                    overflow: hidden;
                    align-self: center;
                    max-width: 100%;
                    outline: none; 
                  }
                  @media (max-width: 400px) {
                    .${classPrefix}-section {
                      min-width: 400px;
                      padding: 55px 9px 58px;
                    }
                  
                    .${classPrefix}-cardNumber {
                      white-space: initial;
                      padding: 0 20px;
                    }
                    .${classPrefix}-title {
                      font-size: 26px;
                    }
                    .${classPrefix}-subTitle {
                      font-size: 15px;
                      padding: 0 20px;
                    }
                  
                    .${classPrefix}-column {
                      width: 100%;
                    }
                  
                    .${classPrefix}-cardsWrapper {
                      max-width: 100%;
                      margin: 40px 0 0px;
                    }
                  
                    .${classPrefix}-cards {
                      gap: 0px;
                    }
                  
                    .${classPrefix}-card {
                      width: 100%;
                      gap: 18px;
                    }
                    .${classPrefix}-imageWrapper {
                      height: 102px;
                      max-width: 102px;
                    }

                    .${classPrefix}-subTitle {
                        padding: 0px;
                    }
                    .${classPrefix}-stepTitle {
                        font-size: 15px;
                        margin: 0px;
                    }
                    .${classPrefix}-stepDescription {
                      padding: 0px;
                      width: unset;
                      font-size: 13px;
                      margin-top: 7px;
                  }
                  }
                  
                `,
            },
        },
    });
};

export { solutionToUserPain1Block, solutionToUserPain1Component };
