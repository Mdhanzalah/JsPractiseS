//************************Arrow Function ***********************************8

const user={
    username:"Rahil",
    price:1200,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website `);
  console.log(this);
  
    }
}
// user.welcomeMessage()
// user.username="Raju"
// user.welcomeMessage()
//  console.log(this);

// function chai(){
//     let username="Rahil"
//     console.log(this);
    
// }
// chai()

// const chai=function(){
//     let username="Rahil"
//     console.log(this.username);
    
// }
// chai()

const chai=()=>{
     let username="Rahil"
   console.log(this.username);
}
//chai();

// const addTwo=(num1,num2)=>{
//     return num1+num2

// }
// console.log(addTwo(3,4));

// const addTwo=(num1,num2)=>(num1+num2)
//    console.log(addTwo(3,4));

//    const addTwo=(num1,num2)=>({username:"Rahil"})
//    console.log(addTwo(3,4));

