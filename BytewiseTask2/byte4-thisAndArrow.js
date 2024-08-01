const user = {
    username : "muzdalfa",
    price : 1000,

    // Declaring a function in an object
    welcomeMessage : function() {
        // to refer a varibale within its context it is a best practice to use this.
        console.log(` ${this.username} Welcome to website`)
        // doing this.username in a function will not work becausethis is for object

        console.log(this) // will print current object
    }
}

function code(){
    let username = "Muz";
    // console.log(this.username) // undefined
    console.log(this);
}

 // explicit retun
// let sum = (num1, num2)=>{
//     return num1 + num2;
// }

// implicit retun
// let sum = (num1, num2)=>num1 + num2;

// curly braces lagay to return likho parantesis hain simple to no return 
let sum = (num1, num2)=>(num1 + num2);
console.log(sum(1,2))

// trying to return an objct using arrow function

let sumFalse = (num1,num2)=>{username : "muz"} 

// This will give undefined  so {} fro wrapping object an () for return alternative
let sumOkay = (num1,num2)=>({username : "muz"}) 
console.log(sumFalse(1,2))
// c(); 
// code()
// user.welcomeMessage();
// user.username = "Sam";
// user.welcomeMessage();

// console.log(this) // in node environment this will print {} an empty object
// in browser it will be window object


let array = [1,2,4,5];
array.forEach(functionInput);

array.forEach(element => {
    
});