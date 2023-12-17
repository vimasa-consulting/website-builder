import { Editor } from "grapesjs";

const userAspirations1Block = (editor: Editor) => {
    const options = {
        id: "Xb1",
        label: "User Aspirations 1",
        block: {},
        props: {},
        style: "",
        category: "Emotion",
        classPrefix: "emotion-userAspirations1",
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

const userAspirations1Component = (editor: Editor) => {
    const options = {
        id: "Xb1",
        label: "User Aspirations 1",
        block: {},
        props: {},
        style: "",
        category: "Emotion",
        classPrefix: "emotion-userAspirations1",
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
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b7ef5cb8-3bda-4674-9dae-e74022fe2bef?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7ef5cb8-3bda-4674-9dae-e74022fe2bef?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7ef5cb8-3bda-4674-9dae-e74022fe2bef?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7ef5cb8-3bda-4674-9dae-e74022fe2bef?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7ef5cb8-3bda-4674-9dae-e74022fe2bef?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7ef5cb8-3bda-4674-9dae-e74022fe2bef?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7ef5cb8-3bda-4674-9dae-e74022fe2bef?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7ef5cb8-3bda-4674-9dae-e74022fe2bef?apiKey=d9eca8b0cf294176914b16d6a4d96de8&"
                            class="${classPrefix}-img"
                          />
                        </div>
                        <div class="${classPrefix}-cardTitle">
                          <h3 class="${classPrefix}-stepTitle">Aspiration 1</h3>
                          <div class="${classPrefix}-stepDescription">Describe how your user’s aspiration will be achieved with the help of your product. Make an emotional connection between your user’s desire and your product</div>
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
                        <h3 class="${classPrefix}-stepTitle">Aspiration 2</h3>
                        <div class="${classPrefix}-stepDescription">Describe how your user’s aspiration will be achieved with the help of your product. Make an emotional connection between your user’s desire and your product</div>
                      </div>
                      </div>
                    </div>
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
                          <h3 class="${classPrefix}-stepTitle">Aspiration 3</h3>
                          <div class="${classPrefix}-stepDescription">Describe how your user’s aspiration will be achieved with the help of your product. Make an emotional connection between your user’s desire and your product</div>
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
                        <h3 class="${classPrefix}-stepTitle">Aspiration 4</h3>
                        <div class="${classPrefix}-stepDescription">Describe how your user’s aspiration will be achieved with the help of your product. Make an emotional connection between your user’s desire and your product</div>
                      </div>
                      </div>
                    </div>
                </section>
                                `,
                styles: `
                .${classPrefix}-section {
                    background-color: #fff;
                    padding: 63px 0px 118px;
                    max-width: 1440px;
                    margin: 0 auto;
                    font-family: Inter, sans-serif;
                  }
                  
                  .${classPrefix}-title {
                    text-align: center;
                    font-family: Inter, sans-serif;
                    font-size: 40px;
                    font-style: normal;
                    font-weight: 600;
                    line-height: normal;
                    max-width: 689px;
                    margin: 0px auto 11px;
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
                    margin-top: 34px;
                    margin-bottom: 19px;
                  }
                  
                  .${classPrefix}-stepDescription {
                    color: #000;
                    margin-top: 12px;
                    font: 400 15px/140% Inter, -apple-system, Roboto, Helvetica, sans-serif;
                    margin: 0px;
                    max-width: 450px;
                  }
                  
                  .${classPrefix}-column {
                    display: flex;
                    flex-direction: column;
                    line-height: normal;
                    width: 67%;
                    margin-left: 0px;
                  }

                  
                  .${classPrefix}-cards {
                    gap: 84px;
                    display: flex;
                    height: 561px;
                    margin: 0 auto;
                    max-width: 100%;
                    margin-top: 86px;
                    justify-content: center;
                  }
                  
                  .${classPrefix}-card {
                    padding: 30px;
                    line-height: normal;
                    margin-left: 0px;
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    border-radius: 20px;
                    background: #FFF;
                    box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.15);
                  }
                  
                  .${classPrefix}-imageWrapper {
                    background-color: #e9e9e9;
                    display: flex;
                    max-width: 100%;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 100%;
                    max-height: 336.7px;
                    border-radius: 10px;
                    width: 485px;
                  }
                  
                  .${classPrefix}-img {
                    object-fit: contain;
                    object-position: center;
                    width: 100%;
                    height: 100%;
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
                      min-height: 400px;
                    }
                  }

                  
                  @media (max-width: 400px) {
                    .${classPrefix}-section {
                      padding: 45px 0px 68px;
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
                      gap: 68px;
                      margin-top: 53px;
                      max-width: 320px;
                    }
                  
                    .${classPrefix}-card {
                      width: 100%;
                      padding: 16.6px 17px 25px 18px;
                      max-width: 320px;
                    }
                  
                    .${classPrefix}-img {

                    }
                    .${classPrefix}-imageWrapper {
                      width: 284px;
                      height: 197px;                  
                    }
                    .${classPrefix}-title  {
                      font-size: 26px;
                      margin-bottom: 0px;
                  }
                    .${classPrefix}-stepTitle  {
                      font-size: 18px;
                      margin-bottom: 16px;
                      margin-top: 17.8px;
                  }
                  .${classPrefix}-stepDescription {
                    font-size: 13px;
                    padding: 0px;
                  }

                    .${classPrefix}-subTitle {
                        padding: 0px;
                    }
                  }
                  
                `,
            },
        },
    });
};

export { userAspirations1Block, userAspirations1Component };
