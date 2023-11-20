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
      <img loading="lazy" src="/editor/component-icons/image-icon.png" class="${classPrefix}-img" />
      <table class="${classPrefix}-featureTable">
        <tr>
          <td class="${classPrefix}-column1">
            <div class="${classPrefix}-featureItem">
              <img loading="lazy" src="/editor/component-icons/tv-14.png" class="${classPrefix}-featureIcon" />
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
              <img loading="lazy" src="/editor/component-icons/charging-battery.png" class="${classPrefix}-featureIcon" />
              <span class="${classPrefix}-h3">
                Trial and Error
              </span>
              <span class="${classPrefix}-p">
                Describe the feature crisply from your user&apos;s point of view
              </span>
            </div>
          </td>
        </tr>
        <tr>
          <td class="${classPrefix}-column1">
            <div class="${classPrefix}-featureItem">
              <img loading="lazy" src="/editor/component-icons/average-price.png" class="${classPrefix}-featureIcon" />
              <span class="${classPrefix}-h3">
                Trial and Error
              </span>
              <span class="${classPrefix}-p">
                Describe the feature crisply from your user&apos;s point of view
              </span>
            </div>
          </td>
          <td>
            <div class="${classPrefix}-featureItem">
              <img loading="lazy" src="/editor/component-icons/delivery.png" class="${classPrefix}-featureIcon" />
              <span class="${classPrefix}-h3">
                Trial and Error
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
  font-family: Inter;
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
  padding: 86px 124px 76px;
  margin: 0 auto;
  max-width: 1440px;
}

@media (max-width: 425px) {
  .${classPrefix}-section {
    padding: 47px 0 116px;
  }
}

.${classPrefix}-card {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 68px;
}

@media (max-width: 425px) {
  .${classPrefix}-card {
    gap: 0;
  }
}

.${classPrefix}-cardHeading .${classPrefix}-h1 {
  width: 904px;
  height: 46px;
}

@media (max-width: 425px) {
  .${classPrefix}-cardHeading .${classPrefix}-h1 {
    width: 330px;
    height: auto;
    margin: 0 44px 0 26px;
    font-size: 26px;
    line-height: 35px;
  }
}

.${classPrefix}-cardContent {
  display: flex;
  flex-direction: row;
}

@media (max-width: 425px) {
  .${classPrefix}-cardContent {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}

.${classPrefix}-img {
  width: 381px;
  height: 355px;
  object-fit: scale-down;
  overflow: hidden;
  border-radius: 10px;
  background: #E9E9E9;
}

@media (max-width: 425px) {
  .${classPrefix}-img {
    width: 348px;
    height: 335px;
    margin: 37px 26px 34px 26px
  }
}

.${classPrefix}-featureTable {
  margin-left: 77px;
  width: 734px;
  height: 345px;
}

@media (max-width: 425px) {
  .${classPrefix}-featureTable {
    width: auto;
    height: auto;
    margin: 0 19.96px 0 26.5px;
  }
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

.${classPrefix}-column1 {
  padding-right: 76px;
}

@media (max-width: 425px) {
  .${classPrefix}-column1 {
    padding-right: 50.96px;
  }
}

@media (max-width: 425px) {
  tr:last-child .${classPrefix}-featureItem {
    padding-top: 50px;
  }
}

.${classPrefix}-featureItem {
  display: flex;
  flex-direction: column;
  gap: 19px;
}

@media (max-width: 425px) {
  .${classPrefix}-featureItem {
    gap: 0;
  }
}

.${classPrefix}-featureIcon {
  width: 50px;
  height: 50px;
  object-fit: scale-down;
  overflow: hidden;
}

@media (max-width: 425px) {
  .${classPrefix}-featureIcon {
    width: 35px;
    height: 35px;
  }
}

.${classPrefix}-featureItem .${classPrefix}-h3 {
  width: 216px;
  height: 17px;
}

@media (max-width: 425px) {
  .${classPrefix}-featureItem .${classPrefix}-h3 {
    width: 128px;
    height: 17px;
    margin-top: 12px;
    margin-bottom: 9px;
  }
}

.${classPrefix}-featureItem .${classPrefix}-p {
  width: 329px;
  height: 38px;
}

@media (max-width: 425px) {
  .${classPrefix}-featureItem .${classPrefix}-p {
    width: 150px;
    height: 32px;
  }
}
      `,
      },
    },
  });
};

export { productFeatures2Block, productFeatures2Component };
