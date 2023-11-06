import { Editor } from "grapesjs";

const howItWorks2Block = (editor: Editor) => {
  const options = {
    id: "logic-howItWorks2",
    label: "How It Works 2",
    block: {},
    props: {},
    style: "",
    category: "Logic",
    classPrefix: "logic-howItWorks2",
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

const howItWorks2Component = (editor: Editor) => {
  const options = {
    id: "logic-howItWorks2",
    label: "How It Works 2",
    block: {},
    props: {},
    style: "",
    category: "Logic",
    classPrefix: "logic-howItWorks2",
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
  <div class="${classPrefix}-card">
    <div class="${classPrefix}-cardCRHeadingMobile">
      <h1>How it Works</h1>
      <p>Talk about your product&apos;s merits such as convenience, functionality, innovativeness, etc.</p>
    </div>
    <div class="${classPrefix}-cardContentLeft">
      <img loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b7ef5cb8-3bda-4674-9dae-e74022fe2bef?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7ef5cb8-3bda-4674-9dae-e74022fe2bef?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7ef5cb8-3bda-4674-9dae-e74022fe2bef?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7ef5cb8-3bda-4674-9dae-e74022fe2bef?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7ef5cb8-3bda-4674-9dae-e74022fe2bef?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7ef5cb8-3bda-4674-9dae-e74022fe2bef?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7ef5cb8-3bda-4674-9dae-e74022fe2bef?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7ef5cb8-3bda-4674-9dae-e74022fe2bef?apiKey=d9eca8b0cf294176914b16d6a4d96de8&"
        class="${classPrefix}-img" />
    </div>
    <div class="${classPrefix}-cardContentRight">
      <div class="${classPrefix}-cardCRHeading">
        <h1>How it Works</h1>
        <p>Talk about your product&apos;s merits such as convenience, functionality, innovativeness, etc.</p>
      </div>
      <div class="${classPrefix}-stepsWrapper">
        <div class="${classPrefix}-stepItem">
          <div class="${classPrefix}-stepNumber">
            <p>1</p>
          </div>
          <div class="${classPrefix}-stepContent">
            <h3>Step 1</h3>
            <p>Description of the step</p>
          </div>
        </div>
        <div class="${classPrefix}-stepItem">
          <div class="${classPrefix}-stepNumber">
            <p>2</p>
          </div>
          <div class="${classPrefix}-stepContent">
            <h3>Step 2</h3>
            <p>Description of the step</p>
          </div>
        </div>
        <div class="${classPrefix}-stepItem">
          <div class="${classPrefix}-stepNumber">
            <p>3</p>
          </div>
          <div class="${classPrefix}-stepContent">
            <h3>Step 3</h3>
            <p>Description of the step</p>
          </div>
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
  padding: 0 20px;
  max-height: 800px;
}

@media (max-width: 425px) {
  .${classPrefix}-section {
    padding: 0;
  }
}

.${classPrefix}-card {
  display: flex;
  flex-direction: row;
  gap: 15px;
}

@media (max-width: 425px) {
  .${classPrefix}-card {
    flex-direction: column;
    gap: 5px;
  }
}

.${classPrefix}-cardCRHeadingMobile {
  display: none;
  text-align: center;
}

@media (max-width: 425px) {
  .${classPrefix}-cardCRHeadingMobile {
    display: block;
  }
}

.${classPrefix}-cardContentLeft {
  border-radius: 10px;
  background-color: #e9e9e9;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  width: 50%;
}

@media (max-width: 425px) {
  .${classPrefix}-cardContentLeft {
    width: 100%;
    min-height: 250px;
  }
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

.${classPrefix}-cardContentRight {
  display: flex;
  flex-direction: column;
  padding: 10px 0px 0px 25px;
  width: 50%;
}

@media (max-width: 425px) {
  .${classPrefix}-cardContentRight {
    width: auto;
  }
}

.${classPrefix}-cardCRHeading {
  max-width: 350px;
}

@media (max-width: 425px) {
  .${classPrefix}-cardCRHeading {
    display: none;
  }
}

.${classPrefix}-cardCRHeading h1 {
  font-size: 40px;
  font-weight: 600;
}

.${classPrefix}-stepsWrapper {
  display: flex;
  flex-direction: column;
}

.${classPrefix}-stepItem {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.${classPrefix}-stepNumber {
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

@media (max-width: 425px) {
  .${classPrefix}-stepNumber {
    font: 400 22px Inter, sans-serif;
    width: 40px;
    height: 40px;
  }
}

.${classPrefix}-stepContent {
  padding: 5px 20px;
}
      `,
      },
    },
  });
};

export { howItWorks2Block, howItWorks2Component };
