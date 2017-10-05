import { Student } from "../../model/Student";
import { Address } from "../../model/Address";

export class DB {
    private students: { [snn: string]: Student } = {
        "111-11-1111": new Student("111-11-1111", "Haskell", "Curry", 1987,
            new Address("US", "NJ", "Princeton", "5577112", "StreetA"), "Penn State"),
        "222-22-2222": new Student("222-22-2222", "Alan", "Turing", 1981,
            new Address("England", "StateEngA", "London", "11123265", "StreetEngA"), "Princeton"),
        "333-33-3333": new Student("333-33-3333", "Alonzo", "Church", 1971,
            new Address("England", "StateEngB", "Glasgow", "2343545", "StreetEngB"), "Princeton"),
        "444-44-4444": new Student("444-44-4444", "Stephen", "Kleene", 1988,
            new Address("US", "CA", "San-Diego", "98987878", "StreetUsA"), "Princeton")
    };

    find(snn: string) {
        return this.students.hasOwnProperty(snn) ? this.students[snn] : null;
    }
}

export const db = new DB();