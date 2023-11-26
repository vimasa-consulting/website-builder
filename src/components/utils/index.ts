export const capitalize = (str: string) => {
    return str && str.charAt(0).toUpperCase() + str.substring(1);
};

export const noop = () => {};

export const SIDEBAR_LEFT_WIDTH = 240;

export const isDef = (value: any) => typeof value !== 'undefined';

export const isString = (value: any): value is string => {
    return typeof value === 'string';
};

export function isFunction(value: any): value is Function {
    return typeof value === 'function';
}

export const includesSearch = (value: string, search: string) => {
    const valueLower = (value || '').toLocaleLowerCase();
    const searchLower = (search || '').toLocaleLowerCase();
    return valueLower.includes(searchLower);
}

export const parseParamsToObject = (params: string = '') => {
    const cleanParams = params[0] === '?' ? params.substring(1) : params;
    const urlParams = new URLSearchParams(cleanParams);
    return Object.fromEntries(urlParams);
}

export const createId = (length = 16) => {
    let result = '';
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const len = chars.length;
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * len));
    }
    return result;
};

/**
 * replaceJSX('Hello {PLH}!!', { PLH: <div /> })
 */
export const replaceJSX = (str: string, replacement: Record<string, JSX.Element>) => {
    const result: (string | JSX.Element)[] = [];
    const keys = Object.keys(replacement);
    const getRegExp = () => {
        const regexp: string[] = [];
        keys.forEach((key) => regexp.push(`{${key}}`));
        return new RegExp(regexp.join('|'));
    };
    str.split(getRegExp()).forEach((item, i) => {
        result.push(item, replacement[keys[i]]);
    });
    return result;
};