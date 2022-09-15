const nums = [3, 2, 2, 3];

console.log(removeValue(nums, 3));
function removeValue(array: Array<Number>, val: Number) {
    for (let index = 0; index < array.length; index++) {
        if (array[index] === val) {
            array.splice(index, 1);
        }
        console.log("array:", array);
    }
    return array.length;
}