import { Editor } from "grapesjs";

const howItWorks1Block = (editor: Editor) => {
    const options = {
        id: "value-shopByOffer1",
        label: "Shop By Offer 1",
        block: {},
        props: {},
        style: "",
        category: "Value",
        classPrefix: "value-shopByOffer1",
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

const howItWorks1Component = (editor: Editor) => {
    const options = {
        id: "value-shopByOffer1",
        label: "Shop By Offer 1",
        block: {},
        props: {},
        style: "",
        category: "Value",
        classPrefix: "value-shopByOffer1",
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
  <h1 class="${classPrefix}-title">Catchy Headline about Offers & Budget Price Points</h1>
  <div class="${classPrefix}-cardsWrapper">
    <div class="${classPrefix}-cards">
      <div class="${classPrefix}-card">
        <div class="${classPrefix}-imageWrapper">
         <p class="${classPrefix}-titleText">Save up to</p>
         <p class="${classPrefix}-discount">50%</p>
        </div>
      </div>
      <div class="${classPrefix}-card">
        <div class="${classPrefix}-imageWrapper">
        <p class="${classPrefix}-titleText">Starting from</p>
        <p class="${classPrefix}-discount">&#8377;99</p>
        </div>
      </div>
      <div class="${classPrefix}-card">
        <div class="${classPrefix}-imageWrapper">
        <p class="${classPrefix}-titleText">Save up to</p>
        <p class="${classPrefix}-discount">50%</p>
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
                  }
                  
                  .${classPrefix}-title {
                    font-size: 30px;
                    font-family: Inter, sans-serif;
                    text-align: center;
                    margin-top: 40px;
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
                    align-self: stretch;
                    margin-top: 22px;
                    font: 500 20px Inter, sans-serif;
                  }
                  
                  .${classPrefix}-stepDescription {
                    color: #000;
                    align-self: stretch;
                    margin-top: 12px;
                    font: 400 15px/140% Inter, -apple-system, Roboto, Helvetica, sans-serif;
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
                    align-items: flex-start;
                    justify-content: flex-start;
                    gap: 50px;
                  }
                  
                  .${classPrefix}-imageWrapper {
                    border-radius: 10px;
                    background-color: #e9e9e9;
                    display: flex;
                    width: 100%;
                    max-width: 381px;
                    flex-grow: 1;
                    flex-direction: column;
                    margin: 0 auto;
                    padding: 91px 80px;
                  }

                  .${classPrefix}-titleText {
                    font-family: Inter, sans-serif;
                    font-size: 20px;
                    text-align: center;
                    font-weight: 500;
                  }

                  .${classPrefix}-discount {
                    text-align: center;
                    font-family: Inter, sans-serif;
                    font-size: 96px;
                    font-weight: 600;
                    margin: 0;
                  }
                  
                  .${classPrefix}-img {
                    aspect-ratio: 1;
                    object-fit: contain;
                    object-position: center;
                    width: 45px;
                    mix-blend-mode: multiply;
                    overflow: hidden;
                    align-self: center;
                    margin-bottom: -34px;
                    max-width: 100%;
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
                  
                    .${classPrefix}-imageWrapper {
                      padding: 100px 20px;
                    }
                  
                    .${classPrefix}-img {
                      margin-bottom: 10px;
                    }
                  }
                  
                `,
            },
        },
    });
};

export { howItWorks1Block, howItWorks1Component };
