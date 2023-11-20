import { Editor } from "grapesjs";

const comparison1Block = (editor: Editor) => {
    const options = {
        id: "Yd1",
        label: "Comparison 1",
        block: {},
        props: {},
        style: "",
        category: "Logic",
        classPrefix: "Yd1",
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

const comparison1Component = (editor: Editor) => {
    const options = {
        id: "Yd1",
        label: "Comparison 1",
        block: {},
        props: {},
        style: "",
        category: "Logic",
        classPrefix: "Yd1",
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
                <div class="${classPrefix}-container">
                <div class="${classPrefix}-card">
                  <h2 class="${classPrefix}-title">Your Product Name</h2>
                  <img src="https://placehold.co/446x303" alt="Your Product">
                  <ul class="${classPrefix}-advantageList">
                    <li>Your brand's key advantage 1</li>
                    <li>Your brand's key advantage 2</li>
                    <li>Your brand's key advantage 3</li>
                    <li>Your brand's key advantage 4</li>
                  </ul>
                </div>
                <div class="${classPrefix}-card">
                  <h2 class="${classPrefix}-title">Others</h2>
                  <img src="https://placehold.co/446x303" alt="Competitor Product">
                  <ul class="${classPrefix}-shortComingList">
                    <li>Competitor's Shortcoming 1</li>
                    <li>Competitor's Shortcoming 2</li>
                    <li>Competitor's Shortcoming 3</li>
                    <li>Competitor's Shortcoming 4</li>
                  </ul>
                </div>
              </div>
                `,
                styles: `
                .${classPrefix}-container {
                  display: flex;
                  justify-content: space-around;
                  padding: 0 20px;
                  font-family: Inter, sans-serif;
                  max-width: 1440px;
                  margin: 0 auto;
                }
                .${classPrefix}-card {
                  width: 50%;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                }
                .${classPrefix}-card:nth-child(1) {
                  border-right: 1px solid #ccc;
                  padding-right: 10px;
                }
                .${classPrefix}-card:nth-child(2) {
                  border-left: 1px solid #ccc;
                  padding-left: 10px;
                }
                .${classPrefix}-card img {
                  max-width: 100%;
                  height: auto;
                  display: block;
                  margin: 0 auto 20px;
                  background: #f0f0f0;
                  border-radius: 10px;
                }
                .${classPrefix}-title {
                  text-align: center;
                  margin-top: 5.25rem;
                  margin-bottom: 75px;
                  font-size: 40px;
                  font-weight: 600;
                }
                .${classPrefix}-advantageList, .${classPrefix}-shortComingList {
                  list-style: none;
                  padding: 0;
                  margin-top: 50px;
                }
                .${classPrefix}-advantageList li::before, .${classPrefix}-shortComingList li::before {
                  padding-right: 10px;
                  font-weight: bold;
                }
                .${classPrefix}-advantageList li::before {
                  content: '✓';
                  font-size: 20px;
                }
                .${classPrefix}-shortComingList li::before {
                  content: '✕';
                  font-size: 20px;
                }

                li {
                  margin-bottom: 47px;
                }
                @media (max-width: 770px) {
                  .${classPrefix}-container {
                    flex-direction: column;
                    align-items: center;
                  }
                  .${classPrefix}-card {
                    width: 100%;
                    border: none !important;
                  }

                  .${classPrefix}-title {
                    margin-bottom: 30px;
                  }
                }

                @media (max-width: 425px) {
                  .${classPrefix}-title {
                    font-size: 25px;
                  }
                }
                `,
            },
        },
    });
};

export { comparison1Block, comparison1Component };
