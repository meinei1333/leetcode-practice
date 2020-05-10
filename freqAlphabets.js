var freqAlphabets = function (s) {
    ar = getOver10(s);

    ar.forEach((element, index) => {
        let ei = element.index - index * 2;
        let tempStr = s.slice(ei - 2, ei + 1);
        let alphabet = getAlphabet(tempStr, true);
        s = s.replace(tempStr, alphabet);
    });

    let length = s.length;
    for (let index = 0; index < length; index++) {
        let str = s[index];
        if (parseInt(str)) {
            let alphabet = getAlphabet(str);
            s = s.replace(str, alphabet);
        }
    }
    return s;
};

function getAlphabet(str, over10) {
    if (over10) {
        str = str.slice(0, str.length - 1);
    }
    return String.fromCharCode(parseInt(str) + 96);
}

function getOver10(str) {
    let regexp = /#/g;
    let array = [...str.matchAll(regexp)];
    return array;
}
console.log(freqAlphabets("10#11#12"));
//console.log(freqAlphabets("153"));