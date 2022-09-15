var s = ["1", "2", "3", "4", "5"]
console.log("result", reverseString(s));
function reverseString(array: Array<any>) {
    const helfLength = Math.floor(array.length / 2);
    const length = array.length;
    let temp;
    for (let index = 0; index < helfLength; index++) {
        temp = array[index];
        array[index] = array[length - index - 1];
        array[length - index - 1] = temp;
    }
    return array;
}