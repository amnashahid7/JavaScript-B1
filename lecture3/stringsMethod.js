let string1 = "Heloo Student,Student Student "
let string2 = "Ahmad Raza"
let result = string1.charCodeAt(1);
// console.log(result);

let atMethod = string1.at(4);
// console.log(atMethod);
// Property Access
// console.log(string1[4]);
// Substr
let substrString = string1.substr(0, 5);
// console.log(substrString);

//concat
let concatString = string1.concat(string2);
// console.log(concatString);
// console.log((string1+string2));

//trim
let trimString = "                   ahamd               ";
let trimResult = trimString.trim();
// console.log(trimResult);
let trimResultStart = trimString.trimStart();
// console.log(trimResultStart);
let trimResultEnd = trimString.trimEnd();
// console.log(trimResultEnd);


//padStart / PadEnd

let padString = "199";
let padStartResult = padString.padStart(6, ",");
// console.log(padStartResult);
let padStartResult2 = padString.padEnd(6, "-");
// console.log(padStartResult2);

// Repeat
let repeatResult = string1.repeat(4);
// console.log(repeatResult);

//replace

let replaceResult = string1.replace("Student", "ahmad");
console.log(replaceResult);

let replaceResult2 = string1.replaceAll("Student", "ahmad");
console.log(replaceResult2);

//split

let splitResult= string2.split();
console.log(string2[3]);












