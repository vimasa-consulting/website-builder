import { Editor } from "grapesjs";

const productFeatures3Block = (editor: Editor) => {
  const options = {
    id: "Yb3",
    label: "Product Features 3",
    block: {},
    props: {},
    style: "",
    category: "Logic",
    classPrefix: "Yb3",
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

const productFeatures3Component = (editor: Editor) => {
  const options = {
    id: "Yb3",
    label: "Product Features 3",
    block: {},
    props: {},
    style: "",
    category: "Logic",
    classPrefix: "Yb3",
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
      <table class="${classPrefix}-featureTable">
        <tr>
          <td>
            <div class="${classPrefix}-featureItem">
              <div class="${classPrefix}-featureIcon">
                <img loading="lazy" src="/editor/component-icons/atom-editor.png" class="${classPrefix}-imgCover" />
              </div>
              <div class="${classPrefix}-featureContent">
                <span class="${classPrefix}-h3">
                  Feature 1
                </span>
                <span class="${classPrefix}-p">
                  Describe the feature crisply from your user&apos;s point of view
                </span>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="${classPrefix}-featureItem">
              <div class="${classPrefix}-featureIcon">
                <img loading="lazy" src="/editor/component-icons/add-to-cloud.png" class="${classPrefix}-imgCover" />
              </div>
              <div class="${classPrefix}-featureContent">
                <span class="${classPrefix}-h3">
                  Feature 2
                </span>
                <span class="${classPrefix}-p">
                  Describe the feature crisply from your user&apos;s point of view
                </span>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="${classPrefix}-featureItem">
              <div class="${classPrefix}-featureIcon">
                <img loading="lazy" src="/editor/component-icons/check-lock.png" class="${classPrefix}-imgCover" />
              </div>
              <div class="${classPrefix}-featureContent">
                <span class="${classPrefix}-h3">
                  Feature 3
                </span>
                <span class="${classPrefix}-p">
                  Describe the feature crisply from your user&apos;s point of view
                </span>
              </div>
            </div>
          </td>
        </tr>
      </table>
      <img loading="lazy" src="https://placehold.co/536x434" class="${classPrefix}-imgCover" />
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

.${classPrefix}-imgCover {
  object-fit: cover;
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
  margin: 0 auto;
}


@media (max-width: 425px) {
  .${classPrefix}-card {
    margin: 0;
  }
}

.${classPrefix}-cardHeading {
  text-align: center;
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
    flex-direction: column-reverse;
    gap: 30px;
  }
}

.${classPrefix}-cardContent>.${classPrefix}-imgCover {
  max-height: 400px;
}

.${classPrefix}-featureTable {
  width: 60%;
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
  justify-content: center;
  gap: 15px;
  padding: 20px 40px 20px 20px;
  border: 1px solid #abababb3;
  border-radius: 15px;
}


@media (max-width: 425px) {
  .${classPrefix}-featureItem {
    padding: 20px;
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
  gap: 15px;
}

@media (max-width: 425px) {
  .${classPrefix}-featureContent {
    gap: 0;
  }
}

.${classPrefix}-featureContent .${classPrefix}-p {
  max-width: 250px;
}
      `,
      },
    },
  });
};

export { productFeatures3Block, productFeatures3Component };
