import { observer } from 'mobx-react-lite';
import { useMemo } from 'react';
import { useAppEditorStore } from '../../store/appEditorStore';
import cx from "../../utils/makeCls";
import DesignManager from '../DesignManager';
import Resizable from '../Resizable';
import { br, cl } from '../theme';
import Grid from '../Grid';
import { useStyleManagerStore } from '@/components/store/styleManager';
export default observer(function EditorRightSidebar() {
    const { rightSidebarSize, setRightSidebarSize, editor, isInPreview, isRightSidebarOpen } = useAppEditorStore();
    const { isOpen } = useStyleManagerStore();
    const style = useMemo(() => ({
        marginRight: isInPreview || !isRightSidebarOpen ? `-${rightSidebarSize}px` : 0,
    }), [rightSidebarSize, isInPreview, isRightSidebarOpen])

    const onResize = () => {
        editor?.refresh();
    };

    const onResizeStop = (ev: any, dir: any, el: HTMLElement) => {
      setRightSidebarSize(el.getBoundingClientRect().width);
    };
    
    const classMain = cx('h-full transition-spacing', br.br, cl.br,!isOpen && 'sidebar-open')
    return (
        <Resizable
            className={classMain}
            left
            style={style}
            height="100%"
            width={rightSidebarSize}
            minWidth={0}
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