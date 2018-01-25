"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lazy_chain_1 = require("./lazy-chain");
var comparerAsc = (a, b) => parseInt(a) - parseInt(b);
var comparerDesc = (a, b) => parseInt(b) - parseInt(a);
var chainA = new lazy_chain_1.LazyChain([2, 6, 1, 0, 10])
    .invoke("sort", comparerAsc)
    .invoke("concat", [123, 321]);
var chainB = new lazy_chain_1.LazyChain(["Hello world"])
    .invoke("join", "")
    .invoke("split", "")
    .invoke("reverse");
//# sourceMappingURL=lazy-chain-test.js.map