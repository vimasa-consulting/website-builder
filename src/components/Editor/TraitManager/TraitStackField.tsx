import type { Trait, TraitProperties } from "grapesjs";
import { Fragment, useState } from "react";
import Grid from "../Grid";
import InputField from "../InputField";
import SelectField from "../SelectField";
import StackField from "../StackField";

export default function TraitStackField({ trait }: { trait: Trait }) {
    const [selected, setSelected] = useState<any>();
    const properties: TraitProperties[] = trait.get('properties' as any);
    const addItem = trait.get('addItem' as any);
    const items = trait.getValue();
    const selectedIndex = items.findIndex((item: any) => item.id === selected?.id);

    return (
        <StackField
            items={items}
            selected={selected}
            add={() => {
                const values = trait.getValue();
                const num = values.length + 1;
                const newItem = addItem ? addItem(num) : { id: `opt${num}`, label: `New option ${num}` };
                trait.setValue([
                    ...values,
                    newItem
                ]);
            }}
            select={setSelected}
            move={(item, index) => {
                const filtered = trait.getValue().filter((curr: any) => curr.id !== item.id);
                filtered.splice(index, 0, item);
                trait.setValue(filtered);
            }}
            remove={item => {
                const newValue = trait.getValue().filter((curr: any) => curr.id !== item.id);
                trait.setValue(newValue);
            }}
            label={trait.getLabel({ locale: true })}
            renderItem={(item) => item.label}
        >
            <Grid space="m" col>
                {properties.map((prop) => {
                    const { name } = prop;
                    const currentItem = items[selectedIndex];

                    if (!currentItem) return null;

                    const value = currentItem[name];

                    const onChange = (newValue: string) => {
                        currentItem[name] = newValue;
                        trait.setValue([...items]);
                        if (name === 'id') {
                            setSelected(currentItem);
                        }
                    }

                    let inputToRender = <InputField label={name} value={value} onChange={onChange}/>;

                    switch (prop.type) {
                        case 'select':
                            inputToRender = <SelectField label={name} options={prop.options as any} value={value} onChange={onChange}/>
                    }

                    return (
                        <Fragment key={name}>
                            { inputToRender }
                        </Fragment>
                    )
                })}
            </Grid>
        </StackField>
    )
}