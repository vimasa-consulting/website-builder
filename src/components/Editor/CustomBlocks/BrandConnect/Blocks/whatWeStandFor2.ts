import { Editor } from "grapesjs";

const options = {
  id: "Tb2",
  label: "What We Stand For - 2",
  block: {},
  props: {},
  style: "",
  category: "Brand Connect",
  classPrefix: "brandConnect-whatWeStandFor2",
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
  const methods: any = {
    model: {
      defaults: {
        classes: [classPrefix],
        traits: [],
        components: `
          <section class="${classPrefix}-section">
          <h1 class="${classPrefix}-title">What you stand for in one bold line</h1>
          <p class="${classPrefix}-subTitle">Elaborate on your core belief & ideology as a brand. Mention specific pointers about what you stand for, and avoid being vague or generic.</p>
            <div class="${classPrefix}-container">
              <img loading="lazy" src="/editor/component-icons/image-icon.png" class="${classPrefix}-image" />              
              <div class="${classPrefix}-contentWrapper">
              <div class="${classPrefix}-content">
             <span data-gjs-type="icon" draggable="true" class="icon-display ${classPrefix}-rating-img-tick">
                    <span data-icon="teenyicons:tick-circle-outline" data-width="33px" class="iconify"></span>
                  </span>
               <p class="${classPrefix}-text">What you stand for 1</p>
              </div>
              <div class="${classPrefix}-content">
             <span data-gjs-type="icon" draggable="true" class="icon-display ${classPrefix}-rating-img-tick">
                    <span data-icon="teenyicons:tick-circle-outline" data-width="33px" class="iconify"></span>
                  </span>
               <p class="${classPrefix}-text">What you stand for 2</p>
              </div>
              <div class="${classPrefix}-content">
             <span data-gjs-type="icon" draggable="true" class="icon-display ${classPrefix}-rating-img-tick">
                    <span data-icon="teenyicons:tick-circle-outline" data-width="33px" class="iconify"></span>
                  </span>
               <p class="${classPrefix}-text">What you stand for 3</p>
              </div>
              <div class="${classPrefix}-content">
             <span data-gjs-type="icon" draggable="true" class="icon-display ${classPrefix}-rating-img-tick">
                    <span data-icon="teenyicons:tick-circle-outline" data-width="33px" class="iconify"></span>
                  </span>
               <p class="${classPrefix}-text">What you stand for 4</p>
              </div>
              <div class="${classPrefix}-content">
             <span data-gjs-type="icon" draggable="true" class="icon-display ${classPrefix}-rating-img-tick">
                    <span data-icon="teenyicons:tick-circle-outline" data-width="33px" class="iconify"></span>
                  </span>
               <p class="${classPrefix}-text">What you stand for 5</p>
              </div>
              </div>
            </div>
          </section>
        `,
        styles: `
          .${classPrefix}-section {
            padding: 5.25rem;
            font-family: Inter, sans-serif;
            max-width: 1440px;
            min-width: 1440px;
            margin-inline: auto;
          }
          .${classPrefix}-container {
            margin: 0 auto;
            display: flex;
            gap: 108px;
            justify-content: center;
            align-items: center;
          }

          .${classPrefix}-contentWrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 45px;
          }
          .${classPrefix}-content {
            display: flex;
            gap: 20px;
            text-align: center;
          }
          .${classPrefix}-title {
            text-align: center;
            font-size: 40px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            margin-top: 0;
            margin-bottom: 18px;
            color: #000;
          }
          .${classPrefix}-rating-img-tick {
            width: 33px;
            height: 33px;
            color: #ccc;
          }
          .${classPrefix}-subTitle {
            max-width: 830px;
            text-align: center;
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            margin: 0 auto;
            margin-bottom: 100px;
            color: #000;
          }
          .${classPrefix}-text {
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            margin: 0;
            margin-top: 3px;
            color: #000;
          }

          .${classPrefix}-small-heading {
            color: #000;
            font-family: Inter, sans-serif;
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 140%; /* 28px */
            color: #000;
          }

          .${classPrefix}-heading {
            color: #000;
            font-family: Inter, sans-serif;
            font-size: 40px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            margin: 0;
            color: #000;
          }

          .${classPrefix}-text {
            color: #000;
            font-family: Inter, sans-serif;
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            line-height: 140%; /* 21px */
            color: #000;
          }

          .${classPrefix}-image {
            border-radius: 10px;
            width: 482px;
            height: 419px
          }
          .${classPrefix}-image-icon {
            border-radius: 10px;
            width: 58px;
            height: 58px
          }
          @media (max-width: 400px) {
            .${classPrefix}-section {
              min-width: 400px;
              padding: 53px 40px 58px;
            }
            .${classPrefix}-title {
              font-size: 26px;
              font-style: normal;
              font-weight: 600;
              line-height: 35px;
            }
            .${classPrefix}-subTitle {
              font-size: 13px;
              font-style: normal;
              font-weight: 400;
              line-height: 140%;
              margin-bottom: 40px;
            }
            .${classPrefix}-image {
              width: 310px;
              height: 277px;
            }
            .${classPrefix}-container {
              flex-direction: column;
              gap: 43px;
              align-items: flex-start;
            }
            .${classPrefix}-content {
              gap: 10px;
            }
            .${classPrefix}-contentWrapper {
              align-items: flex-start;
              gap: 30px;
            }
            .${classPrefix}-text {
              font-size: 15px;
              font-style: normal;
              font-weight: 500;
              line-height: normal;
            }
          }

          @media (max-width: 480px) {
            .${classPrefix}-rating-img-tick {
              width: 25px;
              height: 25px;
              color: #ccc;
            }
          }
        `,
      },
    },
  };
  editor.Components.addType(options.id, methods);
};

export { block as whatWeStandFor2Block, component as whatWeStandFor2Component };
