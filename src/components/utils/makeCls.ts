type Input = string | number | boolean | null | undefined;
type Inputs = Input | Array<Input>;

export const cx = makeCls;

export default function makeCls(...inputs: Inputs[]): string {
    const inp = Array.isArray(inputs[0]) ? inputs[0] : [...inputs];
    return inp.filter(Boolean).join(' ');
}