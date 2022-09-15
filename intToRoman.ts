console.log("result:", intToRoman(3999));
function intToRoman(num: number) {
    let leftNum = num;
    let result = "";
    const symbolList = [
        { symbol: "M", value: 1000 },
        { symbol: "C", fiveSymbol: "D", five: 500, value: 100 },
        { symbol: "X", fiveSymbol: "L", five: 50, value: 10 },
        { symbol: "I", fiveSymbol: "V", five: 5, value: 1 }
    ];
    for (let index = 0; index < symbolList.length; index++) {
        let count = Math.floor(leftNum / symbolList[index].value);
        if (symbolList[index].value === 1000) {
            result += symbolList[index].symbol.repeat(count);
        } else {
            switch (count) {
                case 0:
                    break;
                case 4:
                    result += symbolList[index].symbol + symbolList[index].fiveSymbol;
                    break;
                case 5:
                    result += symbolList[index].fiveSymbol;
                    break;
                case 9:
                    result += symbolList[index].symbol + symbolList[index - 1].symbol;
                    break;
                default:
                    let tempCount = count > 5 ? count - 5 : count;
                    if (count > 5) {
                        result += symbolList[index].fiveSymbol;
                    }
                    result += symbolList[index].symbol.repeat(tempCount);
                    break;
            }
        }
        leftNum -= count * symbolList[index].value;
        console.log("result:", result);
    }
    return result;
}
