// singleton
// object can be formed using literals and constructor
// the one with literal will not be singleton and one with constructor will be singleton

// Object literals

let id = Symbol();
const jsuser = {
    name : "muzdalfa",
    age : 18,
    location : "Pakistan",
    isLoggedIn : false,
    lastLoginDays : ["mon", "sat"],
    "full name" : "Muzdalfa Zulfiqar",
    [id] : 10
}
// Object.create --> constructor method


// console.log(jsuser.age); // 18
// console.log(jsuser[age]);  // it will be an error because age is a string in js Language so we need to write 
// in this syntax objectName["propertyName"]
// console.log(jsuser["age"]) // 18
// console.log(jsuser["full name"]) // This is the best approach to access the contents in teh object
// console.log(jsuser[id])  // will print the value / description of id this is 10


let regNo = Symbol();
let user = {
    "name_" : "Muzdalfa",
    age : 20,
    "school" : "Allied",
    "grades" :["A", "B", "A+"],
    [regNo] : 36
}

// console.log(user["name_"]);
// console.log(user["school"]);
// console.log(user["age"]);
// console.log(user["grades"]);
// console.log(user[regNo]);

user.name_ = "Muzdalfa Zulfiqar";
// console.log(user["name_"]);
// Object.freeze(user) ; // freezw this object so that no one can change its value
// user.name_ = "Muzdalfa Zulfiqar 1"; 
// console.log(user["name_"]);

// user["greeting"] = function(){
//     console.log("This is another method")
// }

user.greeting = function(){
    console.log("Hi " + user.name_)
}

// Function anonymous means not an error and it has not provided the function output just returned the reference
// of function
// console.log(user.greeting)

// It output is 
/*
Hi Muzdalfa Zulfiqar
undefined
*/
console.log(user.greeting())
console.log(user)
/*
{
  name_: 'Muzdalfa Zulfiqar',
  age: 20,
  school: 'Allied',
  grades: [ 'A', 'B', 'A+' ],
  greeting: [Function (anonymous)],
  [Symbol()]: 36
}
*/

user.greetingTwo = function(){
    console.log(`Hi ${this.name_} How are you?`)
}

user.greeting()
user.greetingTwo();

const singletonObject = new Object(); // output = {}
const nonsingleton = {} ; // output = {}

// console.log(singletonObject)
// console.log(nonsingleton)
nonsingleton.id = "123-abc";
nonsingleton.name = "Muzdalfa";
nonsingleton.isLoggedIn = false;
// console.log("Values added")
// console.log(nonsingleton) // output { id: '123-abc', name: 'Muzdalfa', isLoggedIn: false }

const regularUser = {
    email : "muz@gmail.com",
    fullname : {
        userfullname :{
            // this is object nesting
            firstname : "Muzdalfa",
            lastName :  "Zulfiqar"
        }
    }
}
// console.log(regularUser.email)
// console.log(regularUser.fullname)
// console.log(regularUser.fullname.userfullname)
// console.log(regularUser.fullname.userfullname.firstname)
// console.log(regularUser.fullname.userfullname.lastName)

const obj1 = {1 : "a", 2 : "b"};
const obj2 = {3 : "c", 4 : "d"};
const obj3 = {5 : "c", 6 : "d"};

// This will consider obj1 and obj2 as two properties of the obj
// const obj3 = {obj1, obj2} ; 
// console.log(obj3)  // output = { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// Copy the values of all of the enumerable own properties from one or
//  more source objects to a target object. Returns the target object.
const objFinal = Object.assign(obj1,obj2,obj3);// here we will consider obj1 as target and the rest two as source
// so all of the elements will be copied into obj1
// console.log(objFinal) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'c', '6': 'd' }
// console.log(obj1 === objFinal);  // return true
// console.log(obj1) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'c', '6': 'd' }

// another good way to do this
let objOption = Object.assign({}, obj1, obj2,obj3);
// here {} will be considered as target so it means copy all other objects elements into
// {} and return them as an object

// Third way to do this
// Spread the values and combine
let objOptionTwo = {...obj1, ...obj2, ...obj3};
// console.log(objOptionTwo)

let arr1 = [1,3,1,4,6];
let arr2 = [12,32,21,24,26];
let arr3 = [arr1, arr2];
// console.log(arr3)  // it will be an array of two arrays it will not merge them

// data from database will be array of objects
const user = [
    {
        id : 1,
        email : "muz@gmail.com"
    },
    {
        id : 1,
        email : "muz@gmail.com"
    },
    {
        id : 1,
        email : "muz@gmail.com"
    },
    {
        id : 1,
        email : "muz@gmail.com"
    },
    {
        id : 1,
        email : "muz@gmail.com"
    }
]


// console.log(user[0].id)

let cap = {
    id : 1,
    email : "muz@gmail.com"
}
// console.log(Object.keys(cap)) 
// input will be object and return type will be array
//[ 'id', 'email' ]
// console.log(Object.values(cap)) 
// console.log(Object.entries(cap)) // [ [ 'id', 1 ], [ 'email', 'muz@gmail.com' ] ]
// it will return an array of arrays where each key pair will be considered as pne array
// console.log(Object.entries(cap)[0][0])  // id

// console.log(cap.hasOwnProperty("id"))

const course = {
    coursename : "js",
    price : "999",
    courseIn : "hitesh"
}

// we always access the objects properties as objectName.property
console.log(course.courseIn)

// To make it accessible only by name we can do something like this
// const {propertyName} = objectName
const {courseIn} = course;
// rename it 
const {courseIn : instructor} = course;
console.log(courseIn)
console.log(instructor)


// JSON

// {
//     "name" : "muz",
//     "age" : "10",

// }
