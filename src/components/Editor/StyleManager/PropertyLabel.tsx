import Grid, { GridProps } from "../Grid";
import Icon from '@mdi/react';
import { mdiClose, mdiCellphoneLink, mdiFlare, mdiTargetVariant, mdiTag, mdiInformation } from '@mdi/js';
import GridItem from "../GridItem";
import cx from '../../utils/makeCls';
import { cl, fx, icon } from "../theme";
import Tooltip from "../Tooltip";

export interface Props extends GridProps {
    property?: any,
    label?: string,
    empty?: boolean,
    hasValue?: boolean,
    shallow?: boolean,
    row?: boolean,
    tooltip?: React.ReactNode,
    onClear?: () => void,
};

export default function PropertyLabel({ label, property, hasValue, empty, onClear, children, shallow, row, tooltip, ...rest }: Props) {
    const labelStr = label || property?.getLabel();
    const parentTarget = property?.getParentTarget();
    const hasVal = hasValue || (!empty && property?.hasValue({ noParent: true }));
    const hasValP = !hasVal && property?.hasValue() && parentTarget;
    const parentDevice = parentTarget?.getDevice();
    const parentState = parentTarget?.getState();
    const cmpFirst = parentTarget?.getComponent();
    const clear = () => onClear ? onClear() : property?.clear();
    const mainProps = {
        className: 'text-sm w-full',
        col: !row,
        items: row ? 'center' as 'center' : undefined,
        ...rest,
    }

    return <>
        {/** @ts-ignore */}
        <Grid {...mainProps}>
            <GridItem grow>
                <Grid as="label" items="center" space="xs" className={cx(
                    'block',
                    !row && 'mb-1',
                    hasVal && !shallow && cl.tAo,
                )}>
                    {
                        tooltip &&
                        <GridItem>
                            <Tooltip title={tooltip}>
                                <Icon path={mdiInformation} size={icon.sx}/>
                            </Tooltip>
                        </GridItem>
                    }
                    <GridItem>
                        { empty ? <span>&nbsp;</span> : labelStr }
                    </GridItem>
                    {
                        !!hasValP && !shallow &&
                        <Tooltip title={<>
                            <div className="mb-1">Value inherited from</div>
                            {
                                !!parentDevice &&
                                <Grid space="s">
                                    <GridItem>
                                        <Icon path={mdiCellphoneLink} size={icon.sx}/>
                                    </GridItem>
                                    <GridItem>
                                        <b>{parentDevice.getName()}</b>
                                    </GridItem>
                                </Grid>
                            }
                            {
                                <Grid space="s">
                                    <GridItem>
                                        <Icon path={cmpFirst ? mdiTargetVariant : mdiTag} size={icon.sx}/>
                                    </GridItem>
                                    <GridItem>
                                        <b>{cmpFirst ? 'Components' : 'Selectors'}</b>
                                        <span className="text-xs opacity-75"> { parentTarget?.selectorsToString({ skipState: 1 }) }</span>
                                    </GridItem>
                                </Grid>
                            }
                            {
                                !!parentState &&
                                <Grid space="s">
                                    <GridItem>
                                        <Icon path={mdiFlare} size={icon.sx}/>
                                    </GridItem>
                                    <GridItem>
                                        <b>{parentState.getLabel()}</b>
                                    </GridItem>
                                </Grid>
                            }
                        </>}>
                            <div className={cx('w-[6px] h-[6px] rounded-full', cl.bgW)}/>
                        </Tooltip>
                    }
                    {
                        hasVal && !shallow &&
                        <Tooltip title="Clear value" onClick={clear}>
                            <Icon className={fx.click} path={mdiClose} size={icon.s2x}/>
                        </Tooltip>
                    }
                </Grid>
            </GridItem>
            <GridItem grow className="max-w-full">
                { children }
            </GridItem>
        </Grid>
    </>
  }