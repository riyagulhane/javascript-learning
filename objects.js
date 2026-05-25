// use const a={..} when we want to create a single object.
// class is like blueprint when you want to create multiple objects.


// An object is a collection of key–value pairs.
// Keys are called properties (data), and values can be primitive types, arrays, other objects, or functions (methods).
const student = {
  name: "Riya",
  age: 25,
  course: "JavaScript",
  introduce() {
    return `Hi, I'm ${this.name}, learning ${this.course}.`;
  }
};
console.log(student.introduce()); // Hi, I'm Riya, learning JavaScript.

// Object Properties
// Properties store data.

// Access with dot notation or bracket notation.\

console.log(student.name)
console.log(student);   //{
                      //   name: 'Riya',
                      //   age: 25,
                     //   course: 'JavaScript',
                     //   introduce: [Function: introduce]
                          // }
                          

// objects methods:-methods are function inside the object they define behavior.

// creting objects
// 1. object literal
const obje={key:'value'};

// 2. new object()
const obj=new Object();
obj.key="value";

// 3. constructor function
 function Car(model, year) {
  this.model = model;
  this.year = year;
}
const car1 = new Car("Tesla", 2024);

// 4. classes
class Car1{
    constructor(model, purchase){
        this.model=model;
        this.purchase=purchase;
    }
}
const car2=new Car1('BMW',2030)
console.log(car2.model);
console.log(car2);





const product= {
    id:101,
    name:"Laptop",
    price:50000,

    applyDiscount(percent){
       return this.price -=this.price * (percent/ 100);
    },

    getDetails(){
        return `${this.name} costs ${this.price}`
    }
        
}

console.log(product.getDetails());
console.log(product.applyDiscount(50));
console.log(product.getDetails());


// class
