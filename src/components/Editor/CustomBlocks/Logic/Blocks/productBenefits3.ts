import { Editor } from "grapesjs";

const productBenefits3Block = (editor: Editor) => {
  const options = {
    id: "logic-productBenefits3",
    label: "Product Benefits 3",
    block: {},
    props: {},
    style: "",
    category: "Logic",
    classPrefix: "logic-productBenefits3",
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

const productBenefits3Component = (editor: Editor) => {
  const options = {
    id: "logic-productBenefits3",
    label: "Product Benefits 3",
    block: {},
    props: {},
    style: "",
    category: "Logic",
    classPrefix: "logic-productBenefits3",
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
      <span class="${classPrefix}-h1">Header for product benefits</span>
    </div>
    <table class="${classPrefix}-cardContent">
      <tr>
        <td>
          <div class="${classPrefix}-cardTextLeft">
            <span class="${classPrefix}-h3">
              Benefit 1
            </span>
            <span class="${classPrefix}-p">
              Description of the benefit to your user
            </span>
          </div>
        </td>
        <td>
          <img loading="lazy" src="https://placehold.co/574x408" class="${classPrefix}-imgFill" />
        </td>
      </tr>
      <tr>
        <td>
          <img loading="lazy" src="https://placehold.co/574x408" class="${classPrefix}-imgFill" />
        </td>
        <td>
          <div class="${classPrefix}-cardTextRight">
            <span class="${classPrefix}-h3">
              Benefit 2
            </span>
            <span class="${classPrefix}-p">
              Description of the benefit to your user
            </span>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <div class="${classPrefix}-cardTextLeft">
            <span class="${classPrefix}-h3">
              Benefit 3
            </span>
            <span class="${classPrefix}-p">
              Description of the benefit to your user
            </span>
          </div>
        </td>
        <td>
          <img loading="lazy" src="https://placehold.co/574x408" class="${classPrefix}-imgFill" />
        </td>
      </tr>
    </table>
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
  padding: 20px 80px;
}

@media (max-width: 425px) {
  .${classPrefix}-section {
    padding: 40px 5px;
  }
}

.${classPrefix}-card {
  display: flex;
  flex-direction: column;
}

.${classPrefix}-cardHeading {
  margin: 0 auto;
  text-align: center;
}

.${classPrefix}-cardContent {
  margin: 0 auto;
  margin-top: 90px;
}

@media (max-width: 425px) {
  .${classPrefix}-cardContent {
    margin-top: 40px;
  }
}

.${classPrefix}-cardContent td {
  width: 33%;
}

.${classPrefix}-cardTextLeft,
.${classPrefix}-cardTextRight {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

@media (max-width: 425px) {
  .${classPrefix}-cardTextLeft,
  .${classPrefix}-cardTextRight {
    gap: 6px;
  }
}

.${classPrefix}-cardTextLeft {
  margin-right: 90px;
}

@media (max-width: 425px) {
  .${classPrefix}-cardTextLeft {
    margin-right: 6px;
  }
}

.${classPrefix}-cardTextRight {
  margin-left: 90px;
}

@media (max-width: 425px) {
  .${classPrefix}-cardTextRight {
    margin-left: 6px;
  }
}

.${classPrefix}-imgFill {
  border-radius: 20px;
}
      `,
      },
    },
  });
};

export { productBenefits3Block, productBenefits3Component };
