const array = [17, 18, 5, 4, 6, 1];
// const array = [400];
console.log(getRightMax(array));

function getRightMax(array: Array<number>): Array<number> {
    for (let index = 0; index < array.length; index++) {
        if (index === array.length - 1) {
            array[index] = -1;
        } else {
            array[index] = Math.max(...array.slice(index + 1, array.length));
        }
    }
    return array;
}