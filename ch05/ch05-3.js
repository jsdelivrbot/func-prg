"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_helper_1 = require("./helpers/db-helper");
const R = require("ramda");
const maybe_1 = require("../model/my-monads/maybe");
const safeFindObject = R.curry((db, snn) => maybe_1.Maybe.fromNullable(db.find(snn)));
const safeFindStudent = safeFindObject(db_helper_1.db);
const country = safeFindStudent("111-11-1111")
    .map(R.prop("_address"))
    .getOrElse("Country does not exist!");
console.log(country);
// const address = safeFindStudent("0111-11-1111").map(R.prop("address"));
// console.log(address.getOrElse("Enter a valid snn"));
//# sourceMappingURL=ch05-3.js.map