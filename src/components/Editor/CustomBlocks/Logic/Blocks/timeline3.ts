import { Editor } from "grapesjs";

const timeline3Block = (editor: Editor) => {
  const options = {
    id: "Ye3",
    label: "Timeline 3",
    block: {},
    props: {},
    style: "",
    category: "Logic",
    classPrefix: "timeline3",
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

const timeline3Component = (editor: Editor) => {
  const options = {
    id: "Ye3",
    label: "Timeline 3",
    block: {},
    props: {},
    style: "",
    category: "Logic",
    classPrefix: "timeline3",
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
          <div class="${classPrefix}-cardContainerHidden">
            <p class="${classPrefix}-title">Timeline 1</p>
            <p class="${classPrefix}-desc">Description of the expected result at this stage</p>
          </div>
          <p class="${classPrefix}-circleWrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="10" fill="#999999"/>
            </svg>
          </p>
          <p class="${classPrefix}-imgWrapperDown">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="119" viewBox="0 0 12 119" fill="none">
              <path d="M5.46967 118.03C5.76256 118.323 6.23744 118.323 6.53033 118.03L11.3033 113.257C11.5962 112.964 11.5962 112.49 11.3033 112.197C11.0104 111.904 10.5355 111.904 10.2426 112.197L6 116.439L1.75736 112.197C1.46447 111.904 0.989593 111.904 0.696699 112.197C0.403806 112.49 0.403806 112.964 0.696699 113.257L5.46967 118.03ZM5.25 0V2.9375H6.75V0H5.25ZM5.25 8.8125V14.6875H6.75V8.8125H5.25ZM5.25 20.5625V26.4375H6.75V20.5625H5.25ZM5.25 32.3125V38.1875H6.75V32.3125H5.25ZM5.25 44.0625V49.9375H6.75V44.0625H5.25ZM5.25 55.8125V61.6875H6.75V55.8125H5.25ZM5.25 67.5625V73.4375H6.75V67.5625H5.25ZM5.25 79.3125V85.1875H6.75V79.3125H5.25ZM5.25 91.0625V96.9375H6.75V91.0625H5.25ZM5.25 102.812V108.688H6.75V102.812H5.25ZM5.25 114.562V117.5H6.75V114.562H5.25Z" fill="#999999"/>
            </svg>
          </p>
          <div class="${classPrefix}-cardContainer">
            <p class="${classPrefix}-title">Timeline 1</p>
            <p class="${classPrefix}-desc">Description of the expected result at this stage</p>
          </div>
        </div>
        <div class="${classPrefix}-childContainer">
          <div class="${classPrefix}-cardContainer">
            <p class="${classPrefix}-title">Timeline 2</p>
            <p class="${classPrefix}-desc">Description of the expected result at this stage</p>
          </div>
          <p class="${classPrefix}-imgWrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="119" viewBox="0 0 12 119" fill="none">
              <path d="M6.53033 0.46967C6.23744 0.176777 5.76256 0.176777 5.46967 0.46967L0.696699 5.24264C0.403806 5.53553 0.403806 6.01041 0.696699 6.3033C0.989593 6.59619 1.46447 6.59619 1.75736 6.3033L6 2.06066L10.2426 6.3033C10.5355 6.59619 11.0104 6.59619 11.3033 6.3033C11.5962 6.01041 11.5962 5.53553 11.3033 5.24264L6.53033 0.46967ZM5.25 1V2.95833H6.75V1H5.25ZM5.25 6.875V10.7917H6.75V6.875H5.25ZM5.25 14.7083V18.625H6.75V14.7083H5.25ZM5.25 22.5417V26.4583H6.75V22.5417H5.25ZM5.25 30.375V34.2917H6.75V30.375H5.25ZM5.25 38.2083V42.125H6.75V38.2083H5.25ZM5.25 46.0417V49.9583H6.75V46.0417H5.25ZM5.25 53.875V57.7917H6.75V53.875H5.25ZM5.25 61.7083V65.625H6.75V61.7083H5.25ZM5.25 69.5417V73.4583H6.75V69.5417H5.25ZM5.25 77.375V81.2917H6.75V77.375H5.25ZM5.25 85.2083V89.125H6.75V85.2083H5.25ZM5.25 93.0417V96.9583H6.75V93.0417H5.25ZM5.25 100.875V104.792H6.75V100.875H5.25ZM5.25 108.708V112.625H6.75V108.708H5.25ZM5.25 116.542V118.5H6.75V116.542H5.25Z" fill="#999999"/>
            </svg>
          </p>
          <p class="${classPrefix}-circleWrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="10" fill="#999999"/>
            </svg>
          </p>
          <div class="${classPrefix}-cardContainerHiddenTop">
            <p class="${classPrefix}-title">Timeline 1</p>
            <p class="${classPrefix}-desc">Description of the expected result at this stage</p>
          </div>
        </div>
        <div class="${classPrefix}-childContainer">
          <div class="${classPrefix}-cardContainerHidden">
            <p class="${classPrefix}-title">Timeline 1</p>
            <p class="${classPrefix}-desc">Description of the expected result at this stage</p>
          </div>
          <p class="${classPrefix}-circleWrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="10" fill="#999999"/>
            </svg>
          </p>
          <p class="${classPrefix}-imgWrapperDown">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="119" viewBox="0 0 12 119" fill="none">
              <path d="M5.46967 118.03C5.76256 118.323 6.23744 118.323 6.53033 118.03L11.3033 113.257C11.5962 112.964 11.5962 112.49 11.3033 112.197C11.0104 111.904 10.5355 111.904 10.2426 112.197L6 116.439L1.75736 112.197C1.46447 111.904 0.989593 111.904 0.696699 112.197C0.403806 112.49 0.403806 112.964 0.696699 113.257L5.46967 118.03ZM5.25 0V2.9375H6.75V0H5.25ZM5.25 8.8125V14.6875H6.75V8.8125H5.25ZM5.25 20.5625V26.4375H6.75V20.5625H5.25ZM5.25 32.3125V38.1875H6.75V32.3125H5.25ZM5.25 44.0625V49.9375H6.75V44.0625H5.25ZM5.25 55.8125V61.6875H6.75V55.8125H5.25ZM5.25 67.5625V73.4375H6.75V67.5625H5.25ZM5.25 79.3125V85.1875H6.75V79.3125H5.25ZM5.25 91.0625V96.9375H6.75V91.0625H5.25ZM5.25 102.812V108.688H6.75V102.812H5.25ZM5.25 114.562V117.5H6.75V114.562H5.25Z" fill="#999999"/>
            </svg>
          </p>
          <div class="${classPrefix}-cardContainer">
            <p class="${classPrefix}-title">Timeline 1</p>
            <p class="${classPrefix}-desc">Description of the expected result at this stage</p>
          </div>
        </div>
        <div class="${classPrefix}-childContainer">
          <div class="${classPrefix}-cardContainer">
            <p class="${classPrefix}-title">Timeline 4</p>
            <p class="${classPrefix}-desc">Description of the expected result at this stage</p>
          </div>
          <p class="${classPrefix}-imgWrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="119" viewBox="0 0 12 119" fill="none">
              <path d="M6.53033 0.46967C6.23744 0.176777 5.76256 0.176777 5.46967 0.46967L0.696699 5.24264C0.403806 5.53553 0.403806 6.01041 0.696699 6.3033C0.989593 6.59619 1.46447 6.59619 1.75736 6.3033L6 2.06066L10.2426 6.3033C10.5355 6.59619 11.0104 6.59619 11.3033 6.3033C11.5962 6.01041 11.5962 5.53553 11.3033 5.24264L6.53033 0.46967ZM5.25 1V2.95833H6.75V1H5.25ZM5.25 6.875V10.7917H6.75V6.875H5.25ZM5.25 14.7083V18.625H6.75V14.7083H5.25ZM5.25 22.5417V26.4583H6.75V22.5417H5.25ZM5.25 30.375V34.2917H6.75V30.375H5.25ZM5.25 38.2083V42.125H6.75V38.2083H5.25ZM5.25 46.0417V49.9583H6.75V46.0417H5.25ZM5.25 53.875V57.7917H6.75V53.875H5.25ZM5.25 61.7083V65.625H6.75V61.7083H5.25ZM5.25 69.5417V73.4583H6.75V69.5417H5.25ZM5.25 77.375V81.2917H6.75V77.375H5.25ZM5.25 85.2083V89.125H6.75V85.2083H5.25ZM5.25 93.0417V96.9583H6.75V93.0417H5.25ZM5.25 100.875V104.792H6.75V100.875H5.25ZM5.25 108.708V112.625H6.75V108.708H5.25ZM5.25 116.542V118.5H6.75V116.542H5.25Z" fill="#999999"/>
            </svg>
          </p>
          <p class="${classPrefix}-circleWrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="10" fill="#999999"/>
            </svg>
          </p>
          <div class="${classPrefix}-cardContainerHiddenTop">
            <p class="${classPrefix}-title">Timeline 1</p>
            <p class="${classPrefix}-desc">Description of the expected result at this stage</p>
          </div>
        </div>
        <div class="${classPrefix}-childContainer">
          <div class="${classPrefix}-cardContainerHidden">
            <p class="${classPrefix}-title">Timeline 1</p>
            <p class="${classPrefix}-desc">Description of the expected result at this stage</p>
          </div>
          <p class="${classPrefix}-circleWrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="10" fill="#999999"/>
            </svg>
          </p>
          <p class="${classPrefix}-imgWrapperDown">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="119" viewBox="0 0 12 119" fill="none">
              <path d="M5.46967 118.03C5.76256 118.323 6.23744 118.323 6.53033 118.03L11.3033 113.257C11.5962 112.964 11.5962 112.49 11.3033 112.197C11.0104 111.904 10.5355 111.904 10.2426 112.197L6 116.439L1.75736 112.197C1.46447 111.904 0.989593 111.904 0.696699 112.197C0.403806 112.49 0.403806 112.964 0.696699 113.257L5.46967 118.03ZM5.25 0V2.9375H6.75V0H5.25ZM5.25 8.8125V14.6875H6.75V8.8125H5.25ZM5.25 20.5625V26.4375H6.75V20.5625H5.25ZM5.25 32.3125V38.1875H6.75V32.3125H5.25ZM5.25 44.0625V49.9375H6.75V44.0625H5.25ZM5.25 55.8125V61.6875H6.75V55.8125H5.25ZM5.25 67.5625V73.4375H6.75V67.5625H5.25ZM5.25 79.3125V85.1875H6.75V79.3125H5.25ZM5.25 91.0625V96.9375H6.75V91.0625H5.25ZM5.25 102.812V108.688H6.75V102.812H5.25ZM5.25 114.562V117.5H6.75V114.562H5.25Z" fill="#999999"/>
            </svg>
          </p>
          <div class="${classPrefix}-cardContainer">
            <p class="${classPrefix}-title">Timeline 1</p>
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

.${classPrefix}-cardContainerHidden {
  visibility: hidden;
}

.${classPrefix}-cardContainerHiddenTop {
  visibility: hidden;
  height: 425px;
}

.${classPrefix}-section {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 80px;
  margin-bottom: 40px;
  width: 1422px;
}

.${classPrefix}-wrapper {
  position: relative;
}

.${classPrefix}-lineContainer {
  position: absolute;
  top: 435px;
  left: 14px;
}

.${classPrefix}-textWrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.${classPrefix}-textWrapper > p {
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
  width: 240px;
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
  margin-bottom: -24px;
}

.${classPrefix}-imgWrapperDown {
  margin-top: -24px;
}

@media (max-width: 425px) {
  .${classPrefix}-section {
    padding: 20px;
  }
}

      `,
      },
    },
  });
};

export { timeline3Block, timeline3Component };
