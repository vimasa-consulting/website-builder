import { Editor } from "grapesjs";

const personaUseCase2Block = (editor: Editor) => {
    const options = {
        id: "Xc2",
        label: "Persona/Use Case 2",
        block: {},
        props: {},
        style: "",
        category: "Emotion",
        classPrefix: "emotion-personaUseCase2",
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

const personaUseCase2Component = (editor: Editor) => {
    const options = {
        id: "Xc2",
        label: "Persona/Use Case 2",
        block: {},
        props: {},
        style: "",
        category: "Emotion",
        classPrefix: "emotion-personaUseCase2",
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
                  <h1 class="${classPrefix}-title">Catchy Header about your Users’ Unique Identity</h1>
                  <p class="${classPrefix}-subTitle">Curiosity-inducing description about how your product is perfect for the below mentioned personas/use case</p>
                    <div class="${classPrefix}-cards">
                      <div class="${classPrefix}-card">
                        <div class="${classPrefix}-imageWrapper">
                          <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b7ef5cb8-3bda-4674-9dae-e74022fe2bef?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7ef5cb8-3bda-4674-9dae-e74022fe2bef?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7ef5cb8-3bda-4674-9dae-e74022fe2bef?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7ef5cb8-3bda-4674-9dae-e74022fe2bef?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7ef5cb8-3bda-4674-9dae-e74022fe2bef?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7ef5cb8-3bda-4674-9dae-e74022fe2bef?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7ef5cb8-3bda-4674-9dae-e74022fe2bef?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7ef5cb8-3bda-4674-9dae-e74022fe2bef?apiKey=d9eca8b0cf294176914b16d6a4d96de8&"
                            class="${classPrefix}-img"
                          />
                        </div>
                          <h3 class="${classPrefix}-stepTitle">Persona/Use Case 1</h3>
                      </div>
                      <div class="${classPrefix}-card">
                        <div class="${classPrefix}-imageWrapper">
                          <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b7ef5cb8-3bda-4674-9dae-e74022fe2bef?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7ef5cb8-3bda-4674-9dae-e74022fe2bef?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7ef5cb8-3bda-4674-9dae-e74022fe2bef?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7ef5cb8-3bda-4674-9dae-e74022fe2bef?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7ef5cb8-3bda-4674-9dae-e74022fe2bef?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7ef5cb8-3bda-4674-9dae-e74022fe2bef?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7ef5cb8-3bda-4674-9dae-e74022fe2bef?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7ef5cb8-3bda-4674-9dae-e74022fe2bef?apiKey=d9eca8b0cf294176914b16d6a4d96de8&"
                            class="${classPrefix}-img"
                          />
                        </div>
                        <h3 class="${classPrefix}-stepTitle">Persona/Use Case 1</h3>
                      </div>
                    </div>
                </section>
                                `,
                styles: `
                .${classPrefix}-section {
                    background-color: #fff;
                    padding: 87px 20px 97px;
                    font-family: Inter, sans-serif;
                  }
                  
                  .${classPrefix}-title {
                    font-size: 40px;
                    text-align: center;
                    margin: 0px auto 23px;
                  }

                  .${classPrefix}-subTitle {
                    text-align: center;
                    margin: 0 auto;
                    margin-bottom: 57px;
                    max-width: 687px;
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
                    margin-top: 18px;
                    margin-bottom: 0px;
                    text-align: center;
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
                    gap: 30px;
                    display: flex;
                    width: 1024px;
                    height: 336px;
                    margin: 0 auto;
                    max-width: 100%
                  }
                  
                  .${classPrefix}-card {
                    line-height: normal;
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    width: 100%;
                  }
                  
                  .${classPrefix}-imageWrapper {
                    background-color: #e9e9e9;
                    display: flex;
                    width: 100%;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 100%;
                    min-height: 297px;
                    border-radius: 10px;
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
                  }
                  @media (max-width: 770px) {
                    .${classPrefix}-cards {
                      flex-direction: column;
                      width: 100%;
                      justify-content: center;
                      align-items: center;
                      height: 100%;
                    }
                    .${classPrefix}-subTitle {
                      margin-bottom: 30px;
                    }
                  }

                  
                  @media (max-width: 425px) {
                    .${classPrefix}-section {
                      padding: 20px;
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
                      gap: 40px;
                    }
                  
                    .${classPrefix}-card {
                      width: 100%;
                    }
                  
                    .${classPrefix}-img {
                      margin-bottom: 10px;
                    }
                    .${classPrefix}-title  {
                      font-size: 28px;
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

export { personaUseCase2Block, personaUseCase2Component };
