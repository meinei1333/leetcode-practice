var s = 3
console.log("result", fibonacciNumber(s));
function fibonacciNumber(num: number): number {
    let result = 1;
    while (num > 0) {
        console.log("num", num);
        result *= num;
        num--;
    }
    return result;
}