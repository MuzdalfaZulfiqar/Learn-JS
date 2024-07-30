let arr = [1,2,3];
console.log(arr);
console.log(arr.length)
console.log(arr[0]);

arr[0] = 100;// array is mutable but string is not 

console.log(typeof arr) // return object


// console.log(arr.toString())
// let p = arr.toString();  // this has converted an array into a string
// console.log(typeof p)

// This function will replace the delimeters(spaces, commas etc in the array with tha 
// parameter that we will pass in join function)
console.log(arr.join("and"));  // output = 100and2and3

// Removes the last element from an array and returns it.
//  If the array is empty, undefined is returned and the array is not modified.
console.log(arr.pop()); // 3
console.log(arr) ;  // [ 100, 2 ]

// Removes the first element from an array 
// and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log(arr.shift()); // output = 100

// Appends new elements to the end of an array, and returns the new length of the array.
console.log(arr.push(0)); // length = 3;
console.log(arr.push("Muzdalfa"));  // length = 4
// push functions allows us to add any type of the value on our string

console.log(arr); // [ 100, 2, 0, 'Muzdalfa' ]



//Elements to insert at the start of the array.
// Inserts new elements at the start of an array, and returns the new length of the array.
console.log(arr.unshift("start"))


delete arr[1];
console.log(arr); // [ 'start', <1 empty item>, 0, 'Muzdalfa' ]

// now if we print the length of the array after deleting an element at particular index then the length of the
// array will still be same just the value will not be there at that index and when we will try to print value
// at that index after delering it will be undefined

let arr1 = [1,2,3,4,5,6,7];
let arr2 = [11,12,13];
let arr3 = [111,112,113];
// console.log(arr1.concat(arr2,arr3, 2));
//Combines two or more arrays. This method returns a new array without modifying any existing arrays.


// This will sort the elements on base od lexicograpgic (numbers + alphabets + symbols)
// in this case each and every element a,b pair in array will be compared and 

//Function used to determine the order of the elements. It is expected to return a negative value if the first argument
//  is less than the second argument, zero 
// if they're equal, and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
// arr1.sort((a,b) => (a-b))

//splice(start: number, deleteCount?: number)

// first parameter is the starting index from where we want to delete the element and the second parameter
// is the number of elemets we want to delete 
/*
Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

@param start — The zero-based location in the array from which to start removing elements.
@param deleteCount — The number of elements to remove.
@returns — An array containing the elements that were deleted.

hence the original array will also remove the value as well as space win memory
*/

// arr1 = [1,2,3,4,5,6,7];
console.log(arr1.splice(1,2)); // output = [ 2, 3 ]
console.log(arr1) // output = [ 1, 4, 5, 6, 7 ]

// this will remove element at index 1 and 2 and hence will add 44 and 55 at these places
console.log(arr1.splice(1,2,44,55));  // [ 4, 5 ]
console.log(arr1); // [ 1, 44, 55, 6, 7 ]

// delete elemet at index 1 and 2 add 444 at index 1  and 555 at index 2 and 666 at index 3 and then shift the remaining
// elements to right
// arr1 = [ 1, 44, 55, 6, 7 ]
console.log(arr1.splice(1,2,444,555,666)); //[ 44, 55 ]
console.log(arr1); // [ 1, 444, 555, 666, 6, 7 ]


// here three elements will be deleted and hence and new 2 elements will be added in their place and 
// remaining elements from original array will be shifted to left
// arr1 = [ 1, 444, 555, 666, 6, 7 ]
// console.log(arr1.splice(1,3,4444,5555)); // [444,555,666]
// console.log(arr1); // [1,4444,5555,6,7]

// console.log(arr1.slice(2));
// console.log(arr1.slice(1,3)); // second para is exclusive

//  value,index, arr2 are the paras for for each loop
// arr2.forEach((value,index, arr2) => {
//     console.log(value,index, arr2);
// });

// for (const iterator of arr2) {
//     console.log(iterator)
// }

let array_ = [1,3,44,5,66,7];
function square(element) {
    return (element*element);
}

// so what we are doing here 
// map function takes a function as an argument but here we do not need to pass
// the parameter ourself it will kind of iterate the array take each element pass it as an argumnet to the
// function and will get the new result by applying that function to all the elements of the array

let ar1 = array_.map(square);

// we can also write it in form of the arrow function
// let arrr1 = array_.map((element) =>{
//     return (element*element);
// })
// console.log(ar1)

let greater = (e)=>{
    if(e>7){
        return true;
    }
    return false;
}

console.log(ar1.filter(greater));

let a_1 = [3,2,5,1,66,4];
function sum(a,b){
    return a+ b;
}

// in the form of arrwo function
// let f1 = (a, b) => {
//     return a+ b;
// }

/*Calls the specified callback function for all the elements in an array. The return value 
of the callback function is the accumulated result, and is provided as an argument in the next
 call to the callback function. */
console.log(a_1.reduce(sum))