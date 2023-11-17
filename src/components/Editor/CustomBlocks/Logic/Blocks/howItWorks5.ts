import { Editor } from "grapesjs";

const howItWorks5Block = (editor: Editor) => {
  const options = {
    id: "Ya5",
    label: "How It Works 5",
    block: {},
    props: {},
    style: "",
    category: "Logic",
    classPrefix: "Ya5",
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

const howItWorks5Component = (editor: Editor) => {
  const options = {
    id: "Ya5",
    label: "How It Works 5",
    block: {},
    props: {},
    style: "",
    category: "Logic",
    classPrefix: "Ya5",
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
      <video class="${classPrefix}-cardVideo" src="/editor/sample.mp4" poster="/editor/component-icons/play.png" loop onclick="if(this.paused){this.play()}else{this.pause()}">
      </video>
      <div class="${classPrefix}-contentPartialOverlay">
        <span class="${classPrefix}-overlayHeading">
          <span class="${classPrefix}-h3">
            Describe your product in 2-3 words
          </span>
        </span>
        <div class="${classPrefix}-hideOnMobile">
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
        <div class="${classPrefix}-showOnlyOnMobile">
          <div class="${classPrefix}-overlayDescription">
            <span class="${classPrefix}-p">
              Give an overview of how your product works. Then give a step by step description of the process. 
              <br><br>
              Highlight the ease of use as a value of your product.
            </span>
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
  margin: 0 auto;
  padding: 81px 136px 125px 150px;
}

@media (max-width: 425px) {
  .${classPrefix}-section {
    padding: 50px 0 54px 0;
  }
}

.${classPrefix}-card {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.${classPrefix}-cardHeading .${classPrefix}-h1 {
  text-align: center;
  width: 458px;
}

@media (max-width: 425px) {
  .${classPrefix}-cardHeading .${classPrefix}-h1 {
    width: 185px;
  }
}

.${classPrefix}-cardContent {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 81px;
}

@media (max-width: 425px) {
  .${classPrefix}-cardContent {
    flex-direction: column;
    margin-top: 26px;
  }
}

.${classPrefix}-cardVideo {
  width: 814px;
  height: 458px;
  border-radius: 10px;
  background: #E9E9E9;
  object-fit: scale-down;
  overflow: hidden;
}

@media (max-width: 425px) {
  .${classPrefix}-cardVideo {
    width: 372px;
    height: 209px;
    margin: 0 14px;
  }
}

.${classPrefix}-contentPartialOverlay {
  margin-left: -150px;
  width: 492px;
  height: 301px;
  padding: 36px 83px 55px 48px;
  border-radius: 20px;
  background: #FFF;
  box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.15);
  z-index: 1;
}

@media (max-width: 425px) {
  .${classPrefix}-contentPartialOverlay {
    width: 318px;
    height: 235px;
    margin: -30px 41px 0 41px;
    border-radius: 10px;
    padding: 29px 32px 30px 32px;
  }
}

.${classPrefix}-overlayHeading .${classPrefix}-h3 {
  width: 361px;
  height: 17px;
}

@media (max-width: 425px) {
  .${classPrefix}-overlayHeading .${classPrefix}-h3 {
    width: auto;
    height: 18px;
  }
}

.${classPrefix}-overlayDescription .${classPrefix}-p {
  margin-top: 25px;
  width: 396px;
  height: 168px;
}

@media (max-width: 425px) {
  .${classPrefix}-overlayDescription .${classPrefix}-p {
    margin-top: 42px;
    width: 254px;
    height: 116px;
  }
}
      `,
      },
    },
  });
};

export { howItWorks5Block, howItWorks5Component };
