console.log("result:", merge([-1,0,0,3,3,3,0,0,0], 6, [1,2,2], 3));
function merge(nums1: Array<number>, m: number, nums2: Array<number>, n: number) {
    let n1 = nums1.slice(0, m);
    let n2 = nums2.slice(0, n);
    let result = n1.concat(n2).sort(function (a, b) { return a - b });
    console.log("result:", result);
    for (let index = 0; index < nums1.length; index++) {
        nums1[index] = result[index];
    }
}