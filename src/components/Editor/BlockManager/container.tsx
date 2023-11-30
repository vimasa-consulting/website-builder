import { WithEditor } from '@grapesjs/react';
import { mdiViewGridPlus } from '@mdi/js';
import { observer } from 'mobx-react-lite';
import { useMemo } from 'react';
import BlockManager from '.';
import { useI18nStore } from '../../store/I18nStore';
import { useAppEditorStore } from '../../store/appEditorStore';
import { useBlockManagerStore } from '../../store/blockManager';
import { useModalStore } from '../../store/modalStore';
import cx from '../../utils/makeCls';
import CardTitle, { CardTitleButtons } from '../Card/CardTitle';
import Grid from "../Grid";
import GridItem from '../GridItem';
import PluginManager from '../Modal/contents/PluginManager';
import { br, cl, pad } from "../theme";

export default observer(function BlockManagerContainer() {
    const { isOpen, toggleOpen } = useBlockManagerStore();
    const { editor } = useAppEditorStore();
    const modalStore = useModalStore();
    const i18nStore = useI18nStore();
    const t = i18nStore.tScoped('blockManager');
    const classMain = cx(
        'absolute left-0 top-0 h-full transition-transform z-10',
        !isOpen && '-translate-x-full',
        br.br, cl.br, cl.bg,
    );

    const openPlugins = () => {
        /*modalStore.open({
            fullH: true,
            title: i18nStore.t('pluginManager.plugins'),
            content: () => <PluginManager/>,
        })*/
    }

    const actions: CardTitleButtons[] = useMemo(() => ([
        {
            id: 'add',
            title: t('add'),
            className: cl.tAo,
            onClick: openPlugins,
            icon: mdiViewGridPlus,
        }
    ]), [editor]);

    return (
        <Grid className={classMain} style={{ width: 240 }} col nowrap>
            <GridItem>
                <CardTitle
                    title={t('blocks')}
                    onClose={toggleOpen}
                    className={pad.xyS}
                    //actions={actions}
                />
            </GridItem>
            <GridItem>
                <Grid className="grid grid-cols- gap-2 p-2">
                    <div className="flex p-2 border-t border-gray-300 dark:border-zinc-700 flex-wrap items-center">
                        Place Holder Image to triger Block Popup
                    </div>
                </Grid>
            </GridItem>
            <GridItem className="overflow-hidden" grow>
                <WithEditor>
                    <BlockManager/>
                </WithEditor>
            </GridItem>
        </Grid>
    );
});
