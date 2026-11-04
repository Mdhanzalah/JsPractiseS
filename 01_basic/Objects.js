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

// User.greet=function(){
//     console.log("Hello Bhopal")
// }
//    console.log(User.greet())

//    User.greett=function(){
//     console.log(`Hello Bhopal , ${this.name}`)
//    }
//    console.log(User.greett())

   //04..Objects.....///

   ///  Singleton Object  ///

  //  const bplUser=new Object;
//    const bplUser={}
// bplUser.id=1
// bplUser.name="Rahil"
// bplUser.email="abc@gmail.com"
// bplUser.mobile="9809876548"

//      console.log(bplUser)

const hiLife={
  name:"Rahil",
  age:18,

  fullName:{
     userfullname:{
        firstname:"rahil",
        lastname :"Ahmad"
     }
  }
}
// console.log(hiLife.fullName.userfullname.firstname)

// combile of a object..///
 const first={1:"ab",2:"bs",3:"un"} 
 const second={5:"xz",6:"uv",7:"rs"}
 const third={8:"gh",9:"ij",10:"lm"}
//  const result={first,second}

//  const result2=Object.assign({},first,second,third)
//  console.log(result2)

// const result3={...first,...second,...third}
// console.log(result3)

const detail=[
  {
    id:"1",
    name:"Rahil"
  },
  {
    id:2,
    name:"Ahmad"
  },
  {
    id:3,
    name:"Hassan"
  },
  {
    id:4,
    name:"Peter"
  }
]
// console.log(detail)
// const map=detail[3].name
// console.log(map)

// console.log(User)
// console.log(Object.keys(User))
// console.log(Object.values(User))
// console.log(Object.entries(User))
console.log(User.hasOwnProperty(`age`))