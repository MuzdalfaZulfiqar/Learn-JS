let score = "33";

// convert it to number
console.log(typeof score);

// string to num
let valInNum = Number(score);
console.log(typeof valInNum)


// num to string
let ValInString = valInNum.toString();
console.log(typeof ValInString)

// what if we have score = 33abc and we do Number(score) it will be converted and its types will be number
// but value it will store will b NaN

let sc = "33sns";
let scInNumber = Number(sc);
console.log(typeof Number(sc))  // number
console.log(Number(sc))  // NaN

let s = null;
console.log(typeof s) // object
let sInNumber = Number(s); 
console.log(typeof sInNumber) // number
console.log(sInNumber) // 0

let su = undefined;
console.log(typeof su) // undefined
let suInNumber = Number(su); 
console.log(typeof suInNumber) // number
console.log(suInNumber) // NaN

let st = true;  
console.log(typeof st) // boolean
let stInNumber = Number(st); 
console.log(typeof stInNumber) // number
console.log(stInNumber) // 1 (if false = 0)

let ss = "Muzdalfa";  
console.log(typeof ss) // string
let ssInNumber = Number(ss); 
console.log(typeof ssInNumber) // number
console.log(ssInNumber) // NaN

let isLoggedNum = 1;
let BooleanLooged = Boolean(isLoggedNum);
console.log(BooleanLooged) // True

// 1 => true
// 0 = > false

// let isLoggedString = "";
// let BooleanLoogedString = Boolean(isLoggedString);
// console.log(BooleanLoogedString) // false

let isLoggedString = "muz";
let BooleanLoogedString = Boolean(isLoggedString);
console.log(BooleanLoogedString) // true


// "" => false
// "muz" => true

let num = 30;
let numStr = String(num);
console.log(numStr)
console.log(typeof numStr) // string