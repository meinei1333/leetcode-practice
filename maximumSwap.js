/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
    var str = num.toString();
    var ar = str.split('');
    var max = getMax(ar);
    var reverse = str.split('').sort().reverse();
    var index = str.search(max);
    var result;

    for (let index = 0; index < ar.length; index++) {
        if (reverse[index] != ar[index]) {
            var stringFromEnd = getStringFromEnd(ar, reverse[index]);
            result = swapArray(ar, index, stringFromEnd)
            break;
        }
    }

    return result ? arToString(result) : arToString(ar);
};

function getStringFromEnd(ar, str) {
    for (let index = ar.length - 1; index >= 0; index--) {
        if (ar[index] == str) {
            return index;
        }
    }
}

function swapArray(oAr, index1, index2) {
    var ar = oAr.slice();
    var temp;
    temp = ar[index1];
    ar[index1] = ar[index2];
    ar[index2] = temp;
    return ar;
}

function getMax(ar) {
    temp = ar.slice();
    return temp.sort()[temp.length - 1];
}

function arToString(ar) {
    let result = '';
    ar.filter(t => result += t)
    return result;
}

console.log(maximumSwap(9973));
