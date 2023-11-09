import { Editor } from "grapesjs";

const fomo4Block = (editor: Editor) => {
    const options = {
        id: "urgency-fomo4",
        label: "FOMO 4",
        block: {},
        props: {},
        style: "",
        category: "Urgency",
        classPrefix: "urgency-fomo4",
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

const fomo4Component = (editor: Editor) => {
    const options = {
        id: "Wa4",
        label: "FOMO 4",
        block: {},
        props: {},
        style: "",
        category: "Urgency",
        classPrefix: "urgency-fomo4",
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
                    <div class="${classPrefix}-section-container">
                        <svg width="16px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37.47 37.47"><defs><style>.cls-1{fill:#231f20;}</style></defs><g id="Layer_1-2"><path class="cls-1" d="m18.73,0c-3.01,0-5.86.71-8.38,1.98l3.76,3.78c1.45-.51,3-.79,4.62-.79,7.6,0,13.78,6.17,13.78,13.77,0,2.96-.95,5.79-2.66,8.12l-1.52-1.53L10.67,7.58l-1.87-1.88-1.65-1.67C2.8,7.46,0,12.78,0,18.74c0,10.33,8.4,18.73,18.73,18.73,2.54,0,5.01-.5,7.33-1.48.14-.06.29-.13.43-.2l-3.83-3.85c-1.27.38-2.58.57-3.93.57-7.59,0-13.77-6.18-13.77-13.77,0-2.8.84-5.4,2.27-7.58l1.31,1.31,17.7,17.8h.01l1.95,1.97,1.6,1.61c4.81-3.52,7.67-9.13,7.67-15.11C37.47,8.41,29.06,0,18.73,0Z"/></g></svg>
                        <p class="${classPrefix}-text">Rush Now! [Insert Sale Name] ends in</p>
                        <div class="${classPrefix}-countdown" data-gjs-type="countdown"></div> 
                        <svg width="16px" xxmlns="http://www.w3.org/2000/svg" viewBox="0 0 37.47 37.47"><defs><style>.cls-1{fill:#231f20;}</style></defs><g id="Layer_1-2"><path class="cls-1" d="m18.73,0c-3.01,0-5.86.71-8.38,1.98l3.76,3.78c1.45-.51,3-.79,4.62-.79,7.6,0,13.78,6.17,13.78,13.77,0,2.96-.95,5.79-2.66,8.12l-1.52-1.53L10.67,7.58l-1.87-1.88-1.65-1.67C2.8,7.46,0,12.78,0,18.74c0,10.33,8.4,18.73,18.73,18.73,2.54,0,5.01-.5,7.33-1.48.14-.06.29-.13.43-.2l-3.83-3.85c-1.27.38-2.58.57-3.93.57-7.59,0-13.77-6.18-13.77-13.77,0-2.8.84-5.4,2.27-7.58l1.31,1.31,17.7,17.8h.01l1.95,1.97,1.6,1.61c4.81-3.52,7.67-9.13,7.67-15.11C37.47,8.41,29.06,0,18.73,0Z"/></g></svg>
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
                font-size: 1.5rem;
               }
               .${classPrefix}-text {
                text-align: center;
                font-family: Inter, sans-serif;
                font-size: 16px;
                padding: 0 8px;
                line-height: 1.5;
               } 
                `,
            },
        },
    });
};

export { fomo4Block, fomo4Component };
