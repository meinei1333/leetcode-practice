var paths;
var destCity = function (oPaths) {
    var resultAr = [];
    paths = oPaths;
    for (let index = 0; index < paths.length; index++) {
        let start = paths[index][0];
        let end = paths[index][1];
        resultAr = [];
        resultAr.push(paths[index]);
        for (let i = 0; i < paths.length; i++) {
            var hs = hasStart(end);
            if (hs != null) {
                start = hs[0];
                end = hs[1];
                resultAr.push(hs);
                if (resultAr.length === paths.length) {
                    break;
                }
            }
        }
    }
    return resultAr[resultAr.length - 1][1];
};

function hasStart(target) {
    for (let index = 0; index < paths.length; index++) {
        var ar = paths[index];
        if (target === ar[0]) {
            return ar;
        }
    }
    return null;
}

console.log(destCity([["B", "C"], ["D", "B"], ["C", "A"]]));