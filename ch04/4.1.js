"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combine_1 = require("./combine");
const str = `We can only see a short distance
             ahead but we can see plenty there
             that needs to be done`;
const explode = (str) => str.split(/\s+/);
const count = (arr) => arr.length;
const countWords = combine_1.combine(count, explode);
console.log(countWords(str));
//# sourceMappingURL=4.1.js.map