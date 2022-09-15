var nums = [1, 1];
console.log("result", findDisappearedNumbers(nums));
function findDisappearedNumbers(array) {
    let set = new Set();
    let result = [];
    array.forEach(element => {
        if (!set.has(element)) {
            set.add(element);
        }
    });
    for (let index = 1; index <= array.length; index++) {
        const element = array[index - 1];
        console.log("element", element, set.has(index));
        if (!set.has(index)) {
            result.push(index);
        }
    }
    return result;
}