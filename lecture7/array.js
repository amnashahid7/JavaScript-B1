let array1=['Ahmad', 'ali','hassan','hamza'];
let array2=['khizra', 'amna', 'fatima', 'minahil',['khizar', 'adnan', 'usman',['usama','raza']]];
let array3=['khizra', 'amna', 'fatima', 'minahil'];

// array1.push(array2);
// console.log(array1[4][1]);

let resArray= array1.concat(array2);
// console.log(resArray);
// console.log(array2);

let resArray2= array2.flat(Infinity);
// console.log(resArray2);

let speardArray= [...array1,...array2,...array3];
// console.log(speardArray);

// let new1 = new Array();
// console.log(Array.isArray([1,2,3,4]));
console.log(Array.from("ahamd raza"));
// console.log(Array.from({ name: "hitesh" })) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));






