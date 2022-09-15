console.log("result:", isIsomorphic("qwertyuiop[]asdfghjkl;'\\zxcvbnm,./", "',.pyfgcrl/=aoeuidhtns-\\;qjkxbmwvz"));
function isIsomorphic(s, t) {
    if (s.length != t.length) {
        return false;
    }
    for (var index = 0; index < s.length; index++) {
        let characterS = s.charAt(index);
        let characterT = t.charAt(index);
        let SS = getMarchAll(s, characterS).join("");
        let TT = getMarchAll(t, characterT).join("");
        if (SS !== TT) {
            return false
        }
    }
    return true;
}
function getMarchAll(str, key) {
    let regexp = new RegExp(key, 'g');
    let matches_array = [...str.matchAll(regexp)].map(a => a.index);
    return matches_array;
}
