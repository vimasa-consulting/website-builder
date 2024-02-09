import { Editor } from "grapesjs";

const options = {
  id: "Vc2",
  label: "Multi Product Offers - 2",
  block: {},
  props: {},
  style: "",
  category: "Value",
  classPrefix: "value-multiProductOffers2",
  styleAdditional: "",
  media: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sign-intersection-fill" viewBox="0 0 16 16">
    <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435ZM7.25 4h1.5v3.25H12v1.5H8.75V12h-1.5V8.75H4v-1.5h3.25V4Z"/>
  </svg>`,
};

const block = (editor: Editor) => {
  editor.Blocks.add(options.id, {
    media: options.media,
    label: options.label,
    category: options.category,
    content: { type: options.id },
    ...options.block,
  });
};

const component = (editor: Editor) => {
  const { classPrefix } = options;

  editor.Components.addType(options.id, {
    model: {
      defaults: {
        classes: [classPrefix],
        traits: [],
        components: `
<section class="${classPrefix}-section">
  <div class="${classPrefix}-container">
    <div class="${classPrefix}-heading-wrapper">
      <h1 class="${classPrefix}-section-heading">Catchy headline about product range & offers</h1>
    </div>
    <div class="${classPrefix}-image-container">
      <div class="${classPrefix}-image-item">
        <img loading="lazy" src="/editor/component-icons/image-icon.png" class="${classPrefix}-image" />
        <div class="${classPrefix}-wrapper">
          <div class="${classPrefix}-sub-heading">Product Name 1</div>
          <div class="${classPrefix}-heading">Up to 60% Off</div>
        </div>
      </div>
      <div class="${classPrefix}-image-item">
        <img loading="lazy" src="/editor/component-icons/image-icon.png" class="${classPrefix}-image" />
        <div class="${classPrefix}-wrapper">
          <div class="${classPrefix}-sub-heading">Product Name 2</div>
          <div class="${classPrefix}-heading">Up to 60% Off</div>
        </div>
      </div>
      <div class="${classPrefix}-image-item">
        <img loading="lazy" src="/editor/component-icons/image-icon.png" class="${classPrefix}-image" />
        <div class="${classPrefix}-wrapper">
          <div class="${classPrefix}-sub-heading">Product Name 3</div>
          <div class="${classPrefix}-heading">Up to 60% Off</div>
        </div>
      </div>
      <div class="${classPrefix}-image-item">
        <img loading="lazy" src="/editor/component-icons/image-icon.png" class="${classPrefix}-image" />
        <div class="${classPrefix}-wrapper">
          <div class="${classPrefix}-sub-heading">Product Name 4</div>
          <div class="${classPrefix}-heading">Up to 60% Off</div>
        </div>
      </div>
      <div class="${classPrefix}-image-item">
        <img loading="lazy" src="/editor/component-icons/image-icon.png" class="${classPrefix}-image" />
        <div class="${classPrefix}-wrapper">
          <div class="${classPrefix}-sub-heading">Product Name 4</div>
          <div class="${classPrefix}-heading">Up to 60% Off</div>
        </div>
      </div>      
    </div>
  </div>
</section>
        `,
        styles: `
.${classPrefix}-section {
  min-width: 1440px;
  padding: 3.5rem 1rem;
  margin: 0 auto;
  font-family: Inter, sans-serif;
}

.${classPrefix}-container {
  margin: 0 auto;
  max-width: 1440px;
}

.${classPrefix}-heading-wrapper {
  margin: 0 auto 26px 0;
}

.${classPrefix}-section-heading {
  color: #000;
  text-align: center;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0;
}

.${classPrefix}-image-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;
  column-gap: 32px;
  margin-top: 70px;
}

.${classPrefix}-image-item {
  max-width: 215px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.${classPrefix}-image {
  background: grey;
  border-radius: 10px;
  width: 215px;
  height: 301px;
}

.${classPrefix}-wrapper {
  padding: 1rem 0 0;
  text-align: left;
}

.${classPrefix}-heading {
  color: #000;
  font-family: Inter, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.${classPrefix}-sub-heading {
  color: #000;
  font-family: Inter, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 25.2px */
  margin-bottom: 10px;
}

@media (max-width: 480px) {
  .${classPrefix}-section {
    min-width: 400px;
    padding: 32px 10px 42px;
  }

  .${classPrefix}-container {
    max-width: 100%;
  }

  .${classPrefix}-section-heading {
    color: #000;
    text-align: center;
    font-family: Inter, sans-serif;
    font-size: 26px;
    font-style: normal;
    font-weight: 600;
    line-height: 35px;
  }

  .${classPrefix}-heading-wrapper {
    margin: 0 auto 36px 0;
  }

  .${classPrefix}-section-heading {
    font-size: 26px;
  }

  .${classPrefix}-image-item {
    width: 100%;
    max-width: 128px;
  }

  .${classPrefix}-image-item:nth-child(4) {
    display: none;
  }

  .${classPrefix}-image {
    width: 110px;
    height: 170px;
  }

  .${classPrefix}-heading {
    color: #000;
    font-family: Inter, sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
  }

  .${classPrefix}-sub-heading {
    color: #000;
    font-family: Inter, sans-serif;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    margin-bottom: 5px;
  }

  .${classPrefix}-image-container {
    margin-top: 0;
    justify-items: space-between;
    flex-wrap: unset;
    flex-direction: row;
    gap: 0px;
  }
}

        `,
      },
    },
  });
};

export {
  block as multiProductOffers2Block,
  component as multiProductOffers2Component,
};
