import { Editor } from "grapesjs";

const beforeAfter1Block = (editor: Editor) => {
    const options = {
        id: "Ua1",
        label: "Before After 1",
        block: {},
        props: {},
        style: "",
        category: "Trust",
        classPrefix: "trust-beforeAfter1",
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

const beforeAfter1Component = (editor: Editor) => {
    const options = {
        id: "Ua1",
        label: "Before After 1",
        block: {},
        props: {},
        style: "",
        category: "Trust",
        classPrefix: "trust-beforeAfter1",
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
                      <div class="${classPrefix}-panel">
                      <img class="${classPrefix}-img ${classPrefix}-img-1" src="https://placehold.co/415x518" alt="Placeholder"/>
                        <div class="${classPrefix}-caption">
                          <button class="${classPrefix}-button" >Before</button>
                        </div>
                      </div>
                    </div>
                    <div class="${classPrefix}-card-2">
                      <div class="${classPrefix}-panel-2">
                      <img class="${classPrefix}-img ${classPrefix}-img-2" src="https://placehold.co/415x518" alt="Placeholder"/>
                        <div class="${classPrefix}-caption">
                          <button class="${classPrefix}-button" >After</button>
                        </div>
                      </div>
                    </div>
                 </div>
                    <div class="${classPrefix}-card-3">
                      <div class="${classPrefix}-panel-3">
                        <h1 class="${classPrefix}-title">
                          Header Highlighting the Transformation
                        </h1>
                        <p class="${classPrefix}-description">
                          Use emotionally powerful words to convey that your product is the key to the dream transformation your user is longing for
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
        `,
                styles: `
        .${classPrefix}-section {
            background-color: #fff;
            padding: 117px 0px;
            margin: 0 auto;
            max-width: 1440px;
            min-width: 1440px;
          }
          
          .${classPrefix}-wrapper {
            align-self: center;
            width: 100%;
            max-width: 1202px;
            margin: 0 auto;
          }
          
          .${classPrefix}-content {
            display: flex;
            gap: 57px;
          }

          .${classPrefix}-cardWrapper {
            display: flex;
          }
          
          .${classPrefix}-card {
            display: flex;
            flex-direction: column;
            line-height: normal;
            margin-left: 0px;
          }
          
          .${classPrefix}-panel {
            border-radius: 10px 0px 0px 10px;
            background-color: #d9d9d9;
            display: flex;
            width: 100%;
            flex-direction: column;
            margin: 0 auto;
          }
          
          .${classPrefix}-image {
            aspect-ratio: 1;
            object-fit: contain;
            object-position: center;
            width: 45px;
            mix-blend-mode: multiply;
            overflow: hidden;
            align-self: center;
            max-width: 100%;
          }
          
          .${classPrefix}-caption {
            display: flex;
            flex-direction: column;
            color: #000;
            text-align: center;
            fill: #fff; 
            width: 100%;
            font: 500 20px Inter, sans-serif;
          }
          
          .${classPrefix}-image-2 {
            position: absolute;
            height: 100%;
            width: 100%;
            object-fit: cover;
            object-position: center;
          }
          
          .${classPrefix}-div-6 {
            position: relative;
          }
          
          .${classPrefix}-card-2 {
            display: flex;
            flex-direction: column;
            line-height: normal;
          }
          
          .${classPrefix}-panel-2 {
            background-color: #e9e9e9;
            display: flex;
            width: 100%;
            flex-direction: column;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
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
          }
          
          .${classPrefix}-panel-3 {
            display: flex;
            flex-direction: column;
            margin: auto 0;
          }

          .${classPrefix}-img {
            width: 415px;
            height: 518px;
          }
          .${classPrefix}-img-1 {
            border-top-left-radius: 10px;
          }
          .${classPrefix}-img-2 {
            border-top-right-radius: 10px !important;
          }
          .${classPrefix}-button {
            display: block;
            width: 100%;
            height: 58px;
            border-radius: 10px;
            border: none;
            cursor: pointer;
            font-size: 20px;
            background-color: white;
            margin: 0 53px;
            max-width: 308px;
            margin-bottom: 25.5px;
          }
          
          .${classPrefix}-title {
            color: #000;
            font-size: 32px;
            font-family: Inter, Roboto, sans-serif;
            line-height: 1.5;
            margin: 0;
            padding-right: 20px;
          }
          
          .${classPrefix}-description {
            color: #000;
            align-self: stretch;
            font: 400 15px/140% Inter, -apple-system, Roboto, Helvetica, sans-serif;
            margin-top: 23px;
            margin-bottom: 0px;
          }
          
          @media (max-width: 400px) {
            .${classPrefix}-section {
              min-width: 400px;
              padding: 25px 20px 72px;
            }
          
            .${classPrefix}-wrapper {
              max-width: 100%;
            }
          
            .${classPrefix}-button {
              margin: unset;
              max-width: 134px;
              height: 28px;
              border-radius: 5px;
              font-size: 13px;
            }
          
            .${classPrefix}-content {
              flex-direction: column-reverse;
              align-items: stretch;
              gap: 0px;
            }
          
            .${classPrefix}-card {
              width: 100%;
            }
            .${classPrefix}-img {
              width: 180px;
              height: 225px;
            }
            .${classPrefix}-title {
              font-size: 26px;
              padding-right: 70px;
            }
            .${classPrefix}-description {
              font-size: 13px;
              margin-top:8px;
              margin-bottom: 37px;
              margin-right: 41px;
            }
          
            .${classPrefix}-panel {
              width: unset;
            }
            .${classPrefix}-panel-2 {
              width: unset;
              margin: 0 auto;
            }
          
            .${classPrefix}-caption {
              margin-top: 0px;
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

export { beforeAfter1Block, beforeAfter1Component };
