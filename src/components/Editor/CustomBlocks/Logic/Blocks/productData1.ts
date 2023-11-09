import { Editor } from "grapesjs";

const productData1Block = (editor: Editor) => {
  const options = {
    id: "logic-productData1",
    label: "Product Data 1",
    block: {},
    props: {},
    style: "",
    category: "Logic",
    classPrefix: "logic-productData1",
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

const productData1Component = (editor: Editor) => {
  const options = {
    id: "logic-productData1",
    label: "Product Data 1",
    block: {},
    props: {},
    style: "",
    category: "Logic",
    classPrefix: "logic-productData1",
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
      <span class="${classPrefix}-h1">Give a big picture of your product/brand&apos;s Impact</span>
      <div class="${classPrefix}-rectangle"></div>
      <span class="${classPrefix}-p">Short description on what the data means and its consequence for the user</span>
    </div>
    <div class="${classPrefix}-cardContent">
      <div class="${classPrefix}-metricItem">
        <span class="${classPrefix}-metricValue">80M</span>
        <span class="${classPrefix}-metricTitle">Big Metric 1</span>
      </div>
      <div class="${classPrefix}-metricItem">
        <span class="${classPrefix}-metricValue">56%</span>
        <span class="${classPrefix}-metricTitle">Big Metric 2</span>
      </div>
      <div class="${classPrefix}-metricItem">
        <span class="${classPrefix}-metricValue">80M</span>
        <span class="${classPrefix}-metricTitle">Big Metric 3</span>
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
  padding: 80px;
}

@media (max-width: 425px) {
  .${classPrefix}-section {
    padding: 20px 10px;
  }
}

.${classPrefix}-card {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 60px;
}

@media (max-width: 425px) {
  .${classPrefix}-card {
    gap: 30px;
  }
}

.${classPrefix}-cardHeading {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  text-align: center;
}

@media (max-width: 425px) {
  .${classPrefix}-cardHeading {
    gap: 15px;
  }
}

.${classPrefix}-rectangle {
  width: 73px;
  height: 4px;
  border-radius: 5px;
  background: #D9D9D9;
}

.${classPrefix}-cardContent {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 50px;
}

@media (max-width: 425px) {
  .${classPrefix}-cardContent {
    gap: 10px;
  }
}

.${classPrefix}-metricItem {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  border: 1px solid #abababb3;
  padding: 30px 50px;
  text-align: center;
  width: 100%;
}

@media (max-width: 425px) {
  .${classPrefix}-metricItem {
    padding: 10px;
    border-radius: 5.${classPrefix}-714px;
    border: 0.${classPrefix}-8px solid #abababb3;
  }
}

.${classPrefix}-metricValue {
  display: block;
  font-size: 52px;
  color: #2C2C2C;
  font-weight: 600;
}

@media (max-width: 425px) {
  .${classPrefix}-metricValue {
    font-size: 26px;
  }
}

.${classPrefix}-metricTitle {
  display: block;
  font-size: 20px;
  color: #2C2C2C;
}

@media (max-width: 425px) {
  .${classPrefix}-metricTitle {
    font-size: 10px;
  }
}
      `,
      },
    },
  });
};

export { productData1Block, productData1Component };
