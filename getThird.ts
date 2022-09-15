const nums = [3, 2, 3, 1, 2, 4, 5, 5, 6, 7, 7, 8, 2, 3, 1, 1, 1, 10, 11, 5, 6, 2, 4, 7, 8, 5, 6];
console.log(getThird(nums));

function getThird(array: Array<number>) {
    const copy = [...nums];
    copy.sort(function (a, b) { return b - a });
    console.log("copy", copy);
    let count = 0;
    for (let index = 0; index < copy.length; index++) {
        if (copy[index] !== copy[index - 1]) {
            count++;
        }
        if (count === 3) {
            return copy[index];
        }
    }
    return Math.max(...array);
}