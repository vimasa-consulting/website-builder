import { mdiPlus } from '@mdi/js';
import Icon from '@mdi/react';
import { observer } from 'mobx-react-lite';
import { useBlockManagerStore } from '../../store/blockManager';
import cx from "../../utils/makeCls";
import Button from '../Button';
import Grid from "../Grid";
import GridItem from "../GridItem";
import Tooltip from '../Tooltip';
import { icon, pad } from '../theme';

export default observer(function TopBarLeftButtons() {
    const { isOpen, toggleOpen } = useBlockManagerStore();

    return (
        <Grid space="s" items="center" justify="start" className={cx(pad.xS)}>
            <GridItem>
                <Button>Home</Button>
            </GridItem>
            {/*<GridItem>
                <Tooltip title="Blocks">
                    <Button onClick={toggleOpen}>
                        <Icon path={mdiPlus} size={icon.l} className={cx('transition-transform', isOpen && 'rotate-45')}/>
                    </Button>
                </Tooltip>
    </GridItem>*/}      
        </Grid>
    );
  });