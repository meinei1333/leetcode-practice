console.log("result:", mySqrt(82));
function mySqrt(x: number) {
    if (x < 2) return x;
    var l = 1;
    var r = x;
    var m;
    do {
        m = Math.floor((r + l) / 2);
        if (m * m > x) {
            r = m;
        } else if (m * m < x) {
            l = m;
        }
        else if (m * m === x) {
            return m;
        }
    } while (r !== m + 1);
    return m;
}