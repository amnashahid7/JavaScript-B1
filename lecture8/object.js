// object literals.
const mySymbol1= Symbol('key1');
// console.log( typeof mySymbol1);

const obj1 = {
    name: "Ahmad",
    age: 17,
    email: "ahmad@gamil.com",
    isLoaggedIn: true,
    course: "Js",
    loggedInDays:["Monday","Tuesday"],
   [mySymbol1]:"key-aHMAD",
   heloo: function(){
    console.log(`${this.name} hi`);
    
   }
};

// console.log(obj1.name);
// console.log(obj1["name"]);
// console.log(obj1.age);
// console.log(obj1.email);

// console.log(obj1.loggedInDays[1]);
// console.log( typeof obj1[mySymbol1]);

obj1.email= "raza@gmail.com";
// console.log(obj1.email);
// Object.freeze(obj1);
obj1.email= "AHMADraza@gmail.com";
// console.log(obj1);

obj1.greeting= function(){
    console.log("hello");
    
}
obj1.greeting2= function(){
    console.log(`hello ${this.name}`);
    
}
// console.log(obj1.greeting2());
console.log(`hello ${this.name}`); //undefined

console.log(obj1.heloo());

console.log(obj1);







