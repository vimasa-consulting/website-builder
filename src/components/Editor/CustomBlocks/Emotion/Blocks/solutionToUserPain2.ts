import { Editor } from "grapesjs";

const solutionToUserPain2Block = (editor: Editor) => {
    const options = {
        id: "emotion-solutionToUserPain2",
        label: "Solution To User Pain 2",
        block: {},
        props: {},
        style: "",
        category: "Emotion",
        classPrefix: "emotion-solutionToUserPain2",
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

const solutionToUserPain2Component = (editor: Editor) => {
    const options = {
        id: "emotion-solutionToUserPain2",
        label: "Solution To User Pain 2",
        block: {},
        props: {},
        style: "",
        category: "Emotion",
        classPrefix: "emotion-solutionToUserPain2",
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
                  <h1 class="${classPrefix}-title">Highlight User’s Emotional Struggles</h1>
                  <h3 class="${classPrefix}-subTitle">
                     In empathetic words, give hope that your product can solve their
                     emotional pain & challenges
                  </h3>                  
                </section>
                                `,
                styles: `
                .${classPrefix}-section {
                    background-color: #fff;
                    display: flex;
                    flex-direction: column;
                    padding: 0 80px;
                    max-height: 800px;
                    height: 70vh;
                  }
                  
                  .${classPrefix}-title {
                    font-size: 30px;
                    font-family: Inter, sans-serif;
                    text-align: center;
                    margin-top: 80px;
                    margin-bottom: 8px;
                  }

                  .${classPrefix}-subTitle {
                    text-align: center;
                    padding: 0 31%;
                    font-family: Inter, sans-serif;
                    font-weight: 500;
                  }

                  @media (max-width: 425px) {
                    .${classPrefix}-section {
                      padding: 0 20px;
                    }

                    .${classPrefix}-subTitle, .${classPrefix}-stepDescription {
                        padding: 0px;
                    }
                  }
                  
                `,
            },
        },
    });
};

export { solutionToUserPain2Block, solutionToUserPain2Component };
