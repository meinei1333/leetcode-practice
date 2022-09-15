console.log("result:", maxAreaa([4, 3, 2, 1, 4]));
function maxAreaa(array: Array<number>) {
    let ans = 0, i = 0, j = array.length - 1
    while (i < j) {
        ans = Math.max(ans, Math.min(array[i], array[j]) * (j - i));
        array[i] <= array[j] ? i++ : j--;
    }
    return ans
}

