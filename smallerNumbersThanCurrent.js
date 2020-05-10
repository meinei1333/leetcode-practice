var smallerNumbersThanCurrent = function (nums) {
    let result = [];
    nums.forEach(element => { result.push(0) });
    nums.forEach((num1, index1) => {
        nums.forEach((num2, index2) => {
            if (num1 > num2) {
                if (result[index1]) {
                    result[index1]++;
                } else {
                    result[index1] = 1;
                }
            }
        });
    });
    return result;
};

console.log(smallerNumbersThanCurrent([6, 5, 4, 8]));