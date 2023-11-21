import { Editor } from "grapesjs";

const fomo4Block = (editor: Editor) => {
    const options = {
        id: "Wa4",
        label: "FOMO 4",
        block: {},
        props: {},
        style: "",
        category: "Urgency",
        classPrefix: "urgency-fomo4",
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

const fomo4Component = (editor: Editor) => {
    const options = {
        id: "Wa4",
        label: "FOMO 4",
        block: {},
        props: {},
        style: "",
        category: "Urgency",
        classPrefix: "urgency-fomo4",
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
                <div class="${classPrefix}-section">
                    <div class="${classPrefix}-section-container">
                        <div class="${classPrefix}-section-mobile-only">
                          <img src="https://s3-alpha-sig.figma.com/img/8f11/d7e1/3d01155bd542e8dc709e3193e3f9f33a?Expires=1701043200&amp;Signature=J6WB0V~9T7uQCsWI54O~FGJyW0ZtnbiW3ScKA6U8O4-CBTkzC-fOz8V3x1ltcA0~OtGRvnWIo4B8mNwjiMtnpB-yQSZf767VbvqjufjYItV9kAdB7Jw7A1ftHDykxuWtp-LhSnxYk0B~dUsX6LefnEdVhgI3AP9V7Nz0Xg7ydTBUrgaZ1grw4a~lzEZsCtr9ZZJN9yQJgXCV78SZFKNDeuIKoYFapVM6k8q-nOcJib3yWUW294qEwm7fOikZkUtWJo97LbdkoHXmoyUgLzXBDzQL0ZZcNnAY8t-3pGMQslOKbxb3vz8pmpJAAHFBzd0tEQ9Mb8gjShEMZ~7sVv7BIw__&amp;Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4">
                          <p class="${classPrefix}-text">Rush Now! [Insert Sale Name] ends in</p>
                          <img src="https://s3-alpha-sig.figma.com/img/8f11/d7e1/3d01155bd542e8dc709e3193e3f9f33a?Expires=1701043200&amp;Signature=J6WB0V~9T7uQCsWI54O~FGJyW0ZtnbiW3ScKA6U8O4-CBTkzC-fOz8V3x1ltcA0~OtGRvnWIo4B8mNwjiMtnpB-yQSZf767VbvqjufjYItV9kAdB7Jw7A1ftHDykxuWtp-LhSnxYk0B~dUsX6LefnEdVhgI3AP9V7Nz0Xg7ydTBUrgaZ1grw4a~lzEZsCtr9ZZJN9yQJgXCV78SZFKNDeuIKoYFapVM6k8q-nOcJib3yWUW294qEwm7fOikZkUtWJo97LbdkoHXmoyUgLzXBDzQL0ZZcNnAY8t-3pGMQslOKbxb3vz8pmpJAAHFBzd0tEQ9Mb8gjShEMZ~7sVv7BIw__&amp;Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4">
                        </div>
                        <div>
                          <img class="${classPrefix}-section-desktop-only" src="https://s3-alpha-sig.figma.com/img/8f11/d7e1/3d01155bd542e8dc709e3193e3f9f33a?Expires=1701043200&amp;Signature=J6WB0V~9T7uQCsWI54O~FGJyW0ZtnbiW3ScKA6U8O4-CBTkzC-fOz8V3x1ltcA0~OtGRvnWIo4B8mNwjiMtnpB-yQSZf767VbvqjufjYItV9kAdB7Jw7A1ftHDykxuWtp-LhSnxYk0B~dUsX6LefnEdVhgI3AP9V7Nz0Xg7ydTBUrgaZ1grw4a~lzEZsCtr9ZZJN9yQJgXCV78SZFKNDeuIKoYFapVM6k8q-nOcJib3yWUW294qEwm7fOikZkUtWJo97LbdkoHXmoyUgLzXBDzQL0ZZcNnAY8t-3pGMQslOKbxb3vz8pmpJAAHFBzd0tEQ9Mb8gjShEMZ~7sVv7BIw__&amp;Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4">
                          <p class="${classPrefix}-text ${classPrefix}-section-desktop-only">Rush Now! [Insert Sale Name] ends in</p>
                          <div class="${classPrefix}-countdown" data-gjs-type="countdown"></div> 
                          <img class="${classPrefix}-section-desktop-only" src="https://s3-alpha-sig.figma.com/img/8f11/d7e1/3d01155bd542e8dc709e3193e3f9f33a?Expires=1701043200&amp;Signature=J6WB0V~9T7uQCsWI54O~FGJyW0ZtnbiW3ScKA6U8O4-CBTkzC-fOz8V3x1ltcA0~OtGRvnWIo4B8mNwjiMtnpB-yQSZf767VbvqjufjYItV9kAdB7Jw7A1ftHDykxuWtp-LhSnxYk0B~dUsX6LefnEdVhgI3AP9V7Nz0Xg7ydTBUrgaZ1grw4a~lzEZsCtr9ZZJN9yQJgXCV78SZFKNDeuIKoYFapVM6k8q-nOcJib3yWUW294qEwm7fOikZkUtWJo97LbdkoHXmoyUgLzXBDzQL0ZZcNnAY8t-3pGMQslOKbxb3vz8pmpJAAHFBzd0tEQ9Mb8gjShEMZ~7sVv7BIw__&amp;Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4">
                        </div>
                    </div>
                </div>
                `,
                styles: `
               .${classPrefix}-section {
                height: 48px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
               }
               .${classPrefix}-section-container img {
                opacity: 0.5;
                width: 30px;
                height: 30px;
                }
               .${classPrefix}-section-container {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
               } 
               .${classPrefix}-section-container > div {
                display: flex;
                align-items: center;
                justify-content: center;
               } 
               .${classPrefix}-section-container .${classPrefix}-section-mobile-only {
                display: none;
              }
               .${classPrefix}-countdown .countdown-digit{
                font-size: 1.5rem;
               }
               .${classPrefix}-text {
                text-align: center;
                font-family: Inter, sans-serif;
                font-size: 15px;
                margin: 0;
                margin-left: 8px;
               } 
               .${classPrefix}-countdown {
                display: flex;
                }
               .${classPrefix}-countdown .countdown-cont {
                display: flex;
                margin-right: 8px;
                }
               .${classPrefix}-countdown .countdown-block {
                display: flex;
                margin: 0;
                padding: 0;
                margin-left: 4px;
                justify-content: center;
                align-items: center;
                }
               .${classPrefix}-countdown .countdown-block .countdown-label {
                color: #000;
                text-align: center;
                font-family: Inter;
                font-size: 15px;
                font-style: normal;
                font-weight: 400;
                line-height: 140%;
                }
               .${classPrefix}-countdown .countdown-block .countdown-digit {
                border-radius: 3px;
                background: #E9E9E9;
                padding: 3px 7px;
                text-align: center;
                font-family: Inter;
                font-size: 15px;
                font-style: normal;
                font-weight: 400;
                line-height: 140%;
                margin-right: 4px;
                }
                @media (max-width: 400px) {
                .${classPrefix}-section {
                  height: 70px;
                  padding-top: 10px;
                  padding-bottom: 14px;
                }
                .${classPrefix}-section-desktop-only{
                  display: none;
                }
                .${classPrefix}-section-container .${classPrefix}-section-mobile-only{
                  display: flex;
                }
               .${classPrefix}-section-heading {
                margin-bottom: 5px;
                }
                .${classPrefix}-h2 {
                text-overflow: ellipsis;
                white-space: nowrap;
                font-family: Inter;
                font-size: 19px;
                font-style: normal;
                font-weight: 400;
                }
                .${classPrefix}-text {
                text-align: center;
                font-family: Inter;
                font-size: 10px;
                font-style: normal;
                font-weight: 400;
                margin-left: 4px;
                }   
                .${classPrefix}-section-container img {
                width: 20px;
                height: 20px;
                }
                .${classPrefix}-countdown {
                  margin-top: 4px;
                }
                .${classPrefix}-countdown .countdown-block .countdown-label {
                color: #000;
                text-align: center;
                font-family: Inter;
                font-size: 9px;
                font-style: normal;
                font-weight: 400;
                line-height: 140%;
                }
               .${classPrefix}-countdown .countdown-block .countdown-digit {
                border-radius: 3px;
                background: #E9E9E9;
                padding: 2px 3px;
                text-align: center;
                font-family: Inter;
                font-size: 9px;
                font-style: normal;
                font-weight: 400;
                line-height: 140%;
                margin-right: 2px;
                }
              }

                `,
            },
        },
    });
};

export { fomo4Block, fomo4Component };
