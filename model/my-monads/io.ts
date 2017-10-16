export class IO {
    effect: Function;

    constructor(effect: Function) {
        if (typeof effect !== "function") {
            throw 'IO Usage: function required';
        }
        this.effect = effect;
    }

    static of(value: any) {
        return new IO(() => value);
    }

    static from(fn: Function) {
        return new IO(fn);
    }

    map(fn: Function) {
        return new IO(() => fn(this.effect()));
    }

    chain(fn: Function) {
        return fn(this.effect());
    }

    run() {
        return this.effect();
    }
}