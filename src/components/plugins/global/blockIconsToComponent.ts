export default function blockIconsToComponent(editor: any) {
    const { Components, Blocks } = editor;

    const extendComponentIcon = (compType: any) => {
        const { model, id  } = compType;
        const defaults = model.getDefaults();
        const block = Blocks.get(id);
        const componentIcon = defaults.icon;
        const blockIcon = block?.get('media');
        const defaultIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3H5c-1.11 0-2 .89-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2m0 2v14H5V5h14z"></path></svg>';
        const icon = componentIcon && componentIcon !== defaultIcon && !blockIcon ? componentIcon : (blockIcon || defaultIcon);

        Components.addType(id, {
          model: {
            defaults: { icon },
          },
        });
    };

    Components.getTypes().forEach(extendComponentIcon);
    editor.on('component:type:add', extendComponentIcon);
}