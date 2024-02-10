import { Editor } from "grapesjs";

const productBenefits3Block = (editor: Editor) => {
  const options = {
    id: "Yc3",
    label: "Product Benefits 3",
    block: {},
    props: {},
    style: "",
    category: "Logic",
    classPrefix: "Yc3",
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
    id: "Yc3",
    label: "Product Benefits 3",
    block: {},
    props: {},
    style: "",
    category: "Logic",
    classPrefix: "Yc3",
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
            <div class="${classPrefix}-showOnlyOnMobile">
              <span class="${classPrefix}-p">
                Description of the benefit to your user
              </span>
            </div>
            <div class="${classPrefix}-hideOnMobile">
              <span class="${classPrefix}-p">
                Describe the feature elaborately from your user&apos;s point of view
              </span>
            </div>
          </div>
        </td>
        <td>
          <img loading="lazy" src="/editor/component-icons/image-icon.png" class="${classPrefix}-img" />
        </td>
      </tr>
      <tr>
        <td>
          <img loading="lazy" src="/editor/component-icons/image-icon.png" class="${classPrefix}-img" />
        </td>
        <td class="${classPrefix}-paddingHack">
          <div class="${classPrefix}-cardTextRight">
            <span class="${classPrefix}-h3">
              Benefit 2
            </span>
            <div class="${classPrefix}-showOnlyOnMobile">
              <span class="${classPrefix}-p">
                Description of the benefit to your user
              </span>
            </div>
            <div class="${classPrefix}-hideOnMobile">
              <span class="${classPrefix}-p">
                Description of the benefit to your user
              </span>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <div class="${classPrefix}-cardTextLeft">
            <span class="${classPrefix}-h3">
              Benefit 3
            </span>
            <div class="${classPrefix}-showOnlyOnMobile">
              <span class="${classPrefix}-p">
                Description of the benefit to your user
              </span>
            </div>
            <div class="${classPrefix}-hideOnMobile">
              <span class="${classPrefix}-p">
                Description of the benefit to your user
              </span>
            </div>
          </div>
        </td>
        <td>
          <img loading="lazy" src="/editor/component-icons/image-icon.png" class="${classPrefix}-img" />
        </td>
      </tr>
    </table>
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

.${classPrefix}-img {
  width: 574px;
  height: 408px;
  object-fit: fill;
  overflow: hidden;
  border-radius: 10px;
  background: #E9E9E9;
}

@media (max-width: 425px) {
  .${classPrefix}-img {
    width: 186px;
    height: 132px;
  }
}

.${classPrefix}-section {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 37px 146px 78px 143px;
  margin: 0 auto;
  max-width: 1440px;
min-width: 1440px;
  padding-left: 0;
  padding-right: 0;
}

@media (max-width: 425px) {
  .${classPrefix}-section {
    min-width: 400px;
    padding: 9px 0 29px 0;
  }
}

.${classPrefix}-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.${classPrefix}-cardHeading {
  text-align: center;
  margin: 0 35px;
}

.${classPrefix}-cardHeading .${classPrefix}-h1 {
  width: 898px;
  height: 44px;
}

@media (max-width: 425px) {
  .${classPrefix}-cardHeading .${classPrefix}-h1 {
    width: 330px;
    height: auto;
    font-size: 26px;
    line-height: 35px;
  }
}

.${classPrefix}-cardContent {
  margin-top: 91px;
}

@media (max-width: 425px) {
  .${classPrefix}-cardContent {
    margin: 47px 14px 0 16px;
  }
}

.${classPrefix}-cardTextLeft,
.${classPrefix}-cardTextRight {
  display: flex;
  flex-direction: column;
}

.${classPrefix}-cardTextLeft .${classPrefix}-h3,
.${classPrefix}-cardTextRight .${classPrefix}-h3 {
  width: 340px;
  height: 19px;
}

@media (max-width: 425px) {

  .${classPrefix}-cardTextLeft .${classPrefix}-h3,
  .${classPrefix}-cardTextRight .${classPrefix}-h3 {
    width: 152px;
    height: 19px;
    font-size: 15px;
  }
}

.${classPrefix}-cardTextLeft .${classPrefix}-p,
.${classPrefix}-cardTextRight .${classPrefix}-p {
  width: 482px;
  height: 87px;
  margin-top: 21px;
}

@media (max-width: 425px) {

  .${classPrefix}-cardTextLeft .${classPrefix}-p,
  .${classPrefix}-cardTextRight .${classPrefix}-p {
    width: 177px;
    height: 53px;
    margin-top: 6px;
  }
}

.${classPrefix}-paddingHack {
  padding-left: 64px;
}

@media (max-width: 425px) {
  .${classPrefix}-paddingHack {
    padding-left: 16px;
  }
}
      `,
      },
    },
  });
};

export { productBenefits3Block, productBenefits3Component };
