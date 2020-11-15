/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
    $("#inici").fadeIn(2000);
    $("#inici").on('click', function () {
        $("#inici").fadeOut(1500);
        $(".container").fadeIn(2500);
    });
});