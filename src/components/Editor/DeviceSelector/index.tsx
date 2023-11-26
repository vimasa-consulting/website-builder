import { DevicesResultProps } from '@grapesjs/react';
import SelectField from '../SelectField';

export default function DeviceSelector({ devices, selected, select }: DevicesResultProps) {
    const deviceOptions = devices.map((device) => ({
        id: device.id,
        label: device.getName()!,
    }));

    return (
        <SelectField size="xs" value={selected} options={deviceOptions} onChange={select}/>
    );
  }