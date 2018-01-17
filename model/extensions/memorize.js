Function.prototype.memorize = function () {
    let fn = this;

    if (fn.length === 0) {
        return fn;
    }

    let key = JSON.stringify(fn.arguments)
}