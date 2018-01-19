//------------------------------------------------------------------------------------------------------------------
function curry1(fun: Function) {
    return function (arg) {
        return fun(arg);
    }
}

var curriedParseInt = curry1(parseInt);

var rez = ["11", "22", "33", "44", "55"].map(curriedParseInt);


function curry2<T1, T2, R>(fun: (arg1: T1, arg2: T2) => R) {
    return function (arg2: T2): (arg1: T1) => R {
        return function (arg1: T1): R {
            return fun(arg1, arg2);
        }
    }
}

function div(n, d) { return n / d };

var divideBy10 = curry2(div)(10); // => ? / 10
var xx1 = divideBy10(20); // => 20 / 10

var binaryParser = curry2(parseInt)(2); // parseInt(s: string, radix?: number): number
var xx2 = binaryParser("111");

var plays = [
    { artist: "Burial", track: "Archangel" },
    { artist: "Ben Frost", track: "Stomp" },
    { artist: "Ben Frost", track: "Stomp" },
    { artist: "Burial", track: "Archangel" },
    { artist: "Emeralds", track: "Snores" },
    { artist: "Burial", track: "Archangel" }];

var countBy = <T>(items: T[], itemToString: (item: T) => string) => {
    var hash: { [itemId: string]: number } = {};

    items.forEach(item => {
        var key = itemToString(item);

        if (!hash[key]) hash[key] = 0;

        hash[key] += 1;
    });

    return hash;
};
var songToString = (song) => [song.artist, song.track].join(" - ");
// this way forms a virtual sentence
var songCountHash = curry2(countBy)(songToString)(plays);
//------------------------------------------------------------------------------------------------------------------
function curry3<T1, T2, T3, R>(fun: (arg1: T1, arg2: T2, arg3: T3) => R) {
    return function (arg3: T3): (arg2: T2) => (arg1: T1) => R {
        return function (arg2: T2): (arg1: T1) => R {
            return function (arg1: T1): R {
                return fun(arg1, arg2, arg3);
            }
        }
    }
}

function toHex(n: number) {
    var hex = n.toString(16);
    return hex.length < 2 ? [0, hex].join("") : hex;
}

function rgbToHexString(r: number, g: number, b: number) {
    return ["#", toHex(r), toHex(g), toHex(b)].join("");
}

var blueGreenish = curry3(rgbToHexString)(255)(255)