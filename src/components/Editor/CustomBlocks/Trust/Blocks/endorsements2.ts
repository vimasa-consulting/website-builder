import { Editor } from "grapesjs";
import image from "../../../../../public/verifiedCheckMark.png"

const endorsements2Block = (editor: Editor) => {
    const options = {
        id: "Uf2",
        label: "Endorsements 2",
        block: {},
        props: {},
        style: "",
        category: "Trust",
        classPrefix: "trust-endorsements2",
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

const endorsements2Component = (editor: Editor) => {
    const options = {
        id: "Uf2",
        label: "Endorsements 2",
        block: {},
        props: {},
        style: "",
        category: "Trust",
        classPrefix: "trust-endorsements2",
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
                  <div class="${classPrefix}-imageWrapper">
                  <img class="${classPrefix}-img" src="https://placehold.co/595x412" alt="Placeholder"/>
                  </div>
                  <div class="${classPrefix}-content">
                    <h1 class="${classPrefix}-title">Header for Endorsement</h1>
                    <p class="${classPrefix}-description">
                    “Insert the words as spoken by an authority endorsing or validating your brand. Make sure to add specific pointers the authority mentions about your product.”
                    </p>
                  </div>
                </div>
              </section>
        `,
                styles: `
        .${classPrefix}-section {
            background-color: #fff;
            font-family: Inter, sans-serif;
            padding: 90px 0px 89px;
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
          .${classPrefix}-mobileTitle {
           display: none;
          }
          .${classPrefix}-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 412px;
            width: 1160px;
            gap: 82px;
            margin: 0px;
          }
          .${classPrefix}-imageWrapper {
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #E9E9E9;
            border-radius: 10px;
          }
          .${classPrefix}-img {
            width: 595px;
            height: 412px;
            border-radius: 10px;
          }
          .${classPrefix}-content {
            display: flex;
            flex-direction: column;
            flex: 1;
          }
          .${classPrefix}-description {
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            line-height: 140%;
            margin: 0;
            padding-right: 68px;
          }
          .${classPrefix}-customerName {
            margin-bottom: 10px;
          }
          .${classPrefix}-designation {
            margin: 0px;
          }


        @media (max-width: 400px) {
          .${classPrefix}-section {
            padding: 56px 20px 60px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .${classPrefix}-wrapper {
            flex-direction: column;
            height: unset;
            gap: 22px;
            width: unset;
          }
          .${classPrefix}-imageWrapper {
          }
          .${classPrefix}-descriptionContainer {
            min-width: unset;
          }
          .${classPrefix}-title {
           display: none;
          }
          .${classPrefix}-img {
            object-fit: cover;
            width: 360px;
            height: 250px;
          }
          .${classPrefix}-description {
            font-size: 13px;
            padding-right: 48px;
          }
          .${classPrefix}-mobileTitle {
            display: unset;
            font-size: 30px;
            margin-bottom: 20px;
            margin-top: 0px;
            font-size: 26px;
            font-style: normal;
            font-weight: 600;
            line-height: 35px;
          }
        }
        `,
            },
        },
    });
};

export { endorsements2Block, endorsements2Component };
