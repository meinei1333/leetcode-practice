/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
    nums = nums.sort((a, b) => {
        return a - b;
    });
    let result = 0;
    for (var i = 0; i < nums.length; i += 2) {
        if ((i % 2) === 0) {
            result += Math.min(nums[i], nums[i + 1]);
        }
    }
    return result;
};

arrayPairSum([-470, 66, -4835, -5623]);