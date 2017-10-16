"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_helper_1 = require("./helpers/db-helper");
const R = require("ramda");
const either_1 = require("../model/my-monads/either");
const safeFindObject = R.curry((db, snn) => {
    return either_1.Either.fromNullable(db.find(snn));
});
const findStudent = safeFindObject(db_helper_1.db);
console.log(findStudent("111-11-1111").getOrElse("Object wasn't found"));
//# sourceMappingURL=ch05-4.js.map