import { Editor } from "grapesjs";

const timeline1Block = (editor: Editor) => {
  const options = {
    id: "Ye1",
    label: "Timeline 1",
    block: {},
    props: {},
    style: "",
    category: "Logic",
    classPrefix: "timeline1",
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

const timeline1Component = (editor: Editor) => {
  const options = {
    id: "Ye1",
    label: "Timeline 1",
    block: {},
    props: {},
    style: "",
    category: "Logic",
    classPrefix: "timeline1",
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
  <div class="${classPrefix}-wrapper">
      <div class="${classPrefix}-textWrapper">
        <p>Catchy headline about your
        Product’s Measurable results</p>
      </div>
      <div class="${classPrefix}-lineContainer">
        <svg xmlns="http://www.w3.org/2000/svg" width="1220" height="2" viewBox="0 0 1220 2" fill="none">
          <path d="M0 1H1220" stroke="#999999" stroke-width="2"/>
        </svg>
      </div>
      <div class="${classPrefix}-container">
        <div class="${classPrefix}-childContainer">
          <p class="${classPrefix}-imgWrapper">
          <span data-gjs-type="icon" draggable="true" class="icon-display ${classPrefix}-rating-img-tick">
          <span data-icon="ph:placeholder-light" data-width="33px" class="iconify"></span>
        </span>
          </p>
          <p class="${classPrefix}-circleWrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="10" fill="#999999"/>
            </svg>
          </p>
          <div class="${classPrefix}-cardContainer">
            <p class="${classPrefix}-title">Timeline 1</p>
            <p class="${classPrefix}-desc">Description of the expected result at this stage</p>
          </div>
        </div>
        <div class="${classPrefix}-childContainer">
          <p class="${classPrefix}-imgWrapper">
          <span data-gjs-type="icon" draggable="true" class="icon-display ${classPrefix}-rating-img-tick">
          <span data-icon="ph:placeholder-light" data-width="33px" class="iconify"></span>
        </span>
          </p>
          <p class="${classPrefix}-circleWrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="10" fill="#999999"/>
            </svg>
          </p>
          <div class="${classPrefix}-cardContainer">
            <p class="${classPrefix}-title">Timeline 2</p>
            <p class="${classPrefix}-desc">Description of the expected result at this stage</p>
          </div>
        </div>
        <div class="${classPrefix}-childContainer">
          <p class="${classPrefix}-imgWrapper">
          <span data-gjs-type="icon" draggable="true" class="icon-display ${classPrefix}-rating-img-tick">
          <span data-icon="ph:placeholder-light" data-width="33px" class="iconify"></span>
        </span>
          </p>
          <p class="${classPrefix}-circleWrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="10" fill="#999999"/>
            </svg>
          </p>
          <div class="${classPrefix}-cardContainer">
            <p class="${classPrefix}-title">Timeline 3</p>
            <p class="${classPrefix}-desc">Description of the expected result at this stage</p>
          </div>
        </div>
        <div class="${classPrefix}-childContainer">
          <p class="${classPrefix}-imgWrapper">
          <span data-gjs-type="icon" draggable="true" class="icon-display ${classPrefix}-rating-img-tick">
          <span data-icon="ph:placeholder-light" data-width="33px" class="iconify"></span>
        </span>
          </p>
          <p class="${classPrefix}-circleWrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="10" fill="#999999"/>
            </svg>
          </p>
          <div class="${classPrefix}-cardContainer">
            <p class="${classPrefix}-title">Timeline 4</p>
            <p class="${classPrefix}-desc">Description of the expected result at this stage</p>
          </div>
        </div>
        <div class="${classPrefix}-childContainer">
          <p class="${classPrefix}-imgWrapper">
          <span data-gjs-type="icon" draggable="true" class="icon-display ${classPrefix}-rating-img-tick">
          <span data-icon="ph:placeholder-light" data-width="33px" class="iconify"></span>
        </span>
          </p>
          <p class="${classPrefix}-circleWrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="10" fill="#999999"/>
            </svg>
          </p>
          <div class="${classPrefix}-cardContainer">
            <p class="${classPrefix}-title">Timeline 5</p>
            <p class="${classPrefix}-desc">Description of the expected result at this stage</p>
          </div>
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

.${classPrefix}-section {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 80px;
  min-width: 1440px;
}

.${classPrefix}-wrapper {
  position: relative;
}

.${classPrefix}-lineContainer {
  position: absolute;
  top: 287px;
  left: 14px;
}

.${classPrefix}-textWrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.${classPrefix}-textWrapper > p {
  width: 564px;
  color: #000;
  text-align: center;
  font-family: Inter, sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.${classPrefix}-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 24px;
}

.${classPrefix}-childContainer {
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  text-align: center;
  align-items: center;
}

.${classPrefix}-cardContainer {
  border-radius: 15px;
  border: 1px solid #ABABAB;
  width: 187px;
  height: 153px;
  padding: 18px;
  display: flex;
  flex-direction: column;
  text-align: left;
}

.${classPrefix}-circleWrapper {
  margin-bottom: 20px;
}

.${classPrefix}-title {
  margin-bottom: 0px;
  color: #000;
  font-family: Inter, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.${classPrefix}-desc {
  margin-bottom: 10px;
  color: #000;
  font-family: Inter, sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; 
}

.${classPrefix}-imgWrapper {
  margin-bottom: 7px;
}

@media (max-width: 425px) {
  .${classPrefix}-section {
    padding: 20px;
    padding-bottom: 51px;
    padding-top: 0px;
    min-width: 400px;
  }
  .${classPrefix}-textWrapper > p {
    font-size: 25px;
    font-style: normal;
    font-weight: 600;
    line-height: 35px;
    margin-bottom: 0px;
    margin-top: 31px;
  }
  .${classPrefix}-textWrapper {
    margin-bottom: 0px;
  }
  .${classPrefix}-cardContainer {
    width: 106px;
    height: unset;
    padding: 16px;
  }
  .${classPrefix}-childContainer {
    display: none;
  }
  .${classPrefix}-childContainer:nth-child(1),
  .${classPrefix}-childContainer:nth-child(2),
  .${classPrefix}-childContainer:nth-child(3) {
    display: flex;
  }
  .${classPrefix}-title {
    font-size: 15px;
    margin-top: 0px;
  }
  .${classPrefix}-lineContainer {
    position: absolute;
    top: 236px;
    left: -4px;
    max-width: 352px;
    overflow: hidden;
  }
  .${classPrefix}-container {
    margin-top: 45px;
  }
  .${classPrefix}-desc {
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
}
      `,
      },
    },
  });
};

export { timeline1Block, timeline1Component };
