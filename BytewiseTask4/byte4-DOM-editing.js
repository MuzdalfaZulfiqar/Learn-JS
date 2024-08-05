// This will provide the text within that particular element
document.querySelector(".container").innerText;
// i am a box

// This will provide the html within that particular element as a string
document.querySelector(".container").innerHTML;
//  output--->   '\n        <div class="box">I am a box</div>\n    '

// outer html will give full html, (inner HTML and that element itself)
document.querySelector(".container").outerHTML;

document.querySelector(".container").tagName;
// Output:  'DIV'
// tagName: This property is specific to element nodes
//  (nodes of type 1 in the DOM). It returns the name of the HTML tag, always in uppercase (e.g., "DIV", "IMG").

document.querySelector(".container").nodeName;
// Output:  'DIV'

// nodename deals with the following
/*
"#text" for text nodes
"#comment" for comment nodes
The element's tag name (uppercase for HTML) for element nodes
*/

/* text content will return the text including the elements that were hidden
 like spaces which will not be visible in case of innerText 
 innerText gives us plain text 

innerText returns the visible text contained in a node, while textContent returns the full text.
innerText considers css and based on that it checks whether it is visible or not

the spaces we give in our html text will not be considered in innerText but will be in
textContent


// display : none and visibilty : hidden will actully be considered hidden in case of innerText 
and hence it will not be visible in console 
but for opacity = 0 it will be not considered hidden hence will be visible in console

for textContent the display : none and visibilty : hidden and opacity = 0 will not have
any effect and hence the text will be visible in console
*/

document.querySelector(".container").textContent;
// '\n        I am a box\n    '

// this property will give results based on html Hidden attribute written in markup
// for if there is hidden it means true else false and we can make it true or false using js
console.log(document.querySelector(".box").hidden); // This will give us whether the given element
// is hidden or not in this case return false

document.querySelector(".box").hidden = false; // means make it visible
// true

/*
The innerHTML property returns:
The text content of the element, including all spacing and inner HTML tags.
The innerText property returns:
Just the text content of the element and all its children, without CSS hidden text spacing and tags,
 except <script> and <style> elements.
The textContent property returns:
The text content of the element and all descendaces, with spacing and CSS hidden text, but without tags.
*/

// This will replace the previous and add the new one
// document.querySelector(".box").innerHTML = "I am new innerHTML being added"

// To keep the old one there and then add the new html we can use this
// takes two parameters
/*
1) position() "beforebegin"
Before the element. Only valid if the element is in the DOM tree and has a parent element.

"afterbegin"
Just inside the element, before its first child.

"beforeend"
Just inside the element, after its last child.

"afterend"
After the element. Only valid if the element is in the DOM tree and has a parent element.

2) text in form of string here can aslo be within some tag
*/

document
  .querySelector(".box")
  .insertAdjacentHTML("afterbegin", "<p>I am additional innerHTML</p>");

console.log(document.querySelector(".box").hasAttribute("style"));

/*
The getAttribute() method of the Element interface returns the value of a specified attribute on the element.
  and null if there is no such attribute otherwise.
*/
console.log(document.querySelector(".box").getAttribute("style"));

document.querySelector(".box").setAttribute("style", "display:flex");

// It will provide all the attributes in that element
console.log(document.querySelector(".box").attributes);
/*
NamedNodeMap {0: class, 1: style, class: class, style: style, length: 2}
0: class
1: style
class:class
style: style
length: 2
[[Prototype]]: NamedNodeMap
*/

document.querySelector(".box").removeAttribute("style");

// We can always create custom attributes the ones starting as data- and to access them in js we 
// write element.dataset and it will display all the attributes of our custom data-
// now we have data-nameWeSet then to access in js we write element.dataset.nameWeSet


console.log(document.querySelector(".box").dataset) // DOMStringMap {createdby: 'Muzdalfa', modifiedby: 'Muz'}

console.log(document.querySelector(".box").dataset.createdby)


// Insertion methods
// parameter is div
// create an element
let div = document.createElement("div")
// assign some attributes to it
div.setAttribute("class", "createdby")
div.className = "box_1";
div.createdby = "Muzdalfa";
// This will add the text in the div we created
div.innerHTML = "I am added by innerHTML <b>Bold Text<b>";

// and append it within the container it will be placed after the last node within the container
// document.querySelector(".container").append(div);

// and place it within the the container but after the last node
// document.querySelector(".container").prepend(div);

// insert before node 
// document.querySelector(".container").before(div);

// insert after node 
// document.querySelector(".container").after(div);

// replace this node with newNode
// document.querySelector(".container").replaceWith(div);

let cont = document.querySelector(".container");
console.log(cont);

// other values are beforebegin and afterbegin
// cont.insertAdjacentHTML("beforeend", "<div> <b>This is a new div </b></div>")
// cont.insertAdjacentHTML("afterend", "<div> <b>This is a new div </b></div>")

// it will delete this element from code
// cont.remove();

// This method returns the all classes on the same selector that we are asking for
console.log(document.querySelector(".container").classList) // 2 classes
// console.log(document.querySelector(".container").className)
// document.querySelector(".container").classList.add("yellow-bg", "black-back")
// console.log(document.querySelector(".container").classList) // now 4 classes
// document.querySelector(".container").classList.remove("yellow-bg")
// console.log(document.querySelector(".container").classList) // now 3 classes

// sa,e class will be added only once


// toggle means not of a situation khula ha to band kr do band ha to khol do 
console.log(document.querySelector(".box").classList.contains("red"));

console.log(document.querySelector(".box").classList.length)

// if(document.querySelector(".box").classList.contains("red")){
//   console.log(document.querySelector(".box").classList.toggle("red"));
// }
// else{
//   // console.log(document.querySelector(".box").classList.toggle("red"));
// }