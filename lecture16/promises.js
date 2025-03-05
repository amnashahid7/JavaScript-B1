// let promiseOne = new Promise(function (resolve, reject) {
//     console.log("promise executed");
//     resolve();

// });

// promiseOne.then(function () {
//     setTimeout(function () {
//         console.log("for the resolved then Block");

//     }, 1000)
// })


// let promiseTwo = new Promise(function (resolve, reject) {
//     console.log("promise two");
//     resolve();
// }).then(function () {
//     console.log("executed form promise two then block");

// })


// let promiseThree = new Promise(function (resolve, reject) {
//     resolve({ username: "ahmad", email: "abc@gmail.com" })
// })

// promiseThree.then(function (user) {
//     console.log(user.username);
//     return user;
// }).then(function (a) {
//     console.log('username', a.email);

// })


// let promiseFour = new Promise(function (resolve, reject) {
//     let error = false;
//     if (!error) {
//         resolve({ username: 'raza', cousre: "js" })
//     }
//     else {
//         // console.log("Error");
//         reject();

//     }
// })

// promiseFour.then(function (user) {
//     console.log(user.cousre);

// }).catch(function () {
//     console.log("something went wrong");

// }).finally(() => { console.log("the promise is either rejected or completed this line is executed") });





// let promiseFive = new Promise(function (resolve, reject) {
//     setTimeout(
//         function () {
//             let error = true;
//             if (!error) {
//                 resolve({ username: 'raza', cousre: "js" })
//             }
//             else {
//                 // console.log("Error");
//                 reject("Error");

//             }
//         }
//         , 1000)
// })

// async function promiseFiveRun() {
//     try {
//         let response = await promiseFive;
//         // let data = await response;
//         console.log(response);

//     } catch (error) {
//         console.log(error);

//     }

// }
// promiseFiveRun();


async function getAllUsers() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await response.json();
    console.log(data);


}
getAllUsers();

console.log("from the last");








