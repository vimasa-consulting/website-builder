import { Editor } from "grapesjs";

const productFeatures4Block = (editor: Editor) => {
  const options = {
    id: "Yb4",
    label: "Product Features 4",
    block: {},
    props: {},
    style: "",
    category: "Logic",
    classPrefix: "Yb4",
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

const productFeatures4Component = (editor: Editor) => {
  const options = {
    id: "Yb4",
    label: "Product Features 4",
    block: {},
    props: {},
    style: "",
    category: "Logic",
    classPrefix: "Yb4",
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
      <span class="${classPrefix}-p">Give a short description of your product, highlighting it&apos;s USP</span>
    </div>
    <div class="${classPrefix}-cardContent">
      <img loading="lazy" src="/editor/component-icons/image-icon.png" class="${classPrefix}-imgCover" />
      <table class="${classPrefix}-featureTable">
        <tr>
          <td>
            <div class="${classPrefix}-featureItem">
              <div class="${classPrefix}-featureIcon">
              <span data-gjs-type="icon" draggable="true" class="icon-display ${classPrefix}-rating-img-tick">
              <span data-icon="ph:placeholder-light" data-width="33px" class="iconify"></span>
            </span>
              </div>
              <div class="${classPrefix}-featureContent">
                <span class="${classPrefix}-h3">
                  Feature 1
                </span>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="${classPrefix}-featureItem">
              <div class="${classPrefix}-featureIcon">
              <span data-gjs-type="icon" draggable="true" class="icon-display ${classPrefix}-rating-img-tick">
              <span data-icon="ph:placeholder-light" data-width="33px" class="iconify"></span>
            </span>

              </div>
              <div class="${classPrefix}-featureContent">
                <span class="${classPrefix}-h3">
                  Feature 2
                </span>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="${classPrefix}-featureItem">
              <div class="${classPrefix}-featureIcon">
                <span data-gjs-type="icon" draggable="true" class="icon-display ${classPrefix}-rating-img-tick">
                  <span data-icon="ph:placeholder-light" data-width="33px" class="iconify"></span>
                </span>
              </div>
              <div class="${classPrefix}-featureContent">
                <span class="${classPrefix}-h3">
                  Feature 3
                </span>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="${classPrefix}-featureItem">
              <div class="${classPrefix}-featureIcon">
                <span data-gjs-type="icon" draggable="true" class="icon-display ${classPrefix}-rating-img-tick">
                  <span data-icon="ph:placeholder-light" data-width="33px" class="iconify"></span>
                </span>
              </div>
              <div class="${classPrefix}-featureContent">
                <span class="${classPrefix}-h3">
                  Feature 3
                </span>
              </div>
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
  .${classPrefix}-imgCover {
    object-fit: fill;
    aspect-ratio: 1;
    width: 360px;
    height: 240px;
    overflow: hidden;
  }  
}

.${classPrefix}-imgCover {
  object-fit: fill;
  aspect-ratio: 1;
  width: 600px;
  height: 400px;
  overflow: hidden;
}

.${classPrefix}-section {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 80px;
  min-width: 1440px;
}

@media (max-width: 425px) {
  .${classPrefix}-section {
    padding: 20px;
    min-width: 400px;
  }
}

.${classPrefix}-card {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}


@media (max-width: 425px) {
  .${classPrefix}-card {
    margin: 0;
  }
}

.${classPrefix}-cardHeading {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

@media (max-width: 425px) {
  .${classPrefix}-cardHeading {
    gap: 10px;
  }
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
    gap: 20px;
  }
}

.${classPrefix}-cardContent>.${classPrefix}-imgCover {
  max-height: 400px;
  border-radius: 10px;
}

.${classPrefix}-featureTable {
  width: 50%;
}

@media (max-width: 425px) {
  .${classPrefix}-featureTable {
    width: auto;
  }
}

.${classPrefix}-featureTable td {
  padding: 0 0 20px 0
}

.${classPrefix}-featureItem {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 15px;
  padding: 20px;
  border-bottom: 1px solid #abababb3;
}


@media (max-width: 425px) {
  .${classPrefix}-featureItem {
    padding: 20px 0;
    justify-content: flex-start;
    gap: 20px;
  }
}

.${classPrefix}-featureItem .${classPrefix}-p {
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
    align-self: center;
  }
}

.${classPrefix}-featureContent {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media (max-width: 425px) {
  .${classPrefix}-featureContent {}
}

.${classPrefix}-featureContent .${classPrefix}-p {
  max-width: 250px;
}
      `,
      },
    },
  });
};

export { productFeatures4Block, productFeatures4Component };
