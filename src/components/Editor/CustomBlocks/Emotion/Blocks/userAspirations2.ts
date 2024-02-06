import { Editor } from "grapesjs";

const userAspirations2Block = (editor: Editor) => {
    const options = {
        id: "Xb2",
        label: "User Aspirations 2",
        block: {},
        props: {},
        style: "",
        category: "Emotion",
        classPrefix: "emotion-userAspirations2",
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

const userAspirations2Component = (editor: Editor) => {
    const options = {
        id: "Xb2",
        label: "User Aspirations 2",
        block: {},
        props: {},
        style: "",
        category: "Emotion",
        classPrefix: "emotion-userAspirations2",
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
                  <h1 class="${classPrefix}-title">Hopeful & Optimistic header about User’s aspirations</h1>
                    <div class="${classPrefix}-cards">
                      <div class="${classPrefix}-card">
                        <div class="${classPrefix}-imageWrapper">
                          <img
                            loading="lazy"
                            src="/editor/component-icons/image-icon.png"
                            class="${classPrefix}-img"
                          />
                        </div>
                        <div class="${classPrefix}-cardTitle">
                          <h3 class="${classPrefix}-stepTitle">Aspiration 1</h3>
                          <div class="${classPrefix}-stepDescription">Describe how your user’s aspiration will be achieved with the help of your product</div>
                        </div>
                      </div>
                      <div class="${classPrefix}-card">
                        <div class="${classPrefix}-imageWrapper">
                          <img
                            loading="lazy"
                            src="/editor/component-icons/image-icon.png"
                            class="${classPrefix}-img"
                          />
                        </div>
                        <div class="${classPrefix}-cardTitle">
                        <h3 class="${classPrefix}-stepTitle">Aspiration 2</h3>
                        <div class="${classPrefix}-stepDescription">Describe how your user’s aspiration will be achieved with the help of your product</div>
                      </div>
                      </div>
                      <div class="${classPrefix}-card">
                        <div class="${classPrefix}-imageWrapper">
                          <img
                            loading="lazy"
                            src="/editor/component-icons/image-icon.png"
                            class="${classPrefix}-img"
                          />
                        </div>
                        <div class="${classPrefix}-cardTitle">
                          <h3 class="${classPrefix}-stepTitle">Aspiration 3</h3>
                          <div class="${classPrefix}-stepDescription">Describe how your user’s aspiration will be achieved with the help of your product</div>
                        </div>
                      </div>
                    </div>
                </section>
                                `,
                styles: `
                .${classPrefix}-section {
                    background-color: #fff;
                    padding: 89px 0px 71px;
                    font-family: Inter, sans-serif;
                  }
                  
                  .${classPrefix}-title {
                    font-size: 40px;
                    text-align: center;
                    max-width: 689px;
                    margin: 0px auto 79px;
                  }

                  .${classPrefix}-subTitle {
                    text-align: center;
                    padding: 0 31%;
                    font-family: Inter, sans-serif;
                    font-weight: 500;
                  }
                  
                  .${classPrefix}-cardTitle {
                    display: flex;
                    flex-direction: column;
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
                    margin-top: 22px;
                    font: 500 20px Inter, sans-serif;
                    margin-top: 31px;
                    margin-bottom: 16px;
                  }
                  
                  .${classPrefix}-stepDescription {
                    color: #000;
                    margin-top: 12px;
                    font: 400 15px/140% Inter, -apple-system, Roboto, Helvetica, sans-serif;
                    margin: 0px;
                  }
                  
                  .${classPrefix}-column {
                    display: flex;
                    flex-direction: column;
                    line-height: normal;
                    width: 67%;
                    margin-left: 0px;
                  }

                  
                  .${classPrefix}-cards {
                    gap: 50px;
                    display: flex;
                    width: 1120px;
                    height: 565px;
                    margin: 0 auto;
                  }
                  
                  .${classPrefix}-card {
                    line-height: normal;
                    width: 33%;
                    margin-left: 0px;
                    display: flex;
                    flex-direction: column;
                    height: 450px;
                  }
                  
                  .${classPrefix}-imageWrapper {
                    background-color: #e9e9e9;
                    display: flex;
                    width: 100%;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 100%;
                    border-radius: 10px;
                  }
                  
                  .${classPrefix}-img {
                    object-fit: fill;
                    aspect-ratio: 1;
                    width: 100%;
                    height: 100%;
                    border-radius: 10px;
                    mix-blend-mode: multiply;
                    overflow: hidden;
                    align-self: center;
                    max-width: 100%;
                    outline: none;
                  }
                  @media (max-width: 770px) {
                    .${classPrefix}-cards {
                      flex-direction: column;
                      width: 100%;
                      justify-content: center;
                      align-items: center;
                      height: 100%;
                    }
                  }

                  
                  @media (max-width: 400px) {
                    .${classPrefix}-section {
                      padding: 38px 0px 52px;
                    }
                  
                    .${classPrefix}-cardNumber {
                      white-space: initial;
                      padding: 0 20px;
                    }
                  
                    .${classPrefix}-column {
                      width: 100%;
                    }
                  
                    .${classPrefix}-cards {
                      flex-direction: column;
                      gap: 52px;
                    }
                  
                    .${classPrefix}-card {
                      width: 100%;
                      max-width: 320px;
                    }
                  
                    .${classPrefix}-imageWrapper {
                      width: 320px;
                      height: 409px;
                    }
                    .${classPrefix}-title  {
                      font-size: 26px;
                      margin-bottom: 40px;
                  }
                    .${classPrefix}-stepTitle  {
                     margin-top: 26px;
                     margin-bottom: 16px;
                     font-size: 18px;
                  }

                  .${classPrefix}-stepDescription {
                        padding: 0px;
                        font-size: 13px;
                    }
                  }
                  
                `,
            },
        },
    });
};

export { userAspirations2Block, userAspirations2Component };
