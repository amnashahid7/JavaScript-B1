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


let promiseFour = new Promise(function (resolve, reject) {
    let error = true;
    if (!error) {
        resolve({ username: 'raza', cousre: "js" })
    }
    else {
        // console.log("Error");
        reject();

    }
})

promiseFour.then(function (user) {
    console.log(user.cousre);

}).catch(function () {
    console.log("something went wrong");

}).finally(() => { console.log("the promise is either rejected or completed this line is executed") });



