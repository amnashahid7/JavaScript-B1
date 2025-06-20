// let productPrice=[100,200,300,400,500];

// let totalPrice= productPrice.reduce(function(acc,currentval){
//     console.log(`acc: ${acc}, currentvalue:${currentval}`);
    
// return acc + currentval;
// },0)

// console.log(totalPrice);







// let numbers = [1, 2, 3, 4, 5];
// let initail=299;
// let totalNum= numbers.reduce((acc,crr)=>{
//         console.log(`acc: ${acc}, currentvalue:${crr}`);
//   return  acc+crr
// },initail)
// console.log(totalNum);

// let arr=[1,2,3,4,5]
// console.log(arr[3]);

// const user={
//     name: "Ahamad",
//     age: 10,
//     city: "Karachi"

// }
// console.log(user.age);



// let courses=[
//     {name:"javascript", price: 100},
//     {name:"python", price: 200},

// ]

// let courseTotal= courses.reduce((acc,item)=>(acc+item.price),0);
// console.log(courseTotal);







const people = [
  { name: 'Alice', age: 21 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 21 },
  { name: 'David', age: 25 },
  { name: 'Eve', age: 30 }
];



const countrage=people.reduce((acc,obj)=>{
    acc[obj.age]= (acc[obj.age]||0)+1;
    return acc;

},{})
console.log(countrage);






















