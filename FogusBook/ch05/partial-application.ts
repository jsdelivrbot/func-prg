function partial(fun: Function, ...baseArgs: any[]) {
    return function (...restArgs: any[]) {
        var args = [...baseArgs, ...restArgs];
        return fun.apply(fun, args);
    }
}

var dividerFn = partial((x, y, z) => x / y / z, 12, 3, 2);
var xx3 = dividerFn();