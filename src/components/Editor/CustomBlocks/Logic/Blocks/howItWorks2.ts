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
      <span class="${classPrefix}-h1">How it Works</span>
      <span class="${classPrefix}-p">Talk about your product&apos;s merits such as convenience, functionality, innovativeness,
        etc.</span>
    </div>
    <div class="${classPrefix}-cardContentLeft">
      <img loading="lazy"
        src="https://placehold.co/500x500"
        class="${classPrefix}-img" />
    </div>
    <div class="${classPrefix}-cardContentRight">
      <div class="${classPrefix}-cardCRHeading">
        <span class="${classPrefix}-h1">How it Works</span>
        <span class="${classPrefix}-p">Talk about your product&apos;s merits such as convenience, functionality, innovativeness,
          etc.</span>
      </div>
      <div class="${classPrefix}-stepsWrapper">
        <div class="${classPrefix}-stepItem">
          <div class="${classPrefix}-stepNumber">
            <p>1</p>
          </div>
          <div class="${classPrefix}-stepContent">
            <span class="${classPrefix}-h3">Step 1</span>
            <span class="${classPrefix}-p">Description of the step</span>
          </div>
        </div>
        <div class="${classPrefix}-stepItem">
          <div class="${classPrefix}-stepNumber">
            <p>2</p>
          </div>
          <div class="${classPrefix}-stepContent">
            <span class="${classPrefix}-h3">Step 2</span>
            <span class="${classPrefix}-p">Description of the step</span>
          </div>
        </div>
        <div class="${classPrefix}-stepItem">
          <div class="${classPrefix}-stepNumber">
            <p>3</p>
          </div>
          <div class="${classPrefix}-stepContent">
            <span class="${classPrefix}-h3">Step 3</span>
            <span class="${classPrefix}-p">Description of the step</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        `,
        styles: `
.${classPrefix}-h1 {
  display: block;
  font-size: 40px;
  font-weight: 600;
}

.${classPrefix}-h3 {
  display: block;
  font-family: Inter;
  font-size: 20px;
  font-weight: 500;
  line-height: normal;
}

.${classPrefix}-p {
  display: block;
  font-family: Inter;
  font-size: 15px;
  font-weight: 400;
}

.${classPrefix}-section {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  max-height: 800px;
}

@media (max-width: 425px) {
  .${classPrefix}-section {
    padding: 0 40px;
  }
}

.${classPrefix}-card {
  display: flex;
  flex-direction: row;
}

@media (max-width: 425px) {
  .${classPrefix}-card {
    flex-direction: column;
  }
}

.${classPrefix}-cardCRHeadingMobile {
  display: none;
  text-align: center;
  padding: 50px 0 30px;
}

@media (max-width: 425px) {
  .${classPrefix}-cardCRHeadingMobile {
    display: block;
  }
}

.${classPrefix}-cardCRHeadingMobile .${classPrefix}-p {
  padding: 10px 0 0 0;
}

.${classPrefix}-cardContentLeft {
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  background-color: gray;
  width: 50%;
}

@media (max-width: 425px) {
  .${classPrefix}-cardContentLeft {
    width: 100%;
  }
}

.${classPrefix}-img {
  object-fit: fill;
  object-position: center;
  overflow: hidden;
  width: 100%;
}

.${classPrefix}-cardContentRight {
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 30px 0px 0px 80px;
}

@media (max-width: 425px) {
  .${classPrefix}-cardContentRight {
    width: auto;
    padding: 0;
  }
}

.${classPrefix}-cardCRHeading {
  max-width: 425px;
}

@media (max-width: 425px) {
  .${classPrefix}-cardCRHeading {
    display: none;
  }
}

.${classPrefix}-cardCRHeading .${classPrefix}-p {
  padding: 20px 0 0 0;
}

.${classPrefix}-stepsWrapper {
  display: flex;
  flex-direction: column;
  padding-top: 30px;
}

@media (max-width: 425px) {
  .${classPrefix}-stepsWrapper {
    padding-top: 10px;
  }
}

.${classPrefix}-stepItem {
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: solid 1px;
  padding: 30px 0;
}

.${classPrefix}-stepItem:last-child {
  border: none;
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
