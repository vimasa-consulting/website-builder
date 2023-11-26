import cx from "../../utils/makeCls";
import { pad, br, cl } from '../theme';

export type Props = React.HTMLProps<HTMLDivElement> & {
    label?: React.ReactNode;
    pill?: boolean;
    border?: boolean;
    block?: boolean;
    nopad?: boolean;
    s?: 's' | 'm';
};

export default function Badge({ children, label, s = 'm', pill, border, nopad, className, block, ...props }: Props) {
    return (
      <div className={cx([
          !block && 'inline-block',
          className,
          !nopad && pad.xyS2,
          pill ? br.pill : br.rnd,
          border && `${br.b} ${cl.br}`,
          s === 's' && 'text-sm',
        ])} {...props}>
          { label || children }
      </div>
    );
  }
