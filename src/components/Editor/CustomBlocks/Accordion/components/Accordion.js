export default (dc, { linkModel, linkView, ...config }) => {
    const type = "accordion";
    const attrKey = config.attrAccordion;
    const classKey = config.classAccordion;
    const selectorAccordion = config.selectorAccordion;
  
    dc.addType(type, {
      model: {
          defaults: {
            ...linkModel.prototype.defaults,
            name: "Accordion",
            draggable: `[${config.attrAccordionContainer}]`,
            droppable: false,
            copyable: false,
            removable: false,
            selectable: false,
            ...config.accordionProps,
          },
          init() {
            const attrs = this.getAttributes();
            attrs[attrKey] = 1;
            this.setAttributes(attrs);
            classKey && this.addClass(classKey);
            console.log("accordion init");
          },
  
          clone() {
            const cloned = linkModel.prototype.clone.apply(this, arguments);
            cloned.addAttributes({ [selectorAccordion]: "" });
            return cloned;
          },
          isComponent(el) {
            if (el.hasAttribute && el.hasAttribute(attrKey)) {
              return { type };
            }
          },
          
      },
      view: linkView, 
    });
  };