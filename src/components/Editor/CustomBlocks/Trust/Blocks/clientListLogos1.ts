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
        id: "Ub1",
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
                  <div class="${classPrefix}-sectionWrapper">
                    <div class="${classPrefix}-titleContainer" >
                    <h1 class="${classPrefix}-title" >Header about the successful collaborations with your clients</h1>
                    </div>
                    <div class="${classPrefix}-logoContainer">
                    <img class="${classPrefix}-img" src="https://placehold.co/134x55" alt="Placeholder"/>
                    </div>
                    <div class="${classPrefix}-logoContainer">
                    <img class="${classPrefix}-img" src="https://placehold.co/134x55" alt="Placeholder"/>
                    </div>
                    <div class="${classPrefix}-logoContainer">
                    <img class="${classPrefix}-img" src="https://placehold.co/134x55" alt="Placeholder"/>
                    </div>
                    <div class="${classPrefix}-logoContainer">
                    <img class="${classPrefix}-img" src="https://placehold.co/134x55" alt="Placeholder"/>
                    </div>
                  </div>
              </section>
        `,
                styles: `
        .${classPrefix}-section {
            background-color: #fff;
            padding: 48px 0 59px;
            font-family: Inter, sans-serif;
            max-width: 1440px;
            margin: 0 auto;
          }
        .${classPrefix}-sectionWrapper {
            justify-content: space-between;
            align-items: center;
            background-color: #fff;
            display: flex;
            height: 100%;
            max-width: 1125px;
            margin: 0 auto;
            width: 100%;
          }
          .${classPrefix}-titleContainer {
            max-width: 357px;
            padding-right: 56px;
            margin-right: 14px;
          }
          .${classPrefix}-title {
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 140%;
            font-family: Inter, sans-serif;
            margin: 0px;
          }
          .${classPrefix}-img {
            width: 100%;
            height: 100%;
            border-radius: 10px;
            object-fit: cover;
          }
          .${classPrefix}-logoContainer {
            border: 1px dashed #999;
            border-radius: 10px;
            color: #999;
            height: 55px;
            width: 134px;
          }
          @media (max-width: 400px) {
            .${classPrefix}-section {
              padding: 39px 12px 38px 16px;
            }
            .${classPrefix}-sectionWrapper {
            }
            .${classPrefix}-title {
              color: #000;
              font-family: Inter;
              font-size: 13px;
              font-style: normal;
              font-weight: 500;
              line-height: 140%; /* 18.2px */
            }
            .${classPrefix}-logoContainer:nth-child(4) {
               display: none;
            }
            .${classPrefix}-titleContainer {
                width: 112px;
                padding-right: 10px;
                margin-right: 8px;
            }
            .${classPrefix}-logoContainer {
              border: 1px dashed #999;
              border-radius: 5px;
              color: #999;
              height: 32px;
              width: 70px;
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

export { clientListLogos1Block, clientListLogos1Component };
