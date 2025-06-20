
// myArr=[1,2,3,4,4,5,6,6,666];

// for (const num of myArr) {
//     //console.log(num);
    
// }

// let mystring= "heeloi worldddd";

// for (const char of mystring) {
//     //console.log(char);
    
// }
// // for of loop is not for the object {}
// let myObj={
//     'name':"ahamad",
//     'age':10,
// }

// // for (const element of myObj) {
// //    // console.log(element);
    
// // }

// let obj={
//     'name':'ahamad',
//     'name':"amna",
// }


let map = new Map();
map.set('a',"ahamad");
map.set('b', "amna");

for (const i of map) {
    console.log(i);
    
}
for (const [key,value] of map) {
    console.log(`${key} is key and ${value} is its value`);
    console.log(key);
    
    
}


