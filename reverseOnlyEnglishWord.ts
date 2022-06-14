let s = "-S2,_";
let strAr = s.split("");
let reverseAr = [];
let reverCount = 0;
let len = strAr.length
let resultStr = "";

for (let index = len - 1; index >= 0; index--) {
    console.log(strAr[index], isEnglishLetter(strAr[index]));
    if (isEnglishLetter(strAr[index])) {
        reverseAr.push(strAr[index]);
    }
}

for (let index = 0; index < strAr.length; index++) {
    if (isEnglishLetter(strAr[index])) {
        strAr[index] = reverseAr[reverCount];
        reverCount++;
    }
}

//resultStr = strAr.toString().replace(/[,]/ig, "")
resultStr = arrayToString(strAr);
console.log('resultStr:', resultStr);

function isEnglishLetter(str: string): boolean {
    return str.search(/[a-zA-Z]/) != -1;
}

function arrayToString(ar: Array<string>): string {
    var str: string = '';
    ar.forEach((element) => {
        str += element;
    })
    return str;
}