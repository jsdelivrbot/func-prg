export function pipeline(seed, ...funcs: Function[]) {
    return funcs.reduce((acc, func) => func(acc), seed);
};