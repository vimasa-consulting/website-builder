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
      <div class="${classPrefix}-image-wrapper">
      <img loading="lazy" src="/editor/component-icons/image-icon.png" class="${classPrefix}-image-icon" />
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
        min-width: 1440px;
        height: 707px;
        flex-shrink: 0;
        background: #e9e9e9;
        padding-top: 30px;
        max-width: 1440px;
        margin: 0 auto
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

.${classPrefix}-image-icon {
aspect-ratio: 1;
object-fit: contain;
object-position: center;
width: 45px;
mix-blend-mode: multiply;
overflow: hidden;
align-self: center;
max-width: 100%;
border-radius: 50%;
height: 45px;
margin: auto;
}
.${classPrefix}-image-wrapper {
  width: 90px;
  height: 90px;
  border-color: #AEAEAE;
  display: flex;
  border-radius: 50%;  
  border-style: dotted;
  border-width: 2px;   
  align-self: center;   
}

.${classPrefix}-bottom-container {
border-radius: 10px;
padding: 72px;
max-width: 726px;
max-height: 416px;
background: #fff;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
filter: drop-shadow(0px 8px 24px rgba(0, 0, 0, 0.15));
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

.${classPrefix}-section-header-seperator {
width: 73px;
height: 4px;
flex-shrink: 0;
border-radius: 5px;
background: #d9d9d9;
margin-top: 22px;
margin-bottom: 29px;
}

.${classPrefix}-section-info {
text-align: center;
font-family: Inter, sans-serif;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 21px */
margin-bottom: 20px;
color: #000;
padding: 0px 13px;
}

@media (max-width: 770px) {
.${classPrefix}-section {
min-width: 400px;
height: 560px;
width: 100%;
max-width: 400px;
max-height: 560px;
padding: 50px 10px;
}

.${classPrefix}-bottom-container {
padding: 30px 20px;
max-width: 359px;
max-height: none;
}

.${classPrefix}-section-header-prefix {
color: #000;
text-align: center;
font-family: Inter, sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 140%; /* 22.4px */
margin: 0;
}
.${classPrefix}-section-header {
color: #000;
text-align: center;
font-family: Inter, sans-serif;
font-size: 26px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
.${classPrefix}-section-info {
color: #000;
text-align: center;
font-family: Inter, sans-serif;
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 18.2px */
}
.${classPrefix}-section-header-seperator {
margin-top: 20px;
margin-bottom: 20px;
}

.${classPrefix}-image {
width: 47px;
height: 47px;
}
}
      `,
      },
    },
  };
  editor.Components.addType(options.id, methods);
};

export { brandStory4Block, brandStory4Component };
