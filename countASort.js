console.log("Count:", getCount([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
// console.log("Count:", getCount([0, 1, 2, 2, 2, 3, 4]));
function getCount(array) {
    // first is different
    let count = 1;
    let dif = 0;
    let result = [];
    result[dif] = array[0];
    for (let index = 1; index < array.length; index++) {
        if (array[index] != array[index - 1]) {
            dif++;
            result[dif] = array[index];
            count++;
        } else {
            rest.push(array[index]);
        }
    }
    let aa = result.concat(rest);
    array = aa;
    console.log("array", array);
    return count;
}