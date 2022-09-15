const array = [3, 1, 2, 4];
console.log(sortEvenOdd(array));
function sortEvenOdd(array: Array<number>): Array<number> {
    let oddList = [];
    let eventList = [];
    for (let index = 0; index < array.length; index++) {
        if (array[index] % 2 === 0) {
            eventList.push(array[index]);
        } else {
            oddList.push(array[index]);
        }
    }
    return eventList.concat(oddList);
}