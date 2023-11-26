import { mdiCellphoneLink, mdiCodeBraces, mdiDelete, mdiFlare } from '@mdi/js';
import { VirtuosoGrid } from 'react-virtuoso'
import Icon from '@mdi/react';
import type { CssRule } from 'grapesjs';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useRef, useState } from 'react';
import { useAppEditorStore, useTransitionEnd } from '../../../store/appEditorStore';
import { useI18nStore } from '../../../store/I18nStore';
import { useModalStore } from '../../../store/modalStore';
import { includesSearch } from '../../../utils';
import { cx } from '../../../utils/makeCls';
import Button from '../../Button';
import ButtonWithTooltip from '../../Button/ButtonWithTooltip';
import Card from '../../Card';
import CodeField from '../../CodeField';
import Grid from '../../Grid';
import GridItem from '../../GridItem';
import InputField from '../../InputField';
import Popover from '../../Popover';
import PopoverConfirm from '../../Popover/PopoverConfirm';
import SelectField from '../../SelectField';
import { cssFormat } from '../../StyleCode';
import { br, fx, icon, pad } from '../../theme';
import Tooltip from '../../Tooltip';

export interface CssRuleCardProps extends React.HTMLProps<HTMLDivElement> {
  rule: CssRule;
  onSelect?: () => void;
  onRemove?: () => void;
};

const mountPreview = async ({ html = '', css = '', el }: { html: string, css: string, el: HTMLElement }) => {
  const content = `<span style="color: initial; display: inline-block;"><style> body { margin: 0; } ${css}</style>${html}</span>`;
  const result = {};

  if (document.body.attachShadow!) {
      const shadow = el.shadowRoot || el.attachShadow({ mode: 'open' }); // Allows JS access inside
      shadow.innerHTML = content;
  }

  return result;
}

export const CssRuleCard = observer(function CssRuleCard({ rule, onSelect, onRemove, className }: CssRuleCardProps) {
  const previewRef = useRef<HTMLDivElement>(null);
  const appEditorStore = useAppEditorStore();
  const editor = appEditorStore.editor!;
  const i18nStore = useI18nStore();
  const ruleDevice = rule.getDevice();
  const ruleState = rule.getState();
  const [css, setCss] = useState(rule.toCSS({ allowEmpty: true }));
  const [tempCss, upTempCss] = useState<string | undefined>(css);
  const selectorStr = rule.selectorsToString();
  const select = () => {
    editor.select();
    setTimeout(() => editor.Selectors.select(rule))
    onSelect?.();
  };
  const remove = () => {
    editor.Css.remove(rule);
    onRemove?.();
  };
  const updateCss = () => {
    if (tempCss) {
      const cssRule = editor.Parser.parseCss(tempCss)[0];
      if (cssRule) {
        rule.setStyle(cssRule.style);
        setCss(tempCss);
      }
    }
  };

  useEffect(() => {
    if (previewRef.current) {
      const el = previewRef.current;
      mountPreview({
        el,
        html: '<div class="prv-rule">Preview</div>',
        css: `
        .prv-rule {
          background-color: #fff;
          padding: 5px;
        }
        .prv-rule, ${css}
        `
      });
    }
  }, [previewRef, css]);

  return (
    <Card padding={false} className={cx('overflow-hidden max-w-full group', className)}>
      <Grid key={rule.cid} col space="xs">
        <Grid className="bg-checker p-3 overflow-auto overflow-x-hidden h-[75px]" justify="center" items="center">
          <div ref={previewRef} className="relative flex items-center justify-center"/>
        </Grid>
        <Grid className="p-1 w-full" col space="s">
          <Grid nowrap items="center" space="xs" full>
            <GridItem grow>
              <pre className={cx('text-xs bg-white/10', br.rnd, pad.xyS)}>{selectorStr}</pre>
            </GridItem>
            {
              !!ruleDevice && ruleDevice.getWidthMedia() &&
              <GridItem>
                <Tooltip title={<>{i18nStore.t('deviceManager.device')}: <b>{ruleDevice.getName()}</b></>}>
                    <Icon path={mdiCellphoneLink} size={icon.sx}/>
                </Tooltip>
              </GridItem>
            }
            {
              !!ruleState &&
              <GridItem>
                <Tooltip title={<>{i18nStore.t('selectorManager.state')}: <b>{ruleState.getLabel()}</b></>}>
                    <Icon path={mdiFlare} size={icon.sx}/>
                </Tooltip>
              </GridItem>
            }
          </Grid>
          <Grid nowrap className={cx(fx.txtEllips)} space="s">
            <GridItem className="group-hover:opacity-100 opacity-0 transition-opacity" grow>
              <Button onClick={select} className="text-sm mr-auto" size="m2" full>
                {i18nStore.t('select')}
              </Button>
            </GridItem>
            <Popover
              overlay
              title={false}
              padding={false}
              buttonAs="span"
              handler={
                <ButtonWithTooltip title={i18nStore.t('selectorManager.showCSS')}>
                  <Icon path={mdiCodeBraces} size={icon.sx}/>
                </ButtonWithTooltip>
              }>
                {({ close }) => (
                  <Grid className="relative w-[300px] h-[200px]" col>
                    <GridItem grow>
                      <CodeField value={cssFormat(css)} onChange={upTempCss} language="css" padding={5} clean/>
                    </GridItem>
                    <Button className="absolute right-2 bottom-2 text-sm" variant="pr" size="m2"
                      onClick={() => { updateCss(); close(); } }
                    >
                      {i18nStore.t('update')}
                    </Button>
                  </Grid>
                )}
            </Popover>
            <PopoverConfirm onConfirm={remove} className="w-[200px]">
              <ButtonWithTooltip title={i18nStore.t('selectorManager.deleteStyle')}>
                <Icon path={mdiDelete} size={icon.sx}/>
              </ButtonWithTooltip>
            </PopoverConfirm>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  )
});

export default observer(function StyleCatalog() {
  const [tid] = useTransitionEnd(); // Fix Virtuoso issues due to transition applied from Modal
  const modalStore = useModalStore();
  const i18nStore = useI18nStore();
  const [searchValue, setSearchValue] = useState('');
  const [searchDevice, setSearchDevice] = useState('');
  const appEditorStore = useAppEditorStore();
  const editor = appEditorStore.editor!;
  const [rules, setRules] = useState(editor.Css.getRules(''));
  const devices = editor.Devices.getDevices().map((device) => ({
    id: device.id,
    label: device.getName()!,
  }));
  const filteredRules = rules.filter(rule => {
    if (searchValue && !includesSearch(rule.selectorsToString(), searchValue)) {
      return false;
    }
    if (searchDevice && rule.getDevice()?.id !== searchDevice) {
      return false;
    }
    return true;
  });

  const onRemove = () => setRules(editor.Css.getRules(''));

  return (
    <Grid col space="m">
      <Grid items="center" space="m">
          <GridItem>
              <InputField
                size="s"
                type="search"
                value={searchValue}
                onInput={setSearchValue}
                placeholder={`${i18nStore.t('selectorManager.searchStyle')}...`}
              />
          </GridItem>
          <GridItem>
            <SelectField
              includeEmpty
              size="s"
              value={searchDevice}
              options={devices}
              onChange={setSearchDevice}
              emptyState={i18nStore.t('deviceManager.allDevices')}
              handlerSelected={
                (selected) =>
                <Grid space="s" items="center">
                  <Icon path={mdiCellphoneLink} size={icon.sx}/>
                  <span>{selected.label}</span>
                </Grid>
              }
            />
          </GridItem>
      </Grid>
      <GridItem className="h-[75vh] w-full overflow-auto">
        {
          !filteredRules.length ?
          <Grid justify="center">
            {i18nStore.t('modals.styleCatalog.noStyles')}
          </Grid>
          :
          <VirtuosoGrid
            key={tid}
            data={filteredRules}
            listClassName="grid grid-cols-4 gap-2 pr-2"
            itemContent={(i, rule) => (
              <CssRuleCard key={rule.cid} rule={rule} onRemove={onRemove} onSelect={modalStore.close}/>
            )}
          />
        }
      </GridItem>
    </Grid>
  );
});
