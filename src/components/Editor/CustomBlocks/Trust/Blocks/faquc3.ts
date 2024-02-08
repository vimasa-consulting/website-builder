import { Editor } from "grapesjs";

const faquc3Block = (editor: Editor) => {
  const options = {
    id: "Uc3",
    label: "FAQ UC 3",
    block: {},
    props: {},
    style: "",
    category: "Trust",
    classPrefix: "trust-faquc3",
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

const faquc3Component = (editor: Editor) => {
  const options = {
    id: "Uc3",
    label: "FAQ UC 3",
    block: {},
    props: {},
    style: "",
    category: "Trust",
    classPrefix: "trust-faquc3",
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
              </section>
                            
        `,
        styles: `
        .${classPrefix}-section {
            align-items: center;
            background-color: #fff;
            display: block;
            padding: 86px 0 64px;
            max-width: 1440px;
            min-width: 1440px;
            margin: 0 auto;
          }

          .${classPrefix}-title {
            width: 580px;
            margin: 0 auto;
            color: #000;
            text-align: center;
            font-family: Inter, sans-serif;
            font-size: 40px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            margin-bottom: 74px;
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
            padding: 20px 24px;
            border: 1px solid #ABABAB;
            margin-bottom: 22px;
            border-radius: 15px;
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

          @media (max-width: 400px) {
            .${classPrefix}-section {
              min-width: 400px;
              padding: 57px 18px 42px;
            }

            .${classPrefix}-title {
              font-size: 26px;
              font-style: normal;
              font-weight: 600;
              line-height: 35px;
              margin-bottom: 47px;
              width: unset;
            }
            .${classPrefix}-label {
              padding-right: 30px;
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

export { faquc3Block, faquc3Component };
