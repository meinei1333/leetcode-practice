/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let result = [];
  nums1.forEach((element, index) => {
      result[index] = -1;
      let i_index = nums2.indexOf(element);
      for (let ii = i_index; ii < nums2.length; ii++) {
          if (element < nums2[ii]) {
              result[index] = nums2[ii];
              break;
          }
      }
  });
  return result;
};

console.log('a', nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
//[-1,3,-1]