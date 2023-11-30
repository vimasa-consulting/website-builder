import Popover, { PopoverProps } from ".";
import { useI18nStore } from "../../store/I18nStore";
import Button from "../Button";
import Grid from "../Grid";
import GridItem from "../GridItem";


export interface PopoverConfirmProps extends PopoverProps {
    onConfirm?: () => void;
    onCancel?: () => void;
    text?: React.ReactNode;
}

export default function PopoverConfirm({ children, text, onConfirm, onCancel, className = 'w-[200px]', ...props }: PopoverConfirmProps) {
    const i18nStore = useI18nStore();
    return (
        <Popover {...props} overlay title={false} buttonAs="span" handler={children}>
            {({ close }) => (
                <Grid className={className} space="m" col>
                    <GridItem grow>
                        { text || i18nStore.t('confirmAction') }
                    </GridItem>
                    <Grid justify="end" items="center" space="m">
                        <Button variant="pr" size="m2" onClick={() => { close(); onConfirm?.() }}>
                            { i18nStore.t('confirm') }
                        </Button>
                        <Button size="m2" onClick={() => { close(); onCancel?.() }}>
                            { i18nStore.t('cancel') }
                        </Button>
                    </Grid>
                </Grid>
            )}
        </Popover>
    )
}