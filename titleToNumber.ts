console.log("result:", titleToNumber("FXSHRXW"));
function titleToNumber(columnTitle: string) {
    let strArray = columnTitle.split("");
    let result = 0;
    for (let index = 0; index < strArray.length; index++) {
        const element = strArray[index];
        const elementIndex = element.charCodeAt(0) - 64;
        result += elementIndex * Math.pow(26, (strArray.length - index - 1));
    }
    return result;
}