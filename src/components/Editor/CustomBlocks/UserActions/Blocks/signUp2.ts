import { Editor } from "grapesjs";

const signUp2Block = (editor: Editor) => {
    const options = {
        id: "Sa2",
        label: "Signup 2",
        block: {},
        props: {},
        style: "",
        category: "User Actions",
        classPrefix: "userActions-signUp2",
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

const signUp2Component = (editor: Editor) => {
    const options = {
        id: "Sa2",
        label: "Signup 1",
        block: {},
        props: {},
        style: "",
        category: "User Actions",
        classPrefix: "userActions-signUp2",
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
                  <h2 class="${classPrefix}-title">Attention grabbing header to sign up</h2>
                  <h3 class="${classPrefix}-subtitle">Write a short creative description about the benefits your users will get by signing up   </h3>
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
                }
                .${classPrefix}-title {
                    text-align: center;
                    font-family: Inter, sans-serif;
                    font-size: 40px;
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
                    padding: 0 26px;
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
                    max-width:  270px;
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
                @media (max-width: 425px) {
                    .${classPrefix}-formSection {
                        flex-direction: column;
                        justify-content: center;
                        padding: 0 12px;
                    }
                    .${classPrefix}-submitCta {
                        max-width: 100%;
                        font-size: 20px;
                    }
                    .${classPrefix}-title {
                        font-size: 28px;
                    }
                    .${classPrefix}-input {
                        font-size: 20px;
                    }
                }
                `,
            },
        },
    });
};

export { signUp2Block, signUp2Component };
