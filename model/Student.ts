/** 
 * Derived type Student from Person
 * Author: Luis Atencio
 */
import { Person } from "./Person";
import { Address } from "./Address";

export class Student extends Person {
	_school: any;
	constructor(ssn: string, firstname: string, lastname: string, birthYear: number = null, address: Address = null, school : string = null) {
		super(ssn, firstname, lastname, birthYear, address);
		this._school = school;
	}

	get school() {
		return this._school;
	}
}