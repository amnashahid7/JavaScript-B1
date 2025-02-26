function randomColor() {
    let hex = '0123456789ABCDEF';
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]

    }
    return color;
}

// console.log(randomColor());

let intervalId;
const startRandomColor = () => {

    if (!intervalId) {
        let colorChange = () => { document.body.style.backgroundColor = randomColor() };
        intervalId = setInterval(colorChange, 1000);
    }
}
const stopRandomColor = () => {
    clearInterval(intervalId);
    intervalId = null;

}

document.querySelector("#start").addEventListener('click', startRandomColor);
document.querySelector("#stop").addEventListener('click', stopRandomColor);
