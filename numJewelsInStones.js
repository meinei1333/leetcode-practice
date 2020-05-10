var numJewelsInStones = function(J, S) {
    return S.split('').filter(
        char => J.indexOf(char) !== -1
    ).length
 };

 numJewelsInStones("aA","aAAbbbb");