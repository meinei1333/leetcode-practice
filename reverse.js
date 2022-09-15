console.log("result:", reverse(9646324351));
function reverse(x) {
    var INT_MAX = Math.pow(2, 31) - 1;
    if (0 <= x && x < 10)
        return x;
    var nagative = x > 0 ? 1 : -1;
    x = Math.abs(x);
    if (x > INT_MAX) {
        return 0;
    }
    x = Number(x.toString().split("").reverse().join("")) * nagative;
    return x;
}
