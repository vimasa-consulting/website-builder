import { Editor } from "grapesjs";

const clientListLogos4Block = (editor: Editor) => {
    const options = {
        id: "Ub4",
        label: "Client List Logos 4",
        block: {},
        props: {},
        style: "",
        category: "Trust",
        classPrefix: "trust-clientListLogos4",
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

const clientListLogos4Component = (editor: Editor) => {
    const options = {
        id: "Ub4",
        label: "Client List Logos 4",
        block: {},
        props: {},
        style: "",
        category: "Trust",
        classPrefix: "trust-clientListLogos4",
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
             <h1 class="${classPrefix}-title" >Header for your successful client collaborations</h1>  
             <div class="${classPrefix}-logoWrapper">
                <div class="${classPrefix}-logoContainer">Logo 1</div>
                <div class="${classPrefix}-logoContainer">Logo 2</div>
                <div class="${classPrefix}-logoContainer">Logo 3</div>
                <div class="${classPrefix}-logoContainer">Logo 4</div>
                <div class="${classPrefix}-logoContainer">Logo 5</div>
            </div>
                </section>
        `,
                styles: `
        .${classPrefix}-section {
            padding: 20px;
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
          .${classPrefix}-title {
            font-size: 40px;
            font-style: normal;
            font-weight: 600;
            font-family: Inter, sans-serif;
            text-align: center;
            margin-bottom: 86px;
          }
          .${classPrefix}-logoContainer {
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
                margin-bottom: 60px;
            }
            .${classPrefix}-titleContainer {
                padding-right: 0px;
            }
          }
        `,
            },
        },
    });
};

export { clientListLogos4Block, clientListLogos4Component };
