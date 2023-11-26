import cx from '../../utils/makeCls';

export interface LabelFieldProps {
    className?: string;
    as?: string;
    children?: React.ReactNode;
    size?: 'm' | 's' | 'xs' | 'x2s',
    m?: string,
};

export default function LabelField({ className, as = 'label', m = 'mb-1', size = 'm', children, ...rest }: LabelFieldProps) {
    const Tag = as;

    return (
      // @ts-ignore
      <Tag className={cx(className, m, 'block capitalize',  size === 's' && 'text-sm')} {...rest}>
        { children }
      </Tag>
    );
  }