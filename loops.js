// for loop
for(let i =0;i<=10;i++){
    console.log("number is"+" "+i)
}
// while loop
let count=1;

while (count<=3){
    console.log(count);
    count++
}

// do while loop
let n=10;
do{
    console.log("numner",n);
    n++
}
while(n<=20)

// for...of loop

let languages=["react","angular","nodejs","express.js"]
for(lan of languages){
    console.log("fronted dev:",lan);
}

// for...in loop
let person={name:"riya", age:22};
for(let key in person){
    console.log(key, ":", person[key]);
}

