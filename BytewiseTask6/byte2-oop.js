// we have an object

// let animal = {
//     eats : true
// }
// let rabbit = {
//     jumps: true
// }

// In adition to properties we have assigned to an Object, each object do have some extra properties
// that are encapsuled within prototype  
// Now we can reference an object to a custom prototype (means to another object)and henec it will contain
// properties of this new prototyped object
// for example we can now say

// rabbit.__proto__ = animal;

// now rabbit has prototype animal so it will own property of animal too

// But this is prototype and we want OOP which is as below


// If the vafiables are not in the class fields section then we can define them in the constructor
// like in this vase we have constructor(name) this name will become the property variable of this
// class

class Animal{

    // A class cannot have more than one constructor method
    // constructor(){
    //     console.log("Object is created")
    // }
    constructor(name){
        this.name = name;       
        console.log(name + " has been born")
    }
    // eats (){
    //     console.log("Kha rha huin bhai")
    // }
    jumps(){
        console.log("Kood rha huin bhai")
    }
    display(){
        console.log("Name = " + this.name)
    }

}

let a = new Animal("Bunny");
// a.eats();
// a.jumps();
// console.log(a.name)

/*
The key points are:

A class can have no explicit constructor.
If no constructor is defined, JavaScript provides a default constructor.
You can still define default values for class fields directly within the class body.
*/

// class Dog{
//     name;// its value will be undefined 
//     age = 0; // can be declared

//     eats(n){
//         this.name = n;
//         console.log("I am a dog and my name is "+ this.name)
//     }
// }

// let d = new Dog();
// console.log(d.age)
// console.log(d.name)
// d.eats("Bob");


// class Rabbit{
//     #name_ = "rabbit";
//     #age = 10;
//     constructor(){
//         // within a class it variables that we have defined should be used as this.variablename
//         // in case of private it should be like this.#vaiableName
//         console.log(this.#name_ + " has been born")
//     }
// }


// Extends

class Lion extends Animal{
    // While extending if we have no super statement we will have an error
    /*
    script.js:93 Uncaught ReferenceError: Must call super constructor in derived class before 
    accessing 'this' or returning from derived constructor
    at new Lion (script.js:93:17)
    at script.js:100:12
    */
    constructor(age, name_){
        super(name_);
        this.age = age;
        console.log("I am a lion, the king of jungle my name is " + name_ + " and my age is "+ age);
    }
    static eats(){
        console.log("Main bndy khata huin")
    }
    roar(){
        console.log("Bhai, I can roar hahahahaha")
    }
    display(){
        super.display();
        console.log("Age = "+ this.age);
    }
}

let lion = new Lion(10, "Shera");
// console.log(lion);
// lion.eats();  // accessing a static method using the object will use its parent class method if it exists
// otherwise we will have this error
/*
script.js:118 Uncaught TypeError: lion.eats is not a function
    at script.js:118:6
*/
// lion.jumps();
// lion.roar();
// Lion.eats(); // to call static method of a class it should be called using className.method()
// lion.display(); 


class GetterSetter{
    constructor(name_){
        this.name_ = name_;
    }
    // getter method
    get name(){
        return this.name_;
    }

    set name(value){
        if(value.lenth < 4){
            console.log("Cannot set a value as it is very small");
        }
        else{
            this.name_ = value;
        }
        
    }
}

let user = new GetterSetter("John");
console.log(user.name) // using the getter method and it does not uses the paranthesis

// This will go to setter method and will set the value of name_ there
user.name_ = "Muzdalfa"
console.log(user.name); // Its output will be Muzdalfa and will be got by the getter method

console.log(user instanceof GetterSetter) // true
console.log(user instanceof Lion) // false
console.log(lion instanceof Lion) // true
console.log(lion instanceof Animal) // true (since it is inherited from Animal)
console.log(a instanceof Lion) // false (ecause Lion was child and created after Animal)

// childclass object can be instance of its class and it parent too
// parentclass object is instance of it sown class but not its child


