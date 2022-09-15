console.log("result:", romanToInt("MCMXCIV"));
function romanToInt(s: string) {
    let total = 0;
    const symbolObject = {
        "I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000
    }
    const specialSymbolObj = {
        "CM": 900, "CD": 400, "XL": 40, "XC": 90, "IV": 4, "IX": 9
    }
    for (const key in specialSymbolObj) {
        if (Object.prototype.hasOwnProperty.call(specialSymbolObj, key)) {
            const value = specialSymbolObj[key];
            var regexp: RegExp = new RegExp(key, 'gi');
            var matches_array = s.match(regexp);
            if (matches_array) {
                total += matches_array.length * value;
                s = s.replace(regexp, "");
            }
        }
    }
    for (let index = 0; index < s.length; index++) {
        const character = s.charAt(index);
        total += symbolObject[character];
        console.log(character, symbolObject[character]);
    }
    return total;
}
