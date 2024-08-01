const arr = "Muzdalfa Zulfiqar";
for (const iterator of arr) {
    console.log(iterator)
}

// Maps
const map = new Map();
map.set("age" , 10);
map.set("old" , 16);
map.set("age" , 10); // this will not be added becuase the map stores the key value pairs tthat are unique
map.set("age" , 110); // this will update the value of age in the map now it will be 110

console.log(map);
// for (const iterator of map) {
//     console.log(iterator);   // an array of key valye pair will b printed  [ 'age', 110 ] 
// }
// If we want to get separate values as (means this will be the destructure of array)

// for(const [key, value] of map){
//     console.log(key + " : " + value)
// }

// Map is not iteratable so this loop will not work on map
// for (const key in map) {
//     console.log(key)
// }

const obj_1 = {
    game1 : "g1",
    game2 : "g2",
    game3 : "g3",
}


// This(for-of) will not work for objects
// for (const [key, value] of obj_1) {
//     console.log(key + " : " + value)
// }

// for objects for in loop work better
// for (const key in obj_1) {
//     console.log(key + ": "+ obj_1[key]);
    
// } // output 
/*
game1: g1
game2: g2
game3: g3
*/

// const prog = [1,2,4,1,4,4];
// for (const key in prog) {
//     console.log("Value at "+ key + " index =  "+ prog[key])
// }


// For each loop

// const cod = ["js", "ruby","java"];

// // it takes callBack function which will have no name
// cod.forEach(function(itemOfArray){
//     console.log(itemOfArray)
// })

// cod.forEach((item)=>{
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }
// cod.forEach(printMe) // sirf reference dena ha print nai krna

// cod.forEach((value, index, array)=>{
//     console.log(value, index, array)
// })

const myArray = [
    {
        langName : "JS",
        langFile : ".js"
    },
    {
        langName : "Java",
        langFile : ".java"
    },
    {
        langName : "Python",
        langFile : ".py"
    }

]

myArray.forEach((item)=>{
    console.log(item.langFile +" : "+ item.langName)
})

// -------------------- For Loop -----------------------
        console.log("This is tut_55")
        let i=0;
        for(i=0;i<3;i++){
            console.log(i);
        }

        let a = ["Muzdalfa","Asma","Ali","Maryam"];
        let j=0;
        for(j=0; j<a.length;j++){
            console.log("Name: "+a[j]);
        }

        //---------------------- Using for Each ---------------------------
        a.forEach(function f(element)
        {
           // console.log(element);
        }
        )

        //--------------------- Using for of loop --------------------------
        for(elements of a){
           // console.log(elements);
        }

        //------------------- For in Loop for iterating the objects --------
        let employee = {
            name:"Muzdalfa",
            age:"19",
            Institute:"COMSATS"
        };

        
        for(key in employee){
            //console.log(`The ${key} of employee is ${employee[key]}`)
        }

        //------------------------ While loop ----------------------------------

        let p = 0;
        while(p<4){
            console.log(`${p} is less than 4`);
            p++;
        }
        console.log(`We are out of loop and now p = ${p}`);
        

        //------------------------ do-while -----------------------------------
        // will run for first time always
        let q = 0;
        do{
            console.log(`q = ${q} is less than 4`);
            q++;
        }while(p<4);
