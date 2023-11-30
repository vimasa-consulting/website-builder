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
                <Grid className="grid grid-cols-1 gap-2 p-2">                    
                    <Grid className={cx('cursor-pointer py-2 px-5 transition-colors', br.b, br.rnd, cl.br, cl.hTAo, cl.hBgH)}
                        //onDragStart={() => onDragStart(block)}
                        //onDragEnd={onDragEnd}
                        items="center"
                        col>
                            <div>Persuation Blocks</div>
                            <div className="block-media" ><img width="300px" height="300px" src="/editor/block-library.png"/></div>
                            <div></div>
                    </Grid>
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
