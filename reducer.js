const array1 = [0, 2, 3, 4];
const reducer = (accumulator, currentValue) => console.log(accumulator, currentValue)

console.log('a:', array1.reduce(reducer));
// expected output: 10