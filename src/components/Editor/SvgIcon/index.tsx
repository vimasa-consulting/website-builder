import React from 'react';

export declare interface SvgIconProps extends React.HTMLProps<HTMLDivElement> {
    svg: string;
};

export default React.forwardRef<HTMLDivElement, SvgIconProps>(function SvgIcon({  svg, ...props }, ref) {
    return <div {...props} ref={ref} dangerouslySetInnerHTML={{ __html: svg }}/>;
});
