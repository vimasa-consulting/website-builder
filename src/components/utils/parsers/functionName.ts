export default function functionName(input: string) {
    const start = input.indexOf('(') + 1;
    const end = input.lastIndexOf(')');

    return {
        name: input.substring(0, start - 1).trim(),
        value: String.prototype.substring.apply(input, [start, end >= 0 ? end : undefined]).trim(),
    }
}