console.log("result:", isPalindrome("race a car"));
function isPalindrome(s: string) {
    if (s === "" || s.length === 1) return true;
    let temp = s.toLowerCase().match(/[a-z0-9]/g);
    let str;
    if (temp) {
        str = temp.join("");
    } else {
        return true;
    }
    let reverse = str.split("").reverse().join("");
    return str === reverse;
}