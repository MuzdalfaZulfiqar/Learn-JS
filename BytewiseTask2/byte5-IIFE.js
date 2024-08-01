// Immediately invoked function expressions

// function chai(){
//     console.log("DB connected");
// }

// chai() ; // no error


// why use this 
// to immediately invoke and to avoid global pollution

(function chai(){
    console.log("DB connected");
})();

// this semicolon is also compulsory here

//  first for the function definition second for the execution
// ()()

(function code(){
    console.log("I am code");
})();

( ()=>{
    console.log("I am the end of this code")
} )();


// To pass an argument


// Named IIFE
(function code(name){
    console.log("Hi ", name);
})("Muzdalfa");


// Unnamed IIFE()
((name)=>{
    console.log(name)
})("Muz");
