/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
    var result = [];
    var valAr = [];
    var frqAr = [];

    for (var i = 0; i < nums.length; i++) {
        if ((i % 2) === 1) {
            valAr.push(nums[i]);
        } else {
            frqAr.push(nums[i]);
        }
    }
    frqAr.forEach((element, index) => {
        for (let ii = 0; ii < element; ii++) {
            console.log(index, ii, valAr[index]);
            result.push(valAr[index]);
        }
    })
    return result;
}
console.log('result',decompressRLElist([1,1,2,3]));