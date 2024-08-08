function setUsername(username){
    this.username = username
}

function createUser(username, email, password){
    this.email = email;
    this.password = password;
    // this is actually calling this method but as soon as the method executes it is removed from the callstack and so no effects on username
    // so we use call method to hold its reference and after that we need to access username 
    // so we will pass this as an argument saying that you need to refer to the username which is being
    // passed to you 
    // setUsername(username)
    // use call method to do this
    setUsername.call(this,username)
}

const chai = new createUser("muz","muz@gmail.com", "1234")
console.log(chai)