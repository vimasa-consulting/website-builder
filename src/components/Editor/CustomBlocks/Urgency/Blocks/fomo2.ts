import { Editor } from "grapesjs";

const fomo2Block = (editor: Editor) => {
    const options = {
        id: "Wa2",
        label: "FOMO 2",
        block: {},
        props: {},
        style: "",
        category: "Urgency",
        classPrefix: "urgency-fomo2",
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

const fomo2Component = (editor: Editor) => {
    const options = {
        id: "Wa2",
        label: "FOMO 2",
        block: {},
        props: {},
        style: "",
        category: "Urgency",
        classPrefix: "urgency-fomo2",
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
                <div class="${classPrefix}-section">
                <h2 class="${classPrefix}-h2">[Sale/Offer Name]</h2>
                <p class="${classPrefix}-text">Talk about extra benefits/value. Shop Now!</p>
                </div>
                `,
                styles: `
               .${classPrefix}-section {
                height: 100px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding-top: 16px;
                padding-bottom: 13px;
               } 
               .${classPrefix}-h2 {
                color: #1E1E1E;
                font-size: 38px;
                font-family: Inter;
                font-style: normal;
                font-weight: 600;
                line-height: 53.2px;
                margin: 0;
                text-align: center;
                margin-bottom: 4px;
              }
               .${classPrefix}-text {
                text-align: center;
                font-family: Inter, sans-serif;
                font-size: 15px;
                line-height: 21px;
                margin: 0;
               } 
              @media (max-width: 400px) {
                .${classPrefix}-section {
                height: 63px;
                padding: 10px 31px 15px 30px;
                }
                .${classPrefix}-h2 {
                text-overflow: ellipsis;
                white-space: nowrap;
                font-family: Inter;
                font-size: 18px;
                font-style: normal;
                font-weight: 500;
                line-height: 1;
                }
                .${classPrefix}-text {
                color: #000;
                text-align: center;
                font-family: Inter;
                font-size: 10px;
                font-style: normal;
                font-weight: 400;
                }
              }
                `,
            },
        },
    });
};

export { fomo2Block, fomo2Component };
