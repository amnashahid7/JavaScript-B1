
// Object Destructoring

const cousre ={
    courseName:"Javascript",
    cousreId:2,
    courseDuration:"2 month"
}

// console.log(cousre.courseName);

// const {courseName,cousreId,courseDuration}= cousre;
// console.log(courseName,courseDuration,cousreId);


const {courseName:cName}= cousre;
// console.log(cName);

// const nav=({company})={

// }


// {
//     "name":"amna",
//     "id":2,
// }

let user={
name:"amna",
email:"amna@gamil.com"
}

let user1={
name:"amna1",
email:"amna1@gamil.com"
}
let user2={
name:"amna2",
email:"amna2@gamil.com"
}

// let name= user1.name;
// console.log(name);

const name= "abc";
const {name:username}= user2;
console.log(username,'username');
console.log(name,'name');





