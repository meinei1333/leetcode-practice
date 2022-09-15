const nums = [0, 1, 0, 3, 12];
console.log(remove0Toend(nums));

function remove0Toend(array: Array<number>): Array<number> {
    for (let index = 0; index < array.length; index++) {
        if (array[index] === 0) {
            array.splice(index, 1);
            array.push(0);
        }
    }
    return array;
}