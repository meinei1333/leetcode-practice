/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
    var count = 0;
    nums.forEach(element => {
        if ((element.toString().length % 2) === 0) {
            count++;
        }
    })
    return count;
};

findNumbers([12,345,2,6,7896])