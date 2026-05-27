// function greet(str){
//     return "hello"+ " "+str;
// }
// console.log(greet("riya"));

function isprime(num){
    if(num<=1){
        return false;
    }
    for(let i=2; i<num;i++){
        if(num %i ===0 ){
            return false;
        }
    }
    return true;
}
console.log(isprime(2));
console.log(isprime(4));
console.log(isprime(11));

// function expression
// const multiply=function(a,b){
//     return a*b
// }
// console.log(multiply(4,2));

const add=function(x,y){
    return x+y;
};
console.log(add(88,90))

// arrow function
// important having objexts and classes
// const divide =(a,b) => a/b;
// console.log(divide(10,2));

// const mod=(a,b)=>a%b;
// console.log(mod(12,10));

// const isEven=(num)=>num%2===0;
// console.log(isEven(7));

const isOdd= (num)=>num%3===0;
console.log(isOdd(9));

// factorial
const factorial= (n) =>{
    if(n==0 || n==1){
        return 1;
    }
    let result=1;
    for(let i=2;i<=n;i++){
        result*=i;
    }
    return result;
};
console.log(factorial(5));

// palindrome
const isPalindrome=(str)=>{
    const reversed=str.split("").reverse().join("");
    return str===reversed;
}
console.log(isPalindrome("eue"));
console.log(isPalindrome("hello"))

// fibonacci series

const fibonacci=(n)=>{
    let fib=[0,1];
    for(let i=2; i<n; i++){
        fib[i]=fib[i-1]+fib[i-2];
    }
    return fib;
}
console.log(fibonacci(4));

// anonymous function
setTimeout(function() {
    console.log("run after 2 seconds")
}, 2000);

// anonmous function
// (function(){
//     console.log("if we write in the parethsis it will act like function expression");
// });

// recursion 
const fibonacci1=(n)=>{
    if(n<=1){
        return n;
    }
    return fibonacci1(n-1)+fibonacci1(n-2);
};
console.log(fibonacci1(6));
console.log(fibonacci1(1));

// IIFE(immediatly invoked function)
(function(){
    console.log("runs immediately")
})();   

// constructor function
function car(make,model){
    this.make=make;
    this.model=model;
}
const car1=new car("honda","civic")
console.log(car.make);

// callbacks lets you handle event listner, timer and api calls.
// it pass as argument another function.

function fetchData(callbacks){               //api call
    setTimeout(()=>{
        callbacks("data received")
    },2000);
}
fetchData(data =>console.log(data));

// event listner
// document.getElementById("btn").addEventListener("click",function(){
//     console.log("button is clicked")
// });


// closure:
// is a function remenbers variables place where it created even if that place is gone.

function outer(){
    let count=0;
    return function inner(){
        count++;                   //ineer remeber count   
    }
    return count;
}
const counter=outer();
console.log(counter());
console.log(counter());
console.log(counter()); //1 2 3

// Memory → Inner functions carry variables like a backpack.

// Privacy → Variables stay hidden from outside code.

// State → Functions can “remember” past values.

function bankAccount(initialBalance){
   let balance=initialBalance;
   return {
    deposit(amount) {balance+=amount;},
    getbalance(){ return balance;}
   };
}
const account=bankAccount(10000);
account.deposit(1000);
console.log(account.getbalance());


// higher order function
// 1. another function as an argument.
// 2. return the function as its result.

// array methods
