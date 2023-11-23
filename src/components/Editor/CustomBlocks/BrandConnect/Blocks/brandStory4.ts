import { Editor } from "grapesjs";

const options = {
  id: "Ta4",
  label: "Brand Story 4",
  block: {},
  props: {},
  style: "",
  category: "Brand Connect",
  classPrefix: "brandConnect-brandStory4",
  styleAdditional: "",
  media: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sign-intersection-fill" viewBox="0 0 16 16">
    <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435ZM7.25 4h1.5v3.25H12v1.5H8.75V12h-1.5V8.75H4v-1.5h3.25V4Z"/>
  </svg>`,
};
const brandStory4Block = (editor: Editor) => {
  editor.Blocks.add(options.id, {
    media: options.media,
    label: options.label,
    category: options.category,
    content: { type: options.id },
    ...options.block,
  });
};

const brandStory4Component = (editor: Editor) => {
  const { classPrefix } = options;
  const methods: any = {
    model: {
      defaults: {
        classes: [classPrefix],
        traits: [],
        components: `
          <section class="${classPrefix}-section">
  <div class="${classPrefix}-container">
    <div class="${classPrefix}-top-container">
      <div class="${classPrefix}-imageWrapper">
        <img loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=100 100w,
                  https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=200 200w,
                  https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=400 400w,
                  https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=800 800w,
                  https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1200 1200w,
                  https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1600 1600w, 
                  https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=2000 2000w, 
                  https://cdn.builder.io/api/v1/image/assets/TEMP/ca3d4956-b579-42e5-bfae-034be853a066?apiKey=d9eca8b0cf294176914b16d6a4d96de8&"
          class="${classPrefix}-image" />
      </div>
    </div>
    <div class="${classPrefix}-bottom-container">
      <span class="${classPrefix}-section-header-prefix">
        Compelling header for
      </span>
      <span class="${classPrefix}-section-header">
        Your Brand Story
      </span>
      <div class="${classPrefix}-section-header-seperator"></div>
      <div class="${classPrefix}-section-info">
        Craft your brand story in a way that sounds authentic, evokes emotions in your users, and is consistent across
        channels. Tap into emotions such as joy, nostalgia, pain, etc, while narrating your journey.
        Include the origin of the brand, its purpose & the values. Be very specific and simple with your brand message.
      </div>
      <div class="${classPrefix}-section-info">
        Include the origin of the brand, its purpose & the values. Be very specific and simple with your brand message.
      </div>
    </div>
  </div>
</section>
        `,
        styles: `
        .${classPrefix}-section {
width: 100%;
height: 707px;
flex-shrink: 0;
background: #e9e9e9;
padding-top: 30px;
margin: 0 auto auto auto;
}

.${classPrefix}-container {
display: flex;
flex-direction: column;
justify-items: center;
align-content: center;
align-items: center;
justify-content: space-between;
row-gap: 30px;
}

        .${classPrefix}-section-header-prefix {
          color: #000;
          text-align: center;
             font-family: Inter, sans-serif;
          font-size: 20px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          margin-bottom: 19px;
        }

        .${classPrefix}-section-header {
          color: #000;
          text-align: center;
             font-family: Inter, sans-serif;
          font-size: 40px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
        }

.${classPrefix}-section-header-prefix {
color: #000;
text-align: center;
font-family: Inter;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-bottom: 19px;
}

.${classPrefix}-section-header {
color: #000;
text-align: center;
font-family: Inter;
font-size: 40px;
font-style: normal;
font-weight: 600;
line-height: normal;
}

          text-align: center;
             font-family: Inter, sans-serif;
          font-size: 15px;
          font-style: normal;
          font-weight: 400;
          line-height: 140%; /* 21px */ 
        }

        @media (max-width: 440px) {
          .${classPrefix}-section {
            width: 100%;
            height: 707px;
            flex-shrink: 0;
            background: #E9E9E9;            
            flex-direction: column-reverse;
          }
          .${classPrefix}-section-container {
            padding: 38px 18px; 
            background: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 358px;
            fill: #FFF;
            filter: drop-shadow(0px 8px 24px rgba(0, 0, 0, 0.15));        
            flex-direction: column;
            border-radius: 10px;
            box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.15);
            margin-left: unset;
  
          }
          .${classPrefix}-section-header-prefix {
            font-size: 16px;
            margin-bottom: unset;
          }
          .${classPrefix}-section-header {
            font-size: 26px;
          }
          .${classPrefix}-section-info {
            font-size: 13px;
          }

        }
      `,
      },
    },
  };
  editor.Components.addType(options.id, methods);
};

export { brandStory4Block, brandStory4Component };
