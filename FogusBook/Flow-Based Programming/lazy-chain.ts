export class LazyChain {
    private thunks: Function[] = [];

    constructor(private target: object) {
    }

    invoke(methodName: string, ...args: any[]): this {
        var newThunk = (theTarget) => { // wraps some behavior for later execution is typically called a thunk
            var method = theTarget[methodName];
            return method.apply(theTarget, args);
        };

        this.thunks.push(newThunk);

        return this;
    }

    tap(fun: Function, ...args: any[]): this {
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

    chain(lazyChain: LazyChain): this {
        if (lazyChain instanceof LazyChain === false) return;

        let thunks = lazyChain.getThunks();
        if (thunks.length) {
            this.thunks.push(...thunks);
        }

        return this;
    }

    force() {
        return this.thunks.reduce((target: object, thunk: Function) => {
            return thunk(target);
        }, this.target);
    }
}