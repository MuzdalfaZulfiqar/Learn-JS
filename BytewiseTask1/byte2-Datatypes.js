// "use strict"; // treat all JS code as new version
// here semicolob is compulsory

// alert("Hi muzdalfa");  // we are using node.js not browser so this will not work we need to 
// use new syntax


// let start = null ; // it is not undefined just empty means not have any vakue yet

// let state; // undefined

// let x = Symbol("Book");  //Returns a new unique Symbol value.
// let y = Symbol("Book"); // x and y are not equal

// console.log(x===y)

// alert(x) // will show an error that it cannot convert a symbol value to string 
// so we need to use 
// alert(x.toString());
// console.log(x.description) // will print its value/identifier/description(book)

// defining an array in objecrs

let user = {
    "name" : "muzdalfa",
    "school" : "Allied",
    "hobbies" : ["reading", "gaming"]
}

// console.log(user.name)
// console.log(user.school)
// console.log(user.hobbies)


// defining a symbol inside object

// let old = Symbol();
let old = Symbol();

let school = {
    "name" : "Allied",
    "location" : "Daska",
    [old] : 23 
    // wrap the name pf your symbol in [] square brackets and then store its value
}
console.log(school.old) // will show undefined because we have mentioned no description in symbol (line 37)
console.log("old = " , school[old])

// Adding something new in an object
school["gender"] = "female";


// console.log("School");  // name , location,gender
for (const key in school) {

    // It will skip the symbol 
    // console.log(key)
}
// console.log("School");


// Method 2 to use a symbol with an object

let sch = {
    "name" : "Allied",
    "location" : "Daska",
};
// object[SymbolName] = identifier
// sch[old] = 23;

// console.log(sch.location)  // accessing other datatypes like this
// console.log(sch.name)
// console.log(sch[old]) // accessing Symbol like this


