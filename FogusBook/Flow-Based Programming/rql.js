"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function project(table, keys) {
    return table.map(row => {
        var projectedRow = {};
        Object.keys(row)
            .filter(key => keys.indexOf(key) !== -1)
            .forEach(key => projectedRow[key] = row[key]);
        return projectedRow;
    });
}
function as(table, renamingMap) {
    return table.map(row => {
        Object.keys(row).forEach(oldKey => {
            let newKey = renamingMap[oldKey];
            if (newKey) {
                row[newKey] = row[oldKey];
                delete row[oldKey];
            }
        });
        return row;
    });
}
function restrict(table, predicate) {
    return table.reduce((newTable, row) => {
        if (predicate(row)) {
            newTable.push(row);
        }
        return newTable;
    }, []);
}
function curry2(fun) {
    return function (arg2) {
        return function (arg1) {
            return fun(arg1, arg2);
        };
    };
}
exports.RQL = {
    select: curry2(project),
    as: curry2(as),
    where: curry2(restrict),
    log: (t) => {
        console.log(t);
        return t;
    }
};
//# sourceMappingURL=rql.js.map