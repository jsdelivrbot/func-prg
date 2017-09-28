/**
 * Address object
 * Domain model object for LMS use cases covered in the book
 * Author: Luis Atencio
 */
export class Address {
	_street: string;
	_zip: string;
	_city: string;
	_state: string;
	_country: string;
	/**
	 * Construct a new address object
	 * @param country Country code (required)
	 * @param state State code
	 * @param city City name
	 * @param zip Zip code value object instance
	 * @param street Street name
	 *
	 */
	constructor(country: string, state: string = null, city: string = null, zip: string = null, street: string = null) {
		this._country = country;
		this._state = state;
		this._city = city;
		this._zip = zip;
		this._street = street;
	}

	get street() {
		return this._street;
	}

	get city() {
		return this._city;
	}

	get state() {
		return this._state;
	}

	get zip() {
		return this._zip;
	}

	get country() {
		return this._country;
	}

	set country(country: string) {
		this._country = country;
	}
}