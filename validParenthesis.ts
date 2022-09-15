console.log("result:", validParenthesis("()]{}"));
function validParenthesis(s: string) {
    let newS = s;
    let startEnd;
    let word;
    while (startEnd !== -1) {
        // 找到第一個結束符號
        startEnd = newS.search(/[}|\]|)]/g);
        word = newS.slice(startEnd - 1, startEnd + 1);
        // 一對一對的刪除
        if (word === "()" || word === "{}" || word === "[]") {
            newS = newS.replace(word, "");
        } else {
            break;
        }
    }
    return newS === "" ? true : false;
}