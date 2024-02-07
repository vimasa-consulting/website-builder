import { Editor } from "grapesjs";

const howItWorks1Block = (editor: Editor) => {
    const options = {
        id: "Ya1",
        label: "How It Works 1",
        block: {},
        props: {},
        style: "",
        category: "Logic",
        classPrefix: "Ya1",
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
        id: "Ya1",
        label: "How It Works 1",
        block: {},
        props: {},
        style: "",
        category: "Logic",
        classPrefix: "Ya1",
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
  <h1 class="${classPrefix}-title">How it works</h1>
  <div class="${classPrefix}-cardsWrapper">
    <div class="${classPrefix}-cards">
      <div class="${classPrefix}-card">
        <div class="${classPrefix}-cardTitle">
          <div class="${classPrefix}-cardNumber"><p>1</p></div>
          <div class="${classPrefix}-stepTitle">Step 1</div>
          <div class="${classPrefix}-stepDescription">Description of the step</div>
        </div>
        <div class="${classPrefix}-imageWrapper">
        <img class="${classPrefix}-image" src="https://placehold.co/381x381" alt="placeholder-image">
        </div>
      </div>
      <div class="${classPrefix}-card">
        <div class="${classPrefix}-cardTitle">
          <div class="${classPrefix}-cardNumber"><p>2</p></div>
          <div class="${classPrefix}-stepTitle">Step 2</div>
          <div class="${classPrefix}-stepDescription">Description of the step 2</div>
        </div>
        <div class="${classPrefix}-imageWrapper">
        <img class="${classPrefix}-image" src="https://placehold.co/381x381" alt="placeholder-image">
        </div>
      </div>
      <div class="${classPrefix}-card">
        <div class="${classPrefix}-cardTitle">
          <div class="${classPrefix}-cardNumber"><p class="${classPrefix}-tag">3</p></div>
          <div class="${classPrefix}-stepTitle">Step 3</div>
          <div class="${classPrefix}-stepDescription">Description of the step 3</div>
        </div>
        <div class="${classPrefix}-imageWrapper">
        <img class="${classPrefix}-image" src="https://placehold.co/381x381" alt="placeholder-image">
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
                    padding: 65px 0px 86px;
                    max-width: 1440px;
min-width: 1440px;
                    margin: 0 auto;
                    font-family: Inter, sans-serif;
                  }
                  
                  .${classPrefix}-title {
                    font-size: 40px;
                    text-align: center;
                    margin-top: 0px;
                    margin-bottom: 75px;
                    font-weight: 600;
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
                    margin-top: 18px;
                    font: 500 20px Inter, sans-serif;
                  }
                  
                  .${classPrefix}-stepDescription {
                    color: #000;
                    margin-top: 19px;
                    font: 400 15px;
                  }
                  
                  .${classPrefix}-column {
                    display: flex;
                    flex-direction: column;
                    line-height: normal;
                    width: 67%;
                    margin-left: 0px;
                  }
                  
                  .${classPrefix}-cardsWrapper {
                    width: 1239px;
                    margin: 0 auto;
                  }
                  
                  .${classPrefix}-cards {
                    gap: 48px;
                    display: flex;
                  }
                  
                  .${classPrefix}-card {
                    line-height: normal;
                    margin-left: 0px;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: flex-start;
                    gap: 47px;
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
                  
                  .${classPrefix}-image {
                    aspect-ratio: 1;
                    object-fit: fill;
                    width: 100%;
                    height: 100%;
                    max-width: 100%;
                    border-radius: 10px;
                  }
                  @media (max-width: 400px) {
                    .${classPrefix}-section {
                      padding: 43px 12px  54px;
                    }
                    .${classPrefix}-title {
                      font-size: 26px;
                      font-style: normal;
                      font-weight: 600;
                      line-height: 35px;
                      margin-bottom: 48px;
                    }
                  
                    .${classPrefix}-cardNumber {
                      padding: unset;
                      width: 28px;
                      height: 28px;
                      font-size: 16px;
                    }
                  
                    .${classPrefix}-column {
                      width: 100%;
                    }
                  
                    .${classPrefix}-cardsWrapper {
                      max-width: 100%;
                      margin: 0;
                    }
                  
                    .${classPrefix}-cards {
                      flex-direction: row;
                      align-items: stretch;
                      gap: 15px;
                    }
                  
                    .${classPrefix}-card {
                      width: 100%;
                      gap: 25px;
                    }
                  
                    .${classPrefix}-imageWrapper {
                      padding: unset;
                      width: 114px;
                      height: 132px;
                    }
                  
                    .${classPrefix}-img {
                      margin-bottom: 10px;
                    }
                    .${classPrefix}-image {
                      width: 114px;
                      height: 132px;
                      object-fit: cover;
                    }
                    .${classPrefix}-stepTitle {
                      font-size: 15px;
                      font-style: normal;
                      font-weight: 500;
                      line-height: normal;
                      margin-top: 13px;
                    }
                    .${classPrefix}-stepDescription {
                      font-size: 13px;
                      font-style: normal;
                      font-weight: 400;
                      line-height: 140%;
                      margin-top: 6px;
                      max-width: 100px;
                    }
                  }
                  
                `,
            },
        },
    });
};

export { howItWorks1Block, howItWorks1Component };
