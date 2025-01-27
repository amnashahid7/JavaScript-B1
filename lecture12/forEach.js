let coding=["js","py","c++", "c", "ruby","java"];
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


coding.forEach((item, key, arr)=>{
    console.log(item,key,arr);
    
})
