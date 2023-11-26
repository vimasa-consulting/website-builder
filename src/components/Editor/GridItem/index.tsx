import React from 'react';
import makeCls from "../../utils/makeCls";

export declare interface Props extends React.HTMLProps<HTMLDivElement> {
    grow?: boolean,
};

export default React.forwardRef<HTMLDivElement, Props>(function GridItem({ children, className, grow, ...props }, ref) {
    return (
      <div ref={ref} className={makeCls([className, grow && 'flex-1'])} {...props}>
          {children}
      </div>
    );
});
