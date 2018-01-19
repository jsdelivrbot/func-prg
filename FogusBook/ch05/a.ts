function dispatch(...funs: Function[]) {
    var size = funs.length;

    return function (target, ...args: any[]) {
        var ret = undefined;

        for (var funIndex = 0; funIndex < size; funIndex++) {
            var fun = funs[funIndex];
            ret = fun.apply(fun, [target, ...args]);
            if (ret !== null && ret !== undefined) return ret;
        }
        return ret;
    };
}

function stringReverse(s: string) {
    if (typeof s !== "string") return undefined;
    return s.split("").reverse().join("");
}

function isa(type: string, action: (obj: {}) => boolean) {
    return function (obj: { type: string }) {
        if (obj.type === type) {
            return action(obj);
        }
    }
}

type TNotifier = { type: string, notify: () => boolean };
type TJoiner = { type: string, join: () => boolean };

var notifier: TNotifier = {
    type: "notify",
    notify: () => { console.log("notify"); return true; }
};

var joiner: TJoiner = {
    type: "join",
    join: () => { console.log("join"); return true; }
};

var performCommand = dispatch(
    isa("notify", (obj: TNotifier) => obj.notify()),
    isa("join", (obj: TJoiner) => obj.join()),
    () => console.log("fuck!!!")
);

performCommand(joiner);