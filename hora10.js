/*
var Mary = '{ "height":1.9, "age":36, "eyeColor": "brown"}';
var myObject = JSON.parse(Mary);

var out = "";

for(i in myObject){
    out += i + " = " + myObject[i] +"\n";
}

alert(out);
*/

/*
var Eric = new Object()
Eric.altura = 1.7;
Eric.peso = 80;
Eric.profissao = 'Médico';
Eric.esposa = 'Jeciane';
Eric.filho = 'Daniel';
Eric.filha = 'Erika';

var jsonEric = JSON.stringify(Eric);

alert(jsonEric);
*/

var bookListObject = {
    "booklist": [
        {"title": "Foundation", "author": "Isaac Asimov"},
        {"title": "Dune", "author": "Frank Herbert"},
        {"title": "Eon", "author": "Greg Bear"},
        {"title": "2001 A Space Odyssey", "author": "Arthur C. Clarke"},
        {"title": "Stranger In A Strange Land", "author": "Robert A.Heinlein"}
    ]
}

var out = "";

var books = bookListObject.booklist;

for (book in books){
    var book_number = book;

    out += "Book " + book_number + " is " + books[book].title +
        " by " + books[book].author + "\n";

    ++book_number;
}

alert(out);