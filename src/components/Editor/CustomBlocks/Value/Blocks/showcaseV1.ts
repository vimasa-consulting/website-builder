import { Editor } from "grapesjs";

const showcaseV1Block = (editor: Editor) => {
  const options = {
    id: "Ve1",
    label: "Showcase V1",
    block: {},
    props: {},
    style: "",
    category: "Value",
    classPrefix: "value-showcaseV1",
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

const showcaseV1Component = (editor: Editor) => {
  const options = {
    id: "Ve1",
    label: "Showcase V 1",
    block: {},
    props: {},
    style: "",
    category: "Value",
    classPrefix: "value-showcaseV1",
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
  <div class="${classPrefix}-cardsWrapper">
    <div class="${classPrefix}-cards">
      <div class="${classPrefix}-card">     
        <div class="${classPrefix}-imageWrapper">
        <img loading="lazy" src="https://placehold.co/280x280" class="${classPrefix}-image" />
        </div>
        <div class="${classPrefix}-descWrapper">
              <p>Product 1</p>
              <p>Short description</p>
        </div>
      </div>
      <div class="${classPrefix}-cardUnique">
        <div class="${classPrefix}-imageWrapper">
        <img loading="lazy" src="https://placehold.co/280x280" class="${classPrefix}-image" />
        </div>
        <div class="${classPrefix}-descWrapper">
              <p>Product 2</p>
              <p>Short description</p>
        </div>
      </div>
      <div class="${classPrefix}-card">
        <div class="${classPrefix}-imageWrapper">
        <img loading="lazy" src="https://placehold.co/280x280" class="${classPrefix}-image" />
        </div>
        <div class="${classPrefix}-descWrapper">
              <p>Product 3</p>
              <p>Short description</p>
        </div>
      </div>
    </div>
  </div>




  <div class="${classPrefix}-cardsWrapper">
    <div class="${classPrefix}-cards ${classPrefix}-midCards">
      <div class="${classPrefix}-card">     
        <div class="${classPrefix}-imageWrapper">
        <img loading="lazy" src="https://placehold.co/280x280" class="${classPrefix}-image" />
        </div>
        <div class="${classPrefix}-descWrapper">
              <p>Product 4</p>
              <p>Short description</p>
        </div>
      </div>
      <div class="${classPrefix}-cardRounded">
        <div class="${classPrefix}-imageWrapperRounded">
          <p class="${classPrefix}-uniqueProduct">Header for your
          unique product selection </p>
        </div>
      </div>
      <div class="${classPrefix}-card ${classPrefix}-rightCard">
        <div class="${classPrefix}-imageWrapper">
        <img loading="lazy" src="https://placehold.co/280x280" class="${classPrefix}-image" />
        </div>
        <div class="${classPrefix}-descWrapper">
              <p>Product 5</p>
              <p>Short description</p>
        </div>
      </div>
    </div>
  </div>




  <div class="${classPrefix}-cardsWrapper">
    <div class="${classPrefix}-cards ${classPrefix}-lowestCards">
      <div class="${classPrefix}-card">     
        <div class="${classPrefix}-imageWrapper">
        <img loading="lazy" src="https://placehold.co/280x280" class="${classPrefix}-image" />
        </div>
        <div class="${classPrefix}-descWrapper">
              <p>Product 6</p>
              <p>Short description</p>
        </div>
      </div>
      <div class="${classPrefix}-card">
        <div class="${classPrefix}-imageWrapper">
        <img loading="lazy" src="https://placehold.co/280x280" class="${classPrefix}-image" />
        </div>
        <div class="${classPrefix}-descWrapper">
              <p>Product 7</p>
              <p>Short description</p>
        </div>
      </div>
    </div>
  </div>


</section>
                `,
        styles: `
                .${classPrefix}-section {
                    min-width: 1440px;
                    background-color: #fff;
                    display: flex;
                    flex-direction: column;
                    padding-top: 95px;
                    padding: 95px 114px;
                    font-family: Inter, sans-serif;
                  }

                  .${classPrefix}-uniqueProduct {
                    color: #000;
                    width: 305px;
                    text-align: center;
                    font-family: Inter, sans-serif;
                    font-size: 40px;
                    font-style: normal;
                    font-weight: 600;
                    line-height: normal;
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
                    margin-top: -20px;
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

                  .${classPrefix}-descWrapper > p:first-child {
                    font-weight: 500;
                  }

                  .${classPrefix}-image {
                    width: 262px;
                    height: 262px;
                    object-fit: cover;
                    border-radius: 50%;
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

                  .${classPrefix}-cardsWrapper:first-child {
                    margin-bottom: 107px;
                  }

                  .${classPrefix}-cardsWrapper:last-child {
                    margin-top: -50px;
                    margin-left: 211px;
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
                    max-width: 262px;
                    max-height: 262px;
                    border-radius: 10px;
                  }

                  .${classPrefix}-cardLast {
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
                    max-width: 262px;
                    max-height: 262px;
                    border-radius: 10px;
                    margin-right: 100px;
                  }

                  .${classPrefix}-cardUnique {
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
                    max-width: 262px;
                    max-height: 262px;
                    border-radius: 10px;
                    position: relative;
                    top: 104px;
                    z-index: 1;
                  }

                  .${classPrefix}-cardRounded {
                    position: relative;
                    line-height: normal;
                    width: 380px;
                    margin-left: 0px;
                    margin-right: 34px;
                    display: flex;
                    flex-direction: column;
                    margin-left: -45px;
                    align-items: flex-start;
                    justify-content: flex-start;
                    gap: 50px;
                    height: 380px;
                    border-radius: 50%;
                  }

                  .${classPrefix}-imageWrapper {
                    background-color: #e9e9e9;
                    display: flex;
                    width: 262px;
                    height: 262px;
                    border-radius: 50%;
                    flex-grow: 1;
                    flex-direction: column;
                    margin: 0 auto;
                  }


                  .${classPrefix}-imageWrapperRounded {
                    background-color: #ffffff;
                    display: flex;
                    height: 380px;
                    width: 380px;
                    border-radius: 50%;
                    flex-grow: 1;
                    flex-direction: column;
                    margin: 0 auto;
                    justify-content: center;
                    align-items: center;
                    margin-top: -16px;
                  }

                  .${classPrefix}-imageRounded {
                    width: 100%;
                    height: 380px;
                    object-fit: cover;
                    border-radius: 50%;
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
                    .${classPrefix}-cards {
                      width: 100%;
                      display: flex;
                      gap: 0px;
                      margin-right: 0px;
                    }
                    .${classPrefix}-midCards {
                      margin-top: -135px;
                    }
                    .${classPrefix}-lowestCards {
                      justify-content: space-around;
                      margin-top: 20px;
                    }

                    .${classPrefix}-cardUnique {
                      position: relative;
                      line-height: normal;
                      width: 82%;
                      margin-left: 0px;
                      display: flex;
                      flex-direction: column;
                      align-items: flex-start;
                      justify-content: flex-start;
                      gap: 50px;
                      max-height: 262px;
                      border-radius: 10px;
                      margin-bottom: 204px;
                      margin-top: -77px;
                      margin-right: 0;
                      max-width: 128px;
                    }

                    .${classPrefix}-section {
                      min-width: 400px;
                      background-color: #fff;
                      display: flex;
                      flex-direction: column;
                      padding: 40px 0;
                      font-family: Inter, sans-serif;
                      overflow-x: hidden;
                    }

                    .${classPrefix}-cardsWrapper:last-child {
                      margin-top: 10  px;
                      margin-left: 17px;
                    }

                    .${classPrefix}-cardsWrapper:first-child {
                      margin-bottom: 0px;
                    }
                    .${classPrefix}-cardsWrapper {
                      margin: 0;
                    }
                    .${classPrefix}-uniqueProduct {
                      font-size: 18px;
                      height: 100%;
                      width: unset;
                    }
                    .${classPrefix}-cardUnique {
                      width: 126px;
                    }
                    .${classPrefix}-descWrapper > p {
                      font-size: 10px;
                    }

                    .${classPrefix}-imageWrapperRounded {
                      margin-top: 0px;
                      width: 156px;
                      max-height: 100px;
                      margin-top: -16px;
                    }
                    .${classPrefix}-imageWrapper {
                      border-radius: 50%;
                      flex-grow: 1;
                      flex-direction: column;
                      margin: 0 auto;
                      width: 100px;
                      height: 100px;
                      background-color: #e9e9e9;
                      display: flex;
                      max-height: 100px;
                    }
                    .${classPrefix}-image {
                      width: 100px;
                      height: 100px;
                    }
                    .${classPrefix}-cardRounded {
                      margin-right: 0;
                      display: flex;
                      flex-direction: column;
                      align-items: flex-start;
                      justify-content: flex-start;
                      gap: 50px;
                      height: 380px;
                      border-radius: 50%;
                      position: relative;
                      line-height: normal;
                      width: 380px;
                      max-height: 100px;
                      margin-top: 40px;
                      margin-left: -7px;
                    }

                    .${classPrefix}-card {
                      width: 82%;
                      max-height: 344px;
                      position: relative;
                      line-height: normal;
                      width: 33%;
                      margin-left: 0px;
                      display: flex;
                      flex-direction: column;
                      align-items: flex-start;
                      justify-content: flex-start;
                      gap: 50px;
                      max-width: 262px;
                      max-height: 262px;
                      border-radius: 10px;
                      margin-right: 0px;
                    }
                    .${classPrefix}-rightCard {
                      margin-left: -12px;
                    }
                  }
                  
                `,
      },
    },
  });
};

export { showcaseV1Block, showcaseV1Component };