let s = "Zik", shifts = [10,20,30]
let newArray = [];
let add = 0;

for (let index = 0; index < shifts.length; index++) {
    const element = shifts[index];
    add = 0;
    for (let index2 = index; index2 < shifts.length; index2++) {
        add += shifts[index2]
        //console.log(index, index2, add);
        if (index2 === (shifts.length - 1)) {
            add = add % 26;
            console.log('add:', add);
            
            newArray.push(add)
        }
    }
}

let stringArray = s.split("");
let result: string = "";
stringArray.forEach((element, index) => {
    console.log(element.charCodeAt(0) , newArray[index]);
    let code = (element.charCodeAt(0) + newArray[index]);
    if((element.toLocaleLowerCase().charCodeAt(0) + newArray[index]) > "z".charCodeAt(0)){
        code -= 26;
    }
    result += String.fromCharCode(code);
})

console.log('result:', result);


//var str = "A";
//console.log(str.charCodeAt(0));
//console.log(newArray);
