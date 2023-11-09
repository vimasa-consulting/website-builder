import { Editor } from "grapesjs";

const beforeAfter3Block = (editor: Editor) => {
    const options = {
        id: "Ua3",
        label: "Before After 3",
        block: {},
        props: {},
        style: "",
        category: "Trust",
        classPrefix: "trust-beforeAfter3",
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

const beforeAfter3Component = (editor: Editor) => {
    const options = {
        id: "trust-beforeAfter3",
        label: "Before After 3",
        block: {},
        props: {},
        style: "",
        category: "Trust",
        classPrefix: "trust-beforeAfter3",
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
             <h1 class="${classPrefix}-title">Header Highlighting the Transformation</h1>
                <div class="${classPrefix}-wrapper">
                  <div class="${classPrefix}-content">
                  <div class="${classPrefix}-cardWrapper">
                    <div class="${classPrefix}-card">
                      <div class="${classPrefix}-panel">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&"
                          class="${classPrefix}-image"
                        />
                      </div>
                      <p class="${classPrefix}-type" >Before</p>
                    </div>
                    <div class="${classPrefix}-card-2">
                      <div class="${classPrefix}-panel-2">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=800 800w, httpscdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&"
                          class="${classPrefix}-image"
                        />
                      </div>
                      <p class="${classPrefix}-type" >After</p>
                    </div>
                 </div>
                  <div class="${classPrefix}-cardWrapper">
                    <div class="${classPrefix}-card">
                      <div class="${classPrefix}-panel">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&"
                          class="${classPrefix}-image"
                        />
                      </div>
                      <p class="${classPrefix}-type" >Before</p>
                    </div>
                    <div class="${classPrefix}-card-2">
                      <div class="${classPrefix}-panel-2">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=800 800w, httpscdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&"
                          class="${classPrefix}-image"
                        />
                      </div>
                      <p class="${classPrefix}-type" >After</p>
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
            padding: 20px 80px;
          }
        .${classPrefix}-title {
           text-align: center;
           font: 40px Inter, sans-serif; 
           margin-bottom: 93px;
           font-weight: 600;
          }
          
          .${classPrefix}-wrapper {
            align-self: center;
            width: 100%;
            max-width: 1202px;
          }
          
          .${classPrefix}-content {
            display: flex;
            flex-direction: column;
            gap: 73px;
            max-width: 832px;
            padding: 0 61px;
            margin: 0 auto;
          }

          .${classPrefix}-type {
            font: 20px Inter, sans-serif;
            text-align: center;
          }


          .${classPrefix}-cardWrapper {
            display: flex;
            gap: 30px;
          }
          
          .${classPrefix}-card {
            display: flex;
            flex-direction: column;
            line-height: normal;
            width: 50%;
            margin-left: 0px;
          }
          
          .${classPrefix}-panel {
            border-radius: 10px;
            background-color: #d9d9d9;
            display: flex;
            width: 100%;
            flex-direction: column;
            margin: 0 auto;
            height: 473px;
            align-items: center;
            justify-content: center;
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
            width: 50%;
          }
          
          .${classPrefix}-panel-2 {
            border-radius: 10px;
            background-color: #e9e9e9;
            display: flex;
            width: 100%;
            flex-direction: column;
            height: 473px;
            align-items: center;
            justify-content: center;
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
            width: 35%;
          }
          
          .${classPrefix}-panel-3 {
            display: flex;
            flex-direction: column;
            margin: auto 0;
            padding-right: 100px;
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
            font-size: 32px;
            margin-bottom: 0;
            font-family: Inter, Roboto, sans-serif;
            line-height: 1.5;
          }
          
          .${classPrefix}-description {
            color: #000;
            align-self: stretch;
            font: 400 15px/140% Inter, -apple-system, Roboto, Helvetica, sans-serif;
          }
          
          @media (max-width: 700px) {
            .${classPrefix}-section {
              padding: 0 20px;
            }
          
            .${classPrefix}-wrapper {
              max-width: 100%;
              margin: 40px 0;
            }
          
            .${classPrefix}-content {
              flex-direction: column;
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
          }

          @media (max-width: 425px) {
            .${classPrefix}-content  {
                padding: 0px;
            }
            .${classPrefix}-title  {
                font-size: 28px;
                margin-bottom: 40px;
            }
            .${classPrefix}-cardWrapper  {
                flex-direction: column;
            }
          }
          
        `,
            },
        },
    });
};

export { beforeAfter3Block, beforeAfter3Component };
