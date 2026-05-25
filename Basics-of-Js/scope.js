// global scope
let carName = "creta"; // Global
function showCar() {
  console.log(carName); // Accessible
}
console.log(carName); // Accessible

// function scope
function myfun(){
    let fruit= "mango";
    console.log(fruit)
}
console.log(fruit)  //not accesible

// Block scope
//Variables declared inside {} are only accessible within that block.
{
    let x=10;
    let y=22;
}
console.log(x)