import { Editor } from "grapesjs";

const howItWorks4Block = (editor: Editor) => {
  const options = {
    id: "Ya4",
    label: "How It Works 4",
    block: {},
    props: {},
    style: "",
    category: "Logic",
    classPrefix: "Ya4",
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

const howItWorks4Component = (editor: Editor) => {
  const options = {
    id: "Ya4",
    label: "How It Works 4",
    block: {},
    props: {},
    style: "",
    category: "Logic",
    classPrefix: "Ya4",
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
      <span class="${classPrefix}-hideOnMobile">
        <span class="${classPrefix}-h3">Talk about your product&apos;s merits such as convenience, functionality, innovativeness,
          etc.</span>
      </span>
    </div>
    <div class="${classPrefix}-cardContent">
      <div class="${classPrefix}-stepsWrapper">
        <div class="${classPrefix}-stepItem">
          <div class="${classPrefix}-stepHeading">
            <span class="${classPrefix}-hideOnMobile">
              <span class="${classPrefix}-h3">
                Step 1
                <br>
                Description of the step
              </span>
            </span>
            <span class="${classPrefix}-showOnlyOnMobile">
              <span class="${classPrefix}-h3">
                Describe
                <br>
                Step 1
              </span>
            </span>
            <img loading="lazy" src="/editor/component-icons/checkmark.png" class="${classPrefix}-stepIcon" />
          </div>
          <div class="${classPrefix}-stepContent">
            <img loading="lazy" src="/editor/component-icons/image-icon.png" class="${classPrefix}-img" />
          </div>
        </div>
        <div class="${classPrefix}-stepItem">
          <div class="${classPrefix}-stepHeading">
            <span class="${classPrefix}-hideOnMobile">
              <span class="${classPrefix}-h3">
                Step 2
                <br>
                Description of the step
              </span>
            </span>
            <span class="${classPrefix}-showOnlyOnMobile">
              <span class="${classPrefix}-h3">
                Describe
                <br>
                Step 2
              </span>
            </span>
            <img loading="lazy" src="/editor/component-icons/checkmark.png" class="${classPrefix}-stepIcon" />
          </div>
          <div class="${classPrefix}-stepContent">
            <img loading="lazy" src="/editor/component-icons/image-icon.png" class="${classPrefix}-img" />
          </div>
        </div>
        <div class="${classPrefix}-stepItem">
          <div class="${classPrefix}-stepHeading">
            <span class="${classPrefix}-hideOnMobile">
              <span class="${classPrefix}-h3">
                Step 3
                <br>
                Description of the step
              </span>
            </span>
            <span class="${classPrefix}-showOnlyOnMobile">
              <span class="${classPrefix}-h3">
                Describe
                <br>
                Step 3
              </span>
            </span>
            <img loading="lazy" src="/editor/component-icons/checkmark.png" class="${classPrefix}-stepIcon" />
          </div>
          <div class="${classPrefix}-stepContent">
            <img loading="lazy" src="/editor/component-icons/image-icon.png" class="${classPrefix}-img" />
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
  padding: 92px 100px 81px 100px;
  max-width: 1440px;
min-width: 1440px;
  margin: 0 auto;
}

@media (max-width: 425px) {
  .${classPrefix}-section {
    padding: 40px 18px 43px 18px;
  }
}

.${classPrefix}-card {
  display: flex;
  flex-direction: column;
}

.${classPrefix}-cardHeading .${classPrefix}-h1 {
  width: 266px;
  height: 46px;
}

@media (max-width: 425px) {
  .${classPrefix}-cardHeading .${classPrefix}-h1 {
    font-size: 26px;
  }
}

.${classPrefix}-cardHeading .${classPrefix}-h3 {
  width: 845px;
  height: 17px;
  margin-top: 12px;
}

.${classPrefix}-stepsWrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 93px;
}

@media (max-width: 425px) {
  .${classPrefix}-stepsWrapper {
    margin-top: 34px;
  }
}

.${classPrefix}-stepHeading {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
}

.${classPrefix}-stepHeading .${classPrefix}-hideOnMobile .${classPrefix}-h3 {
  width: 301px;
  height: 50px;
  margin-bottom: 40px;
}

.${classPrefix}-stepHeading .${classPrefix}-showOnlyOnMobile .${classPrefix}-h3 {
  width: 102px;
  height: 31px;
  font-size: 15px;
}

.${classPrefix}-stepIcon {
  width: 48px;
  height: 48px;
  object-fit: scale-down;
  overflow: hidden;
  margin: 9px 0 0 12px;
}

@media (max-width: 425px) {
  .${classPrefix}-stepIcon {
    width: 22px;
    height: 22px;
    position: absolute;
    right: 0;
    top: 14px;
    margin: 0;
  }
}

.${classPrefix}-img {
  width: 360px;
  height: 311px;
  object-fit: fill;
  overflow: hidden;
  border-radius: 10px;
  background: #E9E9E9;
}

@media (max-width: 425px) {
  .${classPrefix}-img {
    width: 102px;
    height: 121px;
    margin-top: 24px;
  }
}
      `,
      },
    },
  });
};

export { howItWorks4Block, howItWorks4Component };
