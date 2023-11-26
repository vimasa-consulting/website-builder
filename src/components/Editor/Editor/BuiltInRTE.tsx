import cx from "../../utils/makeCls";
import Button from "../Button";
import CustomRTE from "../Grapesjs/CustomRTE";
import Grid from "../Grid";
import { br, cl } from "../theme";

export default function BuiltInRTE() {
    return (
        <CustomRTE>
            {({ actions }) => (
            <Grid className={cx(cl.bg, br.b, br.rnd, cl.br)} nowrap>
                {
                actions.map((action, index) => (
                    <Button
                    key={action.id}
                    border={false}
                    rounded={false}
                    active={action.state === 1}
                    disabled={action.state === -1}
                    className={cx('w-[25px]', cl.br, index !== 0 && br.bl)}
                    dangerouslySetInnerHTML={{ __html: action.icon }}
                    onClick={action.run}
                    />
                ))
                }
            </Grid>
            )}
      </CustomRTE>
    )
}