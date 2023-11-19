import { Editor } from "grapesjs";

const endorsements3Block = (editor: Editor) => {
    const options = {
        id: "Uf3",
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
        id: "Uf3",
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
                      <img class="${classPrefix}-img" src="https://placehold.co/360x311" alt="Placeholder"/>
                    </div>
                    <h2 class="${classPrefix}-endorserName">Endorser Name</h2>
                    <p class="${classPrefix}-designation">Designation/profile</p>
                    <p class="${classPrefix}-review">
                    <img src="https://img.icons8.com/ios-filled/50/E9E9E9/quote-left.png" alt="quotes" class="${classPrefix}-quotes" />
                    Insert the words as spoken by an authority endorsing or validating your brand. Add specific pointers the authority has quoted about your product.
                    </p>
                  </div>
                  <div class="${classPrefix}-card">
                    <div class="${classPrefix}-playerWrapper">
                      <img class="${classPrefix}-img" src="https://placehold.co/360x311" alt="Placeholder"/>
                    </div>
                    <h2 class="${classPrefix}-endorserName">Endorser Name</h2>
                    <p class="${classPrefix}-designation">Designation/profile</p>
                    <p class="${classPrefix}-review">
                    <img src="https://img.icons8.com/ios-filled/50/E9E9E9/quote-left.png" alt="quotes" class="${classPrefix}-quotes" />
                    Insert the words as spoken by an authority endorsing or validating your brand. Add specific pointers the authority has quoted about your product.
                    </p>
                  </div>
                  <div class="${classPrefix}-card">
                    <div class="${classPrefix}-playerWrapper">
                      <img class="${classPrefix}-img" src="https://placehold.co/360x311" alt="Placeholder"/>
                    </div>
                    <h2 class="${classPrefix}-endorserName">Endorser Name</h2>
                    <p class="${classPrefix}-designation">Designation/profile</p>
                    <p class="${classPrefix}-review">
                    <img src="https://img.icons8.com/ios-filled/50/E9E9E9/quote-left.png" alt="quotes" class="${classPrefix}-quotes" />
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
                  padding: 79px 0px 85px;
                  max-width: 1440px;
                  margin: 0 auto;
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
                  width: 100%;
                  height: 100%;
                  object-fit: fill;
                  border-radius: 10px;
                }
                .${classPrefix}-quotes {
                  width: 30px;
                  height: 30px;
                  margin-bottom: -7px;
                }
                .${classPrefix}-endorserName {
                  font-size: 20px;
                  font-style: normal;
                  font-weight: 500;
                  margin-top: 33px;
                  margin-bottom: 0px;
                  text-align: center;
                }
                .${classPrefix}-review {
                  font-size: 18px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 140%;
                  margin: 0px;
                  text-indent: 0px;
                  padding-right: 0px;
                }
                .${classPrefix}-designation {
                  margin: 10px 0px 45px;
                  text-align: center;
                  font-size: 15px;
                } 
                
              @media (max-width: 400px) {
                .${classPrefix}-section {
                  padding: 66px 35px 53px; 
                }
                .${classPrefix}-wrapper {
                  width: 100%;
                  flex-direction: column;
                  gap: 80px;
                }
                .${classPrefix}-review {
                  padding: 0px;
                  font-size: 15px;
                }
                .${classPrefix}-img {
                  width: 319px;
                  height: 276px;
                  object-fit: fill;
                  border-radius: 10px;
                }
                .${classPrefix}-playerWrapper {
                  width: unset;
                  height: unset;
                  background: unset;
                }
                .${classPrefix}-title {
                  font-size: 26px;
                  margin-bottom: 35px;
                }
                .${classPrefix}-designation {
                  margin-bottom: 28px;
                  font-size: 13px;
                  margin-top: 0px;
                }
                .${classPrefix}-endorserName {
                  font-size: 18px;
                }
              }
        `,
            },
        },
    });
};

export { endorsements3Block, endorsements3Component };
