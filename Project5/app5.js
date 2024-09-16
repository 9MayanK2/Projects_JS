let start = document.querySelector('#start');
let stop = document.querySelector('#stop');

let body = document.querySelector('body');
let id;
function changeColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    body.style.backgroundColor = `rgb(${red},${green},${blue})`;
}

stop.addEventListener('click', function () {
    clearInterval(id);
})

start.addEventListener('click', function () {
    id = setInterval(changeColor,1000)
});
