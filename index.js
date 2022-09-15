const removeDuplicates = (nums) => {
    let j = 0;
    let i = 0;
    let result = [];

    for (; i < nums.length; i += 1) {
        //console.log(nums[i] , nums[i + 2])
        if (nums[i] !== nums[i + 2]) {
            nums[j] = nums[i];
            result.push(nums[j]);
            console.log(nums[j]);
            j += 1;
        }
    }
    return result;
};

console.log(removeDuplicates([1,1,1,2,2,3]));
