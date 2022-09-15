console.log("result:", findRepeatString("pwwkew"));
function findRepeatString(s: string) {
    let maxLength = 0;
    for (let x = 0; x <= s.length; x++) {
        for (let y = 0; y <= s.length; y++) {
            if (x !== y && y > x) {
                let str = s.slice(x, y);
                if (str.length >= 2) {
                    let ar = [...s.match(new RegExp(str, 'g'))];
                    if (ar.length >= 2) {
                        console.log("match:", str);
                        maxLength = maxLength > str.length ? maxLength : str.length;
                    }
                }
            }
        }
    }
    return maxLength;
}
