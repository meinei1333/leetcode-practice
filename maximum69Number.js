/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
    var str = num.toString().split('');
    var ar = [num];
    for (let index = 0; index < str.length; index++) {
        var tempStr = str.slice()
        tempStr[index] = (tempStr[index] === '6') ? 9 : 6;
        ar.push(parseInt(tempStr.join('')));
    }
    return Math.max.apply(null, ar)
};

console.log(maximum69Number(6999));
