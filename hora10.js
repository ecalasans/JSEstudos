function alertaJSON() {
    var Mary = '{ "height": 1.9, "age":36, "eyeColor": brown}';
    var myObject = JSON.parse(Mary);

    var out = "";

    for(i in myObject){
        out += i + " = " + myObject[i] + "\n";
    }

    alert(out);
    document.write(out);
}