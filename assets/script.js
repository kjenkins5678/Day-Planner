$(document).ready(function() {
    var dayOfWeek = moment().day();
    var daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

    var month = moment().month();
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var plannerTimes = [9, 10, 11, 12, 13, 14, 15, 16, 17];

    var day = moment().date();

    var dayAndDateDiv = $("<div>");
    dayAndDateDiv.text(daysOfTheWeek[dayOfWeek]+", "+months[month] + " " + day)

    $(".jumbotron").append(dayAndDateDiv);

    for (i = 0; i < plannerTimes.length; i++){
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
        row.attr("data-hour", plannerTimes[i]);
        row.append(timeDiv, textDiv, btnDiv);
        $(".hours").append(row);
    };

    var time = moment().hour();
    
    // dynamically create jquery selector based on current hour
    timeSelectStr = ".row[data-hour="+time.toString()+"]"

    // add class to current time
    var currentHour = $( timeSelectStr );
    currentHour.addClass("current-hour");

    // add class to time already past
    for (x = 0; x < plannerTimes.length; x++){
        if (plannerTimes[x] < time){
            timeEarlierSelectStr = ".row[data-hour="+plannerTimes[x].toString()+"]";
            var earlierHour = $(timeEarlierSelectStr);
            console.log(timeEarlierSelectStr);
            earlierHour.addClass("earlier");
        }
    }
    
});

        