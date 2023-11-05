import { Editor } from "grapesjs";

const clientListLogos2Block = (editor: Editor) => {
    const options = {
        id: "trust-clientListLogos2",
        label: "Client Lit Logos 2",
        block: {},
        props: {},
        style: "",
        category: "Trust",
        classPrefix: "trust-clientListLogos2",
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

const clientListLogos2Component = (editor: Editor) => {
    const options = {
        id: "trust-clientListLogos2",
        label: "Client Lit Logos 2",
        block: {},
        props: {},
        style: "",
        category: "Trust",
        classPrefix: "trust-clientListLogos2",
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
             <div class="${classPrefix}-sectionWrapper">
                <h1 class="${classPrefix}-title">
                    Header for your successful client collaborations
                </h1>  
                <h5 class="${classPrefix}-description">
                A short description about how your company has helped the clients find a market edge and saved them time, money or resources
                </h5>  
                <div class="${classPrefix}-logoWrapper">
                   <div class="${classPrefix}-logoContainer">
                   <div class="${classPrefix}-logoBox">
                       Logo 1
                   </div>
                   <p class="${classPrefix}-brand">Brand Name</p>
                   </div>
                   <div class="${classPrefix}-logoContainer">
                   <div class="${classPrefix}-logoBox">
                       Logo 2
                   </div>
                   <p class="${classPrefix}-brand">Brand Name</p>
                   </div>
                   <div class="${classPrefix}-logoContainer">
                   <div class="${classPrefix}-logoBox">
                       Logo 3
                   </div>
                   <p class="${classPrefix}-brand">Brand Name</p>
                   </div>
                   <div class="${classPrefix}-logoContainer">
                   <div class="${classPrefix}-logoBox">
                       Logo 4
                   </div>
                   <p class="${classPrefix}-brand">Brand Name</p>
                   </div>
                   <div class="${classPrefix}-logoContainer">
                   <div class="${classPrefix}-logoBox">
                       Logo 5
                   </div>
                   <p class="${classPrefix}-brand">Brand Name</p>
                   </div>
               </div>
             </div>
                </section>
        `,
                styles: `
        .${classPrefix}-section {
            padding: 114px 20px;
            max-height: 700px;
            font-family: Inter, sans-serif;
          }
        .${classPrefix}-logoWrapper {
            justify-content: center;
            gap: 78px;
            align-items: center;
            background-color: #fff;
            display: flex;
          }
          .${classPrefix}-sectionWrapper {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            max-width: 1035px;
            margin: 0 auto;
          }
          .${classPrefix}-title {
            font-size: 40px;
            font-style: normal;
            font-weight: 600;
            font-family: Inter, sans-serif;
            text-align: center;
            margin: 0 0 24px;
          }
          .${classPrefix}-brand {
            color: #000;
            text-align: center;
            font-family: Inter, sans-serif;
            font-size: 15px;
            font-weight: 400;
            line-height: 21px;
            margin: 0;
          }
          .${classPrefix}-description {
            color: #000;
            font-family: Inter, sans-serif;
            font-size: 15px;
            font-weight: 400;
            line-height: 21px;
            margin: 0 0 64px;
            max-width: 600px;
            text-align: left;
          }
          .${classPrefix}-logoContainer {
            display: flex;
            flex-direction: column;
            gap: 16px;
            align-items: center;            
          }
          .${classPrefix}-logoBox {
            padding: 12px 24px;
            border: 1px dashed #999;
            border-radius: 10px;
            color: #999;
            width: 134px;
            text-align: center;
          }

          @media (max-width: 770px) {
            .${classPrefix}-logoWrapper {
                flex-direction: column;
                gap: 30px;
            }
            .${classPrefix}-title {
                font-size: 20px;
                text-align: center;
                margin-bottom: 40px;
            }
            .${classPrefix}-description {
                margin: 0 0 32px;
                text-align: center;
            }
            .${classPrefix}-titleContainer {
                padding-right: 0px;
            }
            .${classPrefix}-sectionWrapper {
                align-items: center;
            }
            .${classPrefix}-section {
                padding: 70px 20px;
            }
          }
        `,
            },
        },
    });
};

export { clientListLogos2Block, clientListLogos2Component };
