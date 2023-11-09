import { Editor } from "grapesjs";

const howItWorks6Block = (editor: Editor) => {
  const options = {
    id: "logic-howItWorks6",
    label: "How It Works 6",
    block: {},
    props: {},
    style: "",
    category: "Logic",
    classPrefix: "logic-howItWorks6",
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

const howItWorks6Component = (editor: Editor) => {
  const options = {
    id: "logic-howItWorks6",
    label: "How It Works 6",
    block: {},
    props: {},
    style: "",
    category: "Logic",
    classPrefix: "logic-howItWorks6",
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
    </div>
    <div class="${classPrefix}-cardContent">
      <img loading="lazy" src="https://placehold.co/814x458" class="${classPrefix}-imgFill" />
      <div class="${classPrefix}-contentPartialOverlay">
        <span class="${classPrefix}-overlayHeading">
          <span class="${classPrefix}-h3">
            Describe your product in 2-3 words
          </span>
        </span>
        <div class="${classPrefix}-overlayDescription">
          <span class="${classPrefix}-p">
            Give an overview of how your product works.
            <br><br>
            Then give a step by step description of the process. Keep the explanation simple and easy to understand
            for the user.
            <br><br>
            Highlight the ease of use as a value of your product.
          </span>
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
  padding: 80px 100px;
}

@media (max-width: 425px) {
  .${classPrefix}-section {
    padding: 50px 15px;
  }
}

.${classPrefix}-card {
  display: flex;
  flex-direction: column;
}

.${classPrefix}-cardHeading {
  margin: 0 auto;
}

.${classPrefix}-cardContent {
  position: relative;
  margin: 80px auto 0 auto;
}

@media (max-width: 425px) {
  .${classPrefix}-cardContent {
    margin: 26px auto 0 auto;
    display: flex;
    flex-direction: column;
  }
}

.${classPrefix}-cardContent .${classPrefix}-imgFill {
  max-height: 500px;
  border-radius: 10px;
  background: #E9E9E9;
  min-width: 300px;
}

@media (max-width: 425px) {
  .${classPrefix}-cardContent .${classPrefix}-imgFill  {
    width: 100%;
  }
}

.${classPrefix}-contentPartialOverlay {
  position: absolute;
  top: 50%;
  right: -30%;
  transform: translate(0%, -50%);
  padding: 30px;
  max-width: 300px;
  border-radius: 20px;
  background: #FFF;
  box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.15);
}

@media (max-width: 425px) {
  .${classPrefix}-contentPartialOverlay {
    position: unset;
    max-width: 90%;
    transform: none;
    z-index: 1;
    margin: -20px 20px 0;
  }
}

.${classPrefix}-overlayDescription {
  margin-top: 25px;
}
      `,
      },
    },
  });
};

export { howItWorks6Block, howItWorks6Component };
