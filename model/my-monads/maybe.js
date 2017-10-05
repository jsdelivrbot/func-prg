"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Maybe {
    static just(value) {
        return new Just(value);
    }
    static nothing() {
        return new Nothing();
    }
    static fromNullable(value) {
        return value === null || value === undefined ? Maybe.nothing() : Maybe.just(value);
    }
    static of(value) {
        return Maybe.just(value);
    }
    get isNothing() {
        return false;
    }
    get isJust() {
        return false;
    }
}
exports.Maybe = Maybe;
class Just extends Maybe {
    constructor(_value) {
        super();
        this._value = _value;
    }
    get value() {
        return this._value;
    }
    map(f) {
        return Maybe.fromNullable(f(this._value));
    }
    chain(f) {
        return f(this._value);
    }
    getOrElse(other) {
        return this._value;
    }
    filter(f) {
        return Maybe.fromNullable(f(this._value) ? this._value : null);
    }
    get isJust() {
        return true;
    }
    toString() {
        return `Maybe.Just(${this._value})`;
    }
}
exports.Just = Just;
class Nothing extends Maybe {
    get value() {
        throw new TypeError("Can't extract the value of a Nothing.");
    }
    map(f) {
        return this;
    }
    chain(f) {
        return this;
    }
    getOrElse(other) {
        return other;
    }
    filter(f) {
        return this;
    }
    get isNothing() {
        return true;
    }
    toString() {
        return "Maybe.Nothing";
    }
}
exports.Nothing = Nothing;
//# sourceMappingURL=maybe.js.map