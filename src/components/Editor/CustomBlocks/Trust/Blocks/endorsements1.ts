import { Editor } from "grapesjs";
import image from "../../../../../public/verifiedCheckMark.png"

const endorsements1Block = (editor: Editor) => {
    const options = {
        id: "Uf1",
        label: "Endorsements 1",
        block: {},
        props: {},
        style: "",
        category: "Trust",
        classPrefix: "trust-endorsements1",
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

const endorsements1Component = (editor: Editor) => {
    const options = {
        id: "Uf1",
        label: "Endorsements 1",
        block: {},
        props: {},
        style: "",
        category: "Trust",
        classPrefix: "trust-endorsements1",
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
              <h1 class="${classPrefix}-mobileTitle">Header for Endorsement</h1>
                <div class="${classPrefix}-wrapper">
                  <div class="${classPrefix}-content">
                    <h1 class="${classPrefix}-title">Header for Endorsement</h1>
                    <p class="${classPrefix}-description">
                    “Insert the words as spoken by an authority endorsing or validating your brand/product. Make sure to add specific pointers quoted by the authority. If needed, add your own interpretation as an add-on.”
                    </p>
                    <div class="${classPrefix}-customerProfile">
                    <div class="${classPrefix}-imageContainer">
                    <img 
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=800 800w, httpscdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&"
                      class="${classPrefix}-image"      
                    />
                    </div>
                    <div>
                      <h3 class="${classPrefix}-endorserName">Endorser Name</h3>
                      <p class="${classPrefix}-designation">Designation/profile</p>
                      <p class="${classPrefix}-designation">Other notable accomplishments</p>
                    </div>
                  </div>
                  </div>
                  <div class="${classPrefix}-imageWrapper">
                  <img class="${classPrefix}-img" src="https://placehold.co/521x521" alt="Placeholder"/>
                </div>
                </div>
              </section>
        `,
                styles: `
        .${classPrefix}-section {
            background-color: #fff;
            font-family: Inter, sans-serif;
            padding: 119px 0px;
            display: flex;
            justify-content: center;
            align-items: center;
            max-width: 1440px;
            margin: 0 auto;
          }
          .${classPrefix}-title {
            font-size: 40px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            margin-bottom: 26px;
            margin-top: 0px;
          }
          .${classPrefix}-wrapper {
            display: flex;
            justify-content: center;
            height: 521px;
            width: 1073px;
            gap: 61px;
            margin: 0px;
          }
          .${classPrefix}-imageWrapper {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #E9E9E9;
            border-radius: 10px;
          }
          .${classPrefix}-img {
            width: 100%;
            height: 100%;
            object-fit: fill;
            border-radius: 10px; 
          }
          .${classPrefix}-image {
            width: 45px;
            height: 45px;
            object-fit: fill;
          }
          .${classPrefix}-content {
            display: flex;
            flex-direction: column;
            max-width: 491px;

          }
          .${classPrefix}-description {
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: 140%;
            margin-top: 0;
            padding-right: 52px;
            margin-bottom: 71px;
          }
          .${classPrefix}-endorserName {
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            margin-right: auto;
            margin-top: 0px;
            margin-bottom: 17px;
            font-size: 20px;
          }
        .${classPrefix}-customerProfile {
          display: flex;
          gap: 22px;
          align-items: center;
        }
        .${classPrefix}-imageContainer {
          height: 100px;
          width: 100px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #E9E9E9;
        }
        .${classPrefix}-image {
          object-fit: fill;
          width: 20px;
          height: 20px;
        }
        .${classPrefix}-designation {
          margin: 0;
          font-size: 15px;
        }
        .${classPrefix}-mobileTitle {
          display: none;
        }

        @media (max-width: 400px) {
          .${classPrefix}-section {
            padding: 56px 27px 62px 26px;
            flex-direction: column;
          }
          .${classPrefix}-wrapper {
            flex-direction: column-reverse;
            height: unset;
            gap: 30px;
            width: unset;
          }
          .${classPrefix}-imageWrapper {
            height: 360px;
          }
          .${classPrefix}-img {
            object-fit: cover;
          }
          .${classPrefix}-descriptionContainer {
            min-width: unset;
          }
          .${classPrefix}-title {
            display: none;
          }
          .${classPrefix}-description {
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            line-height: 140%;
            margin-bottom: 30px;
            padding-right: unset;
          }
          .${classPrefix}-endorserName {
            font-size: 18px;
            margin-bottom: 0px;
          }
          .${classPrefix}-designation {
            font-size: 13px;
          }
          .${classPrefix}-imageContainer {
            height: 80px;
            width: 80px;
          }
          .${classPrefix}-customerProfile {
            gap: 18px;
          }
          .${classPrefix}-mobileTitle {
            display: unset;
            font-size: 26px;
            font-style: normal;
            font-weight: 600;
            line-height: 35px;
            text-align: center;
            margin-top: 0px;
            margin-bottom: 35px;
          }
        }
        `,
            },
        },
    });
};

export { endorsements1Block, endorsements1Component };
