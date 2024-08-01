function myName(){
    console.log("M");
    console.log("U");
    console.log("Z");
}

// reference (myName) + execution()
// myName() ;

function sum(num1, num2){
    console.log(num1 + num2);
}
// sum(1,2); // output = 3
// sum(1, "2"); // here js will say okay num2 is string so too is num1 hence output = 12
// sum(1, null); // here js will say okay null = 0 so output = 1

// function loginMessage(username){
//     return `${username} has just logged in successfully !`
// }

// loginMessage("Muzdalfa");   // here username =  "Muzdalfa"
// loginMessage("");  // here username =  ""
// loginMessage(); // here username =  undefined so to avoid this we can pass a default value in function as
// below
function loginMessage(username = ""){
    console.log(username + " hi")
}


// We do not know the number of parameters so used rest operator ... means gather all the arguments
// that are being passed pack them and give me

function calcPrices(...num1){
    return num1;
}

console.log(calcPrices(100,200,300,400)) ; // it will return array [100, 200, 300, 400]


function cal(var1, var2, ...num){
    return num;
}
console.log(cal(100,200,300,400)) // output = [300,400] because var1 = 100 , var2 = 200


let user = {
    "name" : "muz",
    "age" : 10
}

function handleObject(anyObject){
    console.log(`Username iss ${anyObject.name} and age is ${anyObject.age}`)
}

// handleObject(user);
handleObject(
    {
        "name" : "muz",
        "age" : 10
    }
);  // not compulsory to define then pass we can aslo define the object here
// as an argument

let array = [1,2,3,4];
function handleArray(anyArray){
    return anyArray[1];
}
console.log(handleArray(array))
console.log(handleArray([1,2,3,4])) // Direct Passing