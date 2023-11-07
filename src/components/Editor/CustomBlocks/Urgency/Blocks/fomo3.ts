import { Editor } from "grapesjs";

const fomo3Block = (editor: Editor) => {
    const options = {
        id: "urgency-fomo3",
        label: "FOMO 3",
        block: {},
        props: {},
        style: "",
        category: "Urgency",
        classPrefix: "urgency-fomo3",
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

const fomo3Component = (editor: Editor) => {
    const options = {
        id: "urgency-fomo3",
        label: "FOMO 3",
        block: {},
        props: {},
        style: "",
        category: "Urgency",
        classPrefix: "urgency-fomo3",
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
                    <div class="${classPrefix}-section-heading">
                        <h2 class="${classPrefix}-h2">Sale Name</h2>
                    </div>
                    <div class="${classPrefix}-section-container">
                        <p class="${classPrefix}-text">Hurry! Sale ends in </p>
                        <div class="${classPrefix}-countdown" data-gjs-type="countdown"></div>    
                    </div>
                </div>
                `,
                styles: `
               .${classPrefix}-section {
                height: 140px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
               } 
               .${classPrefix}-section-container {
                height: 80px;
                display: flex;
                align-items: center;
                justify-content: center;
               } 
               .${classPrefix}-countdown .countdown-digit{
                font-size: 2rem;
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

export { fomo3Block, fomo3Component };