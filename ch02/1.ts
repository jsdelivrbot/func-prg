
import { Student } from "../model/Student";
import { Address } from "../model/Address";

var curry = new Student("111-11-1111", "Haskell", "Curry", 1987, new Address("US"), "Penn State");
var turing = new Student("222-22-2222", "Alan", "Turing", 1981, new Address("England"), "Princeton");
var church = new Student("333-33-3333", "Alonzo", "Church", 1971, new Address("England"), "Princeton");
var kleene = new Student("444-44-4444", "Stephen", "Kleene", 1988, new Address("US"), "Princeton");

var selector = function (country: string, school: string) {
    return function (student: Student) {
        return student.address.country === country && student.school === school;
    };
};

var findStudentsBy = (friends : Student[], predicte: (s:Student) => boolean) => friends.filter(predicte);

var result = findStudentsBy([curry, turing, church, kleene], selector("England", "Princeton"));

// console.log(result);

var frozenCurry = Object.freeze(curry);

frozenCurry._address._country = "XXXXX";

console.log(frozenCurry);