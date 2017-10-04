"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const R = require("ramda");
const runProgram = R.pipe(R.map(R.toLower), R.uniq, R.sortBy(R.identity));
console.log(runProgram(["Functional", "Programming", "Curry", "Memoization", "Partial", "Curry", "Programming"]));
//# sourceMappingURL=4.2.js.map