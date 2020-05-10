var numberOfSteps = function (num) {
    var count = 0;
    var temp = num;

    while (temp != 0) {
        var isOdd = (temp % 2) === 1;
        if (isOdd) {
            temp -= 1;
            count++;
        } else {
            temp = temp / 2;
            count++;
        }
    }
    return count;
};

numberOfSteps(60);