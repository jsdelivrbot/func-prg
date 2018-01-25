export type TRow = { [id: string]: any };
export type TTable = TRow[];

function project(table: TTable, keys: string[]): TTable {
    return table.map(row => {
        var projectedRow = {};

        Object.keys(row)
            .filter(key => keys.indexOf(key) !== -1)
            .forEach(key => projectedRow[key] = row[key]);

        return projectedRow;
    })
}

function as(table: TTable, renamingMap: { [oldKey: string]: string }): TTable {
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

function restrict(table: TTable, predicate: (row: TRow) => boolean): TTable {
    return table.reduce((newTable: TTable, row: TRow) => {
        if (predicate(row)) {
            newTable.push(row);
        }

        return newTable;
    }, []) as TTable;
}

function curry2<T1, T2, R>(fun: (arg1: T1, arg2: T2) => R) {
    return function (arg2: T2): (arg1: T1) => R {
        return function (arg1: T1): R {
            return fun(arg1, arg2);
        }
    }
}

export const RQL = {
    select: curry2(project),
    as: curry2(as),
    where: curry2(restrict),
    log: (t) => {
        console.log(t); return t;
    }
};