import React from 'react';
import ReactDOM from 'react-dom';

export interface PortalContainerProps {
    children: React.ReactNode
}

export type PortalContainerResult = React.FC<PortalContainerProps>;

const elContainerMap = new WeakMap<HTMLElement, PortalContainerResult>();

export function portalContainer(el?: HTMLElement): PortalContainerResult {
    if (!el) {
        return () => null;
    }

    const prevResult = elContainerMap.get(el);

    if (prevResult) {
        return prevResult;
    }

    const result = function Container({ children }: PortalContainerProps) {
        return ReactDOM.createPortal(children, el);
    };

    elContainerMap.set(el, result);

    return result;
}

type PluginOptions = Record<string, any>;

export type PluginToLoad = {
    id: string,
    src: string,
    options?: PluginOptions,
}