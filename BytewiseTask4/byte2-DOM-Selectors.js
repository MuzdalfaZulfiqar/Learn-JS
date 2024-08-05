console.log("DOM tutorial")

document.body.childNodes
console.log(document.body.childNodes);
//[text, comment, text, div.container, text, script, text, comment, text, script, text]

console.log(document.body.childNodes[0]);
// text

console.log(document.body.childNodes[3]);
// div.container

console.log(document.body.childNodes[3].childNodes);
//  [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]

console.log(document.body.childNodes[4].firstChild);
// text

console.log(document.body.childNodes[4].lastChild);
// text


// firstChild and lastChild will give us the chils bu considering the spaces between them as text node
// now if we want to consider the first child as the one which we created we can use firstElementChild
console.log(document.body.childNodes[3].firstElementChild)
/* <div class=​"box">​Box1​</div>​*/

console.log(document.body.childNodes[3].lastElementChild)


console.log(document.body.childNodes[3].lastElementChild.style.color = "red");


console.log(document.body.childNodes[3].lastElementChild.parentElement)
// div.container
console.log(document.body.childNodes[3].lastElementChild.parentNode)
// div.container

// parent node and parent element are all same just one difference that in case of parent element if there is 
// no parent in that case it will return null but in case of parentNode it will give us something like maybe document

// sibling will be based on html collection
console.log(document.body.childNodes[3].lastElementChild.previousElementSibling)

// sibling will be based on overall nodes
console.log(document.body.childNodes[3].firstElementChild.previousSibling)  

// No element next to lastElement so it will be null
console.log(document.body.childNodes[3].lastElementChild.nextElementSibling) 

// No element previous to firstElement so it will be null
console.log(document.body.childNodes[3].firstElementChild.previousElementSibling) 

// It will return only the HTML collection (no comments or text nodes)
console.log(document.body.children)
//HTMLCollection(3) [div.container, script, script]

// it will return both the html and comment, text nodes etc
console.log(document.body.childNodes)
// [text, comment, text, div.container, text, script, text, comment, text, script, text]

console.log(document.body.children[2]) // script


console.log(document.body.children[1]); // target the table
console.log(document.body.children[1].rows); // will give to rows 
console.log(document.body.children[1].rows[1]); // target particular row

let p = document.body.lastElementChild;
console.log(p.rows);
console.log(p.caption)
// <caption> This is a caption </caption>
// console.log(p.tHead);
/* <tHead> </tHead> */

//document.body.children[1].tFoot
// null

// console.log(p.tBodies) 
// tBodies gives the number of tBody in our html table code
// =  2 in this case because a tHead will also be considered as a tBody


// cells will print all of the cells in table (th is separate cell and td is separate cell)
//document.body.children[1].rows[1].cells
/* 
HTMLCollection(2) [td, td]
0:td
1: td
length: 2
[[Prototype]]: HTMLCollection
*/



// This will give the index pf the particular row in all the rows collection
document.body.children[1].rows[1].rowIndex
// 1

/*

rowIndex	       Zero-based index of a row within the entire table (<table>)
sectionRowIndex	   Zero-based index of a row within its containing section (<thead>, <tbody>, or <tfoot>)   
document.body.children[1].rows[1].rowIndex
1
document.body.children[1].rows[1].sectionRowIndex
0
*/