import { LazyChain } from "./lazy-chain";

var comparerAsc = (a, b) => parseInt(a) - parseInt(b);
var comparerDesc = (a, b) => parseInt(b) - parseInt(a);

var chainA = new LazyChain([2, 6, 1, 0, 10])
    .invoke("sort", comparerAsc)
    .invoke("concat", [123, 321]);

var chainB = new LazyChain(["Hello world"])
    .invoke("join", "")
    .invoke("split", "")
    .invoke("reverse");        

var chainC = chainA.chain(chainB).tap(x => console.log(x)).force();    

var stop = 1;    