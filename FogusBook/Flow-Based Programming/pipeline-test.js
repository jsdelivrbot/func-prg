"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pipeline_1 = require("./pipeline");
const rql_1 = require("./rql");
var library = [
    { title: "SICP", isbn: "0262010771", ed: 1 },
    { title: "SICP", isbn: "0262510871", ed: 2 },
    { title: "Joy of Clojure", isbn: "1935182641", ed: 10 }
];
function firstEdition(table) {
    return pipeline_1.pipeline(table, rql_1.RQL.as({ "ed": "edition" }), rql_1.RQL.select(['title', 'isbn', 'edition']), rql_1.RQL.where((book) => book.edition === 1), rql_1.RQL.select(['title', 'isbn']));
}
// SELECT title, isbn
// FROM ( SELECT title, isbn, ed as edition FROM library
//        WHERE edition == "1")
console.log(firstEdition(library));
//# sourceMappingURL=pipeline-test.js.map