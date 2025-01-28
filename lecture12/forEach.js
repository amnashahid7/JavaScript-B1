let coding = ["js", "py", "c++", "c", "ruby", "java"];
// coding.forEach(function name(item){
//     console.log(item);

// })



// this block of code is not working as break statment is not allowed or work in foreach loop
// coding.forEach((item)=>{
//     if(coding[0]=='js'){
//         console.log(item);

//     }
//     else{
//         console.log("item does not found");
//         break;
//     }
// })



// coding.forEach( ()=>{})


// if(coding[0]=='js'){
//     coding.forEach((item)=>{
//         console.log(item);

//     })
// }
// else{
//     console.log("item not found");

// }




// function printMe(num){
//     console.log(num);

// }

// coding.forEach(printMe);




// ["","",""]
// [{},{},{}]



//     let programmingLangs=[
//         {
//             langName:"Javascript",
//             langFileName:"js"
//         },
//         {
//             langName:"Python",
//             langFileName:"py"
//         },
//         {
//             langName:"Java",
//             langFileName:"java"
//         }
//     ]

// programmingLangs.forEach((item)=>{
// console.log(item.langFileName);

// })


coding.forEach((item, key, arr) => {
    console.log(item, key, arr);

})









// Practice questions
// //let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 7, 5, 3, 4, 7, 5, 6, 7, 3, 4, 5, 7, 5, 3, 6, 8]
// let num = [1, 2, 3, 7, 7, 8, 8, 7, 7]
// let count = 0;

// let func3 = (number) => {
//     if (number === check) {
//         count++;
//         console.log(count);

//     }
//     // if(!(number===check))
//     // {
//     //     return (`Value Not Matched in Array.`);
//     // }
// //     else {
// //         console.log(`Value Not Matched in Array.`);
// //     }
// }
// check = 7;
// num.forEach(func3);

// console.log(`${check} occurred ${count} time in the Array.`);




let num = [1, 2, 3, 7, 7, 8, 8, 7, 7];
let count = 0;
let notMatchedPrinted = false; // Flag to ensure the else statement prints only once

let func3 = (number) => {
    if (number === check) {
        count++;
        console.log(count);
    } else if (!notMatchedPrinted) {
        console.log(`Value Not Matched in Array.`);
        //notMatchedPrinted = true; // Set the flag to true so it won't print again
    }
}

let check = 7;
num.forEach(func3);

console.log(`${check} occurred ${count} times in the Array.`);

