import { DevicesProvider, WithEditor } from '@grapesjs/react';
import { mdiEyeOff } from '@mdi/js';
import Icon from '@mdi/react';
import { observer } from 'mobx-react-lite';
import { useMemo } from 'react';
import { useAppEditorStore } from '../../store/appEditorStore';
import cx from "../../utils/makeCls";
import ActionButtons from '../ActionButtons';
import Button from '../Button';
import DeviceSelector from '../DeviceSelector';
import Grid from "../Grid";
import GridItem from "../GridItem";
import TopBarLeftButtons from '../TopBarLeftButtons';
import { br, cl, icon } from '../theme';

export default observer(function EditorTopbar() {
    const { topBarSize, isInPreview, editor } = useAppEditorStore();

    const style = useMemo(() => ({
        height: topBarSize,
        marginTop: isInPreview ? `-${topBarSize}px` : 0,
    }), [isInPreview]);

    return (
      <>
        <GridItem className={cx(['transition-spacing w-full', br.bb, cl.br])} style={style}>
            <Grid className="h-full" items="center">
              <GridItem grow>
                <TopBarLeftButtons/>
              </GridItem>
              <GridItem>
                  <DevicesProvider>
                    {(props) => <DeviceSelector {...props}/>}
                  </DevicesProvider>
              </GridItem>
              <GridItem grow>
                <WithEditor>
                  <ActionButtons/>
                </WithEditor>
              </GridItem>
            </Grid>
        </GridItem>
        <GridItem className={cx('transition-transform absolute top-0 left-0 z-10', !isInPreview && '-translate-y-full')}>
          <Button className={cx('m-4', cl.bg)} onClick={() => editor?.Commands.stop('core:preview')}>
              <Icon path={mdiEyeOff} size={icon.s}/>
          </Button>
        </GridItem>
      </>
    );
  });