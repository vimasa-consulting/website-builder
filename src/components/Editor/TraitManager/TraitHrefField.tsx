import { useEditor } from "@grapesjs/react";
import { mdiEmail, mdiLink, mdiPhone, mdiTarget, mdiTextBoxMultiple, mdiViewDayOutline } from "@mdi/js";
import Icon from "@mdi/react";
import type { Component, Trait } from "grapesjs";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { CMD_SELECT_TARGET } from "../../plugins/global/studioPlugin";
import { useI18nStore } from "../../store/I18nStore";
import { useAppEditorStore } from "../../store/appEditorStore";
import { onKeyEscape } from "../../utils/dom";
import ButtonWithTooltip from "../Button/ButtonWithTooltip";
import Grid from "../Grid";
import InputField from "../InputField";
import LabelField from "../LabelField";
import SelectField, { Option } from "../SelectField";
import SwitchField from "../SwitchField";
import Tabs from "../Tabs";
import { icon } from "../theme";
import AutocompleteField from "../AutocompleteField";

enum HrefType {
    Url = 'url',
    Pages = 'pages',
    Elements = 'elements',
    Email = 'email',
    Phone = 'phone',
}

const pagesPrefix = 'page://';
const elPrefix = '#';
const emailPrefix = 'mailto:';
const subjectPrefix = 'subject=';
const phonePrefix = 'tel:';

const getHrefType = (value: string) => {
    if (value.startsWith(phonePrefix)) {
        return HrefType.Phone;
    } else if (value.startsWith(emailPrefix)) {
        return HrefType.Email;
    } else if (value.startsWith(pagesPrefix)) {
        return HrefType.Pages;
    } else if (value.startsWith(elPrefix)) {
        return HrefType.Elements;
    } else {
        return HrefType.Url;
    }
}

const cmpIdLabel = (cmp: Component) => {
 return `${cmp.getName()} - #${cmp.getId()}`;
}

export default observer(function TraitHrefField({ trait }: { trait: Trait }) {
    const value = trait.getValue();
    const appEditorStore = useAppEditorStore();
    const { isSelectingTarget } = appEditorStore;
    const [, triggerUp] = useState(0);
    const [tab, setTab] = useState(() => getHrefType(value));
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [phone, setPhone] = useState('');
    const [showIdList, setShowIdList] = useState(true);
    const [idList, setIdList] = useState<Option[]>([]);
    const editor = useEditor();
    const i18nStore = useI18nStore();
    const pages = editor.Pages.getAll();
    const t = i18nStore.tScoped('traitManager.traits.labels');
    const up = () => triggerUp((i) => ++i);

    const setValue = (newValue: string) => {
        trait.setValue(newValue)
    };

    const handleTabChange = (newTab: HrefType) => {
        setTab(newTab);
        setEmail('');
        setSubject('');
        setPhone('');
        setValue('');
    }

    const handlePageChange = (newValue: string) => {
        setValue(newValue);
        up();
    };

    const handleIdElChange = (option: Option) => {
        if (option) {
            setValue(option.id);
            up();
        }
    };

    const handlePhoneChange = (newValue: string) => {
        setValue(`${phonePrefix}${newValue}`);
        setPhone(newValue);
    }

    const handleEmailChange = (newValue: string) => {
        setValue(`${emailPrefix}${newValue}${ subject ? `?${subjectPrefix}${subject}` : '' }`);
        setEmail(newValue);
    }

    const handleSubjectChange = (newValue: string) => {
        setValue(`${emailPrefix}${email}${ newValue ? `?${subjectPrefix}${newValue}` : '' }`);
        setSubject(newValue);
    }

    const toogleSelectTarget = () => {
        appEditorStore.setSelectingTarget(!isSelectingTarget);
    };

    const getSelectedOption = (value: string) => {
        const id = value.replace(elPrefix, '');
        const cmp = editor.Components.componentsById[id];

        return {
            id: value,
            label: cmp ? cmpIdLabel(cmp) : value,
        }
    }

    useEffect(() => {
        let idOptions: Option[] = [];

        if (showIdList) {
            const invalidTags = ['path', 'br', 'b', 'u', 'i', 'strike'];
            const root = editor.Pages.getSelected()?.getMainComponent();
            root?.forEachChild(cmp => {
                if (
                    !cmp.is('comment')
                    && !cmp.is('textnode')
                    && !invalidTags.includes(cmp.get('tagName')!)
                ) {
                    idOptions.push({ id: `#${cmp.getId()}`, label: cmpIdLabel(cmp) });
                }
            })
        }

        setIdList(idOptions);

    }, [showIdList]);

    useEffect(() => {
        let offKeyEscape = () => {};
        const stop = () => {
            offKeyEscape();
            editor.stopCommand(CMD_SELECT_TARGET);
        };

        if (isSelectingTarget) {
            offKeyEscape = onKeyEscape(stop);
            editor.runCommand(CMD_SELECT_TARGET, {
                onSelect: (cmp: Component) => setValue(`#${cmp.getId()}`),
            });
        }

        return stop;
    }, [isSelectingTarget]);

    useEffect(() => {
        if (!value) return;

        const newType = getHrefType(value);

        switch (newType) {
            case HrefType.Phone:
                setPhone(value.replace(phonePrefix, ''));
                break;
            case HrefType.Email:
                const [email, subjectParam = ''] = value.replace(emailPrefix, '').split('?');
                setEmail(email);
                setSubject(subjectParam.replace(subjectPrefix, ''));
                break;
        }

        setTab(newType);
    }, [value]);

    return (
        <Tabs<HrefType>
            onChange={handleTabChange}
            classNamePanel="p-1"
            key={tab}
            value={tab}
            tabs={[
                {
                    id: HrefType.Url,
                    label: <Icon path={mdiLink} size={icon.s}/>,
                    content: (
                        <InputField
                            placeholder="eg. https://google.com"
                            value={value}
                            label="URL"
                            onChange={setValue}
                            size="s"
                            type="url"
                        />
                    )
                },
                {
                    id: HrefType.Pages,
                    label: <Icon path={mdiTextBoxMultiple} size={icon.s}/>,
                    content: (
                        <SelectField
                            size="s"
                            options={pages.map(p => ({ id: `page://${p.getId()}`, label: p.getName() }))}
                            value={value}
                            onChange={handlePageChange}
                            label="Page"
                        />
                    )
                },
                {
                    id: HrefType.Elements,
                    label: <Icon path={mdiViewDayOutline} size={icon.s}/>,
                    content: (
                        <Grid space="s" col>
                            <LabelField size="s">Element ID</LabelField>
                            <Grid space="xs" nowrap>
                                {
                                    showIdList ?
                                    <AutocompleteField
                                        options={idList}
                                        onChange={handleIdElChange}
                                        value={getSelectedOption(value)}
                                        placeholder={i18nStore.t('selectList')}
                                    />
                                    :
                                    <InputField
                                        size="s"
                                        placeholder="eg. #my-element-in-page"
                                        value={value}
                                        onChange={setValue}
                                        className="flex-1"
                                    />
                                }
                                <ButtonWithTooltip
                                    title={i18nStore.t('selectTarget')}
                                    size="m2"
                                    active={isSelectingTarget}
                                    onClick={toogleSelectTarget}
                                    className="h-[29px]"
                                >
                                    <Icon path={mdiTarget} size={icon.sx}/>
                                </ButtonWithTooltip>
                            </Grid>
                            <SwitchField
                                value={showIdList}
                                onChange={setShowIdList}
                                label={t('showList')}
                            />
                        </Grid>
                    )
                },
                {
                    id: HrefType.Email,
                    label: <Icon path={mdiEmail} size={icon.s}/>,
                    content: (
                        <Grid space="s" col>
                            <InputField
                                placeholder="eg. mail@gmail.com"
                                value={email}
                                onChange={handleEmailChange}
                                size="s"
                                label="Email"
                                type="email"
                            />
                            <InputField
                                placeholder="eg. My subject"
                                value={subject}
                                onChange={handleSubjectChange}
                                label="Subject"
                                size="s"
                            />
                        </Grid>
                    )
                },
                {
                    id: HrefType.Phone,
                    label: <Icon path={mdiPhone} size={icon.s}/>,
                    content: (
                        <InputField
                            size="s"
                            type="tel"
                            label="Phone"
                            placeholder="eg. +55123456789"
                            value={phone}
                            onChange={handlePhoneChange}
                        />
                    )
                },
            ]}
        />
    )
});