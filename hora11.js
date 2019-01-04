/*
//Demonstração do canvas
var context;
var x = 50;
var y = 50;
var counter = 0;

function paint() {
    context.beginPath();
    context.fillStyle = "#ff0000";
    context.arc(x, y, 15, 0, Math.PI*2, false);
    context.closePath();
    context.fill();
}

function animate() {
    context.clearRect(0, 0, 400, 300);
    counter++;
    x += 20*Math.sin(counter);
    y += 20*Math.cos(counter);
    paint();
}

window.onload = function () {
    context = canvas1.getContext('2d');
    setInterval(animate, 100);
}
*/

//Demonstração do drag-and-drop
function allowDrop(ev) {
    ev.preventDefault()
}

