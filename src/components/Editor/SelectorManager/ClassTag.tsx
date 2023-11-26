import { mdiDotsVertical } from "@mdi/js";
import Icon from "@mdi/react";
import type { Selector } from 'grapesjs';
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { useAppEditorStore } from "../../store/appEditorStore";
import { useI18nStore } from "../../store/I18nStore";
import { isFunction } from "../../utils";
import { cx } from "../../utils/makeCls";
import Badge from "../Badge";
import Grid from "../Grid";
import GridItem from "../GridItem";
import Renamable from "../InputRename/Renamable";
import { MenuItem, MenuListItem } from "../MenuList";
import Popover from "../Popover";
import { br, cl, icon } from "../theme";

interface ClassTagProps extends React.HTMLProps<HTMLDivElement> {
    selector: Selector,
    removable?: boolean;
    toggleable?: boolean;
}

export default observer(function ClassTag({ selector, className, removable, toggleable }: ClassTagProps) {
    const i18nStore = useI18nStore();
    const appEditorStore = useAppEditorStore();
    const [toRename, setToRename] = useState<Selector>();
    const [isActive, setActive] = useState(selector.getActive());
    const editor = appEditorStore.editor!;
    const { Selectors } = editor;
    // const t = (key: string) => i18nStore.t(`selectorManager.${key}`);
    const label = selector.getLabel();
    const threeDotsIcon = <Icon path={mdiDotsVertical} size={icon.sx}/>;

    const remove = () => {
        Selectors.removeSelected(selector);
    };

    const handleRename = (value: string) => {
        toRename && Selectors.rename(toRename, value);
        setToRename(undefined);
    }

    const handleDuplicate = () => {
        Selectors.duplicateSelected(selector);
    }

    const toggleActive = () => {
        const newActiveState = !selector.getActive();
        setActive(newActiveState);
        selector.setActive(newActiveState);
    }

    const actionsAll: (MenuListItem | undefined | boolean)[] = [
        { id: 'rename', label: i18nStore.t('rename'), action: () => setToRename(selector) },
        { id: 'duplicate', label: i18nStore.t('duplicate'), action: handleDuplicate },
        removable &&
            { id: 'delete', label: i18nStore.t('delete'), action: remove },
        toggleable &&
            { id: 'active', label: i18nStore.t(isActive ? 'disable' : 'enable'), action: toggleActive },
    ];
    const actions = actionsAll.filter(Boolean) as MenuListItem[];

    const runAction = (close: Function, action: MenuListItem["action"]) => () => {
        close();
        isFunction(action) && action();
    }

    return (
        <Badge className={cx(['ml-1 my-1 group overflow-hidden cursor-default relative', cl.sel, className])} s="s">
            <Grid items="center">
                <GridItem className={cx('mr-4', !toRename && !isActive && 'opacity-50 line-through')}>
                    <Renamable value={label} onChange={handleRename} active={!!toRename} unstyled/>
                </GridItem>
                <Grid className={cx('absolute h-full right-0 transition-opacity', cl.sel, cl.selBr, br.bl)}>
                    {/* group-hover:opacity-100 opacity-0 */}
                    <Popover handler={threeDotsIcon} title={false} padding={false} fixed overlay>
                        {({ close }) => (
                            actions.map(action =>
                                <MenuItem
                                    key={action.id}
                                    className={cl.txt}
                                    label={action.label}
                                    action={runAction(close, action.action)}
                                />
                            )
                        )}
                    </Popover>
                </Grid>
            </Grid>
        </Badge>
    )
  });