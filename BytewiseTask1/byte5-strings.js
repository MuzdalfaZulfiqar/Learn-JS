console.log("Strings tut");

let a = "Muzdalfa";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
console.log(a[6]);
console.log(a[7]);

for(let i = 0; i<a.length; i++){
    // console.log(a[i]);
}
let s1 = "Muzdalfa";
let s2 = "asma";
// console.log(s1 + " is my name and my sisters name is "+ s2);

// console.log("This is muzdalfa's laptop");
// console.log('This is muzdalfa's laptop'); it will throw an error because the single quote will be confused with the 
// apostrophe

// now to avoid this we can use the template libraries
// console.log(`His name is ${s1} and his sisters name is ${s2}`);

// Write the whole string in the backtick on top of tab button and then for variables use ${} and within the brackets write the 
// variable


// we can also store the template in a variable and then orint that variable
// let template =  `${s1} This is a "template" that is being stored into the variblble template `
// console.log(template);

// console.log("Muzdalfa")

// console.log('Muzdalfa')
// print double quote within a single quote
// console.log('Muzda""lfa')
// print double quote within a template librares
// console.log(`Muzda"" lfa`)
// print double quote using escape characters
// console.log("Muzd\"alfa");


// print single quote or apostrophe within a double quote
// console.log("Muzda 'lfa")
// print single quote or apostrophe within template libraries
// console.log(`Muzda'lfa`)


// console.log("Muzdalfa\nZulfiqar");
// console.log("Muzdalfa\tZulfiqar");
// It will print one slash
// console.log("Muzdalfa\\Zulfiqar");

// It will not print any slash
// console.log("Muzdalfa\Zulfiqar");


// console.log(s1.toUpperCase());
// console.log(s1.toLowerCase());
// console.log(s1.length);

// let p = s1.slice(1,4) // p will have value at 1,2,3
// console.log(p)
// console.log(s1.slice(1));

// let name_ = "Muzdalfa is a good girl, Muzdalfa is daughter of zulfiqar ali"
// console.log(name_.replace("Muz", "123"))  // if more than one occurences of the one that needs to be replaces then 
// first occurenece will be replaces

// To change all of the occurences we need to use following expression
// /Muz/ means find this pattern g says globally search for it and replace in all places
// console.log(name_.replace(/Muz/g, "123"))

// let n1 = " ABC ";
// let n2 = "DEF";
// console.log(n1.concat(n2,"And this is a string being concatenated using comma," + "And this is being concatenated using +"))
   
// concatenate using .concat() funcion
// concatenate using ,
// concatenate using + 

// The trim function will remove the whitespaces at the start and the end of the string
// console.log(n1.trim())

// console.log(n2.startsWith("D"));
// console.log(n2.startsWith("E"));

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
function nameGenerator(){
    let adj_num = getRandomNumber(0,2);
    let shop_num = getRandomNumber(0,2); 
    let word_num = getRandomNumber(0,2);

    console.log(adj_num+" "+ shop_num + " "+ word_num);

    let adj = "Crazy Amazaing Fire";
    let shop = "Engine Foods Garments";
    let word = "Bros Limited Hub";
    
    let adj_a = adj.split(" ");
    let shop_a = shop.split(" ");
    let word_a = word.split(" ");

    console.log(adj_a[adj_num]+ " "+ shop_a[shop_num] + " "+ word_a[word_num]);

  }

  nameGenerator();


