import { Editor } from "grapesjs";

const productBenefits2Block = (editor: Editor) => {
  const options = {
    id: "logic-productBenefits2",
    label: "Product Benefits 2",
    block: {},
    props: {},
    style: "",
    category: "Logic",
    classPrefix: "logic-productBenefits2",
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

const productBenefits2Component = (editor: Editor) => {
  const options = {
    id: "logic-productBenefits2",
    label: "Product Benefits 2",
    block: {},
    props: {},
    style: "",
    category: "Logic",
    classPrefix: "logic-productBenefits2",
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
  <div class="${classPrefix}-showOnlyOnMobile">
    <div class="${classPrefix}-cardHeading">
      <span class="${classPrefix}-h1">Header for product benefits</span>
      <span class="${classPrefix}-p">Elaborate on the emotional aspects of the benefits</span>
    </div>
  </div>
  <div class="${classPrefix}-card">
    <div class="${classPrefix}-cardContent">
      <div class="${classPrefix}-hideOnMobile">
        <div class="${classPrefix}-cardHeading">
          <span class="${classPrefix}-h1">Header for product benefits</span>
          <span class="${classPrefix}-p">Elaborate on the emotional aspects of the benefits</span>
        </div>
      </div>
      <div class="${classPrefix}-benefitsWrapper">
        <div class="${classPrefix}-benefitsItem">
          <div class="${classPrefix}-benefitsIcon">
            <img loading="lazy" src="/editor/component-icons/average-price.png" class="${classPrefix}-imgCover" />
          </div>
          <div class="${classPrefix}-benefitsContent">
            <span class="${classPrefix}-h3">
              Benefit 1
            </span>
            <span class="${classPrefix}-p">
              Description of the benefit to your user
            </span>
          </div>
        </div>
        <div class="${classPrefix}-benefitsItem">
          <div class="${classPrefix}-benefitsIcon">
            <img loading="lazy" src="/editor/component-icons/delivery.png" class="${classPrefix}-imgCover" />
          </div>
          <div class="${classPrefix}-benefitsContent">
            <span class="${classPrefix}-h3">
              Benefit 2
            </span>
            <span class="${classPrefix}-p">
              Description of the benefit to your user
            </span>
          </div>
        </div>
      </div>
    </div>
    <img loading="lazy" src="https://placehold.co/513x380" class="${classPrefix}-imgCover" />
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

.${classPrefix}-imgCover {
  object-fit: cover;
  object-position: center;
  overflow: hidden;
}

.${classPrefix}-section {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 100px 120px;
}

@media (max-width: 425px) {
  .${classPrefix}-section {
    padding: 60px 30px;
  }
}

.${classPrefix}-section .${classPrefix}-imgCover {
  max-height: 400px;
  border-radius: 10px;
  max-width: 100%;
}

.${classPrefix}-card {
  display: flex;
  flex-direction: row;
  gap: 40px;
  margin: 0 auto;
}

@media (max-width: 425px) {
  .${classPrefix}-card {
    flex-direction: column-reverse;
    margin: 25px 0 0 0;
  }
}

.${classPrefix}-cardContent {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 10px;
}

.${classPrefix}-cardHeading {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.${classPrefix}-benefitsWrapper {
  display: flex;
  flex-direction: row;
  gap: 60px;
  justify-content: space-around;
}

@media (max-width: 425px) {
  .${classPrefix}-benefitsWrapper {
    gap: 20px;
  }
}

.${classPrefix}-benefitsItem {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 20px;
}

@media (max-width: 425px) {
  .${classPrefix}-benefitsItem {
    gap: 10px;
  }
}

.${classPrefix}-benefitsIcon {
  color: #000;
  width: 40px;
  height: 40px;
  display: flex;
}

@media (max-width: 425px) {
  .${classPrefix}-benefitsIcon {
    width: 35px;
    height: 35px;
  }
}

.${classPrefix}-benefitsContent {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

@media (max-width: 425px) {
  .${classPrefix}-benefitsContent {
    gap: 10px;
  }
}

.${classPrefix}-benefitsContent .${classPrefix}-p {
  max-width: 200px;
}
      `,
      },
    },
  });
};

export { productBenefits2Block, productBenefits2Component };
