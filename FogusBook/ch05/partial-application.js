function partial(fun, ...baseArgs) {
    return function (...restArgs) {
        var args = [...baseArgs, ...restArgs];
        return fun.apply(fun, args);
    };
}
var dividerFn = partial((x, y, z) => x / y / z, 12, 3, 2);
var xx3 = dividerFn();
//# sourceMappingURL=partial-application.js.map