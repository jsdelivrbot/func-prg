import * as _ from "underscore";
import { pipeline } from "./pipeline";
import { RQL, TTable, TRow } from "./rql";

var library = [
    { title: "SICP", isbn: "0262010771", ed: 1 },
    { title: "SICP", isbn: "0262510871", ed: 2 },
    { title: "Joy of Clojure", isbn: "1935182641", ed: 10 }];

function firstEdition<T extends TTable>(table: T) {
    return pipeline(table
        , RQL.as({ "ed": "edition" })
        , RQL.select(['title', 'isbn', 'edition'])
        , RQL.where((book: TRow) => book.edition === 1)
        , RQL.select(['title', 'isbn'])
    );
}

// SELECT title, isbn
// FROM ( SELECT title, isbn, ed as edition FROM library
//        WHERE edition == "1")


console.log(firstEdition(library));