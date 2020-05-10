var letterCombinations = function (digits) {
    let length = digits.toString().length;
    digits = digits.toString();
    if (!length) {
        return [];
    };
    let result = [];
    let digitMap = { '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz' };
    combinations(0, '');
    function combinations(index, combination) {
        let digit;
        let letter;
        let letterIndex;
        if (index >= length) {
            result.push(combination);
            return;
        };
        digit = digitMap[digits[index]];
        letterIndex = 0;
        while (letter = digit[letterIndex++]) {
            combinations(index + 1, combination + letter);
        };
    };
    return result;
};
console.log(letterCombinations(234));