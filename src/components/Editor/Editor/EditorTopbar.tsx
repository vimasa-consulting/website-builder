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
import Tooltip from '../Tooltip';

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
              <GridItem className="flex-2">
                <TopBarLeftButtons/>
              </GridItem>
              <GridItem>
                  <DevicesProvider>
                    {(props) => <DeviceSelector {...props}/>}
                  </DevicesProvider>
                  <GridItem>                 
              </GridItem>

              </GridItem>
              <GridItem grow>
                <WithEditor>
                  <ActionButtons/>
                </WithEditor>
              </GridItem>
            </Grid>
        </GridItem>
      </>
    );
  });