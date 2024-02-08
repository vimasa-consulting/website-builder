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
              <svg width="45" height="45" version="1.1" viewBox="0 0 297.5 297.5" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m277.71 158.52v85.7h-257.92v-85.7h6.53v40.54c0 16.98 13.81 30.78 30.78 30.78s30.78-13.8 30.78-30.78v-40.54h30.09v40.54c0 16.98 13.81 30.78 30.78 30.78 16.98 0 30.78-13.8 30.78-30.78v-40.54h30.1v40.54c0 16.98 13.8 30.78 30.78 30.78 16.97 0 30.78-13.8 30.78-30.78v-40.54h6.52z" fill="#ACBFC7"/><rect x="218.66" y="53.28" width="43.49" height="10.53" fill="#CDD9DD"/><rect x="229.17" y="83.35" width="22.48" height="23.92" fill="#CDD9DD"/><rect x="137.51" y="83.35" width="22.48" height="23.92" fill="#CDD9DD"/><rect x="127.01" y="53.28" width="43.49" height="10.53" fill="#CDD9DD"/><rect x="35.35" y="53.28" width="43.49" height="10.53" fill="#CDD9DD"/><rect x="45.86" y="83.35" width="22.48" height="23.92" fill="#CDD9DD"/><path d="m251.65 126.81v72.25c0 6.2-5.05 11.24-11.24 11.24-6.2 0-11.24-5.04-11.24-11.24v-72.25h22.48z" fill="#FF4855"/><path d="m68.34 126.81v72.25c0 6.2-5.04 11.24-11.24 11.24s-11.24-5.04-11.24-11.24v-72.25h22.48z" fill="#D61616"/><path d="m159.99 126.81v72.25c0 6.2-5.04 11.24-11.24 11.24s-11.24-5.04-11.24-11.24v-72.25h22.48z" fill="#FFD63F"/><path d="m297.25 148.75v105.24c0 5.4-4.37 9.77-9.77 9.77h-277.46c-5.39 0-9.77-4.37-9.77-9.77v-105.24c0-5.4 4.38-9.77 9.77-9.77h16.3v-55.63h-0.74c-5.39 0-9.77-4.38-9.77-9.77v-30.07c0-5.4 4.38-9.77 9.77-9.77h63.03c5.4 0 9.77 4.37 9.77 9.77v30.07c0 5.39-4.37 9.77-9.77 9.77h-0.73v55.63h30.09v-55.63h-0.73c-5.4 0-9.77-4.38-9.77-9.77v-30.07c0-5.4 4.37-9.77 9.77-9.77h63.03c5.39 0 9.77 4.37 9.77 9.77v30.07c0 5.39-4.38 9.77-9.77 9.77h-0.74v55.63h30.1v-55.63h-0.74c-5.39 0-9.77-4.38-9.77-9.77v-30.07c0-5.4 4.38-9.77 9.77-9.77h63.03c5.4 0 9.77 4.37 9.77 9.77v30.07c0 5.39-4.37 9.77-9.77 9.77h-0.73v55.63h16.29c5.4 0 9.77 4.37 9.77 9.77zm-19.54 95.47v-85.7h-6.52v40.54c0 16.98-13.81 30.78-30.78 30.78-16.98 0-30.78-13.8-30.78-30.78v-40.54h-30.1v40.54c0 16.98-13.8 30.78-30.78 30.78-16.97 0-30.78-13.8-30.78-30.78v-40.54h-30.09v40.54c0 16.98-13.81 30.78-30.78 30.78s-30.78-13.8-30.78-30.78v-40.54h-6.53v85.7h257.92zm-15.56-180.41v-10.53h-43.49v10.53h43.49zm-10.5 135.25v-72.25h-22.48v72.25c0 6.2 5.04 11.24 11.24 11.24 6.19 0 11.24-5.04 11.24-11.24zm0-91.79v-23.92h-22.48v23.92h22.48zm-81.15-43.46v-10.53h-43.49v10.53h43.49zm-10.51 135.25v-72.25h-22.48v72.25c0 6.2 5.04 11.24 11.24 11.24s11.24-5.04 11.24-11.24zm0-91.79v-23.92h-22.48v23.92h22.48zm-81.15-43.46v-10.53h-43.49v10.53h43.49zm-10.5 135.25v-72.25h-22.48v72.25c0 6.2 5.04 11.24 11.24 11.24s11.24-5.04 11.24-11.24zm0-91.79v-23.92h-22.48v23.92h22.48z"/></svg>       
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
  object-fit: fill;
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
    margin: 0;
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
  height: auto;
}

@media (max-width: 425px) {
  .${classPrefix}-featureItem .${classPrefix}-h3 {
    width: 128px;
    height: auto;
    margin-top: 12px;
    margin-bottom: 9px;
  }
}

.${classPrefix}-featureItem .${classPrefix}-p {
  width: 329px;
  height: auto;
}

@media (max-width: 425px) {
  .${classPrefix}-featureItem .${classPrefix}-p {
    width: 150px;
    height: auto;
  }
}
      `,
      },
    },
  });
};

export { productFeatures2Block, productFeatures2Component };
