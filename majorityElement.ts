console.log("result:", majorityElement([2, 2, 1, 1, 1, 2, 2]));
function majorityElement(nums: Array<number>) {
    let array = [];
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        if (array[element]) {
            ++array[element];
        } else {
            array[element] = 1;
        }
    }
    for (let index = 0; index < array.length; index++) {
        if (array[index] > (nums.length / 2)) {
            return index;
        }
    }
    return "";
}