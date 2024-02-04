import Grid from "../Grid";
import GridItem from "../GridItem";
import { br, cl, fx } from '../theme';
import cx from '../../utils/makeCls';
import Button from "../Button";

export interface Props {
    className?: string;
    value: string;
    placeholder?: string;
    label?: React.ReactNode;
    btnLabel?: React.ReactNode;
    accept?: string;
    size?: 'm' | 's',
    onChange?(value: string | null, partial?: boolean): void;
    onOpen?(value: string | null): void;
};

export default function FileField({
  className,
  value,
  label,
  btnLabel,
  size = 'm',
  accept = 'image',
  placeholder,
  onChange,
  onOpen,
}: Props) {
    const valFilename = value.replace(/^"|"$/ig, '').split('/').pop()?.split('?')[0] || '';
    const bgStyle = { backgroundImage: `url(${value})` };

    return (
      <div className={cx(className)}>
        { !!label && <label>{ label }</label>}
        <Grid className={cx(cl.bg)} items="center" space="s" nowrap>
          <GridItem>
            <div className={cx('w-[50px] h-[50px] bg-cover bg-checker', br.b, br.rnd, cl.br)} style={bgStyle}></div>
          </GridItem>
          <GridItem grow className="overflow-hidden">
              <div className={cx("mb-2", fx.txtEllips)}>{valFilename}</div>
              <Button className="block" onClick={() => onOpen?.(value)} full>
                { btnLabel || 'Images' }
              </Button>
          </GridItem>
        </Grid>
      </div>
    );
  }