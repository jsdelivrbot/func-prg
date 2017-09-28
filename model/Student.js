"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Derived type Student from Person
 * Author: Luis Atencio
 */
const Person_1 = require("./Person");
class Student extends Person_1.Person {
    constructor(ssn, firstname, lastname, birthYear = null, address = null, school = null) {
        super(ssn, firstname, lastname, birthYear, address);
        this._school = school;
    }
    get school() {
        return this._school;
    }
}
exports.Student = Student;
;
//# sourceMappingURL=Student.js.map