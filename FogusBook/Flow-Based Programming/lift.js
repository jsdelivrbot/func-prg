"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function liftFn(valueFn, stateFn) {
    return function (...args) {
        return function (state) {
            var values = valueFn(state, ...args);
            var s = stateFn ? stateFn(state) : values;
            return { values: values, state: s };
        };
    };
}
exports.liftFn = liftFn;
//# sourceMappingURL=lift.js.map