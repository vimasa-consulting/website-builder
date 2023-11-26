import React from "react";
import makeCls from "../../utils/makeCls";

export declare interface GridProps extends React.HTMLProps<HTMLDivElement> {
    children?: React.ReactNode,
    className?: string,
    col?: boolean,
    revert?: boolean,
    nowrap?: boolean,
    full?: boolean,
    as?: string,
    space?: 'x2s' | 'xs' | 's' | 'm',
    items?: 'start' | 'end' | 'center' | 'baseline' | 'stretch',
    justify?: 'start' | 'end' | 'center' | 'between', // between, around, evenly
    // functionChildren: (name: string) => React.ReactNode; // recommended function as a child render prop type
    // style?: React.CSSProperties; // to pass through style props
    // onChange?: React.FormEventHandler<HTMLInputElement>; // form events! the generic parameter is the type of event.target
    // //  more info: https://react-typescript-cheatsheet.netlify.app/docs/advanced/patterns_by_usecase/#wrappingmirroring
    // props: Props & React.ComponentPropsWithoutRef<"button">; // to impersonate all the props of a button element and explicitly not forwarding its ref
    // props2: Props & React.ComponentPropsWithRef<MyButtonWithForwardRef>; // to impersonate all the props of MyButtonForwardedRef and explicitly forwarding its ref
};

export default React.forwardRef<HTMLDivElement, GridProps>(
    function Grid({ as, children, className, col, revert, full, nowrap, space, justify, items, ...props }: GridProps, ref) {
        const Tag = as || 'div';
        return (
        // @ts-ignore
        <Tag ref={ref} className={makeCls([
            'flex',
            className,
            col && !revert && 'flex-col',
            col && revert && 'flex-col-reverse',
            !col && revert && 'flex-row-reverse',
            full && !col && 'w-full',
            full && col && 'h-full',
            nowrap ? 'flex-nowrap' : 'flex-wrap',
            space === 'x2s' && (col ? 'space-y-0.5' : 'space-x-0.5'),
            space === 'xs' && (col ? 'space-y-1' : 'space-x-1'),
            space === 's' && (col ? 'space-y-2' : 'space-x-2'),
            space === 'm' && (col ? 'space-y-4' : 'space-x-4'),
            // Items
            items === 'start' && 'items-start',
            items === 'end' && 'items-end',
            items === 'center' && 'items-center',
            // Justify
            justify === 'start' && 'justify-start',
            justify === 'end' && 'justify-end',
            justify === 'center' && 'justify-center',
            justify === 'between' && 'justify-between',
        ])} {...props}>
            {children}
        </Tag>
        );
    }
  );
