function letterCombinations(digits) {
    var map = ['0', '1', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    var result = [];
    var prefix = [];

    if (digits.length) {
        recursive(0);
    }
    return result;

    function recursive(index) {
        if (index === digits.length) {
            return result.push(prefix.join(''));
        }

        var str = map[digits[index]];

        for (let i = 0; i < str.length; i++) {
            prefix.push(str[i]);
            recursive(index + 1);
            prefix.pop();
        }
    }
}

console.log(letterCombinations('234'));