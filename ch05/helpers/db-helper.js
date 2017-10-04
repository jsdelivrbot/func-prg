"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = require("../../model/Person");
class DB {
    constructor() {
        this.students = {
            "444-44-4444": new Person_1.Person("444-44-4444", "Alonzo", "Church"),
            "444444444": new Person_1.Person("444-44-4444", "Alonzo", "Church")
        };
    }
    find(snn) {
        return this.students[snn];
    }
}
exports.DB = DB;
exports.db = new DB();
//# sourceMappingURL=db-helper.js.map