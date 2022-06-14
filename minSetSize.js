var minSetSize = function (arr) {
    var hash = separateArrayObj(arr);
    let count = 0;
    let half = arr.length / 2;
    hash.sort((a, b) => b - a).some((a, i) => {
        count += a;
        if (count >= half) {
            count = i + 1;
            return true;
        };
        return false;
    });
    return count;
};

function separateArrayObj(ar) {
    let objArray = [];
    ar.sort();
    for (let index = 0; index < ar.length; index++) {
        if (ar[index] != ar[index - 1]) {
            objArray.push(1);
        } else {
            objArray[objArray.length - 1] += 1;
        }
    }
    return objArray;
}

console.log(minSetSize([1,9]));
