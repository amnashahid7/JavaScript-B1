const number= [1,2,3,4,5,6];
for (const num of number) {
    // console.log(num);
    
}

const words= "hello world";
for (const str of words) {
    // console.log(str);
    
}


// const obj={
//     "name":"abc",
//     "email":"abc@gmail.com"

// }

// for (const key of obj) {
//     console.log(key);
    
// }



const map = new Map();
map.set("a","apple");
map.set("b","banana")

for (const [key,value] of map) {
//   console.log(key);
    
}
console.log(map);



// array index [1,2,3,4]=> 0,1,2,3 arr[0]


// obj index{"name":"saira"}=>name obj.name




const obj={
    "name":"abc",
    "email":"abc@gmail.com",
    "address":"abca no 2"

}

for (const key in obj) {
    console.log(obj[key]);
 
    
    
}

const num=[1,2,3,4];
for (const no in num) {
//    console.log(no);
   
}

// const stringss="saira";
// for (const str in stringss) {
//    console.log(str);
   
// }
