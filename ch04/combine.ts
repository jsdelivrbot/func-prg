export function combine(...functions: Function[]) {
    let last = functions.length - 1;

    return function (...args: any[]) {
        let result = functions[last].apply(this, args);

        while (last--) {
            result = functions[last].call(this, result);
        }

        return result;
    };
}