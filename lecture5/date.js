// console.log(Date());
const mydate= new Date();
// console.log(mydate.toString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toDateString());
// console.log(typeof mydate);



// let createdDate=new Date("2023-12-5");
let createdDate=new Date(2023,3,0); // MM/DD/YYY
// console.log(createdDate.toString());


// let hello7= [0,5,8,1,4,-3,1,-6];
 
// console.log(Math.min(...hello7));
// console.log(Math.max(...hello7));


let timeStamp= Date.now();
// console.log(createdDate.getTime()/1000);
// console.log(createdDate.getMonth());
// console.log(createdDate.getDay());
// console.log(createdDate.getMinutes());
// console.log(createdDate.getMilliseconds());

const new1 = mydate.toLocaleString('default', {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",

})
console.log(new1);