"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LazyChain {
    constructor(target) {
        this.target = target;
        this.thunks = [];
    }
    invoke(methodName, ...args) {
        var newThunk = (theTarget) => {
            var method = theTarget[methodName];
            return method.apply(theTarget, args);
        };
        this.thunks.push(newThunk);
        return this;
    }
    tap(fun, ...args) {
        var tapFn = (theTarget) => {
            fun(theTarget, ...args);
            return theTarget;
        };
        this.thunks.push(tapFn);
        return this;
    }
    getThunks() {
        return this.thunks.slice();
    }
    chain(lazyChain) {
        if (lazyChain instanceof LazyChain === false)
            return;
        let thunks = lazyChain.getThunks();
        if (thunks.length) {
            this.thunks.push(...thunks);
        }
        return this;
    }
    force() {
        return this.thunks.reduce((target, thunk) => {
            return thunk(target);
        }, this.target);
    }
}
exports.LazyChain = LazyChain;
//# sourceMappingURL=lazy-chain.js.map