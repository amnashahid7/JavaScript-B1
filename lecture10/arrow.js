const user={
    name:"ahamd",
    age:26,
    welcome: function(){
        console.log(`${this.name}, welcome to the website`);
        
    }
}

//  user.welcome();
 user.name="raza";
//  user.welcome();
// console.log(this);





function name(){
    let username="ahamad";
    console.log(this.username);
    
}
// name();
//  const myFunc= function (){
//     console.log("hello from myFunc");
    
//  }

//Arrow function
 const myFunc=()=>{
    console.log("hello from myFunc");
    
 }

//  console.log(myFunc());


// const addTwo=(num1,num2)=>{
//     return num1+num2;
// }


// returning single statement
const addTwo1=(num1,num2,num3)=> num1+num2+num3;


const addTwo=(num1,num2,num3)=> (num1+num2+num3);


// console.log(addTwo1(11,22,77));
// console.log(addTwo(11,22,77));


const myObj=()=> ({name:"ahamad", age:12});
// console.log(myObj());


const myArray=()=> ([1,2,3,4,4,5]);
console.log(myArray());


 


