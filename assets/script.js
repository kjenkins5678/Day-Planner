$(document).ready(function() {
    var dayOfWeek = moment().day();
    var daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

    var month = moment().month();
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var plannerTimes = ['9', '10', '11', '12','1', '2', '3', '4', '5' ];

    var day = moment().date();

    var dayAndDateDiv = $("<div>");
    dayAndDateDiv.text(daysOfTheWeek[dayOfWeek]+", "+months[month] + " " + day)

    $(".jumbotron").append(dayAndDateDiv);

    for (i = 0; i < plannerTimes.length; i++){
        // console.log("planner time:" + plannerTimes[i]);
        var row = $("<div class='row'>");
        var timeDiv = $("<div class='col-1'>");
        var timeH2 = $("<h2>");
        var textDiv = $("<div class='col-9'>");
        var textArea = $("<textarea class='textArea'>");
        var btnDiv = $("<div class=col-2>");
        var btn = $('<button>');

        btn.text('Save')
        timeH2.text(plannerTimes[i]);
        
        btnDiv.append(btn);
        textDiv.append(textArea);
        timeDiv.append(timeH2);
        row.append(timeDiv, textDiv, btnDiv);
        $(".hours").append(row);
    };

});

        