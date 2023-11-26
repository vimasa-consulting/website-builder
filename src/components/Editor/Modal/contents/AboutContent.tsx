import { observer } from 'mobx-react-lite';
import Grid from '../../Grid';
import GridItem from '../../GridItem';
import { cl, elStyles } from '../../theme';
import GrapesJsLogo from '../../icons/GrapesJsLogo';
import Badge from '../../Badge';
import { cx } from '../../../utils/makeCls';

const appVersion = process.env.REACT_APP_VERSION;

export default observer(function AboutContent() {
  const version = (window as any).grapesjs?.version;

  return (
    <Grid col space="m">
      <Grid justify="center">
          <GridItem className="relative">
            <GrapesJsLogo className='w-[100px] opacity-50'/>
            { version && <Badge className={cx(cl.bgA, 'absolute right-[-20px] bottom-0')} label={`v${version}`} s="s" pill/> }
          </GridItem>
      </Grid>
      <GridItem>
        <p>
          <b>GrapesJS Studio</b> is an innovative experimental editor, initially created to improve and
          extend the customization capability of
          the <a className={elStyles.link} href="https://grapesjs.com">GrapesJS</a> library.

          Beyond pushing the evolution of the core library itself, this application aspires to empower
          individuals in creating and managing their web projects autonomously, free from subscriptions or
          dependency on the internet connection.
        </p>
        <br/>
        <p>
          If you like the vision of this project and you are eager to play a role in its continued
          development, consider becoming a backer or sponsor
          through <a className={elStyles.link} href="https://opencollective.com/grapesjs">Open Collective</a>.
        </p>
      </GridItem>
      <GridItem className={cx(cl.txtLowEmphasis, 'text-right')}>
        GrapesJS Studio: v{appVersion} (alpha)
      </GridItem>
    </Grid>
  );
});
