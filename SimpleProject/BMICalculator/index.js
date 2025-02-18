let form = document.querySelector('form');
let result = document.querySelector('#result')
let bmi;

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let height = parseInt(document.querySelector('#height').value);
    let weight = parseInt(document.querySelector('#weight').value);
    // console.log(height);
    // console.log(typeof height);

    if (height <= 0 || height === '' || isNaN(height)) {
        console.log("Please enter correct height");

    }
    else if (weight < 0 || weight === '' || isNaN(weight)) {
        console.log("Please enter correct weight");

    }
    else {
        bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
        console.log(bmi);
    }

    result.innerHTML = `${bmi}`





})