// console.log("Heeloo");


function myFun(num1, num2) {
    console.log(num1 + num2);
    console.log("printed")
    return;
    console.log("printed")
}


// myFun(1, 2);

function square(a,b){
    console.log(a*b);
    
}

//square();

function addTwoNumbers(a,b){
    // let result= a+b;
    // return result;

    return a+b;
}
// console.log(addTwoNumbers(33,44));


// function userIsLoggedIn(name){
//     if(!name){
//         // console.log(`heelo ${name}`);
//         console.log("please enter name");
//     }
//     else{
//         // console.log("please enter name");
//         console.log(`heelo ${name}`);
        
//     }

// }

// userIsLoggedIn("");
function userIsLoggedIn(name){
    if(!name){
        console.log("please enter name");
        return;
    }
    return (`heelo ${name}`);

  

}

console.log(userIsLoggedIn("ahamd"));








