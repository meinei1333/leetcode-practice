console.log("result:", powRecursive(2.1, 4));

function powRecursive(x, n) {
    let orginalX = x;
    function multiply(x, n) {
        if (n === 0) return 1;
        if (n === 1) return x;
        n--;
        console.log("n:", n, x);
        return multiply(x * orginalX, n);
    }
    return multiply(x,n);
};