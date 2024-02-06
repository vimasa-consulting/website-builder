import { Editor } from "grapesjs";
import image from "../../../../../public/verifiedCheckMark.png"

const testimonials2Block = (editor: Editor) => {
    const options = {
        id: "Ue2",
        label: "Testimonials 2",
        block: {},
        props: {},
        style: "",
        category: "Trust",
        classPrefix: "trust-testimonials2",
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

const testimonials2Component = (editor: Editor) => {
    const options = {
        id: "Ue2",
        label: "Testimonials 2",
        block: {},
        props: {},
        style: "",
        category: "Trust",
        classPrefix: "trust-testimonials2",
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
              <div class="${classPrefix}-cardColumn">
                <div class="${classPrefix}-descriptionContainer">
                  <div class="${classPrefix}-customerProfile">
                    <div class="${classPrefix}-imageContainer">
                    <img loading="lazy" src="/editor/component-icons/image-icon.png" class="${classPrefix}-image" />
                    </div>
                    <div>
                      <h3 class="${classPrefix}-customerName">Customer Name</h3>
                      <p class="${classPrefix}-designation">Designation/profile</p>
                    </div>
                  </div>
                  <p class="${classPrefix}-review">“Insert a realistic & relatable customer quote here. Be specific with the pointers. Make the language resonate with your target audience.”</p>
                </div>
                <div class="${classPrefix}-descriptionContainer">
                  <div class="${classPrefix}-customerProfile">
                    <div class="${classPrefix}-imageContainer">
                    <img loading="lazy" src="/editor/component-icons/image-icon.png" class="${classPrefix}-image" />
                    </div>
                    <div>
                      <h3 class="${classPrefix}-customerName">Customer Name</h3>
                      <p class="${classPrefix}-designation">Designation/profile</p>
                    </div>
                  </div>
                  <p class="${classPrefix}-review">“Insert a realistic & relatable customer quote here. Be specific with the pointers. Make the language resonate with your target audience.”</p>
                </div>
                <div class="${classPrefix}-descriptionContainer">
                  <div class="${classPrefix}-customerProfile">
                    <div class="${classPrefix}-imageContainer">
                    <img 
                      loading="lazy"
                      src="/editor/component-icons/image-icon.png"
                      class="${classPrefix}-image"      
                    />
                    </div>
                    <div>
                      <h3 class="${classPrefix}-customerName">Customer Name</h3>
                      <p class="${classPrefix}-designation">Designation/profile</p>
                    </div>
                  </div>
                  <p class="${classPrefix}-review">“Insert a realistic & relatable customer quote here. Be specific with the pointers. Make the language resonate with your target audience.”</p>
                </div>
              </div>
              </section>
        `,
                styles: `
                .${classPrefix}-section {
                  background-color: #fff;
                  font-family: Inter, sans-serif;
                  padding: 99px 0px 135px;
                  margin: 0 auto;
                  max-width: 1440px;
                }
                .${classPrefix}-title {
                  text-align: center;
                  font-size: 40px;
                  font-style: normal;
                  font-weight: 600;
                  line-height: normal;
                  margin-bottom: 83px;
                  margin-top: 0px;
                }
                .${classPrefix}-card {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  flex-direction: column;
                  border-radius: 10px;
                  border: 1px solid rgba(171, 171, 171, 0.70);
                  padding: 56px 41px 53px;
              }
              .${classPrefix}-descriptionContainer {
                  display: flex;
                  flex-direction: column;
                  justify-content: flex-start;
                  border-radius: 20px;
                  background: #FFF;
                  box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.15);
                  padding-top: 69px;
                  padding-left: 38px;
                  padding-bottom: 90px;
                  padding-right: 38px;
                  width: 350px;
                  gap: 33px
              }
              .${classPrefix}-cardColumn {
                gap: 50px;
                display: flex;
                justify-content: center;
              }
              .${classPrefix}-ratingImg {
                  width: 25px;
                  height: 25px;
                }
              .${classPrefix}-largerSection {
                min-height: 131px;
              }
              .${classPrefix}-horizontalLine {
                  width: 78.5px;
                  color: #ABABAB;
                  margin-top: 31px;
              }
              .${classPrefix}-productName {
                  color: #000;
                  text-align: center;
                  font-size: 20px;
                  font-style: normal;
                  font-weight: 500;
                  line-height: 140%;
                  margin-top: 19px;
                  margin-bottom: 16px;
              }
              .${classPrefix}-ratingsContainer {
                  margin-right: auto;
                  margin-bottom: 16px;
              }
              .${classPrefix}-review {
                  color: #000;
                  font-size: 15px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 140%;
                  margin: 0;
              }
              .${classPrefix}-customerName {
                  color: #000;
                  text-align: center;
                  font-size: 20px;
                  font-style: normal;
                  font-weight: 500;
                  margin-right: auto;
                  margin-bottom: 2px;
                  margin-top: 0px;
                }
              .${classPrefix}-customerProfile {
                display: flex;
                align-items: center;
                gap: 23px;
              }
              .${classPrefix}-imageContainer {
                height: 82px;
                width: 82px;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                background: #E9E9E9;
                padding: 15px;
              }
              .${classPrefix}-image {
                object-fit: fill;
                width: 100%;
                height: 100%;
              }
              .${classPrefix}-designation {
                margin: 0;
                font-size: 15px;
              }
      
              @media (max-width: 400px) {
                .${classPrefix}-section {
                  padding: 45px 25px 52px;
                }
                .${classPrefix}-cardWrapper {
                  flex-direction: column;
                }
                .${classPrefix}-cardColumn {
                  flex-direction:  column;
                  align-items: center;
                }
                .${classPrefix}-descriptionContainer {
                  min-width: unset;
                  width: 100%;
                  padding: 38px 27px;
                  gap: 26px;
                }
                .${classPrefix}-title {
                  font-size: 26px;
                  margin-bottom: 50px;
                  padding: 0 50px;
                }
                .${classPrefix}-customerName {
                 font-size: 15px;
                }
                .${classPrefix}-customerProfile {
                 gap: 18px;
                }
                .${classPrefix}-imageContainer {
                 width: 80px;
                 height: 80px;
                }
                .${classPrefix}-designation {
                  font-size: 12px;
                }
                .${classPrefix}-review {
                  font-size: 13px;
                  padding-right: 24px;
                  margin-bottom: 18px;
                }
              }
        `,
            },
        },
    });
};

export { testimonials2Block, testimonials2Component };
