export class Wrapper<T> {
    constructor(private value: T) {
    }

    static of(value: any) {
        return new Wrapper(value);
    }

    map(f: Function) {
        return Wrapper.of(f(this.value));
    }

    toString() {
        return `Wrapper (${this.value})`;
    }
}

export function wrap<T>(value: T) {
    return new Wrapper(value);
}