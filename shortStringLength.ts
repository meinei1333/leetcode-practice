console.log("result:", longestCommonPrefix(["ab", "a"]));
function longestCommonPrefix(strs: Array<string>) {
    if (strs.length === 1) {
        return strs[0];
    }
    let result = [];
    const shortStringLength = strs.sort(function (a, b) { return a.length - b.length })[0].length;
    let tempStr;
    for (let shortStringIndex = 0; shortStringIndex < shortStringLength; shortStringIndex++) {
        for (let strsIndex = 0; strsIndex < strs.length; strsIndex++) {
            console.log(strs[strsIndex].charAt(shortStringIndex));
            if (strsIndex === 0) {
                tempStr = strs[strsIndex].charAt(shortStringIndex);
            } else if (strsIndex === strs.length - 1) { //最後一個字串
                if (tempStr === strs[strsIndex].charAt(shortStringIndex)) {
                    result.push(tempStr);
                } else {
                    return result.length !== 0 ? result.join("") : "";
                }
            }
            else if (tempStr !== strs[strsIndex].charAt(shortStringIndex)) {
                return result.length !== 0 ? result.join("") : "";
            }
        }
    }
    return result.length !== 0 ? result.join("") : "";
}