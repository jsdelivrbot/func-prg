import { Wrapper, wrap } from "./wrapper";
import * as R from "ramda";

const plus = R.curry((a: number, b: number) => a + b);
const plus3 = plus(3);
const plus10 = plus(10);
const two = wrap(2);
const five = new Wrapper(5);

const result = two.map(plus3).map(plus10);
// [[[2].map(plus3(2))].map(plus10(5))]
console.log(result);