export const icon = "icon";

export default (editor, options = {}) => {
  const opts = {
    ...{
      // IconifyFinder's configurations
      config: {},

      // Pass the editor constructor. By default, the `IconFinder` will be called
      constructor: "",

      // Label for the image editor (used in the modal)
      labelIconPicker: "Icon Picker",

      // Id to use to create the icon finder command
      commandId: "icon-finder",

      // Handle iconfinder events
      // onEvent: (event) => {}
      onEvent: 0,

      // Handle event after
      onEventAfter: (e) => {},

      // Container max-height
      maxWidth: "100%",

      // Container max-height
      maxHeight: "650px",

      // Scripts to load dynamically in case no Iconifiy instance was found
      script: [
        "https://unpkg.com/@ju99ernaut/iconsearch/dist/icon-finder.min.js",
      ],

      // In case the script is loaded this style will be loaded too
      style: ["https://unpkg.com/@ju99ernaut/iconsearch/dist/style.css"],
    },
    ...options,
  };

  const {
    script,
    style,
    onEvent,
    onEventAfter,
    maxWidth,
    maxHeight,
    commandId,
  } = opts;
  const pfx = editor.getConfig("stylePrefix");
  const mdlClass = `${pfx}mdl-dialog-ntl`;

  const getConstructor = () => opts.constructor || window.IconFinder;
  let constr = getConstructor();

  // Dynamic loading of the image editor scripts and styles
  if (!constr && script) {
    const { head } = document;
    const scripts = Array.isArray(script) ? [...script] : [script];
    const styles = Array.isArray(style) ? [...style] : [style];
    const appendStyle = (styles) => {
      if (styles.length) {
        const link = document.createElement("link");
        link.href = styles.shift();
        link.rel = "stylesheet";
        head.appendChild(link);
        appendStyle(styles);
      }
    };
    const appendScript = (scripts) => {
      if (scripts.length) {
        const scr = document.createElement("script");
        scr.src = scripts.shift();
        scr.onerror = scr.onload = appendScript.bind(null, scripts);
        head.appendChild(scr);
      } else {
        constr = getConstructor();
      }
    };
    appendStyle(styles);
    appendScript(scripts);
  }

  // Add command
  const domc = editor.DomComponents;
  domc.addType(icon, {
    model: {
      defaults: {
        icon: '<i class="fa fa-diamond"></i>',
        tagName: "span",
        components:
          '<span class="iconify" data-icon="fa:home" style="font-size:48px;"></span>',
        attributes: {
          class: "icon-display",
        },
        styles: ".icon-display {display:inline-block}",
      },
    },
    view: {
      events: {
        dblclick: "onActive",
      },

      onActive() {
        editor.runCommand(commandId);
      },
    },
  });
  console.log("Here");
  // Add the icon finder command
  editor.Commands.add(commandId, {
    run(ed, s, options = {}) {
      const { id, applyChanges } = this;
      const mdlDialog = document.querySelector(`.${pfx}mdl-dialog`);
      mdlDialog.classList.add(mdlClass);

      if (!constr) {
        console.log("error");
        ed.log("IconifyFinder not found", {
          level: "error",
          ns: commandId,
        });
        return ed.stopCommand(id);
      }

      this.editor = ed;
      this.target = options.target || ed.getSelected();
      const content =
        document.getElementById("blc-finder") || this.createContent();
      const title = opts.labelIconPicker;
      const container = content.children[0];
      ed.Modal.open({ title, content })
        .getModel()
        .once("change:open", () => {
          ed.stopCommand(id);
          mdlDialog.classList.remove(mdlClass);
        });
      if (!this.iconFinder) {
        this.iconFinder = new constr({
          container,
          callback: applyChanges.bind(this),
          ...opts.config,
        });
      }
      ed.getModel().setEditing(1);
    },

    stop(ed) {
      ed.getModel().setEditing(0);
    },

    createContent() {
      const content = document.createElement("div");
      content.style = "position: relative";
      content.innerHTML = `<div id="blc-finder" style="max-height:${maxHeight};max-width:${maxWidth};overflow:auto;margin: 0 auto;"></div>`;
      return content;
    },

    applyChanges(event) {
      const { target, editor } = this;

      if (onEvent) {
        onEvent(event);
      } else {
        if (event.type === "button" && event.button === "submit") {
          const { icons, customisations } = event.state;
          const rotate = ["0deg", "90deg", "180deg", "270deg"];
          const el = target.getEl();
          el.innerHTML = `<span class="iconify" data-icon="${icons[0].prefix}:${
            icons[0].name
          }" 
            ${
              (customisations.width &&
                `data-width="${customisations.width}px"`) ||
              ""
            }
            ${
              (customisations.height &&
                `data-height="${customisations.height}px"`) ||
              ""
            }
            ${
              (!customisations.vFlip &&
                customisations.hFlip &&
                'data-flip="horizontal"') ||
              ""
            }
            ${
              (customisations.vFlip &&
                !customisations.hFlip &&
                'data-flip="vertical"') ||
              ""
            }
            ${
              (customisations.vFlip &&
                customisations.hFlip &&
                'data-flip="horizontal,vertical"') ||
              ""
            }
            ${
              (customisations.rotate &&
                `data-rotate="${rotate[customisations.rotate]}"`) ||
              ""
            }
            ${
              (customisations.color &&
                `style="color:${customisations.color};"`) ||
              ""
            }
          ></span>`;
          el.classList.remove(`${pfx}selected`);
          editor.select(target.replaceWith(el.outerHTML));
          console.log(el.outerHTML);
          onEventAfter && onEventAfter(event);
          editor.Modal.close();
        }
        if (event.type === "button" && event.button === "cancel") {
          editor.Modal.close();
        }
      }
    },
  });
};
