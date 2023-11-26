const PARTS_REG = /\s(?![^(]*\))/;
const LENGTH_REG = /^-?[0-9]+[a-zA-Z%]{0,}$/;

export default function parse(input: string) {
    const values = input.split(PARTS_REG);
    const inset = values.indexOf('inset') >= 0;
    const noInset = values.filter(v => v !== 'inset');
    const color = noInset.filter(v => !LENGTH_REG.test(v))[0] || 'currentColor';
    const nums = noInset.filter(v => LENGTH_REG.test(v));
    const [ x = '0', y = '0', blur = '0', spread = '0' ] = nums;
    return {
        x, y, blur, spread,
        inset,
        color,
    };
}