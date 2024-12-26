let x = "100";
let y = "10";
let z = x / y;
console.log(z);

let x2 = "100";
let y2 = "10";
let z2 = x2 * y2;
console.log(z2);

let x3 = "100";
let y3 = "10";
let z3 = x3 - y3;
console.log(z3);

let notANumber = 100 / "Apple";
console.log(notANumber);

let stringNumber = 100 / "10";
console.log(stringNumber);


let x4 = NaN;
let y4 = "5";
let z4 = x4 + y4;
console.log(z4);

//NaN is a number: typeof NaN returns number:
// Infinity is a number: typeof Infinity returns number.


let a = 500;
let b = new Number(500);
console.log(a == b);
console.log(a === b);

let a1 = new Number(500);
let b1 = new Number(500);
console.log(a1 == b1);
console.log(a1 === b1);

let number = 10;
// console.log(number);

let number2 = new Number(10);
// console.log(number2);


let expoNumber = 9.87655;
// console.log(expoNumber.toExponential());
// console.log(expoNumber.toExponential(2));
// console.log(expoNumber.toExponential(5));
// console.log(expoNumber.toExponential(10));

let fixNumber = 4.189;
// console.log(fixNumber.toFixed(2));


let preNumber = 89.2345678;
// console.log(preNumber.toPrecision(1));

let valueNumber = 789;
console.log(valueNumber.valueOf());

