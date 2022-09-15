const nums1:Array<number> = [1, 2, 3, 0, 0, 0];
const nums2:Array<number> = [2, 5, 6];
console.log(merge(nums1, nums2));

function merge(nums1:Array<number>, nums2:Array<number>):Array<number>{
    return nums1.concat(nums2).filter(element=> element != 0).sort();
}