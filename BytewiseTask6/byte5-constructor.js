class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

// creating an object
const muzdalfa = new User("Muzdalfa")

// inheritance so Teacher will be able to use all the properties of parent
class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
// this is accessing the parent's static property
console.log(iphone.createId());