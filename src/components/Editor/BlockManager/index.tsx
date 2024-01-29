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
    const { Blocks, editor } = useEditor();
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
        const skipComponent=['materialIcon','text','link','column2','column1','column3','column3-7','map','textarea','input','select','label','checkbox','radio','form'].includes(item.id);
        if(!skipCat && !skipComponent){
            //console.log(item);
        } else {
            //console.log(item.id);
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
        editor
        Blocks.endDrag(false);
    }
    const getMedia = (block:Block) => {
        return `/editor/blocks/${block.getId()}.png`;
    }
    const getBlockId = (block:Block) => {
        return `blocks-${block.getId()}`;
    }
    return (
        <Grid col full>
            {/*<GridItem className={cx('pb-3', pad.xyS, br.bb, cl.br)}>
                <InputField size="s" value={searchValue} onInput={setSearchValue} placeholder="Search..." type="search"/>
            </GridItem>*/}
            <GridItem grow className={fx.scrollY}>
                { allBlocksMap.map((cat, index) => (
                        <Grid key={cat} className="grid grid-cols-2 gap-2 p-2">
                            {blocksMap[cat].map((block) => (
                                
                                <Grid key={block.getId()} draggable                                    
                                    onDragStart={() => onDragStart(block)}
                                    onDragEnd={onDragEnd}
                                    items="center"
                                    col
                                    className="mb-[10px]"
                                >   
                                    <GridItem
                                    id={getBlockId(block)}
                                    className={cx('cursor-pointer py-2 px-5 transition-colors h-[135px] w-full flex justify-center items-center bg-[#f3f5ff] mb-[6px]', cl.br)}>
                                    <div className="block-media" >
                                        <img height='70px' src={getMedia(block)} />
                                    </div>
                                    </GridItem>
                                    <GridItem>                                    
                                        <div className={cx('text-[15px] text-center w-full', fx.txtEllips)} title={block.getLabel()}>
                                        {blockLabel(block) === 'Material Icon' ? 'Icon' : blockLabel(block)}
                                    </div></GridItem>
                                </Grid>
                                
                            ))}
                        </Grid>
                ))}
            </GridItem>
        </Grid>
    );
});
// width: 137px;
//     border: none;
//     display: flex;
//     justify-content: center;
//     background-color: #f3f5ff;
//     height: 135px;
//     padding: 27px;
