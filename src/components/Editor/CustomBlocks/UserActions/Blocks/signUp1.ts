import { Editor } from "grapesjs";

const signUp1Block = (editor: Editor) => {
    const options = {
        id: "Sa1",
        label: "Signup 1",
        block: {},
        props: {},
        style: "",
        category: "User Actions",
        classPrefix: "userActions-signUp1",
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

const signUp1Component = (editor: Editor) => {
    const options = {
        id: "Sa1",
        label: "Signup 1",
        block: {},
        props: {},
        style: "",
        category: "User Actions",
        classPrefix: "userActions-signUp1",
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
                  <h2 class="${classPrefix}-title">Nudge your reader to sign up</h2>
                <form class="${classPrefix}-formSection">
                  <input
                    type="email"
                    id="email"
                    class="${classPrefix}-input"
                    aria-label="Email"
                    placeholder="Enter your email"
                  />
                  <button
                    type="submit"
                    class="${classPrefix}-submitCta"
                  >
                  Insert Call-to-action
                  </button>
                </form>
              </section>
        `,
                styles: `
                .${classPrefix}-section {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: 72px 0px 80px;
                    margin: 0 auto;
                    max-width: 1440px;
                }
                .${classPrefix}-title {
                    text-align: center;
                    font-family: Inter, sans-serif;
                    font-size: 40px;
                    margin: 0px;
                    margin-bottom: 54px;
                }
                .${classPrefix}-formSection {
                    display: flex;
                    gap: 24px; 
                    justify-content: center;
                    width: 100%;
                }
                .${classPrefix}-input {
                    max-width: 397px;
                    width: 100%;   
                    height: 56px;
                    border: 1px solid #D9D9D9;
                    border-radius: 8px;
                    padding: 14px 26px;
                    color: #000;
                    font-family: Inter;
                    font-size: 24px;
                    font-weight: 400;

                }
                input::placeholder {
                    color: #000;
                }
                .${classPrefix}-submitCta {
                    background-color: #D9D9D9; 
                    height: 56px;
                    max-width:  279px;
                    width: 100%;
                    border-radius: 8px;
                    border: none;
                    color: #000;
                    text-align: center;
                    font-family: Inter;
                    font-size: 24px;
                    font-weight: 400;
                    cursor: pointer;
                }
                @media (max-width: 400px) {
                    .${classPrefix}-section {
                        padding: 34px 56px 42px;
                    }
                    .${classPrefix}-formSection {
                        flex-direction: column;
                        justify-content: center;
                        gap: 16px;
                    }
                    .${classPrefix}-title {
                        font-size: 26px;
                        padding: 0 14px;
                        margin-bottom: 33px;
                    }
                    .${classPrefix}-input, .${classPrefix}-submitCta  {
                        font-size: 20px;
                        max-width: 287px;
                        height: 38px;
                        font-size: 18px;
                        border-radius: 5px;
                        padding: 0px 11px;
                    }
                    .${classPrefix}-input::placeholder {
                        text-align: center;
                    }
                }
                `,
            },
        },
    });
};

export { signUp1Block, signUp1Component };
