import { Editor } from "grapesjs";

const faquc2Block = (editor: Editor) => {
  const options = {
    id: "Uc2",
    label: "FAQ UC 2",
    block: {},
    props: {},
    style: "",
    category: "Trust",
    classPrefix: "trust-faquc2",
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

const faquc2Component = (editor: Editor) => {
  const options = {
    id: "Uc2",
    label: "FAQ UC 2",
    block: {},
    props: {},
    style: "",
    category: "Trust",
    classPrefix: "trust-faquc2",
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
              <div class="${classPrefix}-wrapper">
              <div class="${classPrefix}-mobile-title">Frequently Asked Questions</div>
              <div class="${classPrefix}-left">
                <img loading="lazy" src="https://placehold.co/" class="${classPrefix}-image" />
              </div>
              <div class="${classPrefix}-right">
              <div class="${classPrefix}-title">Frequently Asked Questions</div>
              <div class="${classPrefix}-accordion">
              <div>
                <a class="${classPrefix}-label">Ask a question related to customer doubts or apprehensions</a>
                <div class="${classPrefix}-content">
                  <p>Section #1</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sit reiciendis, ipsam quaerat,
                    aperiam perspiciatis ad ullam architecto impedit natus illo nostrum molestias voluptas earum a
                    voluptatibus fugiat fuga facere!
                  </p>
                </div>
              </div>
              <div>
                <a class="${classPrefix}-label">Ask a question related to customer doubts or apprehensions</a>
                <div class="${classPrefix}-content">
                  <p>Section #2</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sit reiciendis, ipsam quaerat,
                    aperiam perspiciatis ad ullam architecto impedit natus illo nostrum molestias voluptas earum a
                    voluptatibus fugiat fuga facere!
                  </p>
                </div>
              </div>
              <div>
                <a class="${classPrefix}-label">Ask a question related to customer doubts or apprehensions</a>
                <div class="${classPrefix}-content">
                  <p>Section #3</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sit reiciendis, ipsam quaerat,
                    aperiam perspiciatis ad ullam architecto impedit natus illo nostrum molestias voluptas earum a
                    voluptatibus fugiat fuga facere!
                  </p>
                </div>
              </div>
              <div>
                <a class="${classPrefix}-label">Ask a question related to customer doubts or apprehensions</a>
                <div class="${classPrefix}-content">
                <p>Section #4</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sit reiciendis, ipsam quaerat,
                  aperiam perspiciatis ad ullam architecto impedit natus illo nostrum molestias voluptas earum a
                  voluptatibus fugiat fuga facere!
                </p>
              </div>
            </div>
            <div>
              <a class="${classPrefix}-label">Ask a question related to customer doubts or apprehensions</a>
            <div class="${classPrefix}-content">
              <p>Section #5</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sit reiciendis, ipsam quaerat,
                aperiam perspiciatis ad ullam architecto impedit natus illo nostrum molestias voluptas earum a
                voluptatibus fugiat fuga facere!
              </p>
            </div>
          </div>
            </div>
            </div>
            </div>
          </section>
                            
        `,
        styles: `
        .${classPrefix}-section {
            align-items: center;
            background-color: #fff;
            display: flex;
            padding: 109px 0;
            max-width: 1440px;
            margin: 0 auto;
          }

          .${classPrefix}-wrapper {
            background-color: #fff;
            display: flex;
            max-width: 1187px;
            margin-inline: auto; 
          }

          .${classPrefix}-left {
            flex: 0.2;
            margin-right: 100px;
            background: #E9E9E9;
            border-radius: 10px;
          }

          .${classPrefix}-right {
            flex: 4;
            background: #ffffff;
          }

          .${classPrefix}-image {
            width: 441px;
            height: 100%;
            border-radius: 10px;
          }

          .${classPrefix}-title {
            width: 580px;
            color: #000;
            text-align: center;
            font-family: Inter, sans-serif;
            font-size: 40px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            margin-bottom: 64px;
          }
          .${classPrefix}-mobile-title {
            display: none;
          }

          .${classPrefix}-accordion {
            max-width: 945px;
            margin: 0 auto;
            font-family: Inter, sans-serif;
            overflow: hidden;
            background: #ffffff;
          }
        
          
          .${classPrefix}-label {
            display: block;
            color: #000000;
            font-weight: 400;
            cursor: pointer;
            position: relative;
            transition: background 0.1s;
            padding: 24px 20px;
            border-bottom: 1px solid #ABABAB;
            height: 83px;
          }
          
          .${classPrefix}-label:hover {
            background: rgba(0, 0, 0, 0.1);
          }
          
          .${classPrefix}-label::after {
            content: "";
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 20px;
            width: 12px;
            height: 6px;
            background-image: url('data:image/svg+xml;utf8,<svg width="100" height="50" xmlns="http://www.w3.org/2000/svg"><polygon points="0,0 100,0 50,50" style="fill:%23000000;" /></svg>');
            background-size: contain;
            transition: transform 0.4s;
          }
          
          .${classPrefix}-content {
            background: #ffffff;
            line-height: 1.6;
            font-size: 0.85em;
            padding: 14px 20px;
          }

          @media (max-width: 768px) {
            .${classPrefix}-section {
             padding: 57px 18px; 
            }

            .${classPrefix}-wrapper {
              flex-direction: column;
            }

            .${classPrefix}-title {
              display: none;
            }
            .${classPrefix}-mobile-title {
              width: auto;
              font-size: 26px;
              font-style: normal;
              font-weight: 600;
              line-height: 35px;
              margin-bottom: 48px;
              display: unset;
              font-family: Inter, sans-serif;
            }
            .${classPrefix}-label {
              padding-right: 38px;
            }

            .${classPrefix}-image {
              width: 100%;
              height: 324px;
              height: 340px;
              border-radius: 10px;
            }

            .${classPrefix}-left {
              margin: unset;
              margin-bottom: 56px;
              display: flex;
              justify-content: center;
            }
          }
        `,
        script() {
          var el = this;
          function toggleAll(){
            el.querySelectorAll('a').forEach(function () {
              var item=arguments[0];
              item.nextSibling.style.display="none";
            });  
          }
          toggleAll();
          el.querySelectorAll('a').forEach(function () {
            var item=arguments[0];            
            item.addEventListener("click", function() {
              toggleAll();
              item.nextSibling.style.display="block";              
            });
          });
        },
      },
    },
  });
};

export { faquc2Block, faquc2Component };
