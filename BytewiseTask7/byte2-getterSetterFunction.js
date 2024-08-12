function User(username, password){
    this.username_ = username;
    this.password_ = password

    Object.defineProperty(this, "username", {
        // it takes the current context , the seocnd param is the name of original property and
        // third is object that defines getter setter
        get : function(){
            return this.username_
        },
        set: function(value){
            // within this we set value of one which is being available within function
            this.username_ = value
        }
    })
    Object.defineProperty(this, "password", {
        // it takes the current context , the seocnd param is the name of original property and
        // third is object that defines getter setter
        get : function(){
            return this.password_
        },
        set: function(value){
            // within this we set value of one which is being available within function
            this.password_ = value
        }
    })
}

const user =  new User("muzdalfa", "1234")
console.log(user.password)