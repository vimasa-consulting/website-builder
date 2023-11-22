import { Editor } from "grapesjs";

const fomo5Block = (editor: Editor) => {
    const options = {
        id: "Wa5",
        label: "FOMO 5",
        block: {},
        props: {},
        style: "",
        category: "Urgency",
        classPrefix: "urgency-fomo5",
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

const fomo5Component = (editor: Editor) => {
    const options = {
        id: "Wa5",
        label: "FOMO 5",
        block: {},
        props: {},
        style: "",
        category: "Urgency",
        classPrefix: "urgency-fomo5",
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
                        <h2 class="${classPrefix}-h3 ${classPrefix}-section-desktop-only">[Insert Sale Name] is live now. Talk about extra benefits/value. Shop Now!</h2>
                        <h2 class="${classPrefix}-h3 ${classPrefix}-section-mobile-only">[Insert Sale Name] is live now. Shop Now!</h2>
                        <p class="${classPrefix}-text ${classPrefix}-section-mobile-only">Talk about extra benefits/value like Free Shipping, Cashback etc.</p>
                    </div>
                    <div class="${classPrefix}-section-container">
                        <p class="${classPrefix}-text ${classPrefix}-section-desktop-only">Hurry! Sale ends in </p>
                        <p class="${classPrefix}-text ${classPrefix}-section-mobile-only">Ends in</p>
                        <div class="${classPrefix}-countdown" data-gjs-type="countdown"></div>    
                    </div>
                </div>
                `,
                styles: `
               .${classPrefix}-section {
                height: 96px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                font-family: Inter, sans-serif;
               } 
               .${classPrefix}-section .${classPrefix}-section-mobile-only {
                  display: none;
                }
               .${classPrefix}-section-container {
                display: flex;
                align-items: center;
                justify-content: center;
               } 
               .${classPrefix}-countdown {
                display: flex;
                }
               .${classPrefix}-countdown .countdown-cont {
                display: flex;
                margin-right: 8px;
                }
               .${classPrefix}-countdown .countdown-block {
                display: flex;
                margin: 0;
                padding: 0;
                margin-left: 4px;
                justify-content: center;
                align-items: center;
                }
               .${classPrefix}-countdown .countdown-block .countdown-label {
                color: #000;
                text-align: center;
                font-size: 15px;
                font-style: normal;
                font-weight: 400;
                line-height: 140%;
                }
               .${classPrefix}-countdown .countdown-block .countdown-digit {
                border-radius: 3px;
                background: #E9E9E9;
                padding: 3px 7px;
                text-align: center;
                font-size: 15px;
                font-style: normal;
                font-weight: 400;
                line-height: 140%;
                margin-right: 4px;
                }
               .${classPrefix}-h3 {
                color: #000;
                text-align: center;
                font-size: 20px;
                font-style: normal;
                font-weight: 500;
                line-height: 0;
                margin: 0;
                margin-bottom: 22px;
              }
               .${classPrefix}-text {
                text-align: center;
                font-size: 15px;
                padding: 0 8px;
                line-height: 0;
                margin: 0;
               } 
                @media (max-width: 400px) {
                  .${classPrefix}-h3 {
                    margin-bottom: 10px;
                    text-align: center;
                    font-size: 13px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 1;
                  }
                  .${classPrefix}-section {
                    padding-top: 10px;
                    padding-bottom: 14px;
                  }
                  .${classPrefix}-section-desktop-only{
                    display: none;
                  }
                  .${classPrefix}-section .${classPrefix}-section-mobile-only{
                    display: flex;
                  }
                 .${classPrefix}-section-heading {
                  margin-bottom: 5px;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  }
                  .${classPrefix}-text {
                  text-align: center;
                  font-size: 9px;
                  font-style: normal;
                  font-weight: 400;
                  margin-left: 4px;
                  }   
                  .${classPrefix}-countdown {
                    margin-top: 4px;
                  }
                  .${classPrefix}-countdown .countdown-block .countdown-label {
                  color: #000;
                  text-align: center;
                  font-size: 9px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 140%;
                  }
                 .${classPrefix}-countdown .countdown-block .countdown-digit {
                  border-radius: 3px;
                  background: #E9E9E9;
                  padding: 2px 3px;
                  text-align: center;
                  font-size: 9px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 140%;
                  margin-right: 2px;
                  }
                }
                `,
            },
        },
    });
};

export { fomo5Block, fomo5Component };
