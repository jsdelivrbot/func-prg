import * as R from "ramda";

const runProgram = R.pipe(
    R.map(R.toLower),
    R.uniq,
    R.sortBy(R.identity)
);

console.log(runProgram(["Functional", "Programming", "Curry", "Memoization", "Partial", "Curry", "Programming"]));