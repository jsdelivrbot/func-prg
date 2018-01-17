(function tableLikeData() {
    var library = [
        { title: "SICP", isbn: "0262010771", ed: 1 },
        { title: "SICP", isbn: "0262510871", ed: 2 },
        { title: "Joy of Clojure", isbn: "1935182641", ed: 1 }
    ];
    // SQLLike SELECT keys FROM table WHERE filterBy
    function project(table, keys) {
        return table.map((row) => {
            var from = {};
            for (var inx in keys) {
                let key = keys[inx];
                if (row[key]) {
                    from[key] = row[key];
                }
            }
            return from;
        });
    }
    project(library, ["ed"]).forEach(x => console.log(x));
})();
//# sourceMappingURL=table-like-data.js.map