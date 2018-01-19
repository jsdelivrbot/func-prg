import { db, DB } from "./helpers/db-helper";
import * as _ from "lodash";
import * as R from "ramda";
import { IO } from "../model/my-monads/io";
import { Either } from "../model/my-monads/either";
import { Maybe } from "../model/my-monads/maybe";

const validLength = (str: string, len: number) => str.length === len;
const checkLengthSnn = (snn: string) =>
    Either.of(snn)
        .filter(_.bind(validLength, undefined, 9))
        .getOrElseThrow(`snn ${snn} isn't a valid snn number`);

const safeFindObject = R.curry((db: DB, id: string) => Either.fromNullable(db.find(id)).getOrElseThrow("Object wasn't find with id = ${id}"));
const findStudenat = safeFindObject(db);
const csv = (arr: string[]) => arr.join(",");

// const showStudent = (snn) =>
//     Maybe.fromNullable(snn)
//         .chain(checkLengthSnn)        
//         .chain(safeFindObject(findStudenat("111-11-1111"))
//         .map(R.props(["ssn", "firstname", "lastname"]))