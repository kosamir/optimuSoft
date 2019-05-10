$(document).ready(function() {
    var time = moment().tz("Europe/Zagreb").format("h:mm A");
    $("#time").html(time);
})
