function toggle() {
    var myElement = document.getElementById("id1");

    if (myElement.style.backgroundColor == 'red') {
        myElement.style.backgroundColor = 'yellow';
        myElement.style.color = 'black';
    } else {
        myElement.style.backgroundColor = 'red';
        myElement.style.color = 'white';
    }
}

function toggleClass(){
    var myElement = document.getElementById("id1");
    if(myElement.className == "classA"){
        myElement.className = "classB";
    } else {
        myElement.className = "classA";
    }
}

window.onload = function () {
    document.getElementById("btn1").onclick = toggleClass;
}