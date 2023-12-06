import { observer } from 'mobx-react-lite';
import { useMemo } from 'react';
import { useAppEditorStore } from '../../store/appEditorStore';
import cx from "../../utils/makeCls";
import DesignManager from '../DesignManager';
import Resizable from '../Resizable';
import { br, cl } from '../theme';
import Grid from '../Grid';

export default observer(function EditorRightSidebar() {
    const { rightSidebarSize, setRightSidebarSize, editor, isInPreview, isRightSidebarOpen } = useAppEditorStore();

    const style = useMemo(() => ({
        marginRight: isInPreview || !isRightSidebarOpen ? `-${rightSidebarSize}px` : 0,
    }), [rightSidebarSize, isInPreview, isRightSidebarOpen])

    const onResize = () => {
        editor?.refresh();
    };

    const onResizeStop = (ev: any, dir: any, el: HTMLElement) => {
      setRightSidebarSize(el.getBoundingClientRect().width);
    };

    return (
        <Resizable
            className={cx(['h-full transition-spacing', br.bl, cl.br])}
            left
            style={style}
            height="100%"
            width={rightSidebarSize}
            minWidth={200}
            maxWidth={400}
            onResize={onResize}
            onResizeStop={onResizeStop}
        >
                <Grid className="flex flex-col pt-[1px]">
                    <a className="slack-button" href="https://slack.com" target="_blank"><p>Join our </p><img className='w-[80px] mt-[-3px]' src="/slack.png"></img></a>
                    <a className='text-center pt-[4px]' href="https://google.com" target="_blank">Get Help</a>                
                </Grid>
          <DesignManager/>
        </Resizable>
    );
  });