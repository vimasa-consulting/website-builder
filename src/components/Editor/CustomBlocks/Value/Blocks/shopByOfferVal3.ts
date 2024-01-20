import { Editor } from "grapesjs";

const shopByOfferVal3Block = (editor: Editor) => {
  const options = {
    id: "Va3",
    label: "Shop By Offer 3",
    block: {},
    props: {},
    style: "",
    category: "Value",
    classPrefix: "value-shopByOfferVal3",
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

const shopByOfferVal3Component = (editor: Editor) => {
  const options = {
    id: "Va3",
    label: "Shop By Offer 3",
    block: {},
    props: {},
    style: "",
    category: "Value",
    classPrefix: "value-shopByOfferVal3",
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
        <div class="${classPrefix}-offerCircle">
          <p class="${classPrefix}-bigText">40%</p>
          <p>off</p>
        </div>
        <div class="${classPrefix}-imageWrapper">
        <img loading="lazy" src="https://placehold.co/329x287" class="${classPrefix}-image" />
        </div>
        <div class="${classPrefix}-descWrapper">
              <p>Product Range 1</p>
              <p>Added Value/Benefit</p>
        </div>
      </div>
      <div class="${classPrefix}-card">
        <div class="${classPrefix}-offerCircle">
          <p>from</p>
          <p class="${classPrefix}-bigText">&#8377; 99</p>
        </div>
        <div class="${classPrefix}-imageWrapper">
        <img loading="lazy" src="https://placehold.co/329x287" class="${classPrefix}-image" />
        </div>
        <div class="${classPrefix}-descWrapper">
              <p>Product Range 1</p>
              <p>Added Value/Benefit</p>
        </div>
      </div>
      <div class="${classPrefix}-card">
        <div class="${classPrefix}-offerCircle">
          <p class="${classPrefix}-bigText">40%</p>
          <p>off</p>
        </div>
        <div class="${classPrefix}-imageWrapper">
        <img loading="lazy" src="https://placehold.co/329x287" class="${classPrefix}-image" />
        </div>
        <div class="${classPrefix}-descWrapper">
              <p>Product Range 1</p>
              <p>Added Value/Benefit</p>
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
                    margin-top: 89px;
                    margin-bottom: 65px;
                  }
                  
                  .${classPrefix}-offerCircle {
                    position: absolute;
                    top: -53px;
                    left: -54px;
                    width: 120px;
                    height: 120px;
                    border-radius: 50%;
                    background-color: #4B4B4B;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    color: #fff;
                    text-transform: uppercase;
                    font-family: Inter, sans-serif;
                    font-size: 20px;
                  }

                  .${classPrefix}-bigText {
                    color: #FFF;
                    text-align: center;
                    font-family: Inter, sans-serif;
                    font-size: 32px;
                    font-style: normal;
                    font-weight: 500;
                    text-transform: uppercase;
                  }

                  .${classPrefix}-offerCircle > p {
                    margin-top: 0px;
                    margin-bottom: 0px;
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

                  .${classPrefix}-descWrapper {
                    width: 100%;
                    display: flex;
                    jutify-content: center;
                    flex-direction: column;
                    align-items: center;
                    padding-bottom: 40px;
                  }

                  .${classPrefix}-descWrapper > p {
                    color: #2C2C2C;
                    width: 218px;
                    text-align: center;
                    font-family: Inter, sans-serif;
                    font-size: 20px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 140%;
                    margin-bottom: 0px;
                    margin-top: 0px;
                  }

                  .${classPrefix}-image {
                    width: 100%;
                    height: 284px;
                    object-fit: cover;
                    border-radius: 10px;
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
                    position: relative;
                    line-height: normal;
                    width: 33%;
                    margin-left: 0px;
                    margin-right: 84px;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: flex-start;
                    gap: 50px;
                    max-width: 329px;
                    max-height: 432px;
                    border-radius: 10px;
                    border: 1px solid rgba(171, 171, 171, 0.70);
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
                      padding: 49px 12px 54px;
                      padding-left: 25px;
                    }
                  
                    .${classPrefix}-cardNumber {
                      white-space: initial;
                      padding: 0 20px;
                    }
                  
                    .${classPrefix}-column {
                      width: 100%;
                    }
                    .${classPrefix}-title {
                      margin: 0px;
                      font-size: 26px;
                      font-style: normal;
                      font-weight: 600;
                      line-height: 35px;
                      margin-bottom: 51px;
                    }
                  
                    .${classPrefix}-cardsWrapper {
                      max-width: 100%;
                      margin: 0;
                    }
                  
                    .${classPrefix}-cards {
                      gap: 10px;
                      margin-left: 0px;
                      justify-content: space-between;
                    }
                  
                    .${classPrefix}-card {
                      margin-bottom: 0px;
                      margin-right: 0px;
                      max-width: 105px;
                      gap: 10px;
                      border-radius: 4px;
                    }
                  
                    .${classPrefix}-img {
                      margin-bottom: 10px;
                    }
                    .${classPrefix}-image {
                      width: 105px;
                      height: 84px;
                      border-radius: 4px;
                    }
                    .${classPrefix}-offerCircle {
                      width: 40px;
                      height: 40px;
                      top: -17px;
                      left: -16px;
                    }
                    .${classPrefix}-descWrapper > p  {
                      font-size: 8px;
                    }
                    .${classPrefix}-descWrapper {
                      padding-bottom: 13px;
                    }
                    .${classPrefix}-offerCircle > p {
                      font-size: 8px;
                    }
                  }
                `,
      },
    },
  });
};

export { shopByOfferVal3Block, shopByOfferVal3Component };