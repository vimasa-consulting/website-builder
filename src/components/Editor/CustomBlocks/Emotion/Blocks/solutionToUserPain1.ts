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
                          <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b7ef5cb8-3bda-4674-9dae-e74022fe2bef?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7ef5cb8-3bda-4674-9dae-e74022fe2bef?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7ef5cb8-3bda-4674-9dae-e74022fe2bef?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7ef5cb8-3bda-4674-9dae-e74022fe2bef?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7ef5cb8-3bda-4674-9dae-e74022fe2bef?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7ef5cb8-3bda-4674-9dae-e74022fe2bef?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7ef5cb8-3bda-4674-9dae-e74022fe2bef?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7ef5cb8-3bda-4674-9dae-e74022fe2bef?apiKey=d9eca8b0cf294176914b16d6a4d96de8&"
                            class="${classPrefix}-img"
                          />
                        </div>
                        <div class="${classPrefix}-cardTitle">
                          <div class="${classPrefix}-stepTitle">User Pain Point 1</div>
                          <div class="${classPrefix}-stepDescription">Description of how your product will solve this issue</div>
                        </div>
                      </div>
                      <div class="${classPrefix}-card">
                        <div class="${classPrefix}-imageWrapper">
                          <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b7ef5cb8-3bda-4674-9dae-e74022fe2bef?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7ef5cb8-3bda-4674-9dae-e74022fe2bef?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7ef5cb8-3bda-4674-9dae-e74022fe2bef?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7ef5cb8-3bda-4674-9dae-e74022fe2bef?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7ef5cb8-3bda-4674-9dae-e74022fe2bef?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7ef5cb8-3bda-4674-9dae-e74022fe2bef?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7ef5cb8-3bda-4674-9dae-e74022fe2bef?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7ef5cb8-3bda-4674-9dae-e74022fe2bef?apiKey=d9eca8b0cf294176914b16d6a4d96de8&"
                            class="${classPrefix}-img"
                          />
                        </div>
                        <div class="${classPrefix}-cardTitle">
                        <div class="${classPrefix}-stepTitle">User Pain Point 2</div>
                        <div class="${classPrefix}-stepDescription">Description of how your product will solve this issue </div>
                      </div>
                      </div>
                      <div class="${classPrefix}-card">
                        <div class="${classPrefix}-imageWrapper">
                          <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6b20b8d1-1325-4de9-8e36-fa3aa996d650?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b20b8d1-1325-4de9-8e36-fa3aa996d650?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b20b8d1-1325-4de9-8e36-fa3aa996d650?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b20b8d1-1325-4de9-8e36-fa3aa996d650?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=800 800w, https/\/cdn.builder.io/api/v1/image/assets/TEMP/6b20b8d1-1325-4de9-8e36-fa3aa996d650?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b20b8d1-1325-4de9-8e36-fa3aa996d650?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b20b8d1-1325-4de9-8e36-fa3aa996d650?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b20b8d1-1325-4de9-8e36-fa3aa996d650?apiKey=d9eca8b0cf294176914b16d6a4d96de8&"
                            class="${classPrefix}-img"
                          />
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
                    padding: 0 80px;
                    max-height: 800px;
                    height: 70vh;
                  }
                  
                  .${classPrefix}-title {
                    color: #000;
                    text-align: center;
                    font-family: Inter;
                    font-size: 40px;
                    font-style: normal;
                    font-weight: 600;
                    line-height: normal;
                    margin-top: 86px;
                    margin-bottom: 18px;
                  }

                  .${classPrefix}-subTitle {
                    text-align: center;
                    padding: 0px 21%;
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
                  }
                  
                  .${classPrefix}-column {
                    display: flex;
                    flex-direction: column;
                    line-height: normal;
                    width: 67%;
                    margin-left: 0px;
                  }
                  
                  .${classPrefix}-cardsWrapper {
                    margin: 49px 20px 86px;
                  }
                  
                  .${classPrefix}-cards {
                    gap: 20px;
                    display: flex;
                  }
                  
                  .${classPrefix}-card {
                    line-height: normal;
                    width: 33%;
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
                    width: 100%;
                    flex-direction: column;
                    height: 210px;
                    max-width: 210px;
                    border-radius: 50%;
                    align-items: center;
                    justify-content: center;
                  }
                  
                  .${classPrefix}-img {
                    object-fit: contain;
                    object-position: center;
                    width: 45px;
                    height: 45px;
                    mix-blend-mode: multiply;
                    overflow: hidden;
                    align-self: center;
                    max-width: 100%;
                    outline: none; 
                  }
                  @media (max-width: 425px) {
                    .${classPrefix}-section {
                      padding: 0 20px;
                    }
                  
                    .${classPrefix}-cardNumber {
                      white-space: initial;
                      padding: 0 20px;
                    }
                  
                    .${classPrefix}-column {
                      width: 100%;
                    }
                  
                    .${classPrefix}-cardsWrapper {
                      max-width: 100%;
                      margin: 40px 0;
                    }
                  
                    .${classPrefix}-cards {
                      flex-direction: column;
                      align-items: stretch;
                      gap: 40px;
                    }
                  
                    .${classPrefix}-card {
                      width: 100%;
                    }
                  
                    .${classPrefix}-img {
                      margin-bottom: 10px;
                    }

                    .${classPrefix}-subTitle, .${classPrefix}-stepDescription {
                        padding: 0px;
                    }
                  }
                  
                `,
            },
        },
    });
};

export { solutionToUserPain1Block, solutionToUserPain1Component };
