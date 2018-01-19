"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_helper_1 = require("./helpers/db-helper");
const _ = require("lodash");
const R = require("ramda");
const either_1 = require("../model/my-monads/either");
const validLength = (str, len) => str.length === len;
const checkLengthSnn = (snn) => either_1.Either.of(snn)
    .filter(_.bind(validLength, undefined, 9))
    .getOrElseThrow(`snn ${snn} isn't a valid snn number`);
const safeFindObject = R.curry((db, id) => either_1.Either.fromNullable(db.find(id)).getOrElseThrow("Object wasn't find with id = ${id}"));
const findStudenat = safeFindObject(db_helper_1.db);
const csv = (arr) => arr.join(",");
// const showStudent = (snn) =>
//     Maybe.fromNullable(snn)
//         .chain(checkLengthSnn)        
//         .chain(safeFindObject(findStudenat("111-11-1111"))
//         .map(R.props(["ssn", "firstname", "lastname"])) 
//# sourceMappingURL=ch05-6.js.map