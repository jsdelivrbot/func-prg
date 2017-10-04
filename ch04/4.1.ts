import { combine } from "./combine";

const str = `We can only see a short distance
             ahead but we can see plenty there
             that needs to be done`;

const explode = (str) => str.split(/\s+/);
const count = (arr) => arr.length;
const countWords = combine(count, explode);

console.log(countWords(str));