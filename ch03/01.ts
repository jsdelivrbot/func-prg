function sum(arr: number[]) {
    if (!arr.length) {
        return 0;
    }

    return arr[0] + sum(arr.slice(1, arr.length));
}

console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9]));