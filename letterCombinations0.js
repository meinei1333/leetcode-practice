const indexDigits = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
}

var digitArray = [];
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    let result = [];
    //let digitArray = [];

    let str = digits.toString();
    for (let index = 0; index < str.length; index++) {
        const element = str[index];
        digitArray.push(indexDigits[element]);
    }
    recursive();
    /* console.log('digitArray:', digitArray);
    for (let index = 0; index < digitArray.length; index++) {
        const ar = digitArray[index];
        ar.forEach(element => {
            //console.log(stringAddArray(element, ar));
        });
    } */

    for (let index = 0; index < digitArray.length; index++) {
        let ar = digitArray[index];
        ar.forEach(element => {
            console.log(stringAddArray(element, otherAlphabet(index, digitArray)));
        })
        //console.log(otherAlphabet(index, digitArray));
    }
};

function recursive() {
    for (let index = 0; index < digitArray.length; index++) {
        
        
    }
}

function otherAlphabet(digitIndex, digitArray) {
    let result = [];
    digitArray.forEach((element, index) => {
        if (digitIndex != index) {
            result = result.concat(element);
        }
    })
    return result;
}

function stringAddArray(s, ar) {
    let result = [];
    ar.forEach(element => {
        result.push(s + element)
    })
    return result;
}
letterCombinations(23);
