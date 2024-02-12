import { Editor } from "grapesjs";

const timeline2Block = (editor: Editor) => {
  const options = {
    id: "Ye2",
    label: "Timeline 2",
    block: {},
    props: {},
    style: "",
    category: "Logic",
    classPrefix: "timeline2",
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

const timeline2Component = (editor: Editor) => {
  const options = {
    id: "Ye2",
    label: "Timeline 2",
    block: {},
    props: {},
    style: "",
    category: "Logic",
    classPrefix: "timeline2",
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
          <div class="${classPrefix}-headerTextWrapper">
            <p class="${classPrefix}-headerText">
              Catchy headline about your
              Product's Measurable results
            </p>
          </div>
          <svg class="${classPrefix}-horizontalLine" xmlns="http://www.w3.org/2000/svg" width="1440" height="2" viewBox="0 0 750 2" fill="none">
            <path d="M0 1L750 1" stroke="#999999" stroke-width="2" />
          </svg>
          <div class="${classPrefix}-cardsWrapper">
            <div class="${classPrefix}-cardLeft">
              <div class="${classPrefix}-vectorBox">
                <div class="${classPrefix}-rankWrapper">
                  <p>01</p>
                </div>
                <div class="${classPrefix}-imageWrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="217" height="75" viewBox="0 0 217 75" fill="none">
                    <path d="M6 1H5V0H6V1ZM11.3333 69C11.3333 71.9455 8.94551 74.3333 6 74.3333C3.05447 74.3333 0.666656 71.9455 0.666656 69C0.666656 66.0545 3.05447 63.6667 6 63.6667C8.94551 63.6667 11.3333 66.0545 11.3333 69ZM217 2H6V0H217V2ZM7 1V69H5V1H7Z" fill="#999999"/>
                  </svg>
                </div>
                <div class="${classPrefix}-descWrapper">
                  <p>Description of the expected result at this stage</p>
                </div>
              </div>
              <div class="${classPrefix}-uploadImageWrapper">
                <img loading="lazy" src="/editor/component-icons/image-icon.png" class="${classPrefix}-image" />
              </div>


              <div class="${classPrefix}-spacer"></div>


              <div class="${classPrefix}-vectorBox">
                <div class="${classPrefix}-rankWrapper">
                  <p>03</p>
                </div>
                <div class="${classPrefix}-imageWrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="217" height="75" viewBox="0 0 217 75" fill="none">
                    <path d="M6 1H5V0H6V1ZM11.3333 69C11.3333 71.9455 8.94551 74.3333 6 74.3333C3.05447 74.3333 0.666656 71.9455 0.666656 69C0.666656 66.0545 3.05447 63.6667 6 63.6667C8.94551 63.6667 11.3333 66.0545 11.3333 69ZM217 2H6V0H217V2ZM7 1V69H5V1H7Z" fill="#999999"/>
                  </svg>
                </div>
                <div class="${classPrefix}-descWrapper">
                  <p>Description of the expected result at this stage</p>
                </div>
              </div>
              <div class="${classPrefix}-uploadImageWrapper">
                <img loading="lazy" src="/editor/component-icons/image-icon.png" class="${classPrefix}-image" />
              </div>
            </div>
            <div class="${classPrefix}-cardRight">
              <div class="${classPrefix}-spacerRight"></div>
              <div class="${classPrefix}-vectorBoxRight">
                <div class="${classPrefix}-rankWrapperRight">
                  <p>02</p>
                </div>
                <div class="${classPrefix}-imageWrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="217" height="75" viewBox="0 0 217 75" fill="none">
                    <path d="M211 1H212V0H211V1ZM205.667 69C205.667 71.9455 208.054 74.3333 211 74.3333C213.946 74.3333 216.333 71.9455 216.333 69C216.333 66.0545 213.946 63.6667 211 63.6667C208.054 63.6667 205.667 66.0545 205.667 69ZM0 2H211V0H0V2ZM210 1V69H212V1H210Z" fill="#999999"/>
                  </svg>
                </div>
                <div class="${classPrefix}-descWrapperRight">
                  <p>Description of the expected result at this stage</p>
                </div>
              </div>
              <div class="${classPrefix}-uploadImageWrapper">
                <img loading="lazy" src="/editor/component-icons/image-icon.png" class="${classPrefix}-imageRight" />
              </div>

              <div class="${classPrefix}-spacerRightBottom"></div>

              <div class="${classPrefix}-vectorBoxRight">
                <div class="${classPrefix}-rankWrapperRight">
                  <p>04</p>
                </div>
                <div class="${classPrefix}-imageWrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="217" height="75" viewBox="0 0 217 75" fill="none">
                    <path d="M211 1H212V0H211V1ZM205.667 69C205.667 71.9455 208.054 74.3333 211 74.3333C213.946 74.3333 216.333 71.9455 216.333 69C216.333 66.0545 213.946 63.6667 211 63.6667C208.054 63.6667 205.667 66.0545 205.667 69ZM0 2H211V0H0V2ZM210 1V69H212V1H210Z" fill="#999999"/>
                  </svg>
                </div>
                <div class="${classPrefix}-descWrapperRight">
                  <p>Description of the expected result at this stage</p>
                </div>
              </div>
              <div class="${classPrefix}-uploadImageWrapper">
                <img loading="lazy" src="/editor/component-icons/image-icon.png" class="${classPrefix}-imageRight" />
              </div>

            </div>
          </div>
      </section>
        `,
        styles: `

        .${classPrefix}-vectorBox {
          text-align: right;
        }

        .${classPrefix}-vectorBoxRight {
          text-align: left;
        }

        .${classPrefix}-imageRight {
          width: 140px;
          height: 140px;
          border-radius: 50%;
          margin-left: 40px;
        }

        .${classPrefix}-rankWrapperRight {
          color: #000;
          font-family: Inter, sans-serif;
          font-size: 24px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          margin-left: 16px;
        }

        .${classPrefix}-descWrapperRight {
          width: 138px;
          margin-left: 16px;
          margin-top: -71px;
          color: #000;
          font-family: Inter, sans-serif;
          font-size: 15px;
          font-style: normal;
          font-weight: 400;
          line-height: 140%;
        }

        .${classPrefix}-spacerRight {
          margin-top: 200px;
        }

        .${classPrefix}-spacerRightBottom {
          margin-top: 76px;
        }

        .${classPrefix}-uploadImageWrapper {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .${classPrefix}-image {
          width: 140px;
          height: 140px;
          border-radius: 50%;
          margin-left: -61px;
        }

        .${classPrefix}-rankWrapper {
          color: #000;
          text-align: right;
          font-family: Inter, sans-serif;
          font-size: 24px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          margin-right: 16px;
        }

        .${classPrefix}-descWrapper {
          width: 138px;
          text-align: right;
          float: right;
          margin-right: 16px;
          margin-top: -71px;
          color: #000;
          text-align: right;
          font-family: Inter, sans-serif;
          font-size: 15px;
          font-style: normal;
          font-weight: 400;
          line-height: 140%;
        }

        .${classPrefix}-spacer {
          margin-top: 62px;
        }

        .${classPrefix}-cardsWrapper {
          display: flex;
          flex-direction: row;
          margin-top: -5px;
        }

        .${classPrefix}-cardLeft {
          display: flex;
          flex: 1;
          flex-direction: column;
          border-right: 2px solid #999;
          padding-top: 65px;
        }

        .${classPrefix}-cardRight {
          display: flex;
          flex: 1;
          flex-direction: column;
          padding-top: 10px;
        }

        .${classPrefix}-section {
          min-width: 1440px;
          margin: 0 auto;
          margin-bottom: 20px;
        }

        .${classPrefix}-headerTextWrapper {
          display: flex;
          justify-content: center;
        }

        .${classPrefix}-headerText {
          color: #000;
          text-align: center;
          font-family: Inter, sans-serif;
          font-size: 40px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          width: 567px;
        }
        @media (max-width: 400px) {
          .${classPrefix}-section {
            max-width: 400px;
            min-width: 400px;
            margin-bottom: 42px;
          } 
          .${classPrefix}-headerText {
            font-size: 26px;
          } 
          .${classPrefix}-horizontalLine {
            max-width: 365px;
            margin: 0 10px;
          } 
          .${classPrefix}-cardLeft {
            padding-top: 41px;
          } 
          .${classPrefix}-spacerRight {
            margin-top: 135px;
          } 
          .${classPrefix}-descWrapper, .${classPrefix}-descWrapperRight {
            font-size: 13px;
            font-style: normal;
            font-weight: 400;
            width: 102px;
          } 
          .${classPrefix}-descWrapper > p, .${classPrefix}-descWrapperRight > p {
            margin-bottom: 0;
          } 
          .${classPrefix}-imageWrapper > svg {
            width: 130px;
          } 
          .${classPrefix}-image , .${classPrefix}-imageRight {
              width: 89px;
              height: 89px;
          } 
        }
      `,
      },
    },
  });
};

export { timeline2Block, timeline2Component };
