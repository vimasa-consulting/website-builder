import { Editor } from "grapesjs";

const clientListLogos2Block = (editor: Editor) => {
    const options = {
        id: "Ub2",
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
        id: "Ub2",
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
                  <div class="${classPrefix}-logo">
                  <img class="${classPrefix}-img" src="https://placehold.co/134x55" alt="Placeholder"/>
                  </div>
                   <p class="${classPrefix}-brand">Brand Name</p>
                   </div>
                   <div class="${classPrefix}-logoContainer">
                   <div class="${classPrefix}-logo">
                    <img class="${classPrefix}-img" src="https://placehold.co/134x55" alt="Placeholder"/>
                    </div>
                   <p class="${classPrefix}-brand">Brand Name</p>
                   </div>
                   <div class="${classPrefix}-logoContainer">
                   <div class="${classPrefix}-logo">
                   <img class="${classPrefix}-img" src="https://placehold.co/134x55" alt="Placeholder"/>
                   </div>
                   <p class="${classPrefix}-brand">Brand Name</p>
                   </div>
                   <div class="${classPrefix}-logoContainer">
                   <div class="${classPrefix}-logo">
                   <img class="${classPrefix}-img" src="https://placehold.co/134x55" alt="Placeholder"/>
                   </div>
                   <p class="${classPrefix}-brand">Brand Name</p>
                   </div>
                   <div class="${classPrefix}-logoContainer">
                   <div class="${classPrefix}-logo">
                    <img class="${classPrefix}-img" src="https://placehold.co/134x55" alt="Placeholder"/>
                    </div>
                   <p class="${classPrefix}-brand">Brand Name</p>
                   </div>
               </div>
             </div>
                </section>
        `,
                styles: `
        .${classPrefix}-section {
            padding: 114px 0 116px;
            max-width: 1440px;
            font-family: Inter, sans-serif;
            margin: 0 auto;
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
            margin: 0 0 23px;
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
            margin: 0 0 88px;
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
          .${classPrefix}-img {
            width: 100%;
            height: 100%;
            border-radius: 10px;
            object-fit: fill;
          }
          .${classPrefix}-logo {
            border: 1px dashed #999;
            border-radius: 10px;
            color: #999;
            height: 55px;
            width: 134px;
          }

          @media (max-width: 400px) {
            .${classPrefix}-section {
              padding: 57px 21px 40px 19px;
              max-width: 1440px;
              font-family: Inter, sans-serif;
              margin: 0 auto;
            }
            .${classPrefix}-logoWrapper {
                gap: 18px;
            }
            .${classPrefix}-title {
              color: #000;
              font-size: 26px;
              font-style: normal;
              font-weight: 600;
              line-height: 35px;
              margin-bottom: 10px;
              text-align: unset;
            }
            .${classPrefix}-description {
              color: #000;
              font-size: 13px;
              font-style: normal;
              font-weight: 400;
              line-height: 140%; 
              margin-bottom: 40px;
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
            .${classPrefix}-logoContainer:nth-child(5) {
              display: none;
           }
            .${classPrefix}-logoContainer{
              gap: 8px;
           }
           .${classPrefix}-logo {
             border: 1px dashed #999;
             border-radius: 5px;
             color: #999;
             height: 32px;
             width: 76px;
           }
           .${classPrefix}-img {
             border-radius: 5px;
           }
           .${classPrefix}-brand {
            color: #000;
            text-align: center;
            font-family: Inter, sans-serif;
            font-size: 10px;
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

export { clientListLogos2Block, clientListLogos2Component };
