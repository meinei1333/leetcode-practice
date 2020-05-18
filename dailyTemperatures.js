/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (ar) {
  let result = [];
  ar.forEach((element, index) => {
    result[index] = 0;
    for (let ii = index; ii < ar.length; ii++) {
      if (element < ar[ii]) {
        result[index] = ii - index;
        return;
      }
    }
  });
  return result;
};

console.log('a', dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));