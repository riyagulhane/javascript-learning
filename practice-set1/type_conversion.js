// Questions 7
let marks="90";
let numMark=Number(marks)

console.log(numMark);
console.log(typeof numMark)
console.log(isNaN(numMark))

console.log("---------------------")

let mark="abc";
let mark2=Number("abc")

console.log(mark2);
console.log(typeof(mark2));
console.log(isNaN(mark2))

console.log((NaN===NaN));

// question 8
function checkvalue(value){
    if(value){
        console.log("value is truthy")
    }
    else{
        console.log("value is falsy")
    }
}
console.log(checkvalue(undefined))
console.log(checkvalue(""));
console.log(checkvalue(0));
console.log(checkvalue("hello"));
console.log(checkvalue(100));