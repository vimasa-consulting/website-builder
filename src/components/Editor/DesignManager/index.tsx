import { SelectorsProvider, StylesProvider, TraitsProvider, WithEditor } from "@grapesjs/react";
import { observer } from "mobx-react-lite";
import { useAppEditorStore } from "../../store/appEditorStore";
import cx from '../../utils/makeCls';
import Grid from "../Grid";
import GridItem from "../GridItem";
import SelectorManager from '../SelectorManager';
import StyleCode from "../StyleCode";
import StyleManager from '../StyleManager';
import Tabs from "../Tabs";
import TraitManager from "../TraitManager";
import { br, cl, pad } from '../theme';
import BlockManager from "../BlockManager";

const clsPanel = 'overflow-y-auto overflow-x-hidden max-w-full';
/** This is actully block manager */
export default observer(function DesignManager() {
    const { isCssPanelActive, ads, editorKey, selectedDesignerTab, setSelectedDesignerTab,editor } = useAppEditorStore();
    const smCls = cx(isCssPanelActive && 'hidden');
    const onPersuasiveBlockClick=function () {
        editor?.Commands.run("openPersuasiveBlocks");
    }
    return (
        <Grid col full nowrap>           
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
            </GridItem>        
        </Grid>
    );
  });