/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
    let result = 0;
    let r = 0;
    let l = 0;
    for (let index = 0; index < s.length; index++) {
        if (s[index] === "R") {
            r++;
        } else if (s[index] === "L") {
            l++;
        }
        if (r === l && r != 0 && l != 0) {
            result++;
        }
    }
    return result;
};

console.log(balancedStringSplit("RLRRRLLRLL"));
