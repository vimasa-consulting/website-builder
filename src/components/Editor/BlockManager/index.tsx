import { useEditor } from "@grapesjs/react";
import type { Block } from "grapesjs";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { useI18nStore } from "../../store/I18nStore";
import { includesSearch } from "../../utils";
import cx from "../../utils/makeCls";
import Accordion from '../Accordion';
import Grid from "../Grid";
import GridItem from "../GridItem";
import InputField from "../InputField";
import { br, cl, fx, pad, utils } from "../theme";

export type MapCategoryBlocks = Record<string, Block[]>;

export default observer(function BlockManager() {
    const { Blocks } = useEditor();
    const i18nStore = useI18nStore();
    const [searchValue, setSearchValue] = useState('');
    const t = i18nStore.tScoped('blockManager.labels');

    const blockLabel = (block: Block) => t(block.getId()) || block.getLabel();
    // @ts-ignore
    const blocksMap = Blocks.getAll().reduce((res, item) => {
        const ctg = item.getCategoryLabel(); 
        const skipCat=['Forms','Extra','Logic','Emotion','Value','Urgency','Trust','First Impression','Brand Connect','User Actions'].includes(ctg);        
        if (searchValue &&  !includesSearch(ctg, searchValue) && !includesSearch(blockLabel(item), searchValue)) {
            return res;
        }
        const skipComponent=['text','link','column2','column1','column3','column3-7','map','textarea','input','select','label','checkbox','radio','form'].includes(item.id);
        if(!skipCat){
            //console.log(item);
        }        
        const ctgKey='Basic';
        const ctgItem = res[ctgKey];
        if(!skipCat && !skipComponent){
            if (!ctgItem) {
                res[ctgKey] = [item];
            } else {
                ctgItem.push(item);
            }    
        }
        return res;
    }, {} as MapCategoryBlocks);

    const allBlocksMap = Object.keys(blocksMap);

    const onDragStart = (block: Block) => {
        Blocks.startDrag(block);
    };
    const onDragEnd = () => {
        Blocks.endDrag(false);
    }
    const getMedia = (block:Block) => {
        console.log(block.getMedia());
        console.log(block.getId());
        return block.getMedia();
    }
    return (
        <Grid col full>
            {/*<GridItem className={cx('pb-3', pad.xyS, br.bb, cl.br)}>
                <InputField size="s" value={searchValue} onInput={setSearchValue} placeholder="Search..." type="search"/>
            </GridItem>*/}
            <GridItem grow className={fx.scrollY}>
                { allBlocksMap.map((cat, index) => (
                    
                    <Accordion
                        sticky open
                        key={cat}
                        handler={cat}
                        className={(open) => cx(utils.itemList({ index, open, length: allBlocksMap.length }))}
                    >
                        <Grid className="grid grid-cols-2 gap-2 p-2">
                            {blocksMap[cat].map((block) => (
                                
                                <Grid key={block.getId()} draggable
                                    className={cx('cursor-pointer py-2 px-5 transition-colors', br.b, br.rnd, cl.br, cl.hTAo, cl.hBgH)}
                                    onDragStart={() => onDragStart(block)}
                                    onDragEnd={onDragEnd}
                                    items="center"
                                    col
                                >
                                    <div className="h-10 w-10 block-media" dangerouslySetInnerHTML={{ __html: getMedia(block)! }}></div>
                                    <div className={cx('text-sm text-center w-full', fx.txtEllips)} title={block.getLabel()}>
                                        {blockLabel(block)}
                                    </div>
                                </Grid>
                                
                            ))}
                        </Grid>
                    </Accordion>
                ))}
            </GridItem>
        </Grid>
    );
});
