$(function () {
    $("#dragdiv").draggable();
    $("#dropdiv").droppable(
        {
            drop:  function () {
                $("#dragdiv").text("Dropped!");
            },
            out: function () {
                $("#dragdiv").text("Off and running again...");
            },
        }
    ).resizable();
});

$(function () {
    $("#sortMe").sortable();
    }
);

$(function () {
    $("#accordion").accordion();
});

$(function () {
    $("#datepicker").datepicker();
});

$(function () {
    $("#tabs").tabs();
})