function myLength(arr) {
    if (arr.length === 0) {
        return 0;
    }
    else {
        return 1 + myLength(arr.slice(1));
    }
}
// 1 + myLength([1, 2, 3]) => 3
// 1 + myLength([2, 3]) = 1 + 2 = 3
// 1 + myLength([3]) = 1 + 1 = 2 
// 1 + myLength([]) = 1 + 0 = 1
// A reimplementation of myLength using a tail-recursive call
function tcLength(arr, n = 0) {
    if (arr.length === 0) {
        return n;
    }
    else {
        return tcLength(arr.slice(1), n + 1);
    }
}
// tcLength([1, 2, 3, 4, 5, 6], 0)
// tcLength([2, 3, 4, 5, 6], 1)
// tcLength([3, 4, 5, 6], 2)
// tcLength([4, 5, 6], 3)
// tcLength([5, 6], 4)
// tcLength([6], 6)
// tcLength([], 6) => 6
//------------------------------------------------------------------------------------------------------------------------------
function cycle(times, arr) {
    if (times === 0) {
        return [];
    }
    else {
        return cycle(times - 1, arr).concat(arr);
    }
}
// cycle(2, [1,2,3]) = [1,2,3].concat([1,2,3]) => [1,2,3,1,2,3]
// cycle(1, [1,2,3]) = [].concat([1,2,3]) => [1,2,3]
// cycle(0, [1,2,3]) = []
var influences = [
    ['Lisp', 'Smalltalk'],
    ['Lisp', 'Scheme'],
    ['Smalltalk', 'Self'],
    ['Scheme', 'JavaScript'],
    ['Scheme', 'Lua'],
    ['Self', 'Lua'],
    ['Self', 'JavaScript']
];
function nexts(graph, node) {
    if (graph.length === 0) {
        return [];
    }
    var firstPair = graph[0]; // cursor
    var from = firstPair[0];
    var to = firstPair[1];
    var rezzz;
    if (node === from) {
        rezzz = [].concat(to, nexts(graph.slice(1), node));
    }
    else {
        rezzz = nexts(graph.slice(1), node); // graph.slice(1) - smaller Problem
    }
    return rezzz;
}
// ['Lisp', 'Smalltalk'] => [].concat('Smalltalk', nexts(-1 from Length, "Lisp")) ['Scheme'].concat("Smalltalk", [])
// ['Lisp', 'Scheme'] => [].concat('Scheme', nexts(-1 from Length, "Lisp")) => [].concat('Scheme', [])
// ['Smalltalk', 'Self']    => nexts(-1 from Length, "Lisp") => [] 
// ['Scheme', 'JavaScript'] => nexts(-1 from Length, "Lisp") => []
// ['Scheme', 'Lua']        => nexts(-1 from Length, "Lisp") => []
// ['Self', 'Lua']          => nexts(-1 from Length, "Lisp") => []
// ['Self', 'JavaScript']   => nexts(-1 from Length, "Lisp") => []
//var xx5 = nexts(influences, "Lisp"); 
//# sourceMappingURL=a.js.map