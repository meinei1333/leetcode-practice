console.log("result:", wordSubsets(["amazon", "apple", "facebook", "google", "leetcode"], ["lo", "eo"]));
function wordSubsets(words1: Array<string>, words2: Array<string>) {
    words2 = separateArray(words2);
    let result = [];
    for (let w1Index = 0; w1Index < words1.length; w1Index++) {
        let str1 = words1[w1Index];
        let tempArray = [];
        for (let w2Index = 0; w2Index < words2.length; w2Index++) {
            let str2 = words2[w2Index];
            console.log(str1, str2, str1.match(str2) !== null);
            if (str1.match(str2) !== null) {
                tempArray.push(words1[w1Index]);
                str1 = str1.replace(str2, "");
            }
            if (tempArray.length === words2.length) {
                result.push(words1[w1Index]);
            }
        }
    }
    return result;
}

function separateArray(words2: Array<string>): Array<string> {
    let result = []
    for (let index = 0; index < words2.length; index++) {
        result = result.concat(words2[index].split(""));
    }
    return result;
}