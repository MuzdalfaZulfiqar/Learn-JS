console.log("Muzdalfa");
let name_  = document.getElementsByClassName("box")
console.log(name_);

// name_.style.color = "green"; 
// The above will not work because the style tag will not be applied on the HTML collection to apply 
// it on individual element we can use the [] and within that we can place the index to where we want to apply 
// the tag 



name_[1].style.color = "green";
name_[2].style.backgroundColor =  "red";

// let idElement = document.getElementById("element_2.5");
// console.log(idElement);
// idElement.style.backgroundColor = "yellow";

// it will be used to select the elements by using the css selectors
// but the changes will be made only to the first node that is falling under that particular category
// so muzdalfa zulfiqar 1 is the first element in .box so its backgriundColor will be changed
document.querySelector(".box").style.backgroundColor = "black";

console.log(document.querySelectorAll(".box")) // it will return an html collection of those having the class box
// document.querySelectorAll.style.color = "yellow"
// The above statement will not work because the style tag will not be applied on the HTML collection to apply the 
// style on all the elements of that class we will be using a for loop and within that loop we can apply style
// to each individual element just as below 


let s = document.querySelectorAll(".box");


for (const iterator of s) {
    iterator.style.backgroundColor = "green";
}

// using the for each loop in an arrow function
// document.querySelectorAll(".box").forEach((element) =>{
//     element.style.backgroundColor = "green";
// })

let tags =  document.getElementsByTagName("div");
console.log(tags);
for (const iterator of tags) {
    iterator.style.backgroundColor = "red"
}

let element = document.getElementsByTagName("div");

// it will tell us whether our element is matching the given css selector in the brackets

console.log(element[3].matches("#element_"))  // true
console.log(element[3].matches(".red"))  // false

// closest will check that whether the parent of this element or the element itself is 
// having the matching css or not 
// the ancestors(parents )  and the element it self is also checked
console.log(element[3].closest("#element_"))   // simce this element itself is matching so this will 
// return that element

// in case of closest first the element is checked then its parent then so on till html tag and then result is given
console.log(element[3].closest("html"))
// this will give the html tag

console.log(document.querySelector(".container").contains(element[2])) // return true


// Excercise
/*

*/


let div = document.createElement("div");
div.setAttribute("class" , "bg-black") // This will set class
div.setAttribute("class" , "yellow-color") // This will replace the value of the previous class and hence bg-black will be
// removed so to add both we need to add these two as
div.setAttribute("class", "bg-black yellow-color")