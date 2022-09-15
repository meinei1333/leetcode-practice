const heights = [1,2,3,4,5];
// const heights = [5,1,2,3,4];
console.log(matchExpectHight(heights));

function matchExpectHight(array: Array<number>) {
    const copy = [...array];
    copy.sort();
    console.log("copy:", copy);
    console.log("array:", array);
    let count = 0;
    for (let index = 0; index < array.length; index++) {
        if (array[index] !== copy[index]) {
            count++;
        }
    }
    return count;
}