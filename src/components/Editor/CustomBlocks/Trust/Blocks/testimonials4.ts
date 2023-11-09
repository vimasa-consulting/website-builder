import { Editor } from "grapesjs";

const testimonials4Block = (editor: Editor) => {
    const options = {
        id: "Ue4",
        label: "Testimonials 4",
        block: {},
        props: {},
        style: "",
        category: "Trust",
        classPrefix: "trust-testimonials4",
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

const testimonials4Component = (editor: Editor) => {
    const options = {
        id: "trust-testimonials4",
        label: "Testimonials 4",
        block: {},
        props: {},
        style: "",
        category: "Trust",
        classPrefix: "trust-testimonials4",
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
              <div class="${classPrefix}-sectionWrapper">
                <div class="${classPrefix}-wrapper">
                  <div class="${classPrefix}-content">
                    <div class="${classPrefix}-description">
                      <p class="${classPrefix}-descriptionContent">
                      “Insert a realistic & relatable customer quote here. Be specific with the pointers.
                      </p>
                      <p class="${classPrefix}-descriptionContent">
                      Make the language resonate with your target audience. Include customer results, delivery satisfaction, customer support satisfaction, etc.”
                      </p>
                    </div>
                    <div class="${classPrefix}-customerProfile">
                    <div>
                      <h3 class="${classPrefix}-customerName">Customer Name</h3>
                      <p class="${classPrefix}-designation">Designation/profile</p>
                    </div>
                  </div>
                  </div>
                  <div class="${classPrefix}-imageWrapper">
                    <img 
                    class="${classPrefix}-image"
                    />
                </div>
                </div>
                </div> 
              </section>
        `,
                styles: `
        .${classPrefix}-section {
            background-color: #fff;
            font-family: Inter, sans-serif;
            padding: 75px 20px 92px;
          }
        .${classPrefix}-sectionWrapper {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .${classPrefix}-title {
            font-size: 40px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            margin-bottom: 26px;
            margin-top: 0px;
            margin-bottom: 71px;
            text-align: center;
          }
          .${classPrefix}-wrapper {
            display: flex;
            justify-content: center;
            height: 366px;
            width: 946px;
            gap: 120px;
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
          .${classPrefix}-image {
            width: 45px;
            height: 45px;
            object-fit: fill;
          }
          .${classPrefix}-content {
            display: flex;
            flex-direction: column;
            flex: 1;
            justify-content: flex-end;
            min-width: 460px;
          }
          .${classPrefix}-description {
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: 140%;
            margin-top: 0;
            padding-right: 62px;
            margin-bottom: 49px;
          }
          .${classPrefix}-descriptionContent {
            margin: 0;
          }
          .${classPrefix}-customerName {
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            margin-right: auto;
            margin-top: 0px;
            margin-bottom: 10px;
            font-size: 20px;
          }
        .${classPrefix}-customerProfile {
          display: flex;
          gap: 22px;
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
          margin-bottom: 44px;
        }

        @media (max-width: 770px) {
          .${classPrefix}-section {
            padding: 20px;
          }
          .${classPrefix}-wrapper {
            flex-direction: column;
            height: unset;
            gap: 52px;
          }
          .${classPrefix}-imageWrapper {
            min-height: 350px;
          }
          .${classPrefix}-descriptionContainer {
            min-width: unset;
          }
          .${classPrefix}-title {
            font-size: 30px;
            margin-bottom: 20px;
          }
          .${classPrefix}-content {
            min-width: unset;
          }
        }
        `,
            },
        },
    });
};

export { testimonials4Block, testimonials4Component };
