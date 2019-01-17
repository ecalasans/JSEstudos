$(document).ready(
    function () {
        $("#animateMe").text("Changing shape...").animate(
            {
                width: "400px",
                height: "200px"
            },
            5000,
            function () {
                $(this).text("Fading away...").fadeOut(4000);
            }
        );
    }
);