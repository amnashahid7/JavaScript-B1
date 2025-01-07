const User={};
User.name="Ahmad";
User.email="a@gamil.com";
User.age=18;

console.log(User);

const activeUser={
    email:"abc@gmail.com",
    fullname:{
        username:{
            firstName:"ahmad",
            lastName:"Raza"
        }
    }
}

// console.log(activeUser.fullname.username.firstName);

const obj1={1:"a",2:"b"};
const obj2={3:"c",4:"d"};
const obj3={5:"e",6:"f"};

// const obj4={obj1,obj2,obj3};  
// const obj4= Object.assign({},obj1,obj2,obj3);
const obj4={...obj1,...obj2,...obj3}; //Sperad opreator
// console.log(obj4);


const users=[
    {
        id:1,
        name:"ali"
    },
    {
        id:2,
        name:"hassan"
    },
    {
        id:3,
        name:"ahmad"
    },
    {
        id:4,
        name:"raza"
    }
]
// console.log(users[1].name);


// console.log(User.hasOwnProperty('isage'));

console.log(Object.keys(User));
console.log(Object.values(User));
console.log(Object.entries(User));








