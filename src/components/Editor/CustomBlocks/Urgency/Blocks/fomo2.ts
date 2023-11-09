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
               } 
               .${classPrefix}-h2 {
                color: #000;
                font-size: 36px;
                font-style: normal;
                font-weight: 600;
                line-height: 64px;
                margin: 0;
              }
               .${classPrefix}-text {
                text-align: center;
                font-family: Inter, sans-serif;
                font-size: 15px;
                padding: 0 8px;
                line-height: 1.5;
               } 
                `,
            },
        },
    });
};

export { fomo2Block, fomo2Component };
