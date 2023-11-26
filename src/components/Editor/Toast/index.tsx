import { useAutoAnimate } from '@formkit/auto-animate/react';
import { mdiAlertRhombus, mdiCheckBold, mdiClose, mdiFire, mdiInformationVariant } from '@mdi/js';
import Icon from '@mdi/react';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useImperativeHandle, useRef } from 'react';
import { cx } from '../../utils/makeCls';
import Button, { ButtonProps } from '../Button';
import ButtonWithTooltip from '../Button/ButtonWithTooltip';
import Card from '../Card';
import Grid from '../Grid';
import GridItem from '../GridItem';
import { br, cl, icon, pad } from '../theme';


export enum ToastVariant {
    Info = 'info',
    Error = 'error',
    Success = 'success',
    Warning = 'warning',
}

export interface IToast {
    id: string;
    header: React.ReactNode;
    content?: React.ReactNode;
    variant?: ToastVariant;
    autoHideTimeout?: number;
    buttons?: (ButtonProps & { id: string })[];
    onDismiss?: (id: string) => void;
  }

export declare interface ToastProps extends Omit<React.HTMLProps<HTMLDivElement>, 'content'>, IToast {
    id: string;
}

const variantIcon: Record<ToastVariant, string> = {
    [ToastVariant.Info]: mdiInformationVariant,
    [ToastVariant.Error]: mdiFire,
    [ToastVariant.Success]: mdiCheckBold,
    [ToastVariant.Warning]: mdiAlertRhombus,
}

const variantColorBg: Record<ToastVariant, string> = {
    [ToastVariant.Info]: cl.bgA,
    [ToastVariant.Error]: 'bg-red-500',
    [ToastVariant.Success]: 'bg-green-500',
    [ToastVariant.Warning]: 'bg-orange-400',
}

export const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
    function Toast(props: ToastProps, ref) {
        const { children, className, content, id, buttons = [], variant = ToastVariant.Info, autoHideTimeout = 3000 } = props;
        const internalRef = useRef<HTMLInputElement>(null);
        const timeoutId = useRef<NodeJS.Timeout>();
        const vIcon = variantIcon[variant];
        const vColorBg = variantColorBg[variant];
        useImperativeHandle(ref, () => internalRef.current!, []);

        const onDismiss = () => props.onDismiss?.(id);

        const hideToastTimeout = () => {
            if (autoHideTimeout) {
                timeoutId.current = setTimeout(onDismiss, autoHideTimeout);
            }
        };

        const clearHideToastTimeout = () => timeoutId.current && clearTimeout(timeoutId.current);;

        useEffect(() => {
            hideToastTimeout();
            return clearHideToastTimeout;
        }, []);

        return (
            <Card
                className={cx(className, 'overflow-hidden relative')}
                ref={internalRef}
                onPointerEnter={clearHideToastTimeout}
                onPointerLeave={hideToastTimeout}
            >
                <Grid space="m" items="center" className={pad.y}>
                    <GridItem className={cx(vColorBg, br.pill, 'text-white p-1')}>
                        <Icon path={vIcon} size={icon.s}/>
                    </GridItem>
                    <GridItem grow>
                        <Grid col space="xs">
                            <GridItem className="text-lg font-medium leading-6">
                                {props.header}
                            </GridItem>
                            <GridItem className={cl.txtLowEmphasis}>
                                {content || children}
                            </GridItem>
                            <Grid space="m" justify="end">
                                {
                                    buttons.map(({id, ...button}) => (
                                        <Button key={id} {...button}/>
                                    ))
                                }
                            </Grid>
                        </Grid>
                    </GridItem>
                    <GridItem className="absolute top-2.5 right-2.5">
                        <ButtonWithTooltip onClick={onDismiss} border={false}>
                            <Icon path={mdiClose} size={icon.s}/>
                        </ButtonWithTooltip>
                    </GridItem>
                </Grid>
            </Card>
        );
    }
  );

export default Toast;

export declare interface ToastContainerProps extends React.HTMLProps<HTMLDivElement> {
    toasts: IToast[];
    onDismiss: IToast['onDismiss'];
}

export const ToastContainer = observer(React.forwardRef<HTMLDivElement, ToastContainerProps>(
    function ToastContainer({ className, toasts, onDismiss, ...props }: ToastContainerProps, ref) {
        const [myRef] = useAutoAnimate();

        return (
            // For some reason with Grid, automate flickers
            // <Grid className={cx(className, 'w-[300px]')} {...props} ref={myRef} col space="s">
            //     {
            //         toasts.map(toast => (
            //             <Toast key={toast.id} {...toast} onDismiss={onDismiss}/>
            //         ))
            //     }
            // </Grid>
            // flex flex-col space-y-2
            <div className={cx(className, 'w-[300px]')} {...props} ref={myRef}>
                {
                    toasts.map(toast => (
                        <Toast key={toast.id} {...toast} className="mb-2" onDismiss={onDismiss}/>
                    ))
                }
            </div>
        );
    }
  ));