"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Student_1 = require("../../model/Student");
const Address_1 = require("../../model/Address");
class DB {
    constructor() {
        this.students = {
            "111-11-1111": new Student_1.Student("111-11-1111", "Haskell", "Curry", 1987, new Address_1.Address("US", "NJ", "Princeton", "5577112", "StreetA"), "Penn State"),
            "222-22-2222": new Student_1.Student("222-22-2222", "Alan", "Turing", 1981, new Address_1.Address("England", "StateEngA", "London", "11123265", "StreetEngA"), "Princeton"),
            "333-33-3333": new Student_1.Student("333-33-3333", "Alonzo", "Church", 1971, new Address_1.Address("England", "StateEngB", "Glasgow", "2343545", "StreetEngB"), "Princeton"),
            "444-44-4444": new Student_1.Student("444-44-4444", "Stephen", "Kleene", 1988, new Address_1.Address("US", "CA", "San-Diego", "98987878", "StreetUsA"), "Princeton")
        };
    }
    find(snn) {
        return this.students.hasOwnProperty(snn) ? this.students[snn] : null;
    }
}
exports.DB = DB;
exports.db = new DB();
//# sourceMappingURL=db-helper.js.map