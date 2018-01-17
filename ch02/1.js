"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Student_1 = require("../model/Student");
const Address_1 = require("../model/Address");
var curry = new Student_1.Student("111-11-1111", "Haskell", "Curry", 1987, new Address_1.Address("US"), "Penn State");
var turing = new Student_1.Student("222-22-2222", "Alan", "Turing", 1981, new Address_1.Address("England"), "Princeton");
var church = new Student_1.Student("333-33-3333", "Alonzo", "Church", 1971, new Address_1.Address("England"), "Princeton");
var kleene = new Student_1.Student("444-44-4444", "Stephen", "Kleene", 1988, new Address_1.Address("US"), "Princeton");
var selector = function (country, school) {
    return function (student) {
        return student.address.country === country && student.school === school;
    };
};
var findStudentsBy = (friends, predicte) => friends.filter(predicte);
var result = findStudentsBy([curry, turing, church, kleene], selector("England", "Princeton"));
// console.log(result);
var frozenCurry = Object.freeze(curry);
frozenCurry._address._country = "XXXXX";
console.log(frozenCurry);
//# sourceMappingURL=1.js.map