import { Editor } from "grapesjs";

const clientListLogos3Block = (editor: Editor) => {
    const options = {
        id: "Ub3",
        label: "Client List Logos 3",
        block: {},
        props: {},
        style: "",
        category: "Trust",
        classPrefix: "trust-clientListLogos3",
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

const clientListLogos3Component = (editor: Editor) => {
    const options = {
        id: "Ub3",
        label: "Client List Logos 3",
        block: {},
        props: {},
        style: "",
        category: "Trust",
        classPrefix: "trust-clientListLogos3",
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
                <div class="${classPrefix}-contentWrapper">
                    <div class="${classPrefix}-block">
                        <p class="${classPrefix}-title">“Insert a customer quote here. Be specific in the benefits they received from you“</p>
                        <div class="${classPrefix}-logo">
                        <img class="${classPrefix}-img" src="https://placehold.co/134x55" alt="Placeholder"/>
                        </div>
                    </div>
                    <div class="${classPrefix}-block">
                        <p class="${classPrefix}-title">“Insert a customer quote here. Be specific in the benefits they received from you“</p>
                        <div class="${classPrefix}-logo">
                        <img class="${classPrefix}-img" src="https://placehold.co/134x55" alt="Placeholder"/>
                        </div>
                    </div>
                    <div class="${classPrefix}-block">
                        <p class="${classPrefix}-title">“Insert a customer quote here. Be specific in the benefits they received from you“</p>
                        <div class="${classPrefix}-logo">
                        <img class="${classPrefix}-img" src="https://placehold.co/134x55" alt="Placeholder"/>
                        </div>
                    </div>
                </div>
            </section>
        `,
                styles: `
        .${classPrefix}-section {
            padding: 71px 0px 74px;
            max-height: 700px;
            font-family: Inter, sans-serif;
            max-width: 1440px;
            margin: 0 auto;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        .${classPrefix}-contentWrapper {
            display: flex;
            align-items: center;
            gap: 107px;
            background-color: #fff;
          }
          .${classPrefix}-block {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .${classPrefix}-title {
            font-family: Inter, sans-serif;
            color: #000;
            text-align: center;
            font-family: Inter, sans-serif;
            font-size: 15px;
            font-weight: 400;
            margin: 0 0 35px;
            max-width: 274px;
            padding: 0 22px;
          }
          .${classPrefix}-logoContainer {
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
               padding: 35px 14px 37px;
            }
            .${classPrefix}-title {
                color: #000;
                text-align: center;
                font-size: 9px;
                font-style: normal;
                font-weight: 400;
                line-height: 140%;
                margin-bottom: 19px;
                padding: 0;
            }
            .${classPrefix}-contentWrapper {
                gap: 21px;
              }
              .${classPrefix}-logoContainer:nth-child(5) {
                display: none;
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
          }
        `,
            },
        },
    });
};

export { clientListLogos3Block, clientListLogos3Component };
