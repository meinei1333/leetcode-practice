console.log("result:", findMin([3, 4, 5, 1, 2]));
function findMin(nums: Array<number>) {
    let L = 0;
    let R = nums.length - 1;
    let M;
    if (nums[L] < nums[R]) return nums[0];
    while (R > L + 1) {
        M = Math.floor((L + R) / 2);
        if (nums[L] < nums[M]) {
            L = M;
        } else {
            R = M;
        }
    }
    return nums[R];
}