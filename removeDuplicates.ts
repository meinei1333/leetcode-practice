console.log("result:", removeDuplicates([1, 1, 2]));
function removeDuplicates(nums: Array<number>) {
    let set: Set<number> = new Set();
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        if (set.has(element)) {
            nums.splice(index, 1);
        } else {
            set.add(element);
        }
    }
    return nums;
}