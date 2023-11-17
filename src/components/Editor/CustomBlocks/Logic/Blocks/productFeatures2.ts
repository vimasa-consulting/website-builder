import { Editor } from "grapesjs";

const productFeatures2Block = (editor: Editor) => {
  const options = {
    id: "Yb2",
    label: "Product Features 2",
    block: {},
    props: {},
    style: "",
    category: "Logic",
    classPrefix: "Yb2",
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

const productFeatures2Component = (editor: Editor) => {
  const options = {
    id: "Yb2",
    label: "Product Features 2",
    block: {},
    props: {},
    style: "",
    category: "Logic",
    classPrefix: "Yb2",
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
      <span class="${classPrefix}-h1">Header for Key Features of Your Product</span>
    </div>
    <div class="${classPrefix}-cardContent">
      <img loading="lazy" src="https://placehold.co/380x355" class="${classPrefix}-imgFill" />
      <table class="${classPrefix}-featureTable">
        <tr>
          <td>
            <div class="${classPrefix}-featureItem">
              <div class="${classPrefix}-featureIcon">
                <img loading="lazy" src="/editor/component-icons/tv-14.png" class="${classPrefix}-imgFill" />
              </div>
              <span class="${classPrefix}-h3">
                Feature 1
              </span>
              <span class="${classPrefix}-p">
                Describe the feature crisply from your user&apos;s point of view
              </span>
            </div>
          </td>
          <td>
            <div class="${classPrefix}-featureItem">
              <div class="${classPrefix}-featureIcon">
                <img loading="lazy" src="/editor/component-icons/charging-battery.png" class="${classPrefix}-imgFill" />
              </div>
              <span class="${classPrefix}-h3">
                Feature 2
              </span>
              <span class="${classPrefix}-p">
                Describe the feature crisply from your user&apos;s point of view
              </span>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="${classPrefix}-featureItem">
              <div class="${classPrefix}-featureIcon">
                <img loading="lazy" src="/editor/component-icons/average-price.png" class="${classPrefix}-imgFill" />
              </div>
              <span class="${classPrefix}-h3">
                Feature 3
              </span>
              <span class="${classPrefix}-p">
                Describe the feature crisply from your user&apos;s point of view
              </span>
            </div>
          </td>
          <td>
            <div class="${classPrefix}-featureItem">
              <div class="${classPrefix}-featureIcon">
                <img loading="lazy" src="/editor/component-icons/delivery.png" class="${classPrefix}-imgFill" />
              </div>
              <span class="${classPrefix}-h3">
                Feature 4
              </span>
              <span class="${classPrefix}-p">
                Describe the feature crisply from your user&apos;s point of view
              </span>
            </div>
          </td>
        </tr>
      </table>
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

.${classPrefix}-imgFill {
  object-fit: fill;
  object-position: center;
  overflow: hidden;
}

.${classPrefix}-section {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 80px 100px;
}

@media (max-width: 425px) {
  .${classPrefix}-section {
    padding: 40px 15px;
  }
}

.${classPrefix}-card {
  display: flex;
  flex-direction: column;
}

.${classPrefix}-cardContent {
  margin-top: 70px;
  display: flex;
  flex-direction: row;
  gap: 70px;
}

@media (max-width: 425px) {
  .${classPrefix}-cardContent {
    margin-top: 30px;
    flex-direction: column;
    gap: 30px;
  }
}

.${classPrefix}-cardContent > .${classPrefix}-imgFill {
  max-height: 400px;
  border-radius: 10px;
}

.${classPrefix}-featureTable tr:first-child {
  vertical-align: top;
}

@media (max-width: 425px) {
  .${classPrefix}-featureTable tr:first-child {
    vertical-align: middle;
  }
}

.${classPrefix}-featureTable tr:last-child {
  vertical-align: bottom;
}

@media (max-width: 425px) {
  .${classPrefix}-featureTable tr:last-child {
    vertical-align: middle;
  }
}


.${classPrefix}-featureItem {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
  padding: 0 20px;
}


@media (max-width: 425px) {
  .${classPrefix}-featureItem {
    gap: 10px;
    padding: 20px;
  }
}

.${classPrefix}-featureItem {
  max-width: 250px;
}

.${classPrefix}-featureIcon {
  color: #000;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 425px) {
  .${classPrefix}-featureIcon {
    width: 40px;
    height: 40px;
  }
}
      `,
      },
    },
  });
};

export { productFeatures2Block, productFeatures2Component };
