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
import { useLayerManagerStore } from '@/components/store/layerManager';
import DesignManager from '../DesignManager';

export default observer(function EditorLeftSidebar() {
    const { leftSidebarSize, setLeftSidebarSize, editor, isInPreview, isLeftSidebarOpen } = useAppEditorStore();
    const { isOpen } = useLayerManagerStore();
    const style = useMemo(() => ({
        marginLeft: isInPreview || !isLeftSidebarOpen ? `-${leftSidebarSize}px` : 0,
    }), [leftSidebarSize, isInPreview, isLeftSidebarOpen])
    const classMain = cx(
      'absolute left-0 top-0 h-full transition-transform z-10',
      !isOpen && '-translate-x-full',
      br.br, cl.br, cl.bg,
  );
    const onResize = () => {
        editor?.refresh();
    };

    const onResizeStop = (ev: any, dir: any, el: HTMLElement) => {
        setLeftSidebarSize(el.getBoundingClientRect().width);
    };

    return (        
      <Resizable
      className={cx(['h-full transition-spacing', cl.br])}
      right
      style={style}
      height="100%"
      width={leftSidebarSize}
      maxWidth={305}
  >
    <Grid full col>
      {/*<GridItem className="w-full">
        <PagesProvider>
          {(props) => <PageManager {...props}/>}
        </PagesProvider>
</GridItem>*/}
      <GridItem className={cx(['w-full', 'overflow-hidden', br.bt, cl.br])} grow>
        <LayersProvider>
          {(props) => <LayerManager {...props}/>}
        </LayersProvider>
</GridItem>
    </Grid>
  </Resizable>       
    );
  });