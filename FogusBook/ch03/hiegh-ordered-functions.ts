import * as _ from "underscore";

var people = [{ name: "Fred", age: 65 }, { name: "Lucy", age: 36 }, { name: "Dag", age: 48 }];

function finder(getValue, getBest, coll) {
    return _.reduce(coll, (best, current) => {
        var bestValue = getValue(best);
        var currentValue = getValue(current);

        return bestValue === getBest(bestValue, currentValue) ? best : current;
    });
}

//var pluker = (field: string) => (obj: {}) => obj && obj[field];
//console.log(finder(pluker("age"), Math.min, people));

// implementation of a cleaner best function of finder
function bestFinder(coll, bestFn) {
    return _.reduce(coll, (x, y) => bestFn(x, y) ? x : y);
}

console.log(bestFinder(people, (p1, p2) => p1.age > p2.age));
console.log(bestFinder([1, 2, 3, 4, 4, 5, 6, 7], (x, y) => x > y));
