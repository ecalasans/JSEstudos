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

var which_sheet = 0;

function sheet(){
    document.styleSheets[which_sheet].disabled = true;
    which_sheet = (which_sheet == 1) ? 0 : 1;
    document.styleSheets[which_sheet].disabled = false;
}


function ssEnable(my_sheet){
    var change = false;
    var oldSheet = 0;
    console.log(document.styleSheets)
    for (var i = 0; i < document.styleSheets.length; i++) {
        if(document.styleSheets[i].disabled == false) {
            oldSheet = i;
        }
        document.styleSheets[i].disabled = true;
        if(document.styleSheets[i].title == my_sheet) {
            document.styleSheets[i].disabled = false;
            change = true;
        }
    }
    if(!change) document.styleSheets[oldSheet].disabled = false;
    return change;
}

function sheet2(){
    var sheet_name = prompt("Digite o nome do estilo:");
    if(!ssEnable(sheet_name)) alert('Estilo não encontrado:  o original será mantido!');
}

window.onload = function () {
    document.getElementById("btn1").onclick = sheet2;
}