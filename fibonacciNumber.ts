var s = 2
console.log("result", fibonacciNumber(s));
function fibonacciNumber(num: number): number {
    if (num === 0 || num === 1) {
        return num;
    }
    let first = 0;
    let secound = 1;
    let total = first + secound;
    for (var index = 2; index < num; index++) {
        let oldFirst = first;
        first = secound;
        secound = oldFirst + secound;
        
        total = first + secound;
    }
    return total;
}