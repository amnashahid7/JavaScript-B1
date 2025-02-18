let buttons = document.querySelectorAll('button');
let body = document.querySelector('body')
console.log(buttons);

buttons.forEach((btn) => {
    console.log(btn);
    btn.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target.id);
        if (e.target.id == "red") {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id == "yellow") {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id == "blue") {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id == "pink") {
            body.style.backgroundColor = e.target.id
        }

    })

})
