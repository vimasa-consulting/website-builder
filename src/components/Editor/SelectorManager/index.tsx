import { SelectorsResultProps, useEditor } from '@grapesjs/react';
import { mdiCellphoneLink, mdiCodeBraces, mdiFlare, mdiPaletteSwatch, mdiPlus, mdiTag, mdiTarget, mdiTargetVariant } from '@mdi/js';
import Icon from '@mdi/react';
import type { CssRule } from 'grapesjs';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { useI18nStore } from '../../store/I18nStore';
import { useAppEditorStore } from '../../store/appEditorStore';
import { useModalStore } from '../../store/modalStore';
import cx from '../../utils/makeCls';
import AutocompleteField from '../AutocompleteField';
import Badge from '../Badge';
import Button from '../Button';
import ButtonWithTooltip from '../Button/ButtonWithTooltip';
import Grid from "../Grid";
import GridItem from "../GridItem";
import StyleCatalog from '../Modal/contents/StyleCatalogContent';
import SelectField from '../SelectField';
import Tooltip from '../Tooltip';
import { br, cl, icon, pad } from '../theme';
import ClassTag from './ClassTag';

export const getTargetQuery = (target?: CssRule): string => {
    let targetQuery = target?.selectorsToString();
    const targetAtRule = target?.getAtRule();
    if (targetQuery && targetAtRule) {
        targetQuery = `${targetAtRule} {\n\t${targetQuery}\n}`;
    }
    return targetQuery!;
}

export default observer(function SelectorManager({
    selectedState,
    states,
    addSelector,
    setState,
}: SelectorsResultProps) {
    const editor = useEditor();
    const i18nStore = useI18nStore();
    const modalStore = useModalStore();
    const { toggleCssPanel, isCssPanelActive } = useAppEditorStore();
    const { Selectors, Styles } = editor;
    const [newTag, setNewTag] = useState(false);
    const cmpFirst = Selectors.getComponentFirst();
    const selectors = Selectors.getSelectedAll();
    const all = Selectors.getAll({ array: true });
    const components = editor.getSelectedAll();
    const stateOptions = states.map((s) => ({ id: s.getName(), label: s.getLabel() }));
    const em = editor.getModel();
    const target = Styles.getSelected() as CssRule | undefined;
    const targetDevice = target?.getDevice();
    const targetState = target?.getState();
    const allRes = selectors.reduce((all, sel) => {
        const index = all.indexOf(sel);
        index >= 0 && all.splice(index, 1);
        return all;
    }, all);

    const clsType = cx('overflow-hidden mb-2', br.b, br.rnd, cl.br);
    const clsTypeA = `${cl.bA}`;
    const clsTypeItem = cx('flex h-full cursor-pointer p-2', br.br, cl.br);
    const clsTypeItemA = `${cl.bgA}`;
    const targetQuery = getTargetQuery(target);
    const hasSelectors = selectors.length > 0;
    const hasComponents = components.length > 0;
    const hasSomeTarget = hasSelectors || hasComponents;
    const isTargetComponents = (cmpFirst && hasComponents) || (!cmpFirst && !hasSelectors);
    const targetLabel = isTargetComponents ? 'Components' : 'Selectors';
    const t = (key: string) => i18nStore.t(`selectorManager.${key}`);
    const styleCatalogLabel = i18nStore.t(`modals.styleCatalog.title`);
    const openStyles = () => modalStore.open({ title: styleCatalogLabel, children: <StyleCatalog/> });
    const selectorsAsOptions = allRes
        .filter(sel => sel.isClass())
        .map((sel) => ({
            id: sel,
            label: sel.getLabel(),
        }));

    return (
        <>
            <Grid items="center" className="mb-2">
                <GridItem grow>
                    <Grid items="center" space="s">
                        <GridItem>{t('selection')}</GridItem>
                        <GridItem>
                            <Tooltip className="cursor-pointer" onClick={openStyles} title={styleCatalogLabel}>
                                <Icon path={mdiPaletteSwatch} size={icon.s}/>
                            </Tooltip>
                        </GridItem>
                    </Grid>
                </GridItem>
                {
                    !!target &&
                    <GridItem>
                        <SelectField size="s" value={selectedState} options={stateOptions} includeEmpty
                            onChange={setState} emptyState={`- ${t('state')} -`}
                            className={cx([selectedState && cl.bA])}
                        />
                    </GridItem>
                }
            </Grid>
            {
                hasSomeTarget ?
                <>
                    <Grid items="stretch" space="xs" className={cx(clsType, !isTargetComponents && clsTypeA)}>
                        <Tooltip title={t(hasSelectors ? 'applyOnSelector' : 'noSelectors')}
                            className={cx(clsTypeItem, !isTargetComponents && clsTypeItemA)}
                            onClick={() => hasSelectors && Selectors.setComponentFirst(false)}
                        >
                            <Grid className="h-full" items="center">
                                <Icon path={mdiTag} size={icon.sx}/>
                            </Grid>
                        </Tooltip>
                        <GridItem grow>
                            <Grid className="h-full pr-1" items="center">
                                {
                                    newTag ?
                                    <AutocompleteField
                                        autoFocus
                                        open
                                        hideCaret
                                        border={false}
                                        options={selectorsAsOptions}
                                        allowNew={t('addNewSelector')}
                                        onBlur={() => setTimeout(() => setNewTag(false), 100)}
                                        onChange={value => {
                                            if (value) {
                                                addSelector(value.id || value.label);
                                                setNewTag(false);
                                            }
                                        }}
                                    />
                                    :
                                    <>
                                        {
                                            hasComponents &&
                                            <Tooltip title={t('addNewSelector')}>
                                                <Button variant="out" onClick={() => setNewTag(true)}>
                                                    <Icon path={mdiPlus} size={icon.s}/>
                                                </Button>
                                            </Tooltip>
                                        }
                                        {selectors.map((s) =>
                                            <ClassTag
                                                key={s.toString()}
                                                selector={s}
                                                removable={hasComponents}
                                                toggleable={hasComponents && selectors.filter(sel => sel.getActive() || sel === s).length > 1}
                                            />
                                        )}
                                    </>
                                }
                            </Grid>
                        </GridItem>
                    </Grid>

                    <Grid items="stretch" space="xs" className={cx(clsType, isTargetComponents && clsTypeA)}>
                        <Tooltip title={t(hasComponents ? 'applyOnComponents' : 'noComponents')}
                            onClick={() => hasComponents && Selectors.setComponentFirst(true)}
                            className={cx(clsTypeItem, isTargetComponents && clsTypeItemA)}
                        >
                            <Grid className="h-full" items="center">
                                <Icon path={mdiTargetVariant} size={icon.sx}/>
                            </Grid>
                        </Tooltip>
                        <GridItem grow className="py-0.5">
                            <Grid className="h-full pr-1" items="center">
                                { components.map((cmp) =>
                                    <Badge key={cmp.getId()} s="s"
                                        className={cx(['ml-1 my-0.5 cursor-default', cl.cmp])}
                                        onPointerEnter={() => em.setHovered(cmp)}
                                        onPointerOut={() => em.setHovered()}
                                        label={cmp.getName()}
                                    />
                                )}
                            </Grid>
                        </GridItem>
                    </Grid>

                    <Grid space="s" items="center" justify="between">
                        <Tooltip title={<>
                            <div>{t('selected')}</div>
                            <pre className={cx('text-xs mt-1 bg-white/10', br.rnd, pad.xyS)}>{ targetQuery }</pre>
                            <div className="text-xs mt-1.5">{t('currentSelection')}</div>
                        </>}>
                            <Badge className={cx(br.b, br.rnd, cl.br)}>
                                <Icon path={mdiTarget} size={icon.sx}/>
                            </Badge>
                        </Tooltip>
                        <GridItem className="text-sm">
                            <Badge className={cx(br.b, br.rnd, cl.br)}>
                                <Grid space="xs" items="center" nowrap>
                                    {
                                        !!targetDevice && targetDevice.getWidthMedia() &&
                                        <>
                                            <Tooltip title={<>{t('device')}: <b>{targetDevice.getName()}</b></>}>
                                                <Icon path={mdiCellphoneLink} size={icon.sx}/>
                                            </Tooltip>
                                            <GridItem className="opacity-30">|</GridItem>
                                        </>
                                    }
                                        <Tooltip title={<>
                                            {t('target')}: <b>{targetLabel}</b>
                                            <span className="text-xs opacity-75"> { target?.selectorsToString({ skipState: 1 }) }</span>
                                        </>}>
                                            <Icon path={isTargetComponents ? mdiTargetVariant : mdiTag} size={icon.sx}/>
                                        </Tooltip>
                                    {
                                        !!targetState &&
                                        <>
                                            <GridItem className="opacity-30">|</GridItem>
                                            <Tooltip title={<>{t('state')}: <b>{targetState.getLabel()}</b></>}>
                                                <Icon path={mdiFlare} size={icon.sx}/>
                                            </Tooltip>
                                        </>
                                    }
                                </Grid>
                            </Badge>
                        </GridItem>
                        <ButtonWithTooltip title={i18nStore.t('toggleCss')} onClick={toggleCssPanel} active={isCssPanelActive}>
                            <Icon path={mdiCodeBraces} size={icon.sx}/>
                        </ButtonWithTooltip>
                    </Grid>
                </>
                :
                <Grid className="text-sm leading-6 my-5" col>
                    <GridItem>{t('noSelecton')}</GridItem>
                    <ul className="list-disc pl-5 mt-2">
                        <li>{t('selectFromCanvas')}</li>
                        <li>{t('selectFromList')}</li>
                        {/* <li>{t('selectCustom')}</li> */}
                    </ul>
                </Grid>
            }
        </>
    );
  });