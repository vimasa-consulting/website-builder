import { Editor } from "grapesjs";

const testimonials3Block = (editor: Editor) => {
    const options = {
        id: "trust-testimonials3",
        label: "Testimonials 3",
        block: {},
        props: {},
        style: "",
        category: "Trust",
        classPrefix: "trust-testimonials3",
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

const testimonials3Component = (editor: Editor) => {
    const options = {
        id: "trust-testimonials3",
        label: "Testimonials 3",
        block: {},
        props: {},
        style: "",
        category: "Trust",
        classPrefix: "trust-testimonials3",
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
                <h1 class="${classPrefix}-title" >Header for Customer Reviews</h1>
                <div class="${classPrefix}-wrapper">
                  <div class="${classPrefix}-card">
                    <div class="${classPrefix}-playerWrapper">
                      <img />
                    </div>
                    <h2 class="${classPrefix}-customerName">Customer Name</h2>
                    <p class="${classPrefix}-review">
                      “Insert a realistic & relatable customer quote here. Be specific with the pointers. Make the language resonate with your target audience.”
                    </p>
                  </div>
                  <div class="${classPrefix}-card">
                    <div class="${classPrefix}-playerWrapper">
                      <img />
                    </div>
                    <h2 class="${classPrefix}-customerName">Customer Name</h2>
                    <p class="${classPrefix}-review">
                      “Insert a realistic & relatable customer quote here. Be specific with the pointers. Make the language resonate with your target audience.”
                    </p>
                  </div>
                  <div class="${classPrefix}-card">
                    <div class="${classPrefix}-playerWrapper">
                      <img />
                    </div>
                    <h2 class="${classPrefix}-customerName">Customer Name</h2>
                    <p class="${classPrefix}-review">
                      “Insert a realistic & relatable customer quote here. Be specific with the pointers. Make the language resonate with your target audience.”
                    </p>
                  </div>
                </di>
              </section>
        `,
                styles: `
                .${classPrefix}-section {
                  background-color: #fff;
                  font-family: Inter, sans-serif;
                  padding: 78px 160px 105px;
                }
                .${classPrefix}-title {
                  text-align: center;
                  font-size: 40px;
                  font-style: normal;
                  font-weight: 600;
                  line-height: normal;
                  margin-bottom: 75px;
                  margin-top: 0px;
                }
                .${classPrefix}-wrapper {
                  display: flex;
                  gap: 43px;
                  max-width: 1148px;
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
                  height: 444px;
                  border-radius: 10px;
                  background: #E9E9E9;
                }
                .${classPrefix}-img {
                  width: 41px;
                  height: 41px;
                  object-fit: fill;
                }
                .${classPrefix}-customerName {
                  font-size: 20px;
                  font-style: normal;
                  font-weight: 500;
                  margin-top: 30px;
                  margin-bottom: 17px;
                }
                .${classPrefix}-review {
                  font-size: 15px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 140%;
                  padding-right: 25px;
                  margin: 0px;
                }
                
              @media (max-width: 770px) {
                .${classPrefix}-section {
                  padding: 20px;
                }
                .${classPrefix}-wrapper {
                  flex-direction: column;
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

export { testimonials3Block, testimonials3Component };
