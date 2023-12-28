import { Editor } from "grapesjs";

const beforeAfter2Block = (editor: Editor) => {
  const options = {
    id: "Ua2",
    label: "Before After 2",
    block: {},
    props: {},
    style: "",
    category: "Trust",
    classPrefix: "trust-beforeAfter2",
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

const beforeAfter2Component = (editor: Editor) => {
  const options = {
    id: "Ua2",
    label: "Before After 2",
    block: {},
    props: {},
    style: "",
    category: "Trust",
    classPrefix: "trust-beforeAfter2",
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
                  <div class="${classPrefix}-content">
                    <div class="${classPrefix}-card-3">
                      <div class="${classPrefix}-panel-3">
                        <h1 class="${classPrefix}-title">
                          Header Highlighting the Transformation
                        </h1>
                        <p class="${classPrefix}-description">
                          Use emotionally powerful words to convey that your product is the
                          key to the dream transformation your user is longing for
                        </p>
                      </div>
                    </div>
                    <div class="${classPrefix}-cardWrapper">

                      <div class="${classPrefix}-card">
                      
                        <div class="${classPrefix}-panel">
                        <img loading="lazy" src="https://placehold.co/574x408" class="${classPrefix}-image" />
                        </div>
                        <div class="${classPrefix}-before"><span>Before</span></div>
                      </div>
                      <div class="${classPrefix}-card-2">
                      <div class="${classPrefix}-after"><span>After</span></div>
                        <div class="${classPrefix}-panel-2">
                        <img loading="lazy" src="https://placehold.co/574x408" class="${classPrefix}-image" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
                            
        `,
        styles: `
        .${classPrefix}-section {
            justify-content: center;
            align-items: center;
            background-color: #fff;
            display: flex;
            flex-direction: column;
            padding: 79px 0;
            padding-bottom: 340px;
          }
          
          .${classPrefix}-wrapper {
            align-self: center;
            width: 100%;
            max-width: 1202px;
          }
          
          .${classPrefix}-content {
            display: flex;
            gap: 57px;
          }

          .${classPrefix}-cardWrapper {
            display: flex;
            height: 550px;
            width: 429px;
          }
          
          .${classPrefix}-card {
            display: flex;
            flex-direction: column;
            line-height: normal;
            width: 50%;
            margin-left: 0px;
            min-height: 550px;
            min-width: 429px;
          }
          
          .${classPrefix}-panel {
            border-radius: 10px;
            background-color: #d9d9d9;
            display: flex;
            flex-direction: column;
            margin: 0 auto;
            height: 550px;
            min-width: 429px;
          }

          .${classPrefix}-before {
            margin-top: 19px;
            margin-left: 50px;
            color: #000;
            font-family: Inter, sans-serif;
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
          }

          .${classPrefix}-after {
            margin-bottom: 19px;
            margin-right: 50px;
            text-align: right;
            color: #000;
            font-family: Inter, sans-serif;
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
          }
          
          .${classPrefix}-image {
            width: 100%;
            height: 550px;
            object-fit: cover;
            border-radius: 10px;
          }
          
          .${classPrefix}-caption {
            display: flex;
            flex-direction: column;
            color: #000;
            text-align: center;
            position: relative;
            fill: #fff;
            overflow: hidden;
            align-self: stretch;
            aspect-ratio: 5.6;
            margin-top: 197px;
            width: 100%;
            font: 500 20px Inter, sans-serif;
          }
          
          .${classPrefix}-image-2 {
            width: 100%;
            height: 550px;
            object-fit: cover;
            border-radius: 10px;
          }
          
          .${classPrefix}-div-6 {
            position: relative;
          }
          
          .${classPrefix}-card-2 {
            display: flex;
            flex-direction: column;
            line-height: normal;
            width: 50%;
            margin-top: 140px;
            margin-left: -81px;
            height: 550px;
            width: 429px;
          }
          
          .${classPrefix}-panel-2 {
            border-radius: 10px;
            background-color: #e9e9e9;
            display: flex;
            flex-direction: column;
            height: 550px;
            width: 429px;
          }
          
          .${classPrefix}-caption-2 {
            display: flex;
            flex-direction: column;
            color: #000;
            text-align: center;
            position: relative;
            fill: #fff;
            overflow: hidden;
            align-self: stretch;
            aspect-ratio: 5.6;
            margin-top: 197px;
            width: 100%;
            padding: 20px 80px;
            font: 500 20px Inter, sans-serif;
          }
          
          .${classPrefix}-image-3 {
            position: absolute;
            height: 100%;
            width: 100%;
            object-fit: cover;
            object-position: center;
          }
          
          .${classPrefix}-div-9 {
            position: relative;
          }
          
          .${classPrefix}-card-3 {
            display: flex;
            flex-direction: column;
            line-height: normal;
            width: 28%;
          }
          
          .${classPrefix}-panel-3 {
            display: flex;
            flex-direction: column;
            margin: auto 0;
            padding-right: 10px;
          }
          
          .${classPrefix}-button {
            display: block;
            width: 100%;
            height: 100%;
            max-height: 55px;
            border-radius: 10px;
            border: none;
            cursor: pointer;
            font-size: 20px;
            background-color: white;
          }
          
          .${classPrefix}-title {
            color: #000;
            margin-bottom: 0;
            font-family: Inter, Roboto, sans-serif;
            margin-right: 15px;
            margin-top: -5px;
            font-size: 40px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
          }
          
          .${classPrefix}-description {
            color: #000;
            align-self: stretch;
            font: 400 15px/140% Inter, -apple-system, Roboto, Helvetica, sans-serif;
            padding-right: 20px;
          }
          
          @media (max-width: 768px) {

            .${classPrefix}-before {
              margin-top: 5px;
              margin-left: 10px;
              color: #000;
              font-family: Inter, sans-serif;
              font-size: 15px;
              font-style: normal;
              font-weight: 400;
              line-height: normal;
            }
  
            .${classPrefix}-after {
              margin-bottom: 5px;
              margin-right: 10px;
              text-align: right;
              color: #000;
              font-family: Inter, sans-serif;
              font-size: 15px;
              font-style: normal;
              font-weight: 400;
              line-height: normal;
            }

            .${classPrefix}-cardWrapper {
              display: flex;
              height: 230px;
              width: 170px;
              margin-left: 56px;
              margin-top: 33px;
            }
            
            .${classPrefix}-card {
              display: flex;
              flex-direction: column;
              line-height: normal;
              width: 50%;
              margin-left: 0px;
              min-height: 230px;
              min-width: 170px;
            }
            
            .${classPrefix}-panel {
              border-radius: 10px;
              background-color: #d9d9d9;
              display: flex;
              flex-direction: column;
              margin: 0 auto;
              min-height: 230px;
              min-width: 170px;
            }

            .${classPrefix}-image {
              width: 100%;
              height: 230px;
              object-fit: cover;
              border-radius: 10px;
            }

            .${classPrefix}-card-2 {
              display: flex;
              flex-direction: column;
              line-height: normal;
              width: 50%;
              margin-top: 72px;
              margin-left: -49px;
              height: 140px;
              width: 160px;
            }
            
            .${classPrefix}-panel-2 {
              border-radius: 10px;
              background-color: #e9e9e9;
              display: flex;
              flex-direction: column;
              height: 230px;
              width: 160px;
            }

            .${classPrefix}-image-2 {
              width: 100%;
              height: 230px;
              object-fit: cover;
              border-radius: 10px;
            }

            .${classPrefix}-title {
              color: #000;
              width: 265px;
              font-family: Inter, sans-serif;
              font-size: 26px;
              font-style: normal;
              font-weight: 600;
              line-height: 35px; 
            }

            .${classPrefix}-description {
              color: #000;
              font-family: Inter, sans-serif;
              font-size: 13px;
              font-style: normal;
              font-weight: 400;
              line-height: 140%;
              max-width: 320px;
              padding-right: unset;
            }
            .${classPrefix}-section {
              padding: unset;
              padding-bottom: 110px;
            }
          
            .${classPrefix}-wrapper {
              max-width: 100%;
              margin: 53px 0;
            }
          
            .${classPrefix}-content {
              flex-direction: column;
              align-items: stretch;
              gap: 0px;
            }
          
            .${classPrefix}-card {
              width: 100%;
            }
          
            .${classPrefix}-panel {
              padding: 100px 20px 0;
            }
          
            .${classPrefix}-caption {
              margin-top: 40px;
              padding: 0 20px;
              margin-bottom: 20px;
            }
          
            .${classPrefix}-card-2 {
              width: 100%;
            }

            .${classPrefix}-cardWrapper {
                width: 100%;
              }
          
            .${classPrefix}-panel-2 {
              padding: 100px 20px 0;
            }
          
            .${classPrefix}-caption-2 {
              margin-top: 40px;
              padding: 0 20px;
              margin-bottom: 20px;
            }
          
            .${classPrefix}-card-3 {
              width: 100%;
            }
          
            .${classPrefix}-panel-3 {
              padding: 0 40px;
            }
            .${classPrefix}-button {
                font-size: 14px;
            }
          }
          
        `,
      },
    },
  });
};

export { beforeAfter2Block, beforeAfter2Component };
