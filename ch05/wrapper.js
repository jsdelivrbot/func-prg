"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Wrapper {
    constructor(value) {
        this.value = value;
    }
    static of(value) {
        return new Wrapper(value);
    }
    map(f) {
        return Wrapper.of(f(this.value));
    }
    toString() {
        return `Wrapper (${this.value})`;
    }
}
exports.Wrapper = Wrapper;
function wrap(value) {
    return new Wrapper(value);
}
exports.wrap = wrap;
//# sourceMappingURL=wrapper.js.map