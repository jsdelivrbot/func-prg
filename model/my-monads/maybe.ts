export class Maybe {
    static just(value: any) {
        return new Just(value);
    }

    static nothing() {
        return new Nothing();
    }

    static fromNullable(value: any): Nothing | Just {
        return value === null || value === undefined ? Maybe.nothing() : Maybe.just(value);
    }

    static of(value: any) {
        return Maybe.just(value);
    }

    get isNothing() {
        return false;
    }

    get isJust() {
        return false;
    }
}

export class Just extends Maybe {
    constructor(private _value: any) {
        super();
    }

    get value() {
        return this._value;
    }

    map(f: Function) {
        return Maybe.fromNullable(f(this._value));
    }

    chain(f: Function) {
        return f(this._value);
    }

    getOrElse(other: any) {
        return this._value;
    }

    filter(f: Function) {
        return Maybe.fromNullable(f(this._value) ? this._value : null);
    }

    get isJust() {
        return true;
    }

    toString() {
        return `Maybe.Just(${this._value})`;
    }
}

export class Nothing extends Maybe {

    get value() {
        throw new TypeError("Can't extract the value of a Nothing.");
    }

    map(f: Function) {
        return this;
    }

    chain(f: Function) {
        return this;
    }

    getOrElse(other: any) {
        return other;
    }

    filter(f: Function) {
        return this;
    }

    get isNothing() {
        return true;
    }

    toString() {
        return "Maybe.Nothing";
    }
}