console.log("result:", plusOne([9]));
function plusOne(digits) {
    for (var index = digits.length - 1; index >= 0; index--) {
        digits[index] = digits[index] + 1;
        if (digits[index] >= 10) {
            digits[index] = digits[index] - 10;
            if (index === 0) {
                digits.unshift(1);
                return digits;
            }
        }
        else {
            return digits;
        }
    }
}
