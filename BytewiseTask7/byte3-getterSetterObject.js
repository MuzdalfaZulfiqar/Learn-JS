const User = {
    _email : "muz@gmail.com",
    _password : "abc",

    get email(){
        return this.email_.toUpperCase()
    },
    set email(value){
        this.email_ = value
    }
}

let chai = Object.create(User)
console.log(chai.email)