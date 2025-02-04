const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0)

//console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

// console.log(priceToPay);



const transactions = [
    { category: "Food", amount: 20, quantity: 2 },
    { category: "Transport", amount: 15, quantity: 1 },
    { category: "Food", amount: 10, quantity: 1 },
    { category: "Shopping", amount: 50, quantity: 3 },
    { category: "Transport", amount: 20, quantity: 2 },
    { category: "Food", amount: 15, quantity: 2 }
];

let totalTrans = transactions.reduce((acc, val) => {

    if (!acc[val.category]) {
        acc[val.category] = { amount: 0, quantity: 0 };
    }
    acc[val.category].amount += val.amount;
    acc[val.category].quantity += val.quantity;
    return acc
}, {})

console.log(totalTrans);