const ar = [3,1,7,11];
console.log(checkDouble(ar));
function checkDouble(array): boolean {
    for (let indexI = 0; indexI < array.length; indexI++) {
        const i = array[indexI];
        for (let indexJ = 0; indexJ < array.length; indexJ++) {
            const j = array[indexJ];
            if (i != j) {
                console.log("i j", i, j);
                if (i / j === 2) {
                    return true;
                }
            }
        }
    }
    return false;
}