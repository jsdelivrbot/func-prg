"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IO {
    constructor(effect) {
        if (typeof effect !== "function") {
            throw 'IO Usage: function required';
        }
        this.effect = effect;
    }
    static of(value) {
        return new IO(() => value);
    }
    static from(fn) {
        return new IO(fn);
    }
    map(fn) {
        return new IO(() => fn(this.effect()));
    }
    chain(fn) {
        return fn(this.effect());
    }
    run() {
        return this.effect();
    }
}
exports.IO = IO;
//# sourceMappingURL=io.js.map