"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_helper_1 = require("./helpers/db-helper");
const R = require("ramda");
const wrapper_1 = require("./wrapper");
const find = R.curry((db, snn) => db.find(snn));
const findStudents = R.curry((db, snn) => wrapper_1.wrap(find(db, snn)));
// function(db: DB, snn: string) {
//     return function(db: DB) {
//          return function(snn: string) {
//              wrap(find(db, snn));
//          }
//     }
// }
const getFirstName = (student) => wrapper_1.wrap(student.map(R.prop("firstname")));
// [["firstname" of Student]]
const result = R.compose(getFirstName, findStudents(db_helper_1.db));
const test = result("444444444");
console.log(test);
//# sourceMappingURL=ch05-2.js.map