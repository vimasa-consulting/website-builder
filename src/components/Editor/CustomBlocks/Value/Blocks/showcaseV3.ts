import { Editor } from "grapesjs";

const showcaseV3Block = (editor: Editor) => {
  const options = {
    id: "Ve3",
    label: "Showcase V3",
    block: {},
    props: {},
    style: "",
    category: "Value",
    classPrefix: "value-showcaseV3",
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

const showcaseV3Component = (editor: Editor) => {
  const options = {
    id: "Ve3",
    label: "Showcase V3",
    block: {},
    props: {},
    style: "",
    category: "Value",
    classPrefix: "value-showcaseV3",
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
            <div class="${classPrefix}-container">
              <div class="${classPrefix}-heading-wrapper">
                <h1 class="${classPrefix}-section-heading">Header for your unique product selection</h1>
              </div>
              <div class="${classPrefix}-image-container">
                <div class="${classPrefix}-image-item">
                  <img loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=100 100w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=200 200w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=400 400w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=800 800w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1200 1200w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1600 1600w, 
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=2000 2000w, 
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&"
                    class="${classPrefix}-image" />
                  <div class="${classPrefix}-wrapper">
                    <div class="${classPrefix}-heading">Product 1</div>
                    <div class="${classPrefix}-sub-heading">Short Description</div>
                    <div class="${classPrefix}-rating-wrapper">
                      <img loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=100 100w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=200 200w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=400 400w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=800 800w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1200 1200w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1600 1600w, 
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=2000 2000w, 
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&"
                        class="${classPrefix}-rating-image" />
                      <img loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=100 100w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=200 200w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=400 400w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=800 800w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1200 1200w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1600 1600w, 
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=2000 2000w, 
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&"
                        class="${classPrefix}-rating-image" />
                      <img loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=100 100w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=200 200w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=400 400w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=800 800w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1200 1200w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1600 1600w, 
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=2000 2000w, 
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&"
                        class="${classPrefix}-rating-image" />
                      <img loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=100 100w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=200 200w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=400 400w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=800 800w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1200 1200w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1600 1600w, 
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=2000 2000w, 
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&"
                        class="${classPrefix}-rating-image" />
                      <img loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=100 100w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=200 200w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=400 400w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=800 800w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1200 1200w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1600 1600w, 
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=2000 2000w, 
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&"
                        class="${classPrefix}-rating-image" />
                    </div>
                  </div>
                </div>
                <div class="${classPrefix}-image-item">
                  <img loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=100 100w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=200 200w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=400 400w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=800 800w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1200 1200w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1600 1600w, 
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=2000 2000w, 
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&"
                    class="${classPrefix}-image" />
                  <div class="${classPrefix}-wrapper">
                    <div class="${classPrefix}-heading">Product 1</div>
                    <div class="${classPrefix}-sub-heading">Short Description</div>
                    <div class="${classPrefix}-rating-wrapper">
                      <img loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=100 100w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=200 200w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=400 400w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=800 800w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1200 1200w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1600 1600w, 
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=2000 2000w, 
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&"
                        class="${classPrefix}-rating-image" />
                      <img loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=100 100w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=200 200w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=400 400w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=800 800w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1200 1200w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1600 1600w, 
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=2000 2000w, 
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&"
                        class="${classPrefix}-rating-image" />
                      <img loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=100 100w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=200 200w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=400 400w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=800 800w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1200 1200w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1600 1600w, 
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=2000 2000w, 
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&"
                        class="${classPrefix}-rating-image" />
                      <img loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=100 100w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=200 200w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=400 400w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=800 800w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1200 1200w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1600 1600w, 
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=2000 2000w, 
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&"
                        class="${classPrefix}-rating-image" />
                      <img loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=100 100w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=200 200w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=400 400w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=800 800w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1200 1200w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1600 1600w, 
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=2000 2000w, 
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&"
                        class="${classPrefix}-rating-image" />
                    </div>
                  </div>
                </div>
                <div class="${classPrefix}-image-item">
                  <img loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=100 100w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=200 200w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=400 400w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=800 800w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1200 1200w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1600 1600w, 
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=2000 2000w, 
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&"
                    class="${classPrefix}-image" />
                  <div class="${classPrefix}-wrapper">
                    <div class="${classPrefix}-heading">Product 1</div>
                    <div class="${classPrefix}-sub-heading">Short Description</div>
                    <div class="${classPrefix}-rating-wrapper">
                      <img loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=100 100w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=200 200w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=400 400w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=800 800w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1200 1200w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1600 1600w, 
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=2000 2000w, 
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&"
                        class="${classPrefix}-rating-image" />
                      <img loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=100 100w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=200 200w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=400 400w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=800 800w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1200 1200w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1600 1600w, 
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=2000 2000w, 
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&"
                        class="${classPrefix}-rating-image" />
                      <img loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=100 100w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=200 200w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=400 400w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=800 800w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1200 1200w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1600 1600w, 
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=2000 2000w, 
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&"
                        class="${classPrefix}-rating-image" />
                      <img loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=100 100w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=200 200w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=400 400w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=800 800w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1200 1200w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1600 1600w, 
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=2000 2000w, 
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&"
                        class="${classPrefix}-rating-image" />
                      <img loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=100 100w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=200 200w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=400 400w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=800 800w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1200 1200w,
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1600 1600w, 
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=2000 2000w, 
                            https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&"
                        class="${classPrefix}-rating-image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        `,
        styles: `
          .${classPrefix}-section {
            min-width: 1440px;
            padding: 3.5rem 1rem;
            margin: 0 auto;
            font-family: Inter, sans-serif;
          }

          .${classPrefix}-container {
            max-width: 1440px;
            margin: 0 auto;
          }

          .${classPrefix}-heading-wrapper {
            margin: 0 auto 64px 0;
          }

          .${classPrefix}-section-heading {
            color: #000;
            text-align: left;
            font-size: 40px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            margin: 0;
            padding: 0 10.5rem;
          }

          .${classPrefix}-image-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            max-width: 100%;
            column-gap: 30px;
          }

          .${classPrefix}-image-item {
            flex: 0 0 calc(33.33% - 10px);
            margin-bottom: 20px;
            text-align: center;
            max-width: 350px;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .${classPrefix}-image {
            background: grey;
            border-radius: 4px;
            height: 342px;
            width: 100%;
            max-width: 342px;
          }

          .${classPrefix}-wrapper {
            padding: 1rem 0 0;
            text-align: left;
            width: 100%;
          }

          .${classPrefix}-heading {
            color: #000;
            font-family: Inter, sans-serif;
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            margin-bottom: 10px;
          }

          .${classPrefix}-sub-heading {
            color: #000;
            font-family: Inter, sans-serif;
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: 140%; /* 25.2px */
            margin-bottom: 10px;
          }

          .${classPrefix}-rating-image {
            width: 20px;
            height: 20px;
          }

          @media (max-width: 480px) {
            .${classPrefix}-section {
              min-width: 400px;
              padding: 10px;
            }

            .${classPrefix}-container {
              max-width: 100%;
            }

            .${classPrefix}-heading-wrapper {
              margin: 0 auto 36px 0;
            }

            .${classPrefix}-section-heading {
              color: black;
              font-size: 26px;
              font-family: Inter, sans-serif;
              font-weight: 600;
              line-height: 35px;
              word-wrap: break-word;
              padding: 0;
            }

            .${classPrefix}-image-item {
              width: 100%;
              max-width: 113px;
          /*     flex: none; */
            }

            .${classPrefix}-image {
              width: 100%;
              height: 127px;
              max-width: 113px;
            }

            .${classPrefix}-wrapper {
              text-align: center;
              padding-top: 10px;
            }

            .${classPrefix}-heading {
              color: #000;
              font-family: Inter, sans-serif;
              font-size: 16px;
              font-style: normal;
              font-weight: 500;
              line-height: 140%; /* 22.4px */
              margin-bottom: 5px;
            }

            .${classPrefix}-sub-heading {
              font-size: 13px;
              margin-bottom: 5px;
            }
            
            .${classPrefix}-rating-image {
              width: 13px;
              height: 13px;
            }

            .${classPrefix}-image-container {
              column-gap: 14px
            }
          }
        `,
      },
    },
  });
};

export { showcaseV3Block, showcaseV3Component };
