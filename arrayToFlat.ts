let array = [1, [[2, 3], 4], 5, [6, 7, 8, 9], [10, [11]]]
arrayToFlat(array);

function arrayToFlat(ar) {
    var str = ar.toString();
    return str.split(",");
}