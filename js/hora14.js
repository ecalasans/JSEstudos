function showFormFields() {
    var form = $('exampleForm');
    var message = '';
    var fields = form.getElements();

    for (var x=0; x < fields.length; x++){
        message += 'Field name:  '+ fields[x].name + ' ' + 'Field Value:  ' + fields[x].value +  '\n';
    }
    alert(message);
}