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
import ExistingDesignManager from '../DesignManager/designermanager';
export default observer(function BlockManagerContainer() {
    const { isOpen, toggleOpen } = useBlockManagerStore();
    const { editor } = useAppEditorStore();
    const modalStore = useModalStore();
    const i18nStore = useI18nStore();
    const t = i18nStore.tScoped('blockManager');
    const classMain = cx(
        'absolute left-0 top-0 h-full transition-transform z-10',
        !isOpen && '-translate-x-full',
        cl.br, cl.bg,
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
    const onPersuasiveBlockClick=function () {
        editor?.Commands.run("openPersuasiveBlocks");
    }
    return (
        <Grid className={classMain} style={{ width: 305 }} col nowrap>
            <ExistingDesignManager/>
            {/*<GridItem className='mt-[84.1px]'>
                <CardTitle
                    title={"Persuation Blocks"}
                    onClose={toggleOpen}
                    className={pad.xyS}
                    //actions={actions}
                />
            </GridItem>
            <GridItem className='persuasive-block-container'>
                <Grid className="grid grid-cols-1 gap-2 p-2">                    
                    <Grid className={cx('cursor-pointer py-2', br.rnd, cl.br)}
                        onClick={onPersuasiveBlockClick}
                        items="center"
                        col>                            
                            <div className="persuasive-block-block-media" ></div>
                            <div className="persuasive-block-subheading">Blocks Library</div>
                            <div  className="persuasive-block-description">Browse from our wide range of blocks, designed to persuade your customers</div>
                    </Grid>
                </Grid>
            </GridItem>
            <GridItem className="overflow-hidden" grow>
                <WithEditor>
                    <BlockManager/>
                </WithEditor>
            </GridItem>*/}
        </Grid>
    );
});
