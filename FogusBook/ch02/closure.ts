import * as _ from "underscore";

function complement(predicate) {
    return function (args) {
        return !predicate.apply(null, _.toArray(arguments));
    }
}

var isEven = (n) => {
    return n % 2 === 0
};

var isOdd = complement(isEven);
// console.log(isOdd(2));
// console.log(isOdd(413));

isEven = (n) => {
    return false;
}
// still use the previous isEven implementation, the new one won't affect the captured one when the closure get created
//console.log(isOdd(2));
//console.log(isOdd(413));
//----------------------------------------------------------------------------------------------------------------
function showObject(obj) {
    return function () {
        return obj;
    }
}

var x = { a: 42 };
var showO = showObject(x);
//console.log(showO());
// change the object state
x.a = 101;
//console.log(showO());
//----------------------------------------------------------------------------------------------------------------
var pingpong = (function () {
    var privateClosure = 0;

    return {
        inc: function (n) {
            return privateClosure += n;
        },
        dec: function (n) {
            return privateClosure -= n;
        }
    };
}());

// console.log(pingpong.inc(10));
// console.log(pingpong.dec(2));

// closure as static behavior configuration
function plucker(field) {
    return function (obj: {}) {
        return (obj && obj[field]);
    }
}

console.log(plucker("title")({ title: "Infinite Jest", author: "DFW" }));
