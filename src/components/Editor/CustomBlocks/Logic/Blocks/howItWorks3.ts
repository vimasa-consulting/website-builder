import { Editor } from "grapesjs";

const howItWorks3Block = (editor: Editor) => {
  const options = {
    id: "Ya3",
    label: "How It Works 3",
    block: {},
    props: {},
    style: "",
    category: "Logic",
    classPrefix: "Ya3",
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

const howItWorks3Component = (editor: Editor) => {
  const options = {
    id: "Ya3",
    label: "How It Works 3",
    block: {},
    props: {},
    style: "",
    category: "Logic",
    classPrefix: "Ya3",
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
    <div class="${classPrefix}-cardHeading">
      <span class="${classPrefix}-h1">How it Works</span>
      <span class="${classPrefix}-h3">Talk about your product&apos;s merits such as convenience, functionality,
        innovativeness,
        etc.</span>
    </div>
    <div class="${classPrefix}-cardContent">
      <div class="${classPrefix}-showOnlyOnMobile">
        <img loading="lazy" src="/editor/component-icons/image-icon.png" class="${classPrefix}-imgMobile" />
      </div>
      <div class="${classPrefix}-cardContentLeft">
        <div class="${classPrefix}-stepsWrapper">
          <div class="${classPrefix}-stepItem">
            <img loading="lazy" src="/editor/component-icons/tv-14.png" class="${classPrefix}-stepIcon" />
            <div class="${classPrefix}-stepContent">
              <span class="${classPrefix}-h3">Step 1</span>
              <span class="${classPrefix}-p">Description of the step</span>
            </div>
          </div>
          <div class="${classPrefix}-stepItem">
            <img loading="lazy" src="/editor/component-icons/delivery.png" class="${classPrefix}-stepIcon" />
            <div class="${classPrefix}-stepContent">
              <span class="${classPrefix}-h3">Step 2</span>
              <span class="${classPrefix}-p">Description of the step</span>
            </div>
          </div>
          <div class="${classPrefix}-stepItem">
            <img loading="lazy" src="/editor/component-icons/no-card.png" class="${classPrefix}-stepIcon" />
            <div class="${classPrefix}-stepContent">
              <span class="${classPrefix}-h3">Step 3</span>
              <span class="${classPrefix}-p">Description of the step</span>
            </div>
          </div>
        </div>
      </div>
      <div class="${classPrefix}-cardContentRight hideOnMobile">
        <img loading="lazy" src="/editor/component-icons/image-icon.png" class="${classPrefix}-img" />
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
  justify-content: center;
  align-items: center;
  padding: 82px 120px 90px 122px;
  margin: 0 auto;
  max-width: 1440px;
min-width: 1440px;
}

@media (max-width: 425px) {
  .${classPrefix}-section {
    padding: 69px 0 67px 0;
  }
}

.${classPrefix}-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.${classPrefix}-cardContent {
  display: flex;
  flex-direction: row;
}

@media (max-width: 425px) {
  .${classPrefix}-cardContent {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

.${classPrefix}-cardHeading {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.${classPrefix}-cardHeading .${classPrefix}-h1 {
  width: 258px;
  height: 38px;
}

@media (max-width: 425px) {
  .${classPrefix}-cardHeading .${classPrefix}-h1 {
    width: 280px;
  }
}

.${classPrefix}-cardHeading .${classPrefix}-h3 {
  width: 652px;
  height: 24px;
  margin-top: 28px;
}

@media (max-width: 425px) {
  .${classPrefix}-cardHeading .${classPrefix}-h3 {
    width: 320px;
    height: 32px;
    font-size: 13px;
    margin-top: 10px;
  }
}

.${classPrefix}-imgMobile {
  width: 271px;
  height: 226px;
  object-fit: scale-down;
  overflow: hidden;
  border-radius: 10px;
  background: #E9E9E9;
  margin: 53px 20px 0 109px;
}

.${classPrefix}-cardContentLeft {
  display: flex;
  flex-direction: column;
}

.${classPrefix}-stepsWrapper {
  display: flex;
  flex-direction: column;
  margin-top: 102px;
  margin-right: 125px;
}

@media (max-width: 425px) {
  .${classPrefix}-stepsWrapper {
    margin-top: 55px;
    margin-right: 0;
    margin-left: 20.5px;
  }
}

.${classPrefix}-stepItem {
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: solid 1px #ABABAB;
  width: 597px;
  padding: 31px 0 30px 0;
}

@media (max-width: 425px) {
  .${classPrefix}-stepItem {
    width: 320px;
    padding: 18.5px 0;
    margin-right: 59.5px;
  }
}

.${classPrefix}-stepItem:first-child {
  padding-top: 0;
}

.${classPrefix}-stepItem:last-child {
  padding-bottom: 0;
  border: none;
}

.${classPrefix}-stepIcon {
  width: 50px;
  height: 50px;
  object-fit: scale-down;
  overflow: hidden;
  margin-right: 31px;
}

@media (max-width: 425px) {
  .${classPrefix}-stepIcon {
    width: 35px;
    height: 35px;
    margin: 0 16px 0 0;
  }
}

.${classPrefix}-stepContent .${classPrefix}-h3 {
  width: 216px;
  height: 17px;
}

@media (max-width: 425px) {
  .${classPrefix}-stepContent .${classPrefix}-h3 {
    width: 128px;
    height: 17px;
  }
}

.${classPrefix}-stepContent .${classPrefix}-p {
  width: 461px;
  height: 21px;
  margin-top: 14px;
}

@media (max-width: 425px) {
  .${classPrefix}-stepContent .${classPrefix}-p {
    width: 253px;
    height: 18px;
    margin-top: 5px;
  }
}

.${classPrefix}-cardContentRight {
  margin-top: 182px;
}

@media (max-width: 425px) {
  .${classPrefix}-cardContentRight {
    padding: 0;
  }
}

.${classPrefix}-img {
  width: 476px;
  height: 397px;
  object-fit: fill;
  overflow: hidden;
  border-radius: 10px;
  background: #E9E9E9;
}
      `,
      },
    },
  });
};

export { howItWorks3Block, howItWorks3Component };
