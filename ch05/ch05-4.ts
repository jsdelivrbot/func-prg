import { db, DB } from "./helpers/db-helper";
import * as R from "ramda";
import { Either } from "../model/my-monads/either";

const safeFindObject = R.curry((db: DB, snn: string) => {
    return Either.fromNullable(db.find(snn));
});

const findStudent = safeFindObject(db);

console.log(findStudent("111-11-1111").getOrElse("Object wasn't found"));