// const ar = [2,1];
const ar = [0,3,2,1];
console.log(checkMount(ar));

/**
 * must have up and down also can't equal = last one
 * @param array 
 * @returns 
 */
function checkMount(array: Array<number>): boolean {
    let isUp: boolean = true;
    let up: number = 0;
    let down: number = 0;
    for (let index = 0; index < array.length - 1; index++) {
        if (array[index] === array[index + 1]) {
            return false;
        }
        if (isUp) {
            if (array[index] < array[index + 1]) {
                up++;
            }
            else {
                isUp = false;
            }
        } else {
            if (array[index] > array[index + 1]) {
                down++;
            }
        }
    }
    return up !== 0 && down !== 0;
}