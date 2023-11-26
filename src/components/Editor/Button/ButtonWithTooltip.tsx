import Button, { ButtonProps } from ".";
import Tooltip from "../Tooltip";

export declare interface ButtonWithTooltipProps extends ButtonProps {};

export default function ButtonWithTooltip({ children, title, ...props }: ButtonWithTooltipProps) {
    return (
        <Tooltip title={title}>
            <Button {...props}>
                { children }
            </Button>
        </Tooltip>
    );
  }
