import { Editor } from "grapesjs";

const clientListLogos1Block = (editor: Editor) => {
    const options = {
        id: "Ub1",
        label: "Client List Logos 1",
        block: {},
        props: {},
        style: "",
        category: "Trust",
        classPrefix: "trust-clientListLogos1",
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

const clientListLogos1Component = (editor: Editor) => {
    const options = {
        id: "trust-clientListLogos1",
        label: "Client List Logos 1",
        block: {},
        props: {},
        style: "",
        category: "Trust",
        classPrefix: "trust-clientListLogos1",
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
                <div class="${classPrefix}-titleContainer" >
                <h1 class="${classPrefix}-title" >Header about the successful collaborations with your clients</h1>
                </div>
                <div class="${classPrefix}-logoContainer">Logo 1</div>
                <div class="${classPrefix}-logoContainer">Logo 2</div>
                <div class="${classPrefix}-logoContainer">Logo 3</div>
                <div class="${classPrefix}-logoContainer">Logo 4</div>
              </section>
        `,
                styles: `
        .${classPrefix}-section {
            justify-content: space-between;
            align-items: center;
            background-color: #fff;
            display: flex;
            padding: 20px 157px;
            max-height: 700px;
            font-family: Inter, sans-serif;
          }
          .${classPrefix}-titleContainer {
            max-width: 357px;
            padding-right: 56px;
          }
          .${classPrefix}-title {
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 140%;
            font-family: Inter, sans-serif;
          }

          .${classPrefix}-logoContainer {
            padding: 12px 24px;
            border: 1px dashed #999;
            border-radius: 10px;
            color: #999;

          }
          @media (max-width: 770px) {
            .${classPrefix}-section {
                padding: 20px;
                flex-direction: column;
                gap: 30px;
            }
            .${classPrefix}-title {
                font-size: 20px;
                text-align: center;
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

export { clientListLogos1Block, clientListLogos1Component };
