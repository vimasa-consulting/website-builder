import cx from '../utils/makeCls';

export const cl = {
    bgTr: 'bg-transparent',
    txt: 'text-gray-900 dark:text-gray-400',
    txtLowEmphasis: 'text-neutral-400 dark:text-neutral-500',
    txtHighEmphasis: 'text-black dark:text-gray-200',
    txtS: 'text-gray-500',
    tA: 'text-violet-400',
    tAo: 'text-violet-800 dark:text-violet-400',
    hTAo: 'hover:text-violet-800 hover:dark:text-violet-400',
    bA: 'border-violet-400',
    bgA: 'bg-violet-400 text-white dark:bg-violet-500',
    bgA2: 'bg-violet-500 text-white',
    bgO: 'bg-violet-50 text-violet-900 dark:bg-zinc-800 dark:text-violet-400',
    bg: 'bg-white dark:bg-zinc-900',
    bgBlur: 'bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm',
    bgH: 'bg-gray-100 dark:bg-zinc-700',
    bgH75: 'bg-gray-100/75 dark:bg-zinc-700/75',
    hBgH: 'hover:bg-gray-50 hover:dark:bg-zinc-800',
    bgH2: 'bg-gray-25 dark:bg-zinc-800',
    hBgH2: 'hover:bg-gray-25 hover:dark:bg-zinc-800',
    hBgAct: 'hover:bg-violet-800 hover:dark:bg-violet-400',
    hBgA2: 'hover:bg-violet-500 hover:dark:bg-violet-600',
    hBgDark: 'hover:bg-black/10',
    sel: 'bg-pink-200 text-pink-900',
    selBr: 'border-pink-900',
    cmp: 'bg-blue-450 text-white',
    cmpBgSoft: '',
    cmpBgSoftX: 'bg-black dark:bg-black',
    cmpTxtActive: 'dark:text-gray-300',
    cmpBr: 'border-blue-450',
    cmpTargetBg: 'bg-amber-500 text-white',
    cmpTargetBgOpac: 'bg-amber-500/10',
    cmpTargetBr: 'border-amber-500',
    // warning
    tW: 'text-amber-500',
    bgW: 'bg-amber-500',
    hBgW: 'hover:bg-amber-600',
    // border
    br: 'border-gray-300 dark:border-zinc-700',
    brLight: 'border-white/25',
};

export const ts = {
    enter: "transition duration-100 ease-out",
    enterFrom: "scale-95 opacity-0",
    enterTo: "opacity-100",
    leave: "transition ease-in duration-100",
    leaveFrom: "scale-100 opacity-100",
    leaveTo: "scale-95 opacity-0",
};

export const tsOpacEnter = {
    enter: "transition duration-100 ease-out",
    enterFrom: "opacity-0",
    enterTo: " opacity-100",
};

export const tsOpacLeave = {
    leave: "transition ease-in duration-100",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0",
};

export const tsOpac = {
    ...tsOpacEnter,
    ...tsOpacLeave,
};

export const pad = {
    xy: 'px-4 py-2',
    xyS: 'px-2 py-1',
    xyS2: 'px-2 py-0.5',
    x: 'px-4',
    xS: 'px-2',
    y: 'py-2',
};

export const pop = {
    bg: cl.bg,
    bgH: cl.bgH,
};

export const toolt = {
    bg: 'bg-white', //'bg-gray-800',
    txt: 'text-black',
    block: 'text-xs bg-white/10 rounded px-2',
};

export const br = {
    rnd: 'rounded',
    pill: 'rounded-full',
    b: 'border',
    bT: 'border-transparent',
    bS: 'border-2',
    bt: 'border-t',
    bb: 'border-b',
    br: 'border-r',
    bl: 'border-l',
    bA: 'border-violet-400 dark:border-violet-500',
};

// focus:outline-none focus-visible:ring-2 ring-white ring-opacity-75 focus-visible:ring-offset-2 ring-offset-orange-300 focus-visible:border-red-500
export const ring = {
    focus: 'focus:outline-none focus-visible:ring-2 ring-violet-300 ring-opacity-80',
};

export const icon = {
    s3x: '13px',
    s2x: '14px',
    sx: '16px',
    s: '18px',
    l: '36px',
};

export const fx = {
    click: 'cursor-pointer transition-opacity opacity-75 hover:opacity-100',
    hover: 'transition-opacity opacity-50 hover:opacity-100',
    dot: 'w-[6px] h-[6px] rounded-full',
    scrollY: 'overflow-y-auto overflow-x-hidden',
    txtEllips: 'text-ellipsis overflow-hidden whitespace-nowrap',
    coverAbs: 'absolute top-0 left-0 w-full h-full',
    noFocusOut: 'focus:outline-none',
};

export const elStyles = {
    link: cl.tAo,
    inputText: 'focus:outline-none placeholder:text-neutral-400 placeholder:dark:text-neutral-500',
};

export const utils = {
    itemList: ({ index = 0, open = false, length = 0  } = {}) => cx(
        cl.bgH2,
        pad.xyS,
        cl.br,
        index && br.bt,
        (open || index === length - 1) && br.bb
    ),
};

const Theme = { ts, pad, pop, br, cl, icon, fx, toolt };

export default Theme;