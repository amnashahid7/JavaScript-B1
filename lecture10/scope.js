// When to Use Each Notation:
// Dot Notation: Use when the property name is known and valid as a literal identifier (e.g., user.name).
// Bracket Notation: Use when the property name is dynamic or stored in a variable (e.g., obj[property]).



let user1 = {
    name: "Ahmed Raza",
    age: 21,
    occupation: "Web Developer",
    country: "Pakistan"
};
// console.log(user.country);

function userData(obj, property) {
    if (obj.hasOwnProperty(property)) {
        console.log(obj[property]);


    }

    else {
        console.log(`${property} not found in the object`);
    }
}
//userData(user1, "country");




let key = "age";
let user = {
    name: "Ahmed Raza",
    age: 21
};

// Dynamic access
//console.log(user[key]); // Outputs: 21

// Static access
//console.log(user.age); // Outputs: 21






// ++++++++++++++++++++++++++++SCOPE+++++++++++++++++++++++++++++++++++++++++++++++++++++++++


const a=10;
 let b=20;
// var c=30;


// function name(params) {
//     {} block scope
// }

// var c=300;

{
   const a=109;
let b=20;
var c=30; 
// console.log("inner A", a);
// console.log("inner B", b);


}

//  c=400;
// a="ahmad"   error here(TypeError: Assignment to constant variable.)
b=999;

//console.log(a);
//  console.log(b);
// console.log(c);



// home work..... do this in the if statement
function fullName() {
    let username= "ahamad";
    function name() {
        let secondName= "raza";
        console.log(username);
        
    }
    // console.log(secondName);
    name();
}

//fullName();

//console.log(one(4));
function one(value){
return ++value
}


// console.log(secondNum(4));   error (ReferenceError: Cannot access 'secondNum' before initialization)
const secondNum= function two(value) {
    return value+2;
}

//console.log(secondNum(4)); // execute here












