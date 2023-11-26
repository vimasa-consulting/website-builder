import { SelectorsProvider, StylesProvider, TraitsProvider } from "@grapesjs/react";
import { observer } from "mobx-react-lite";
import { useAppEditorStore } from "../../store/appEditorStore";
import cx from '../../utils/makeCls';
import AdsBanner from "../AdsBanner";
import Grid from "../Grid";
import GridItem from "../GridItem";
import SelectorManager from '../SelectorManager';
import StyleCode from "../StyleCode";
import StyleManager from '../StyleManager';
import Tabs from "../Tabs";
import TraitManager from "../TraitManager";
import { br, cl, pad } from '../theme';

const clsPanel = 'overflow-y-auto overflow-x-hidden max-w-full';

export default observer(function DesignManager() {
    const { isCssPanelActive, ads, editorKey, selectedDesignerTab, setSelectedDesignerTab } = useAppEditorStore();
    const smCls = cx(isCssPanelActive && 'hidden');

    return (
        <Grid col full nowrap>
            <Tabs
                value={selectedDesignerTab}
                onChange={setSelectedDesignerTab}
                tabs={[
                    {
                        id: 'style',
                        label: 'Styles',
                        content: (
                            <Grid col full>
                                    <GridItem className={cx(pad.xyS, br.bb, cl.br)}>
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
            { ads && !!editorKey && <AdsBanner/> }
        </Grid>
    );
  });