
// class property is a variable that belongs to an object creted from, a class.
class Pro {
  constructor(id, name, price) {
    this.id = id;       // property
    this.name = name;   // property
    this.price = price; // property
  }
}
const lap= new Pro(101,"laptop",50000);
console.log(lap.name);   
console.log(lap);               //Pro { id: 101, name: 'laptop', price: 50000 }


// types of class property
// instance property
// belong to each object creted from the class and define with this .
class User{
    constructor(name, age, role){
        this.name=name,
        this.age=age,
        this.role=role

    }
}
const user= new User("riya", 22, 'developer');
console.log(user.name);
console.log(user);                      // User { name: 'riya', age: 22, role: 'developer' ]console.log(user);                        


// static property
// belongs to class itself, not indivisula object
// defined with static

class chocolate{
    static type= "kitKat"           //static property
}
console.log(chocolate.type)         //classname.variablename


// public vs private property

// public= access anywhere using (this.namw)
// private = start with #, only access inside the class.

class Account{
    #balance=25000;

    deposit(amount){
        this.#balance+=amount
    }
    getbalance(){
        return this.#balance
    }
}

const user1=new Account();
user1.deposit(50000);
console.log(user1.getbalance())
// console.log(user1.#balance)  ------not possible

// Instance properties → unique per object.

// Static properties → shared across the class.

// Private properties → hidden, secure inside the class.


// class Produnct={};
class Product{
    constructor(id, name, price_product){
        this.id=id,
        this.name=name;
        this.price_product=price_product
    }
    
    applyDiscount(percent){
        return this.price_product -= this.price_product * (percent / 100)
       }

    getDetails(){
        return `${this.name} costs Rs.  ${this.price_product}`
    }

}
const laptop= new Product(101,"Laptop", 50000);
const chager= new Product(102, "charger", 500);

console.log(laptop.getDetails());
console.log(laptop.applyDiscount(50));
console.log(chager.getDetails());




