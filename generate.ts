console.log("result:", generate(5));
function generate(numRows: number) {
    if (numRows === 1) return [1];
    let result = [[1]];
    let temp;
    console.log("name", getLevelArray([1]));
    for (let index = 0; index < numRows - 1; index++) {
        if (index === 0) {
            temp = getLevelArray([1]);
            result.push(temp);
        } else {
            temp = getLevelArray(temp);
            result.push(temp);
        }
    }
    return result;
}

function getLevelArray(ar) {
    let tempAr = [1];
    for (let index = 0; index < ar.length; index++) {
        if (index === ar.length - 1) {
            tempAr.push(1);
        } else {
            tempAr.push(ar[index] + ar[index + 1]);
        }
    }
    return tempAr;
}