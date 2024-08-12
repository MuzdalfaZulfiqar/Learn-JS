class User{
    // if we are using a setter and a constructor too for setting a value it will raise a problem
    // of maximum call stack size exceeded
    // to solve this the name of our getter setter function will bw same but we will
    // use a different property name inside these geters setters and it will  refer to original property
    constructor(email, password){
        this.email = email;
        this.password = password
    }
// definning a getter without the setter is not allowed so we need to make a setter too
    get password(){
        return this.password_.toUpperCase()
    }
    set password(value){
        this.password_ = value
    }
    get email(){
        return this.email_.toUpperCase()
    }
    set email(value){
        this.email_ = value
    }
}
const muz = new User("muz@gmail.com", "1234")
console.log(muz.password)