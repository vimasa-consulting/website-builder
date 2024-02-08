import { Editor } from "grapesjs";

const signUpCtaBlock = (editor: Editor) => {
    const options = {
        id: "Sb1",
        label: "Signup CTA",
        block: {},
        props: {},
        style: "",
        category: "User Actions",
        classPrefix: "userActions-signUpCta",
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

const signUpCtaComponent = (editor: Editor) => {
    const options = {
        id: "Sb1",
        label: "Signup CTA",
        block: {},
        props: {},
        style: "",
        category: "User Actions",
        classPrefix: "userActions-signUpCta",
        styleAdditional: "",
        media: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sign-intersection-fill" viewBox="0 0 16 16">
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
                    <a class="${classPrefix}-submitCta">Insert CTA Here  ></a>
                </form>
              </section>
        `,
                styles: `
                .${classPrefix}-section {
                    display: flex;
                    min-width: 1440px;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: 18px 0 16px;
                    font-family: Inter, sans-serif;
                }
                .${classPrefix}-submitCta {
                    background-color: #D9D9D9; 
                    height: 62px;
                    max-width:  100%;
                    width: 587px;
                    border-radius: 8px;
                    border: none;
                    color: #000;
                    text-align: center;
                    font-size: 28px;
                    font-weight: 400;
                    cursor: pointer;
                    padding: 17px;
                }
                @media (max-width: 400px) {
                    .${classPrefix}-section {
                        padding: 12px;
                        min-width: 400px;
                    }
                    .${classPrefix}-submitCta {
                        max-width: 235px;
                        height: 38px;
                        font-size: 18px;
                        padding: 8px;
                    }
                }
                `,
            },
        },
    });
};

export { signUpCtaBlock, signUpCtaComponent };
