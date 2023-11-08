import { Editor } from "grapesjs";

const beforeAfter4Block = (editor: Editor) => {
  const options = {
    id: "trust-beforeAfter4",
    label: "Before After 4",
    block: {},
    props: {},
    style: "",
    category: "Trust",
    classPrefix: "trust-beforeAfter4",
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

const beforeAfter4Component = (editor: Editor) => {
  const options = {
    id: "trust-beforeAfter4",
    label: "Before After 4",
    block: {},
    props: {},
    style: "",
    category: "Trust",
    classPrefix: "trust-beforeAfter4",
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
                    <div class="${classPrefix}-cardWrapper">

                      <div class="${classPrefix}-card">
                        <div class="${classPrefix}-before"><span>Before</span></div>
                        <p class="${classPrefix}-description">
                          Use emotionally powerful words to describe user's "Before" experience
                        </p>
                        <div class="${classPrefix}-panel">
                        <img loading="lazy" src="https://placehold.co/574x408" class="${classPrefix}-image-1" />
                        </div>
                      </div>
                      <div class="${classPrefix}-card-2">
                        <div class="${classPrefix}-panel-2">
                        <img loading="lazy" src="https://placehold.co/574x408" class="${classPrefix}-image" />
                        </div>
                        <div class="${classPrefix}-after"><span>After</span></div>
                        <p class="${classPrefix}-description-2">
                          Use emotionally powerful words to describe user's "After" experience
                        </p>
                      </div>
                    </div>
                    <div class="${classPrefix}-after-mobile"><span>After</span></div>
                    <p class="${classPrefix}-description-mobile">
                      Use emotionally powerful words to describe user's "After" experience
                    </p>
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
            padding: 20px 80px;
            max-height: 700px;
            margin-top: 20px;
          }

          .${classPrefix}-after-mobile {
            display: none;
          }

          .${classPrefix}-description-mobile {
            display: none;
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
            width: 500px;
          }
          
          .${classPrefix}-card {
            display: flex;
            flex-direction: column;
            line-height: normal;
            width: 50%;
            margin-left: 0px;
            min-height: 550px;
            min-width: 500px;
          }
          
          .${classPrefix}-panel {
            border-radius: 10px;
            background-color: #fff;
            display: flex;
            flex-direction: column;
            margin: 0 auto;
            height: 550px;
            min-width: 500px;
          }

          .${classPrefix}-before {
            margin-top: 19px;
            color: #000;
            font-family: Inter;
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
          }

          .${classPrefix}-after {
            text-align: right;
            color: #000;
            font-family: Inter;
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            margin-top: 10px;
          }

          .${classPrefix}-image-1 {
            width: 100%;
            height: 550px;
            object-fit: cover;
            border-radius: 10px;
            clip-path: polygon(0 0, 98% 0, 68% 100%, 0 100%);
          }
          
          .${classPrefix}-image {
            width: 100%;
            height: 550px;
            object-fit: cover;
            border-radius: 10px;
            clip-path: polygon(31% 0, 100% 0, 100% 100%, 1% 100%);
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
            margin-top: 106px;
            height: 550px;
            width: 500px;
          }
          
          .${classPrefix}-panel-2 {
            border-radius: 10px;
            background-color: #fff;
            margin-left: -145px;
            display: flex;
            flex-direction: column;
            height: 550px;
            width: 500px;
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
            width: 346px;
            margin-top: 0px;
          }

          .${classPrefix}-description-2  {
            color: #000;
            align-self: stretch;
            font-family: Inter;
            width: 346px;
            display: flex;
            text-align: right;
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            margin-top: 0px;
            position: relative;
            right: -6px;
          }
          
          @media (max-width: 768px) {

            .${classPrefix}-before {
              margin-top: 5px;
              color: #000;
              font-family: Inter;
              font-size: 15px;
              font-style: normal;
              font-weight: 400;
              line-height: normal;
            }
  
            .${classPrefix}-after {
              display: none;
            }

            .${classPrefix}-after-mobile {
              display: flex;
              margin-top: 85px;
              color: #000;
              font-family: Inter;
              font-size: 15px;
              font-style: normal;
              font-weight: 400;
              line-height: normal;
              justify-content: right;
            }

            .${classPrefix}-after-2 {
              margin-bottom: 5px;
              margin-right: 10px;
              text-align: right;
              color: #000;
              font-family: Inter;
              font-size: 15px;
              font-style: normal;
              font-weight: 400;
              line-height: normal;
            }

            .${classPrefix}-cardWrapper {
              display: flex;
              height: 230px;
              width: 170px;
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
              background-color: #fff;
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
                width: 160px;
                height: 140px;
                margin-top: 73px;
            }
            
            .${classPrefix}-panel-2 {
              border-radius: 10px;
              background-color: #fff;
              display: flex;
              flex-direction: column;
              height: 230px;
              width: 160px;
              margin-left: -48px;
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
              font-family: Inter;
              font-size: 26px;
              font-style: normal;
              font-weight: 600;
              line-height: 35px; 
            }

            .${classPrefix}-description {
              color: #000;
              font-family: Inter;
              font-size: 13px;
              font-style: normal;
              font-weight: 400;
              line-height: 140%;
              max-width: 249px;
            }

            .${classPrefix}-description-2 {
              display: none;
            }

            .${classPrefix}-description-mobile {
              display: flex;
              color: #000;
              font-family: Inter;
              font-size: 13px;
              font-style: normal;
              font-weight: 400;
              line-height: 140%;
              max-width: 249px;
              margin-top: 0px;
              text-align: right;
              position: relative;
              right: -32px;
            }

            .${classPrefix}-section {
              padding: 0 20px;
            }
          
            .${classPrefix}-wrapper {
              max-width: 100%;
              margin: 40px 0;
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
              margin-top: 40px;
              padding-right: 0px;
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

export { beforeAfter4Block, beforeAfter4Component };
