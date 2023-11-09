import { Editor } from "grapesjs";
import image from "../../../../../public/verifiedCheckMark.png"

const testimonials1Block = (editor: Editor) => {
    const options = {
        id: "Ue1",
        label: "Testimonials 1",
        block: {},
        props: {},
        style: "",
        category: "Trust",
        classPrefix: "trust-testimonials1",
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

const testimonials1Component = (editor: Editor) => {
    const options = {
        id: "trust-testimonials1",
        label: "Testimonials 1",
        block: {},
        props: {},
        style: "",
        category: "Trust",
        classPrefix: "trust-testimonials1",
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
                <h1 class="${classPrefix}-title">Header for Customer Reviews</h1>
                <div class="${classPrefix}-wrapper">
                  <div class="${classPrefix}-imageWrapper">
                    <img 
                    class="${classPrefix}-image"
                    />
                  </div>
                  <div class="${classPrefix}-content">
                    <p class="${classPrefix}-description">
                    “Insert a realistic & relatable customer quote here. Be specific with the pointers. Make the language resonate with your target audience. Include customer results, delivery satisfaction, customer support satisfaction, etc.”
                    </p>
                    <h3 class="${classPrefix}-customerName">
                    Customer Name
                    </h3>
                    <p class="${classPrefix}-designation">
                    Designation/Profile
                    </p>
                  </div>
                </div>
              </section>
        `,
                styles: `
        .${classPrefix}-section {
            background-color: #fff;
            font-family: Inter, sans-serif;
            padding: 66px 82px 125px;
            padding-top: 99px;
            padding-bottom: 113px;
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
            justify-content: center;
            align-items: center;
            gap: 145px;
          }
          .${classPrefix}-imageWrapper {
            width: 317px;
            height: 317px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #E9E9E9;
            border-radius: 50%;
          }
          .${classPrefix}-image {
            width: 45px;
            height: 45px;
            object-fit: fill;
          }
          .${classPrefix}-content {
            display: flex;
            flex-direction: column;
            max-width: 445px;
          }
          .${classPrefix}-description {
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: 140%;
            margin-top: 0;
          }
          .${classPrefix}-customerName {
            margin-bottom: 10px;
          }
          .${classPrefix}-designation {
            margin: 0px;
          }


        @media (max-width: 770px) {
          .${classPrefix}-section {
            padding: 20px;
          }
          .${classPrefix}-wrapper {
            flex-direction: column;
          }
          .${classPrefix}-descriptionContainer {
            min-width: unset;
          }
          .${classPrefix}-title {
            font-size: 30px;
            margin-bottom: 50px;
          }
        }
        @media (max-width: 425px) {
          .${classPrefix}-imageWrapper {
            width: 250px;
            height: 250px;
          }
        }
        `,
            },
        },
    });
};

export { testimonials1Block, testimonials1Component };
