var subtractProductAndSum = function (n) {
    var str = n.toString();
    var product = 1;
    var sum = 0;
    for (let index = 0; index < str.length; index++) {
        var num = parseInt(str[index])
        product *= num;
        sum += num;
    }
    return product - sum;
};