function dispatch(...funs) {
    var size = funs.length;
    return function (target, ...args) {
        var ret = undefined;
        for (var funIndex = 0; funIndex < size; funIndex++) {
            var fun = funs[funIndex];
            ret = fun.apply(fun, [target, ...args]);
            if (ret !== null && ret !== undefined)
                return ret;
        }
        return ret;
    };
}
function stringReverse(s) {
    if (typeof s !== "string")
        return undefined;
    return s.split("").reverse().join("");
}
function isa(type, action) {
    return function (obj) {
        if (obj.type === type) {
            return action(obj);
        }
    };
}
var notifier = {
    type: "notify",
    notify: () => { console.log("notify"); return true; }
};
var joiner = {
    type: "join",
    join: () => { console.log("join"); return true; }
};
var performCommand = dispatch(isa("notify", (obj) => obj.notify()), isa("join", (obj) => obj.join()), () => console.log("fuck!!!"));
performCommand(joiner);
//# sourceMappingURL=a.js.map