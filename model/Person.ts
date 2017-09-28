/**
 * Person object
 * Domain model object for LMS use cases covered in the book
 * Author: Luis Atencio
 */
import { Address } from "../model/Address";

export class Person {
	_address: Address;
	_birthYear: number;
	_lastname: string;
	_firstname: string;
	_ssn: string;

	constructor(ssn: string, firstname: string, lastname: string, birthYear: number = null, address: Address = null) {
		this._ssn = ssn;
		this._firstname = firstname;
		this._lastname = lastname;
		this._birthYear = birthYear;
		this._address = address;
	}

	get ssn() {
		return this._ssn;
	}

	get firstname() {
		return this._firstname;
	}

	set firstname(firstname: string) {
		this._firstname = firstname;
	}

	get lastname() {
		return this._lastname;
	}

	get birthYear() {
		return this._birthYear;
	}

	get address() {
		return this._address;
	}

	get fullname() {
		return `${this._firstname} ${this._lastname}`;
	}
}