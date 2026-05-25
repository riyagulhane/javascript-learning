let x=88;
console.log(x);

// sinle line comment
/*
multi line commet
*/

//variables declaration
var a=10;    //function scope
let b=20;   //block scope
const c=30;  //block scope and cannot reassigned

// data types
let n=200;
let str="hello world";
let isActive=true;
let empty = null;
// let x;
// console.log(x);
let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log(sym1 === sym2); // false
// symbol() cretes brand new , unique symbol every time it is called, even if the description is the same.
// sym1 and sym2 are two different unique valyes

let a1=Symbol.for("riya");
let a2=Symbol.for("riya");
console.log(a1===a2); //true
// mbol.for("id") looks up a symbol in the global symbol registry. If it finds a symbol with the given key, it returns that symbol. Otherwise, it creates a new symbol with that key and returns it. In this case, sym1 and sym2 are the same symbol because they are both created using Symbol.for("riya"), which looks up the same key in the global symbol registry.


// arrithmatic operators
let sum = 5 + 3;   // 8
let diff = 5 - 3;  // 2
let prod = 5 * 3;  // 15
let div = 5 / 3;   // 1.666...
let mod = 5 % 3;   // 2

// comparison operators
console.log(5>3);
console.log(5=="5") //true
console.log(5==='5')//false

// logical operatiors
console.log(true&&false); //false
console.log(true||false); //true
console.log(!false); //true

// ternary opeator
let age=17;
let vote=(age>=18)?"yes":"no";
console.log(vote);
