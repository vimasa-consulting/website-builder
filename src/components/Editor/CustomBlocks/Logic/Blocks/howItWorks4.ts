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
        <span class="${classPrefix}-p">Talk about your product&apos;s merits such as convenience, functionality, innovativeness,
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
            <div class="${classPrefix}-stepIcon">
              <img loading="lazy" src="/editor/component-icons/checkmark.png" class="${classPrefix}-imgFill" />
            </div>
          </div>
          <div class="${classPrefix}-stepContent">
            <img loading="lazy" src="https://placehold.co/400x400" class="${classPrefix}-imgFill" />
          </div>
        </div>
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
            <div class="${classPrefix}-stepIcon">
              <img loading="lazy" src="/editor/component-icons/checkmark.png" class="${classPrefix}-imgFill" />
            </div>
          </div>
          <div class="${classPrefix}-stepContent">
            <img loading="lazy" src="https://placehold.co/400x400" class="${classPrefix}-imgFill" />
          </div>
        </div>
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
            <div class="${classPrefix}-stepIcon">
              <img loading="lazy" src="/editor/component-icons/checkmark.png" class="${classPrefix}-imgFill" />
            </div>
          </div>
          <div class="${classPrefix}-stepContent">
            <img loading="lazy" src="https://placehold.co/400x400" class="${classPrefix}-imgFill" />
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

@media (max-width: 425px) {
  .${classPrefix}-h1 {
    font-size: 25px;
  }
}

.${classPrefix}-h3 {
  display: block;
  font-family: Inter;
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
  font-family: Inter;
  font-size: 15px;
  font-weight: 400;
}

@media (max-width: 425px) {
  .${classPrefix}-p {
    font-size: 13px;
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

.${classPrefix}-imgFill {
  object-fit: fill;
  object-position: center;
  overflow: hidden;
  width: 100%;
}

.${classPrefix}-section {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 80px 60px 80px 80px;
}

@media (max-width: 425px) {
  .${classPrefix}-section {
    padding: 40px 18px;
  }
}

.${classPrefix}-card {
  display: flex;
  flex-direction: column;
}

.${classPrefix}-stepsWrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 90px;
}

@media (max-width: 425px) {
  .${classPrefix}-stepsWrapper {
    margin-top: 34px;
  }
}

.${classPrefix}-stepItem {
  width: 30%;
}

.${classPrefix}-stepHeading {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.${classPrefix}-stepIcon {
  color: #000;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: end;
  align-self: end;
}

.${classPrefix}-stepContent {
  width: 100%;
  margin-top: 40px;
}

@media (max-width: 425px) {
  .${classPrefix}-stepContent {
    margin-top: 24px;
  }
}
      `,
      },
    },
  });
};

export { howItWorks4Block, howItWorks4Component };
