export class Either {
    constructor(protected _value: any) {
    }

    get value() {
        return this._value;
    }

    static left(value: any) {
        return new Left(value);
    }

    static right(value: any) {
        return new Right(value);
    }

    static fromNullable(value: any): Right | Left {
        return value !== null && value !== undefined ? Either.right(value) : Either.left(value);
    }

    static of(value: any) {
        return Either.right(value);
    }
}

export class Left extends Either {
    map() {
        return this;
    }

    get value() {
        throw new TypeError("Can't extract the value of a Left(value)");
    }

    getOrElse(other: any) {
        return other;
    }

    getOrElseThrow(value: any) {
        throw new Error(value);
    }

    orElse(f: Function) {
        return f(this._value);
    }

    chain(f: Function) {
        return this;
    }

    filter(f: Function) {
        return this;
    }

    get isRight() {
        return false;
    }

    get isLeft() {
        return true;
    }

    toString() {
        return `Either.Left(${this._value})`;
    }
}

export class Right extends Either {
    map(f: Function) {
        return Either.of(f(this._value));
    }

    get value() {
        return this._value;
    }

    getOrElse(other: any) {
        return this._value || other;
    }

    getOrElseThrow(value: any) {
        return this._value;
    }

    orElse(f: Function) {
        return f(this._value);
    }

    chain(f: Function) {
        return f(this._value);
    }

    filter(f: Function) {
        return Either.fromNullable(f(this._value) ? this._value : null);
    }

    get isRight() {
        return true;
    }

    get isLeft() {
        return false;
    }

    toString() {
        return `Either.Right(${this._value})`;
    }
}