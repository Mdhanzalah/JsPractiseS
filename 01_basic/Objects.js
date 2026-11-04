////...........Objects.............../////

///......Objects literal.......///

const mySymbol=Symbol("Key1")

const User={
    name:"Rahil",
      "Full Name":"Rahil Ahmad",
    rollNo:54,
    age:26,
    email:"rahil@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["monday","friday"],
   [ mySymbol]:"mykey1"

}
// console.log(User.email)
// console.log(User["age"])

// console.log(User["Full Name"])
// console.log(User[mySymbol])
 
// User.email="rahil547@gmail.com"

// console.log(User.email) ////changes

//  Object.freeze(User)///freez the changes in 
// User.age=18
// console.log(User.age)
// console.log(User)

User.greet=function(){
    console.log("Hello Bhopal")
}
   console.log(User.greet())

   User.greett=function(){
    console.log(`Hello Bhopal , ${this.name}`)
   }
   console.log(User.greett())