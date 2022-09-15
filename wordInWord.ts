console.log("result:", wordInWord(["amazon", "apple", "facebook", "google", "leetcode"], ["e", "o"]));
function wordInWord(words1: Array<string>, words2: Array<string>) {
    let result = [];
    for (let w1Index = 0; w1Index < words1.length; w1Index++) {
        let str1 = words1[w1Index];
        let tempArray = [];
        for (let w2Index = 0; w2Index < words2.length; w2Index++) {
            let str2 = words2[w2Index];
            console.log(str1, str2, str1.match(str2) !== null);
            if (str1.match(str2) !== null) {
                tempArray.push(str1);
            }
            if (tempArray.length === words2.length) {
                result.push(str1);
            }
        }
    }
    return result;
}