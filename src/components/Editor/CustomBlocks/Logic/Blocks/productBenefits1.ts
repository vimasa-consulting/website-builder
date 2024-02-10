import { Editor } from "grapesjs";

const productBenefits1Block = (editor: Editor) => {
  const options = {
    id: "Yc1",
    label: "Product Benefits 1",
    block: {},
    props: {},
    style: "",
    category: "Logic",
    classPrefix: "Yc1",
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

const productBenefits1Component = (editor: Editor) => {
  const options = {
    id: "Yc1",
    label: "Product Benefits 1",
    block: {},
    props: {},
    style: "",
    category: "Logic",
    classPrefix: "Yc1",
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
    <div class="${classPrefix}-cardContent">
      <div class="${classPrefix}-showOnlyOnMobile">
        <img loading="lazy" src="/editor/component-icons/image-icon.png" class="${classPrefix}-imgCover" />
      </div>
      <div class="${classPrefix}-benefitsWrapper">
        <table class="${classPrefix}-benefitsTable">
          <tr>
            <td>
              <div class="${classPrefix}-benefitsItem">
                <div class="${classPrefix}-benefitsIcon">
                  <span data-gjs-type="icon" draggable="true" class="icon-display ${classPrefix}-rating-img-tick">
                    <span data-icon="teenyicons:tick-circle-outline" data-width="33px" class="iconify"></span>
                  </span>
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
            </td>
          </tr>
          <tr>
            <td>
              <div class="${classPrefix}-benefitsItem">
                <div class="${classPrefix}-benefitsIcon">
                <span data-gjs-type="icon" draggable="true" class="icon-display ${classPrefix}-rating-img-tick">
                  <span data-icon="teenyicons:tick-circle-outline" data-width="33px" class="iconify"></span>
                </span>
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
            </td>
          </tr>
        </table>
        <div class="${classPrefix}-hideOnMobile">
          <img loading="lazy" src="/editor/component-icons/image-icon.png" class="${classPrefix}-imgCover" />
        </div>
        <table class="${classPrefix}-benefitsTable">
          <tr>
            <td>
              <div class="${classPrefix}-benefitsItem">
                <div class="${classPrefix}-benefitsIcon">
                <span data-gjs-type="icon" draggable="true" class="icon-display ${classPrefix}-rating-img-tick">
                  <span data-icon="teenyicons:tick-circle-outline" data-width="33px" class="iconify"></span>
                </span>
              
                </div>
                <div class="${classPrefix}-benefitsContent">
                  <span class="${classPrefix}-h3">
                    Benefit 3
                  </span>
                  <span class="${classPrefix}-p">
                    Description of the benefit to your user
                  </span>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="${classPrefix}-benefitsItem">
              <span data-gjs-type="icon" draggable="true" class="icon-display ${classPrefix}-rating-img-tick">
              <span data-icon="teenyicons:tick-circle-outline" data-width="33px" class="iconify"></span>
            </span>
                <div class="${classPrefix}-benefitsContent">
                  <span class="${classPrefix}-h3">
                    Benefit 4
                  </span>
                  <span class="${classPrefix}-p">
                    Description of the benefit to your user
                  </span>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
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
.${classPrefix}-imgCover {
  object-fit: fill;  
  width: 396px;
  height: 524px;
  aspect-ratio: 1;
  overflow: hidden;
}
@media (min-width: 426px) {
  .${classPrefix}-showOnlyOnMobile {
    display: none;
  }
  .${classPrefix}-imgCover {
    object-fit: fill;  
    width: 302px;
    height: 400px;
    aspect-ratio: 1;
    overflow: hidden;
  }
}



.${classPrefix}-section {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 80px;
  max-width: 1440px;
  min-width: 1440px;
}

@media (max-width: 425px) {
  .${classPrefix}-section {
    min-width: 400px;
    padding: 60px 20px 0;
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
  gap: 80px;
}

@media (max-width: 425px) {
  .${classPrefix}-cardContent {
    margin-top: 30px;
    flex-direction: column;
    gap: 20px;
  }
}

.${classPrefix}-cardContent > .${classPrefix}-showOnlyOnMobile {
  text-align: center;
}

.${classPrefix}-cardContent .${classPrefix}-imgCover {
  max-height: 400px;
  border-radius: 10px;
  max-width: 100%;
}

.${classPrefix}-benefitsWrapper {
  display: flex;
  flex-direction: row;
}

@media (max-width: 425px) {
  .${classPrefix}-benefitsWrapper {
    flex-direction: row;
  }
}

.${classPrefix}-benefitsTable td {
  padding: 0 0 20px 0
}

.${classPrefix}-benefitsItem {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  gap: 15px;
  padding: 20px;
}


@media (max-width: 425px) {
  .${classPrefix}-benefitsItem {
    padding: 20px 0;
    gap: 10px;
  }
}

.${classPrefix}-benefitsItem .${classPrefix}-p {
  max-width: 250px;
}

.${classPrefix}-benefitsIcon {
  color: #000;
  border-radius: 50%;
  background-color: #d9d9d9;
  width: 38px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

@media (max-width: 425px) {
  .${classPrefix}-benefitsIcon {
    width: 20px;
    height: 20px;
    padding: 5px;
  }
}

.${classPrefix}-benefitsContent {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 18px;
}

@media (max-width: 425px) {
  .${classPrefix}-benefitsContent {
    gap: 10px;
  }
}

.${classPrefix}-benefitsContent .${classPrefix}-p {
  max-width: 250px;
}
      `,
      },
    },
  });
};

export { productBenefits1Block, productBenefits1Component };
