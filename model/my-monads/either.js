"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Either {
    constructor(_value) {
        this._value = _value;
    }
    get value() {
        return this._value;
    }
    static left(value) {
        return new Left(value);
    }
    static right(value) {
        return new Right(value);
    }
    static fromNullable(value) {
        return value !== null && value !== undefined ? Either.right(value) : Either.left(value);
    }
    static of(value) {
        return Either.right(value);
    }
}
exports.Either = Either;
class Left extends Either {
    map() {
        return this;
    }
    get value() {
        throw new TypeError("Can't extract the value of a Left(value)");
    }
    getOrElse(other) {
        return other;
    }
    getOrElseThrow(value) {
        throw new Error(value);
    }
    orElse(f) {
        return f(this._value);
    }
    chain(f) {
        return this;
    }
    filter(f) {
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
exports.Left = Left;
class Right extends Either {
    map(f) {
        return Either.of(f(this._value));
    }
    get value() {
        return this._value;
    }
    getOrElse(other) {
        return this._value || other;
    }
    getOrElseThrow(value) {
        return this._value;
    }
    orElse(f) {
        return f(this._value);
    }
    chain(f) {
        return f(this._value);
    }
    filter(f) {
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
exports.Right = Right;
//# sourceMappingURL=either.js.map