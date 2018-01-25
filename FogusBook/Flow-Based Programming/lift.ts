export function liftFn(valueFn: Function, stateFn?: Function) {
    return function (...args: any[]) {
        return function (state) {
            var values = valueFn(state, ...args);
            var s = stateFn ? stateFn(state) : values;

            return { values: values, state: s };
        }
    }
}