// symbol to crete unique identifier
const secretkey=Symbol("secret");

let user={
    name:"Riya",
    age:22,
    [secretkey]:"hidden info"
}
console.log(user[secretkey]);
