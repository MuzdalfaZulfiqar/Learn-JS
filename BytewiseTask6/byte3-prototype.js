// let myName = "muzdalfa     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.muzdalfa = function(){
    console.log(`muzdalfa is present in all objects`);
}

Array.prototype.heyMuzdalfa = function(){
    console.log(`Muzdalfa hey`);
}

// heroPower.muzdalfa()
// myHeros.muzdalfa()

// inheritance

const User = {
    name: "mzu",
    email: "mzu@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "Asad     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"muzdalfa".trueLength()
"iceTea".trueLength()