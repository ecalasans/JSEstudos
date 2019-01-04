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
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("Text", ev.target.id);
}

function drop(ev) {
    /*var data = ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(data));
    ev.preventDefault();*/

    var files = ev.dataTransfer.files;
    for (var i = 0; i < files.length; i++){
        var f = files[i];
        var p_node = document.createElement("p");
        var t_node = document.createTextNode(f.name + "(" +
            f.type + ")" + f.size + " bytes ");
        p_node.appendChild(t_node);
        ev.target.appendChild(p_node);
    }
    ev.preventDefault();
}

window.onload = function () {
    //var dragged = document.getElementById("drag1");
    var drophere = document.getElementById("drop1");
    //dragged.ondragstart = drag;
    drophere.ondragover = allowDrop;
    drophere.ondrop = drop;
}
