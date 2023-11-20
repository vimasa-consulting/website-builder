import { Editor } from "grapesjs";

const comparison3Block = (editor: Editor) => {
    const options = {
        id: "Yd3",
        label: "Comparison 3",
        block: {},
        props: {},
        style: "",
        category: "Logic",
        classPrefix: "Yd3",
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

const comparison3Component = (editor: Editor) => {
    const options = {
        id: "Yd3",
        label: "Comparison 3",
        block: {},
        props: {},
        style: "",
        category: "Logic",
        classPrefix: "Yd3",
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
                <section class="${classPrefix}-comparisonContainer">
                  <header>
                    <h1 class="${classPrefix}-title">Header for Product Comparison</h1>
                    <p class="${classPrefix}-subTitle">Claim that your product has an edge over others</p>
                  </header>
                  <table>
                    <thead class="${classPrefix}-tableHeader">
                      <tr>
                        <th>Product Features</th>
                        <th>Your product</th>
                        <th>Competitor 1</th>
                        <th>Competitor 2</th>
                        <th>Competitor 3</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Feature 1</td>
                        <td>✔</td>
                        <td>✔</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Feature 2</td>
                        <td></td>
                        <td>✔</td>
                        <td>✔</td>
                        <td>✔</td>
                      </tr>
                      <tr>
                        <td>Feature 3</td>
                        <td>✔</td>
                        <td>✔</td>
                        <td></td>
                        <td>✔</td>
                      </tr>
                      <tr>
                        <td>Feature 4</td>
                        <td></td>
                        <td>✔</td>
                        <td></td>
                        <td>✔</td>
                      </tr>
                      <tr>
                        <td>Feature 5</td>
                        <td>✔</td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </section>
                `,
                styles: `
                .${classPrefix}-comparisonContainer {
                  max-width: 1440px;
                  margin: auto;
                  padding: 5.24rem 20px;
                  font-family: Inter, sans-serif;
                }
                .${classPrefix}-tableHeader {
                  background-color: #4B4B4B;
                  height: 99px;
                } 
                .${classPrefix}-title {
                  text-align: center;
                  font-size: 40px;
                  font-style: normal;
                  font-weight: 600;
                  line-height: normal;
                  margin-top: 0;
                  margin-bottom: 16px;
                }
                .${classPrefix}-subTitle {
                  text-align: center;
                  font-size: 20px;
                  font-style: normal;
                  font-weight: 500;
                  line-height: normal;
                  margin-top: 0;
                  margin-bottom: 56px;
                }          
                table {
                  width: 100%;
                  border-collapse: collapse;
                  margin: 0 auto;
                  margin-top: 20px;
                  max-width: 994px;
                }
                
                table, th, td {
                  border: 1px solid #ddd;
                }
                
                th, td {
                  text-align: center;
                  padding: 8px;
                  font-size: 20px;
                }
                
                th {
                  background-color: #4B4B4B;
                  color: #FFF;
                  font-size: 20px;
                  font-weight: 500;
                }
                
                tbody tr:nth-child(odd) {
                  background-color: #E9E9E9;
                }

                tbody tr {
                  height: 100px;
                  max-height: 100%;
                }

                @media (max-width: 425px) {
                  .${classPrefix}-title {
                    font-size: 25px;
                  }
                  .${classPrefix}-subTitle {
                    font-size: 16px;
                    margin-bottom: 30px;
                  }
                  table {
                    word-break: break-all;
                  }
                  th, td {
                    font-size: 16px;
                  }      
                }
                `,
            },
        },
    });
};

export { comparison3Block, comparison3Component };
