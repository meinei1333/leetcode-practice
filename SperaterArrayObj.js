function separateArrayObj(ar) {
    let objArray = [];
    ar.sort();
    for (let index = 0; index < ar.length; index++) {
        let obj = {};
        if (ar[index] != ar[index - 1]) {
            obj.num = ar[index];
            obj.count = 1;
            objArray.push(obj);
        } else {
            objArray[objArray.length - 1].count += 1;
        }
    }
    return objArray;
}