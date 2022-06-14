let text = "abc";
//balloon

console.log('b', getNumByWord("b", text));
console.log('a', getNumByWord("a", text));
console.log('l', getNumByWord("l", text));
console.log('o', getNumByWord("o", text));
console.log('n', getNumByWord("n", text));

console.log(Math.floor(Math.min(getNumByWord("b", text), getNumByWord("a", text), getNumByWord("l", text) / 2, getNumByWord("o", text) / 2, getNumByWord("n", text))));

function getNumByWord(s: string, str: string): number {
    var regexp: RegExp = new RegExp(s, 'gi');
    var matches_array = str.match(regexp);
    return matches_array ? matches_array.length : 0;
}