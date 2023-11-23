import { Editor } from "grapesjs";
import image from "../../../../../public/verifiedCheckMark.png"

const reviewsAndRatings4Block = (editor: Editor) => {
    const options = {
        id: "Ud4",
        label: "Review & Rating 4",
        block: {},
        props: {},
        style: "",
        category: "Trust",
        classPrefix: "trust-reviewsAndRatings4",
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

const reviewsAndRatings4Component = (editor: Editor) => {
    const options = {
        id: "Ud4",
        label: "Review & Rating 4",
        block: {},
        props: {},
        style: "",
        category: "Trust",
        classPrefix: "trust-reviewsAndRatings4",
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
            <div class="${classPrefix}-cardWrapper">
              <div class="${classPrefix}-cardColumn">
                <div class="${classPrefix}-descriptionContainer">
                  <div class="${classPrefix}-ratingsContainer">
                      <img class="${classPrefix}-ratingImg" src="https://img.icons8.com/ios-glyphs/30/808080/star--v1.png" alt="star--v1" />
                      <img class="${classPrefix}-ratingImg" src="https://img.icons8.com/ios-glyphs/30/808080/star--v1.png" alt="star--v1" />
                      <img class="${classPrefix}-ratingImg" src="https://img.icons8.com/ios-glyphs/30/808080/star--v1.png" alt="star--v1" />
                      <img class="${classPrefix}-ratingImg" src="https://img.icons8.com/ios-glyphs/30/808080/star--v1.png" alt="star--v1" />
                      <img class="${classPrefix}-ratingImg" src="https://img.icons8.com/ios-glyphs/30/808080/star--v1.png" alt="star--v1" />
                  </div>
                  <p class="${classPrefix}-review">“Insert a realistic & relatable customer quote here. Be specific with the pointers. Make the language resonate with your target audience.”</p>
                  <div class="${classPrefix}-customerProfile">
                    <div class="${classPrefix}-imageContainer">
                    <img 
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=800 800w, httpscdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&"
                      class="${classPrefix}-image"      
                    />
                    </div>
                    <div>
                      <h3 class="${classPrefix}-customerName">Customer Name</h3>
                      <p class="${classPrefix}-designation">Designation/profile</p>
                    </div>
                  </div>
                </div>
                <div class="${classPrefix}-descriptionContainer">
                  <div class="${classPrefix}-ratingsContainer">
                      <img class="${classPrefix}-ratingImg" src="https://img.icons8.com/ios-glyphs/30/808080/star--v1.png" alt="star--v1" />
                      <img class="${classPrefix}-ratingImg" src="https://img.icons8.com/ios-glyphs/30/808080/star--v1.png" alt="star--v1" />
                      <img class="${classPrefix}-ratingImg" src="https://img.icons8.com/ios-glyphs/30/808080/star--v1.png" alt="star--v1" />
                      <img class="${classPrefix}-ratingImg" src="https://img.icons8.com/ios-glyphs/30/808080/star--v1.png" alt="star--v1" />
                      <img class="${classPrefix}-ratingImg" src="https://img.icons8.com/ios-glyphs/30/808080/star--v1.png" alt="star--v1" />
                  </div>
                  <p class="${classPrefix}-review ${classPrefix}-largerSection">“Insert a realistic & relatable customer quote here. Be specific with the pointers. Make the language resonate with your target audience.”</p>
                  <div class="${classPrefix}-customerProfile">
                    <div class="${classPrefix}-imageContainer">
                    <img 
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=800 800w, httpscdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&"
                      class="${classPrefix}-image"      
                    />
                    </div>
                    <div>
                      <h3 class="${classPrefix}-customerName">Customer Name</h3>
                      <p class="${classPrefix}-designation">Designation/profile</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="${classPrefix}-cardColumn">
                <div class="${classPrefix}-descriptionContainer">
                  <div class="${classPrefix}-ratingsContainer">
                      <img class="${classPrefix}-ratingImg" src="https://img.icons8.com/ios-glyphs/30/808080/star--v1.png" alt="star--v1" />
                      <img class="${classPrefix}-ratingImg" src="https://img.icons8.com/ios-glyphs/30/808080/star--v1.png" alt="star--v1" />
                      <img class="${classPrefix}-ratingImg" src="https://img.icons8.com/ios-glyphs/30/808080/star--v1.png" alt="star--v1" />
                      <img class="${classPrefix}-ratingImg" src="https://img.icons8.com/ios-glyphs/30/808080/star--v1.png" alt="star--v1" />
                      <img class="${classPrefix}-ratingImg" src="https://img.icons8.com/ios-glyphs/30/808080/star--v1.png" alt="star--v1" />
                  </div>
                  <p class="${classPrefix}-review ${classPrefix}-largerSection">“Insert a realistic & relatable customer quote here. Be specific with the pointers. Make the language resonate with your target audience.”</p>
                  <div class="${classPrefix}-customerProfile">
                    <div class="${classPrefix}-imageContainer">
                    <img 
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=800 800w, httpscdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&"
                      class="${classPrefix}-image"      
                    />
                    </div>
                    <div>
                      <h3 class="${classPrefix}-customerName">Customer Name</h3>
                      <p class="${classPrefix}-designation">Designation/profile</p>
                    </div>
                  </div>
                </div>
                <div class="${classPrefix}-descriptionContainer">
                  <div class="${classPrefix}-ratingsContainer">
                      <img class="${classPrefix}-ratingImg" src="https://img.icons8.com/ios-glyphs/30/808080/star--v1.png" alt="star--v1" />
                      <img class="${classPrefix}-ratingImg" src="https://img.icons8.com/ios-glyphs/30/808080/star--v1.png" alt="star--v1" />
                      <img class="${classPrefix}-ratingImg" src="https://img.icons8.com/ios-glyphs/30/808080/star--v1.png" alt="star--v1" />
                      <img class="${classPrefix}-ratingImg" src="https://img.icons8.com/ios-glyphs/30/808080/star--v1.png" alt="star--v1" />
                      <img class="${classPrefix}-ratingImg" src="https://img.icons8.com/ios-glyphs/30/808080/star--v1.png" alt="star--v1" />
                  </div>
                  <p class="${classPrefix}-review">“Insert a realistic & relatable customer quote here. Be specific with the pointers. Make the language resonate with your target audience.”</p>
                  <div class="${classPrefix}-customerProfile">
                    <div class="${classPrefix}-imageContainer">
                    <img 
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=800 800w, httpscdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&"
                      class="${classPrefix}-image"      
                    />
                    </div>
                    <div>
                      <h3 class="${classPrefix}-customerName">Customer Name</h3>
                      <p class="${classPrefix}-designation">Designation/profile</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="${classPrefix}-cardColumn">
                <div class="${classPrefix}-descriptionContainer">
                  <div class="${classPrefix}-ratingsContainer">
                      <img class="${classPrefix}-ratingImg" src="https://img.icons8.com/ios-glyphs/30/808080/star--v1.png" alt="star--v1" />
                      <img class="${classPrefix}-ratingImg" src="https://img.icons8.com/ios-glyphs/30/808080/star--v1.png" alt="star--v1" />
                      <img class="${classPrefix}-ratingImg" src="https://img.icons8.com/ios-glyphs/30/808080/star--v1.png" alt="star--v1" />
                      <img class="${classPrefix}-ratingImg" src="https://img.icons8.com/ios-glyphs/30/808080/star--v1.png" alt="star--v1" />
                      <img class="${classPrefix}-ratingImg" src="https://img.icons8.com/ios-glyphs/30/808080/star--v1.png" alt="star--v1" />
                  </div>
                  <p class="${classPrefix}-review">“Insert a realistic & relatable customer quote here. Be specific with the pointers. Make the language resonate with your target audience.”</p>
                  <div class="${classPrefix}-customerProfile">
                    <div class="${classPrefix}-imageContainer">
                    <img 
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=800 800w, httpscdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&"
                      class="${classPrefix}-image"      
                    />
                    </div>
                    <div>
                      <h3 class="${classPrefix}-customerName">Customer Name</h3>
                      <p class="${classPrefix}-designation">Designation/profile</p>
                    </div>
                  </div>
                </div>
                <div class="${classPrefix}-descriptionContainer">
                  <div class="${classPrefix}-ratingsContainer">
                      <img class="${classPrefix}-ratingImg" src="https://img.icons8.com/ios-glyphs/30/808080/star--v1.png" alt="star--v1" />
                      <img class="${classPrefix}-ratingImg" src="https://img.icons8.com/ios-glyphs/30/808080/star--v1.png" alt="star--v1" />
                      <img class="${classPrefix}-ratingImg" src="https://img.icons8.com/ios-glyphs/30/808080/star--v1.png" alt="star--v1" />
                      <img class="${classPrefix}-ratingImg" src="https://img.icons8.com/ios-glyphs/30/808080/star--v1.png" alt="star--v1" />
                      <img class="${classPrefix}-ratingImg" src="https://img.icons8.com/ios-glyphs/30/808080/star--v1.png" alt="star--v1" />
                  </div>
                  <p class="${classPrefix}-review ${classPrefix}-largerSection">“Insert a realistic & relatable customer quote here. Be specific with the pointers. Make the language resonate with your target audience.”</p>
                  <div class="${classPrefix}-customerProfile">
                    <div class="${classPrefix}-imageContainer">
                    <img 
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=800 800w, httpscdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b82ca4-4bdf-4600-869d-281c9b2e3aa7?apiKey=d9eca8b0cf294176914b16d6a4d96de8&"
                      class="${classPrefix}-image"      
                    />
                    </div>
                    <div>
                      <h3 class="${classPrefix}-customerName">Customer Name</h3>
                      <p class="${classPrefix}-designation">Designation/profile</p>
                    </div>
                  </div>
                </div>
              </div>
            </div> 
              </section>
        `,
                styles: `
        .${classPrefix}-section {
            background-color: #fff;
            font-family: Inter, sans-serif;
            padding: 66px 0px 125px;
            max-width: 1440px;
            margin: 0 auto;
          }
          .${classPrefix}-title {
            text-align: center;
            font-size: 40px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            margin-bottom: 78px;
            margin-top: 0px;
          }
          .${classPrefix}-cardWrapper {
            display: flex;
            gap: 37px;
            justify-content: center;
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
            justify-content: center;
            border-radius: 20px;
            background: #FFF;
            box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.15);
            padding-top: 35px;
            padding-left: 30px;
            padding-bottom: 25px;
            padding-right: 32px;
            max-width: 401px;
        }
        .${classPrefix}-cardColumn {
          gap: 52px;
          display: flex;
          flex-direction: column;
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
            margin-bottom: 23.5px;
        }
        .${classPrefix}-review {
            color: #000;
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            line-height: 140%;
            margin: 0;
            margin-bottom: 27.5px;
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
          width: 20px;
          height: 20px;
        }
        .${classPrefix}-designation {
          margin: 0;
          font-size: 15px;
        }

        @media (max-width: 400px) {
          .${classPrefix}-section {
            padding: 46px 25px 60px;
          }
          .${classPrefix}-cardWrapper {
            flex-direction: column;
          }
          .${classPrefix}-descriptionContainer {
            padding: 26px 23px 25px 30px;
          }
          .${classPrefix}-ratingsContainer {
            margin-right: auto;
            margin-bottom: 10.7px;
        }
          .${classPrefix}-review {
           font-size: 13px;
           padding-right: 15px;
        }
          .${classPrefix}-customerName {
           font-size: 15px;
           margin-bottom: 0px;
        }
          .${classPrefix}-designation {
           font-size: 12px;
        }
          .${classPrefix}-customerProfile {
           gap: 14px;
        }
          .${classPrefix}-title {
            font-size: 26px;
            font-style: normal;
            font-weight: 600;
            line-height: 35px;
            margin-bottom: 38px;
            padding: 0 50px;
          }
        }
        `,
            },
        },
    });
};

export { reviewsAndRatings4Block, reviewsAndRatings4Component };
