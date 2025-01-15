function addTwoNumbers(num1, num2) {
    let result = num1 + num2
    console.log(result);
}

// addTwoNumbers(44,66);


function addTwoNumbers1(num1, num2) {
    let result = num1 + num2
    return result;
}

// console.log(addTwoNumbers1(11, 23));

function calculateNumbers(val1,val2,...num1){
return num1;
}

// console.log(calculateNumbers(122,22,333,44,33,4,44,667,1200));


const user={
    name:"ahmad",
    city:"Bahawalpur"
}
const user1={
    name:"ahmad raza",
    city:"lahore"
}

function userInfo(anyObject){
    console.log(`${anyObject.name} and ${anyObject.city? anyObject.city : "user"}`);
    
}

// userInfo(user1);

// userInfo({
//     name:"amna",
//     city:"Karachi"
// });

const newArray=[1,2,3,4,5,65];

function secondValue(anyArray){
return anyArray[1];
}

// console.log(secondValue(newArray));

// console.log(secondValue([2,3,4,5,5,6,6]));




function userLoggenIn(name){
    // if(name=== undefined){
     if(!name){
        console.log("please enter the name");
        return;
        
    }
return (`${name} just logged in`);
}

console.log(userLoggenIn());




