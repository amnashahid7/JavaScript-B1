// const promiseOne= new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Promise One");
//         },1000)
//         resolve();
// })

// promiseOne.then(function(){
//     console.log("promise one from the then block");
    
// })



// const promiseTwo= new Promise(function(res,rej){
//     res({userName:"amna",email:"abc@gmail.com"})
// })

// const user= promiseTwo.then((user)=>{
//     console.log(user);
//     return user.userName;
// }).then((name)=>{
//     console.log(name);
    
// })

// console.log(user, "from outSide");




const promiseThree= new Promise(function(resolve,reject){
    let error= false;
    if(!error){
        resolve({name:"qwerty",email:"abc123@gmail.com"})
    }
    else{
        reject("something went wrong")
    }
}).then((user)=>{
    console.log(user);
    
}).catch((err) => {
    console.log(err);
}).finally(()=>{
    console.log("somthing happen either from resolve or reject");
    
})
