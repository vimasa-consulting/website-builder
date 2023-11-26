import { TraitsResultProps, useEditor } from "@grapesjs/react";
import type { Editor, Trait } from "grapesjs";
import { capitalize, isString } from "../../utils";
import cx from '../../utils/makeCls';
import Button from "../Button";
import CodeField from "../CodeField";
import ColorField from "../ColorField";
import Grid from "../Grid";
import GridItem from "../GridItem";
import InputField from '../InputField';
import NumberField from "../NumberField";
import SelectField from "../SelectField";
import SwitchField from "../SwitchField";
import TraitStackField from "./TraitStackField";
import TraitHrefField from "./TraitHrefField";

const cleanLabel = (label: string) => capitalize(label.replace(/-/g, ' '))

export const getInputProps = (trait: Trait, editor?: Editor) => {
    return {
        type: trait.getType(),
        size: 's' as 's',
        value: trait.getValue(),
        label: cleanLabel(trait.getLabel()),
        placeholder: editor?.t(`traitManager.traits.attributes.${trait.getId()}.placeholder`),
        onChange: (value: string, partial: boolean) => trait.setValue(value, { partial }),
    }
}

export const getSelectProps = (trait: Trait) => {
    return {
        ...getInputProps(trait),
        options: trait.getOptions().map((opt: any) => {
            return isString(opt) ?
                { id: opt, label: opt } :
                {
                    id: opt.id || opt.value,
                    label: opt.name || opt.label || opt.value,
                }
        }),
        onChange: (value: string) => trait.setValue(value),
    }
}

export const getNumberProps = (trait: any) => {
    return {
        ...getInputProps(trait),
        units: trait.get('units'),
    }
}

export const getButtonProps = (trait: Trait) => {
    return {
        children: cleanLabel(trait.getLabel() || trait.get('text')),
        onClick: () => {
            const editor = trait.em.Editor;
            const command = trait.get('command');
            isString(command) ? editor.runCommand(command) : command?.(editor, trait);
        },
        full: true,
    }
}

export const getCheckboxProps = (trait: Trait) => {
    return {
        size: 's' as 's',
        value: !!trait.getValue(),
        label: cleanLabel(trait.getLabel()),
        onChange: (value: boolean) => trait.setValue(value),
    }
}

export const getCodeProps = (trait: Trait, editor?: Editor) => {
    const typeProps = trait.get('typeProps' as any) || {};
    return {
        language: 'css',
        ...typeProps,
        key: editor?.getSelected()?.getId() || '',
        value: trait.getValue(),
        label: cleanLabel(trait.getLabel()),
        onChange: (value: string, partial: boolean) => {
            trait.setValue(value);
        },
    }
}

function getTraitComponent(trait: Trait, editor: Editor) {
    switch (trait.getType()) {
        case 'select':
            return <SelectField {...getSelectProps(trait)}/>
        case 'number':
            return <NumberField {...getNumberProps(trait)}/>
        case 'checkbox':
            return <SwitchField {...getCheckboxProps(trait)}/>
        case 'color':
            return <ColorField {...getInputProps(trait)}/>
        case 'button':
            return <Button {...getButtonProps(trait)}/>
        case 'code':
            return <CodeField {...getCodeProps(trait, editor)}/>
        case 'stack':
            return <TraitStackField trait={trait} />
        case 'href':
            return <TraitHrefField trait={trait} />
        default:
            return <InputField {...getInputProps(trait, editor)}/>
    }
};

export default function TraitManager({ traits }: TraitsResultProps) {
    const editor = useEditor();

    return (
        <Grid className="app-trait-manager" col>
            {
                !editor.getSelected() ?
                    <GridItem className="text-center">{editor.t('traitManager.empty')}</GridItem>
                :
                (
                    !traits.length ?
                    <GridItem className="text-center">No properties available</GridItem>
                    :
                    traits.map((trait) => (
                        <GridItem key={trait.getId()} className={cx('mb-2 w-full')}>
                            {getTraitComponent(trait, editor)}
                        </GridItem>
                    ))
                )
            }
        </Grid>
    );
  }