import { SelectorsProvider, StylesProvider, TraitsProvider } from "@grapesjs/react";
import { observer } from "mobx-react-lite";
import { useAppEditorStore } from "../../store/appEditorStore";
import { useBlockManagerStore } from '../../store/blockManager';
import cx from '../../utils/makeCls';
import Grid from "../Grid";
import GridItem from "../GridItem";
import SelectorManager from '../SelectorManager';
import StyleCode from "../StyleCode";
import StyleManager from '../StyleManager';
import Tabs from "../Tabs";
import TraitManager from "../TraitManager";
import { br, cl, pad } from '../theme';
import CardTitle from "../Card/CardTitle";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/services/NavigationService";

const clsPanel = 'overflow-y-auto overflow-x-hidden max-w-full';

export default observer(function ExistingDesignManager() {
    const { isCssPanelActive, ads, editorKey, selectedDesignerTab, setSelectedDesignerTab } = useAppEditorStore();
    const smCls = cx(isCssPanelActive && 'hidden');
    const { toggleOpen } = useBlockManagerStore();
    const router = useRouter()

    const homePageHandler = () => {
        router.push(`${ROUTES.PROJECTS}/`)
    }

    return (
        <Grid col full nowrap>
            <span  className="self-center whitespace-nowrap text-xl font-semibold block w-full ml-[55px] mt-[5px]">
                <img onClick={homePageHandler} className="cursor-pointer" width="48" height="48" src="https://img.icons8.com/color/48/redux.png" alt="redux"/>
            </span>
            <GridItem className='mt-[36px]'>
                <CardTitle
                    title={"Styles"}
                    onClose={toggleOpen}
                    className={`${pad.xyS} text-[18px] font-500`}
                />
            </GridItem>
            <Tabs
                value={selectedDesignerTab}
                onChange={setSelectedDesignerTab}
                tabs={[
                    {
                        id: 'style',
                        label: 'Styles',
                        content: (
                            <Grid col full>
                                    <GridItem className={`${cx(pad.xyS, br.bb, cl.br)} max-w-full`}>
                                        <SelectorsProvider>
                                            {(props) => <SelectorManager {...props}/>}
                                        </SelectorsProvider>
                                    </GridItem>
                                    <GridItem className={clsPanel} grow>
                                        <StylesProvider>
                                            {(props) => <>
                                                { isCssPanelActive && <StyleCode/> }
                                                <StyleManager className={smCls} {...props}/>
                                            </>}
                                        </StylesProvider>
                                    </GridItem>
                            </Grid>
                        )
                    },
                    {
                        id: 'props',
                        label: 'Properties',
                        content: (
                            <Grid col full>
                                <GridItem className={cx(pad.xyS, clsPanel)}>
                                    <TraitsProvider>
                                        {(props) => <TraitManager {...props}/>}
                                    </TraitsProvider>
                                </GridItem>
                            </Grid>
                        )
                    }
                ]}
            />            
        </Grid>
    );
  });