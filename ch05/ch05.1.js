"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrapper_1 = require("./wrapper");
const R = require("ramda");
const plus = R.curry((a, b) => a + b);
const plus3 = plus(3);
const plus10 = plus(10);
const two = wrapper_1.wrap(2);
const five = new wrapper_1.Wrapper(5);
const result = two.map(plus3).map(plus10);
// [[[2].map(plus3(2))].map(plus10(5))]
console.log(result);
//# sourceMappingURL=ch05.1.js.map