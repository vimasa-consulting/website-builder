import { icon } from "./components";

export default (editor, opts = {}) => {
  const bm = editor.Blocks;
  const { iconBlock } = opts;

  iconBlock &&
    bm.add(icon, {
      label: "Icon",
      category: "Basic",
      attributes: { class: "fa fa-diamond" },
      content: { type: icon },
      ...iconBlock,
    });
};
