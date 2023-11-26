import { LayersProvider, PagesProvider } from '@grapesjs/react';
import { observer } from 'mobx-react-lite';
import { useMemo } from 'react';
import { useAppEditorStore } from '../../store/appEditorStore';
import cx from "../../utils/makeCls";
import Grid from "../Grid";
import GridItem from "../GridItem";
import LayerManager from '../LayerManager';
import PageManager from '../PageManager';
import Resizable from '../Resizable';
import { br, cl } from '../theme';

export default observer(function EditorLeftSidebar() {
    const { leftSidebarSize, setLeftSidebarSize, editor, isInPreview, isLeftSidebarOpen } = useAppEditorStore();

    const style = useMemo(() => ({
        marginLeft: isInPreview || !isLeftSidebarOpen ? `-${leftSidebarSize}px` : 0,
    }), [leftSidebarSize, isInPreview, isLeftSidebarOpen])

    const onResize = () => {
        editor?.refresh();
    };

    const onResizeStop = (ev: any, dir: any, el: HTMLElement) => {
        setLeftSidebarSize(el.getBoundingClientRect().width);
    };

    return (
        <Resizable
            className={cx(['h-full transition-spacing', br.br, cl.br])}
            right
            style={style}
            height="100%"
            width={leftSidebarSize}
            minWidth={200}
            maxWidth={400}
            onResize={onResize}
            onResizeStop={onResizeStop}
        >
          <Grid full col>
            <GridItem className="w-full">
              <PagesProvider>
                {(props) => <PageManager {...props}/>}
              </PagesProvider>
            </GridItem>
            <GridItem className={cx(['w-full', 'overflow-hidden', br.bt, cl.br])} grow>
              <LayersProvider>
                {(props) => <LayerManager {...props}/>}
              </LayersProvider>
            </GridItem>
          </Grid>
        </Resizable>
    );
  });