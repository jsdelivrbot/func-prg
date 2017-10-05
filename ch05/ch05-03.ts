import { db, DB } from "./helpers/db-helper";
import * as R from "ramda";
import { Maybe } from "../model/my-monads/maybe";

const safeFindObject = R.curry((db: DB, snn: string) => Maybe.fromNullable(db.find(snn)));
const safeFindStudent = safeFindObject(db);

const country = safeFindStudent("111-11-1111")
    .map(R.prop("_address"))
    //.map(R.prop("country"))
    .getOrElse("Country does not exist!");

console.log(country);

// const address = safeFindStudent("0111-11-1111").map(R.prop("address"));

// console.log(address.getOrElse("Enter a valid snn"));
