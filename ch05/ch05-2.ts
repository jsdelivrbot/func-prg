import { db, DB } from "./helpers/db-helper";
import * as R from "ramda";
import { wrap, Wrapper } from "./wrapper";

const find = R.curry((db: DB, snn: string) => db.find(snn));

const findStudents = R.curry((db: DB, snn: string) => wrap(find(db, snn)));
// function(db: DB, snn: string) {
//     return function(db: DB) {
//          return function(snn: string) {
//              wrap(find(db, snn));
//          }
//     }
// }


const getFirstName = (student: any) => wrap(student.map(R.prop("firstname")));
// [["firstname" of Student]]

const result = R.compose(getFirstName, findStudents(db));

const test = result("444444444").join();

// console.log(test);

const wrapped = Wrapper.of(Wrapper.of(Wrapper.of("test")));
// [[["test"]]]

console.log(wrapped.join());