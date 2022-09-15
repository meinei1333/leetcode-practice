console.log("result:", singleNumber([4, 1, 2, 1, 2]));
function singleNumber(nums: Array<number>) {
    let set: Set<number> = new Set();
    for (let index = 0; index < nums.length; index++) {
        let element = nums[index];
        if (!set.has(element)) {
            set.add(element);
        }else{
            set.delete(element);
        }
    }
    return set.values().next().value;
}