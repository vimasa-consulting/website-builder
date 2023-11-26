import { isString } from ".";

export const prevent = (ev: any) => ev && ev.preventDefault();

export const stop = (ev: any) => ev && ev.stopPropagation();

export const loadStyle = async (href: string) => {
    const link = document.createElement('link');
    link.href = href;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
};

export const onKeyDown = (key: string, clb: () => void) => {
    const onKey = (ev: KeyboardEvent) => ev.key === key && clb();
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
}

export const onKeyEscape = (clb: () => void) => onKeyDown('Escape', clb);

type ScriptToLoad = { id: string, src: string };

export const loadScript = (src: string | ScriptToLoad, opts: { onScript?: (el: HTMLScriptElement) => void } = {}) => {
    const scriptToLoad = isString(src) ? { id: src, src } : src;
    return new Promise<string>((res, rej) => {
        const script = document.createElement('script');
        const prevScript = document.querySelector<HTMLScriptElement>(`script[src="${scriptToLoad.src}"]`);

        if (prevScript) {
            opts.onScript?.(prevScript);
            return res(scriptToLoad.id);
        }

        script.src = scriptToLoad.src;
        script.onload = () => res(scriptToLoad.id);
        script.onerror = () => rej(scriptToLoad.id);
        document.head.appendChild(script);
        opts.onScript?.(script);
    });
}

export const loadScripts = (scripts: { id: string, src: string }[]) => {
    const promises = scripts.map(script => loadScript(script));
    return Promise.allSettled(promises);
}