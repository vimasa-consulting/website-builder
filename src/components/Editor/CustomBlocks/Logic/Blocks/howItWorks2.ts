import { Editor } from "grapesjs";

const howItWorks2Block = (editor: Editor) => {
  const options = {
    id: "Ya2",
    label: "How It Works 2",
    block: {},
    props: {},
    style: "",
    category: "Logic",
    classPrefix: "Ya2",
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
    id: "Ya2",
    label: "How It Works 2",
    block: {},
    props: {},
    style: "",
    category: "Logic",
    classPrefix: "Ya2",
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
        src="/editor/component-icons/image-icon.png"
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
            <span class="${classPrefix}-h3">1</span>
          </div>
          <div class="${classPrefix}-stepContent">
            <span class="${classPrefix}-h3">Step 1</span>
            <span class="${classPrefix}-p">Description of the step</span>
          </div>
        </div>
        <div class="${classPrefix}-stepItem">
          <div class="${classPrefix}-stepNumber">
            <span class="${classPrefix}-h3">2</span>
          </div>
          <div class="${classPrefix}-stepContent">
            <span class="${classPrefix}-h3">Step 2</span>
            <span class="${classPrefix}-p">Description of the step</span>
          </div>
        </div>
        <div class="${classPrefix}-stepItem">
          <div class="${classPrefix}-stepNumber">
            <span class="${classPrefix}-h3">3</span>
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
  font-family: Inter, sans-serif;
  font-size: 40px;
  font-weight: 600;
}

@media (max-width: 425px) {
  .${classPrefix}-h1 {
    font-size: 25px;
  }
}

.${classPrefix}-h3 {
  display: block;
  font-family: Inter, sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: normal;
}

@media (max-width: 425px) {
  .${classPrefix}-h3 {
    font-size: 18px;
  }
}

.${classPrefix}-p {
  display: block;
  font-family: Inter, sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 21px;
}

@media (max-width: 425px) {
  .${classPrefix}-p {
    font-size: 13px;
    line-height: 18.5px;
  }
}

@media (max-width: 425px) {
  .${classPrefix}-hideOnMobile {
    display: none;
  }
}

@media (min-width: 426px) {
  .${classPrefix}-showOnlyOnMobile {
    display: none;
  }
}

.${classPrefix}-section {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  padding: 175px 156px 141px 157px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
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
}

@media (max-width: 425px) {
  .${classPrefix}-cardCRHeadingMobile {
    display: block;
  }
}

.${classPrefix}-cardCRHeadingMobile .${classPrefix}-h1 {
  width: 280px;
  margin-top: 56px;
}

.${classPrefix}-cardCRHeadingMobile .${classPrefix}-p {
  width: 320px;
  height: 32px;
  margin-top: 10px;
  margin-bottom: 46px;
}

.${classPrefix}-img {
  object-fit: fit;
  overflow: hidden;
  width: 525px;
  height: 525px;
  border-radius: 10px;
  background: #E9E9E9;
}

@media (max-width: 425px) {
  .${classPrefix}-img {
    width: 320px;
    height: 320px;
  }
}

.${classPrefix}-cardContentRight {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 103px;
}

@media (max-width: 425px) {
  .${classPrefix}-cardContentRight {
    padding: 0;
  }
}

@media (max-width: 425px) {
  .${classPrefix}-cardCRHeading {
    display: none;
  }
}

.${classPrefix}-cardCRHeading .${classPrefix}-h1 {
  width: 439px;
}

.${classPrefix}-cardCRHeading .${classPrefix}-p {
  padding-top: 19px;
  width: 439px;
  height: 51px;
}

.${classPrefix}-stepsWrapper {
  display: flex;
  flex-direction: column;
  padding-top: 53px;
}

@media (max-width: 425px) {
  .${classPrefix}-stepsWrapper {
    padding-top: 45px;
    margin-bottom: 57px;
  }
}

.${classPrefix}-stepItem {
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: solid 1px #ABABAB;
  padding-top: 31px;
  padding-bottom: 33px;
  width: 499px;
}

@media (max-width: 425px) {
  .${classPrefix}-stepItem {
    padding-top: 18.5px;
    padding-bottom: 16.5px;
    width: 320px;
  }
}

.${classPrefix}-stepItem:first-child {
  padding-top: 0;
}

.${classPrefix}-stepItem:last-child {
  border: none;
  padding-bottom: 0;
}

.${classPrefix}-stepNumber {
  border-radius: 50%;
  background-color: #d9d9d9;
  width: 54px;
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  font-family: Inter, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

@media (max-width: 425px) {
  .${classPrefix}-stepNumber {
    width: 35px;
    height: 35px;
    font-size: 18px;
    font-weight: 400;
  }
}

.${classPrefix}-stepContent {
  padding-left: 32px;
}

@media (max-width: 425px) {
  .${classPrefix}-stepContent {
    padding-left: 17px;
    width: 253px;
    height: 43px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}

.${classPrefix}-stepContent .${classPrefix}-h3 {
  width: 378px;
  height: 17px;
}

@media (max-width: 425px) {
  .${classPrefix}-stepContent .${classPrefix}-h3 {
    width: 128px;
    height: 17px;
  }
}

.${classPrefix}-stepContent .${classPrefix}-p {
  margin-top: 17px;
  width: 381px;
  height: 18px;
}

@media (max-width: 425px) {
  .${classPrefix}-stepContent .${classPrefix}-p {
    margin-top: 0;
    width: 253px;
    height: 18px;
  }
}
      `,
      },
    },
  });
};

export { howItWorks2Block, howItWorks2Component };
