import cx from "../../utils/makeCls";
import { br, cl, ring } from '../theme';

export declare interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'pr' | 'out' | 'warn',
    size?: 'm' | 'm2',
    active?: boolean,
    disabled?: boolean,
    border?: boolean,
    rounded?: boolean,
    tooltip?: React.ReactNode,
    full?: boolean,
    block?: boolean,
};

export default function Button({
    children,
    variant,
    size = 'm',
    className,
    active,
    border = true,
    rounded = true,
    disabled = false,
    block,
    tooltip,
    full,
    ...props
}: ButtonProps) {
    const isPrimary = variant === 'pr';
    const isOut = variant === 'out';
    const isWarn = variant === 'warn';
    // const isDef = !isPrimary && !isOut && !isWarn;

    const cls = [
        'transition-colors',
        block && 'block',
        size === 'm' && 'p-1',
        size === 'm2' && 'p-1 px-2.5',
        className,
        rounded && br.rnd,
        border && `${br.b} ${cl.br}`,
        // isDef && !disabled && !active && cl.hBgH,
        isOut && cx(br.b, cl.bA, cl.tAo, !disabled && cl.hBgH),
        isWarn && cx(cl.bgW, cl.hBgW, !disabled && cl.hBgW, 'text-white'),
        isPrimary && cx(cl.bgA, !disabled && cl.hBgA2),
        active && cl.bgA,
        disabled && 'disabled:opacity-50 cursor-not-allowed	',
        full && 'w-full',
        ring.focus,
    ];

    return (
        <button className={cx(cls)} disabled={disabled} {...props}>
            { children }
        </button>
    );
  }
