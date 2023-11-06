import { Editor } from "grapesjs";

const endorsements3Block = (editor: Editor) => {
    const options = {
        id: "trust-endorsements3",
        label: "Endorsements 3",
        block: {},
        props: {},
        style: "",
        category: "Trust",
        classPrefix: "trust-endorsements3",
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

const endorsements3Component = (editor: Editor) => {
    const options = {
        id: "trust-endorsements3",
        label: "Endorsements 3",
        block: {},
        props: {},
        style: "",
        category: "Trust",
        classPrefix: "trust-endorsements3",
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
                <h1 class="${classPrefix}-title">Header for Endorsement</h1>
                <div class="${classPrefix}-wrapper">
                  <div class="${classPrefix}-card">
                    <div class="${classPrefix}-playerWrapper">
                      <img />
                    </div>
                    <h2 class="${classPrefix}-endorserName">Endorser Name</h2>
                    <p class="${classPrefix}-designation">Designation/profile</p>
                    <p class="${classPrefix}-review">
                    Insert the words as spoken by an authority endorsing or validating your brand. Add specific pointers the authority has quoted about your product.
                    </p>
                  </div>
                  <div class="${classPrefix}-card">
                    <div class="${classPrefix}-playerWrapper">
                      <img />
                    </div>
                    <h2 class="${classPrefix}-endorserName">Endorser Name</h2>
                    <p class="${classPrefix}-designation">Designation/profile</p>
                    <p class="${classPrefix}-review">
                    Insert the words as spoken by an authority endorsing or validating your brand. Add specific pointers the authority has quoted about your product.
                    </p>
                  </div>
                  <div class="${classPrefix}-card">
                    <div class="${classPrefix}-playerWrapper">
                      <img />
                    </div>
                    <h2 class="${classPrefix}-endorserName">Endorser Name</h2>
                    <p class="${classPrefix}-designation">Designation/profile</p>
                    <p class="${classPrefix}-review">
                    Insert the words as spoken by an authority endorsing or validating your brand. Add specific pointers the authority has quoted about your product.
                    </p>
                  </div>
                </di>
              </section>
        `,
                styles: `
                .${classPrefix}-section {
                  background-color: #fff;
                  font-family: Inter, sans-serif;
                  padding: 79px 124px 85px;
                }
                .${classPrefix}-title {
                  text-align: center;
                  font-size: 40px;
                  font-style: normal;
                  font-weight: 600;
                  line-height: normal;
                  margin-bottom: 69px;
                  margin-top: 0px;
                }
                .${classPrefix}-wrapper {
                  display: flex;
                  gap: 56px;
                  width: 1192px;
                  margin: 0 auto;
                }
                .${classPrefix}-card {
                  flex: 1;
                  display: flex;
                  flex-direction: column;
                }
                .${classPrefix}-playerWrapper {
                  width: 100%;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  height: 311px;
                  border-radius: 10px;
                  background: #E9E9E9;
                }
                .${classPrefix}-img {
                  width: 41px;
                  height: 41px;
                  object-fit: fill;
                }
                .${classPrefix}-endorserName {
                  font-size: 20px;
                  font-style: normal;
                  font-weight: 500;
                  margin-top: 30px;
                  margin-bottom: 0px;
                  text-align: center;
                }
                .${classPrefix}-review {
                  font-size: 18px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 140%;
                  margin: 0px;
                  text-indent: 32px;
                  padding-right: 34px;
                }
                .${classPrefix}-designation {
                  margin: 10px 0px 45px;
                  text-align: center;
                } 
                
              @media (max-width: 770px) {
                .${classPrefix}-section {
                  padding: 20px;
                }
                .${classPrefix}-wrapper {
                  width: 100%;
                  flex-direction: column;
                }
                .${classPrefix}-review {
                  padding: 0px;
                }
                .${classPrefix}-title {
                  font-size: 30px;
                  margin-bottom: 50px;
                }
              }
        `,
            },
        },
    });
};

export { endorsements3Block, endorsements3Component };
