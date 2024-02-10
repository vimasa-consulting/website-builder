import { Editor } from "grapesjs";

const socialMedia3Block = (editor: Editor) => {
  const options = {
    id: "Td3",
    label: "Social Media 3",
    block: {},
    props: {},
    style: "",
    category: "Brand Connect",
    classPrefix: "brandConnect-socialMedia3",
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

const socialMedia3Component = (editor: Editor) => {
  const options = {
    id: "Td3",
    label: "Social Media 3",
    block: {},
    props: {},
    style: "",
    category: "Brand Connect",
    classPrefix: "brandConnect-socialMedia3",
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
                <p class="${classPrefix}-socialMediaHandle">@yourhandlename</p>
                <h1 class="${classPrefix}-title">Introduce your social media community</h1>
                <div class="${classPrefix}-wrapper">
                  <div class="${classPrefix}-card">
                    <div class="${classPrefix}-playerWrapper">
                    <img loading="lazy" src="/editor/component-icons/image-icon.png" class="${classPrefix}-image" />
                    </div>
                  </div>
                  <div class="${classPrefix}-card">
                    <div class="${classPrefix}-playerWrapper">
                    <img loading="lazy" src="/editor/component-icons/image-icon.png" class="${classPrefix}-image" />
                    </div>
                  </div>
                  <div class="${classPrefix}-card">
                    <div class="${classPrefix}-playerWrapper">
                    <img loading="lazy" src="/editor/component-icons/image-icon.png" class="${classPrefix}-image" />
                    </div>
                  </div>
                  <div class="${classPrefix}-card">
                    <div class="${classPrefix}-playerWrapper">
                    <img loading="lazy" src="/editor/component-icons/image-icon.png" class="${classPrefix}-image" />
                    </div>
                  </div>
                  <div class="${classPrefix}-card">
                    <div class="${classPrefix}-playerWrapper">
                    <img loading="lazy" src="/editor/component-icons/image-icon.png" class="${classPrefix}-image" />
                    </div>
                  </div>
              </div>
              </section>
        `,
        styles: `
                .${classPrefix}-section {
                  background-color: #fff;
                  font-family: Inter, sans-serif;
                  padding: 82px 0px 92px;
                  max-width: 1440px;
                  min-width: 1440px;
                  margin: 0 auto;
                }
                .${classPrefix}-title {
                  text-align: center;
                  font-size: 40px;
                  font-style: normal;
                  font-weight: 600;
                  line-height: normal;
                  margin-bottom: 77px;
                  margin-top: 13px;
                  color: #000;
                }
                .${classPrefix}-socialMediaHandle {
                  margin: 0;
                  text-align: center;
                  font-size: 20px;
                  font-style: normal;
                  font-weight: 500;
                  color: #000;
                }
                .${classPrefix}-iconWrapper {
                  margin: 0 auto;
                  margin-bottom: 65px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  gap: 18px;
                }
                .${classPrefix}-wrapper {
                  display: flex;
                  width: 100%;
                  margin: 0 auto;
                  justify-content: space-between;
                  gap: 16px;
                  max-width: 1264px;
                }
                .${classPrefix}-card {
                  height: 100%;
                  display: flex;
                  flex-direction: column;
                  border-radius: 20px;
                  border: 1px solid rgba(171, 171, 171, 0.20);
                  background: #FFF;
                  box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.07);
                }
                .${classPrefix}-playerWrapper {
                  width: 100%;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  border-radius: 10px;
                  background: #E9E9E9;
                  overflow: hidden;
                }
                .${classPrefix}-img {
                  border-radius: 10px;
                  max-width: 100%;
                  width: 100%;
                }
                .${classPrefix}-detailsWrapper {
                  padding: 30px;
                  display: flex;
                  flex-direction: center;
                  justify-content: space-between;
                  flex-direction: column;
                  gap: 55px;
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
                  font-size: 15px;
                  margin: 0px;
                  max-width: 320px;
                }
                .${classPrefix}-customerName {
                  color: #000;
                  text-align: center;
                  font-size: 20px;
                  font-style: normal;
                  font-weight: 500;
                  margin-right: auto;
                  margin-bottom: 10px;
                  margin-top: 0px;
                }
              .${classPrefix}-customerProfile {
                display: flex;
                align-items: center;
                gap: 24px;
              }
              .${classPrefix}-imageContainer {
                height: 62px;
                width: 62px;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                background: #E9E9E9;
              }
              .${classPrefix}-image {
                object-fit: fill;
                width: 240px;
                height: 408px;
              } 
              @media (max-width: 400px) {
                .${classPrefix}-section {
                  min-width: 400px;
                  padding: 51px 20px 44px;
                }
                .${classPrefix}-wrapper {
                  width: 100%;
                  flex-direction: column;
                }
                .${classPrefix}-review {
                  padding: 0px;
                }
                .${classPrefix}-iconWrapper {
                  margin-bottom: 31px;
                }
                .${classPrefix}-review {
                  padding: 0px;
                }
                .${classPrefix}-title {
                  font-size: 30px;
                  margin-bottom: 22px;
                }
                .${classPrefix}-playerWrapper > .${classPrefix}-img {
                  width: 100%;
                }
                .${classPrefix}-image {
                  object-fit: fill;
                  width: 360px;
                }
              }
        `,
      },
    },
  });
};

export { socialMedia3Block, socialMedia3Component };
