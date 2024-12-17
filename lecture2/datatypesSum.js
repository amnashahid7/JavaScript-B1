// Primitive datatype(work will be done on the copy of that variable)
// 1. Number
// 2. String
// 3. Boolean
// 4. Null
// 5. Undefined 
// 6. Symbol 
// 7. BigInt


let score = 100; //number
let name = "ahmad" // string
let isActive = true // Boolean
let temperature = null; //null
let email; //undefined
let bigNumber = 1234567890123456789n; //BigInt
let id = Symbol('123') //Symbol (Symbol use for make the variables/component unique)
let anotherID = Symbol('123') //Symbol

//console.log(id==anotherID);


// console.log("score", score);
// let anotherScore = score;
// // anotherScore = 50;
// console.log("anotherScore", anotherScore);


//NON Primitive Datatypes / Reference;
// 1.Array
// 2.Object 
// 3.Function 


//Array
const month = ['January', "Feburay", "May", "June"]
// console.log(month);

month[0] = "Apple";

// console.log(month);
// console.log(month);
// console.log(month);


//Object

const myObj = {
    name: "ahmad",
    age: 10
}

// console.log(myObj);

myObj.name = "amna";

// console.log(myObj);


//Function
const myFunc = function (a,b) {
    // return console.log("hello");
    return a+b;

}
// console.log(myFunc(1,2));









