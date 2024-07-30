console.log("2" > 1); // true js will convert this into the number already


// Comparisons work different than equality (==) as conversion convert null into number (0) so
console.log(null >  0);  // false (0 is not greater than 0) 
console.log(null == 0);  // false 
console.log(null === 0);  // false 
console.log(null >=0);  // true 

console.log(undefined > 0);  // false
console.log(undefined < 0);  // false
console.log(undefined == 0);  // false
console.log(undefined === 0);  // false
console.log(undefined >= 0);  // false
// Stack is used for primitive datatypes  -gives a copy

// Heap(non-primitive)  - gives reference