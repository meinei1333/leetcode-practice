/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function (str) {
  var left = 0;
  var right = 0;
  var removeArray = [0];
  for (let index = 0; index < str.length; index++) {
      const element = str[index];
      if (element === "(") {
          left++;
      } else if (element === ")") {
          right++;
      }
      //console.log(left, right);
      if (left === right) {
          removeArray.push(index);
          if (index != str.length - 1) {
              removeArray.push(index + 1);
          }
      }
  }
  var ar = str.split('')
  removeArray.forEach(element => {
      ar[element] = '';
  })
  return ar.join('');
};

console.log('a', removeOuterParentheses("(()())(())(()(()))"));