"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function combine(...functions) {
    let last = functions.length - 1;
    return function (...args) {
        let result = functions[last].apply(this, args);
        while (last--) {
            result = functions[last].call(this, result);
        }
        return result;
    };
}
exports.combine = combine;
//# sourceMappingURL=combine.js.map