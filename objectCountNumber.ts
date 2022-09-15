console.log("result:", objectCountNumber([2, 2, 1, 1, 1, 2, 2]));
function objectCountNumber(nums: Array<number>) {
    let obj = {};
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        if (obj[element]) {
            ++obj[element];
        } else {
            obj[element] = 1;
        }
    }
    console.log(obj);
}