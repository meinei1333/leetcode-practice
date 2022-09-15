console.log("result:", twoSumByIndex([3, 2, 4], 6));
function twoSumByIndex(nums: Array<number>, target: number) {
    let sum = [];
    let result = [];
    nums.sort(function (a, b) { return a - b });
    let i = 0;
    let j = nums.length - 1;
    while (sum.reduce((pre, cur) => pre + cur, 0) !== target) {
        if (nums[i] + nums[j] > target) {
            j--;
        } else if (nums[i] + nums[j] < target) {
            j++;
        } else if (i === j + 1) {
            i++;
            j = nums.length - 1;
        }
        else if (nums[i] + nums[j] === target) {
            result.push(nums[i]);
            result.push(nums[j]);
        }
    }
    return result;
}