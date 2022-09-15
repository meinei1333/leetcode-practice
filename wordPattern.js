console.log("result:", wordPattern("aaa", "aa aa aa aa"));
function wordPattern(pattern, s) {
    var mapS = {};
    var mapT = {};
    var sArray = pattern.split("");
    var tArray = s.split(" ");
    if (sArray.length != tArray.length) {
        return false;
    }
    for (var index = 0; index < sArray.length; index++) {
        var valueS = sArray[index];
        var valueT = tArray[index];
        // 如果這個字元還沒出現過，加到mapS中
        if (!mapS[valueS]) {
            mapS[valueS] = valueT;
        } else if (mapS[valueS] != valueT) {
            // 如果s字元出現過，比對t的字元使否與mapS中儲存的一樣
            return false;
        }

        if (!mapT[valueT]) {
            mapT[valueT] = valueS;
        } else if (mapT[valueT] != valueS) {
            return false;
        }
    }
    return true;
}
