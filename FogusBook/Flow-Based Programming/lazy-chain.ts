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
 
    force() {
        return this.thunks.reduce((target: object, thunk: Function) => {
            return thunk(target);
        }, this.target);
    }
}