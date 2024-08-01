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



// const cod = ["js", "ruby", "python"];

// cod.forEach((item)=>{
//     console.log(item)
// })

const num = [1,2,3,4,5,6,7];

// function greaterThanFour(item){

//     return item>4?item :-1 ;
// }

// Returns the elements of an array that meet the condition specified in a callback function.  
// In callBack function we have the items as oarameter and after arrow section we write the condition we want to satisfy
// const newNums =  num.filter((num1)=>num1 >4)
// console.log(newNums) // [5,6,7]

// const meth2 = num.filter((num1) => {
//     return num1 > 4; 
// })
// console.log(meth2)

// for the item we get true will be included and others will be ignored
// let p = num.filter(greaterThanFour())

// function s(item){
//     return item > 3;
// }

// console.log(s(12));

// const books = [
//     {title : "B1", genre : "f1"},
//     {title : "B2", genre : "f1"},
//     {title : "B3", genre : "f2"},
//     {title : "B4", genre : "f3"},
//     {title : "B5", genre : "f1"},
//     {title : "B6", genre : "f2"},
//     {title : "B7", genre : "f3"}
// ]

// console.log(books);
// const user = books.filter((bk)=>{
//     return bk.genre == "f1";
// })

// console.log(user)

const numbers = [1,2,3,4,5,6,7];
let newNums = numbers.map((num)=>{
    return num + 10})
console.log(newNums)

/*
[11, 12, 13, 14,15, 16, 17 ]
*/

// Chaining
let p = numbers.map((num) => (num * 10)).map((num1)=> (num1 + 1)).filter((num2)=>(num2>=30));
console.log(p) // [ 31, 41, 51, 61, 71 ]
// In first chain we have to multiply num * 10 then it will result an array on this result the second chain (map of 
// adding 1 number will be applied)


// Reduce function

const array1 = [1,2,3,4,5];

/*
Calls the specified callback function for all the elements in an array. The return value of the callback
 function is the accumulated result, and is provided as an argument in the next call to the callback function.
*/
const initail = 0;
// At first accumulator = initial = 0 (and accumulator does not know about this so we are telling about this as 
// second factor of initial after accumulator + currentValue 
// )and currentValue = value of array
// for next call the (accumulator + currentValue)'s will be stored in accumulator 
const sum = array1.reduce(
    (accumulator , currentValue) => accumulator + currentValue , initail
)
console.log(sum)
// 0, 1  == 0+1 , 0
// 1 , 2 == 3
// 3 , 3  == 6

const sum1 = array1.reduce(
    function (acc,current){
        console.log(`acc ${acc} and  current ${current}`)
        return acc + current;
    } , initail
)
// console.log(sum1)

// so reduce(function, initial)

const cart = [
    {
        itemName : "js",
        price : 2999
    },
    {
        itemName : "js1",
        price : 3999
    },
    {
        itemName : "js2",
        price : 4999
    },
    {
        itemName : "js3",
        price : 5999
    },
]
// console.log(cart[0])

// cart.reduce(function(acc , current){
//     return acc + current.price
// })

const pr = cart.reduce((acc, current)=>(acc + current.price), 0)
console.log(pr)

