
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("inner: ", a);
    
}



// console.log(a);


function one(){
    const username = "muzdalfa"

    function two(){
        const website = "githib"
        console.log(username);
    }
    // console.log(website);
// calling one function within the other
     two()

}

// one()

if (true) {
    const username = "muzdalfa"
    if (username === "muzdalfa") {
        const website = " github"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}