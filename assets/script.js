$(document).ready(function() {

    var daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var plannerTimes = [9, 10, 11, 12, 13, 14, 15, 16, 17];

    var reminders = [];

    var dayOfWeek = moment().day();
    var month = moment().month();
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
        var btnDiv = $("<div class='col-2'>");
        var btn = $("<button class='save-btn'>");

        btn.text('Save')
        timeH2.text(plannerTimes[i]);

        btnDiv.append(btn);
        textDiv.append(textArea);
        timeDiv.append(timeH2);

        btn.attr("data-hour", plannerTimes[i]);
        textArea.attr("data-hour", plannerTimes[i]);
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
            earlierHour.addClass("earlier");
        }
    }

    $(".save-btn").on("click", function() {
        var text = $(this).parents(".row").find(".textArea").val().trim();
        var textHour = $(this).parents(".row").data("hour");
        var timeAndText = {};
        timeAndText[textHour] = text;
        // console.log(timeAndText);

        reminders.push(timeAndText);
        console.log(reminders);

        localStorage.setItem("reminders", JSON.stringify(reminders));
      });

      var fromLocalStor = localStorage.getItem("reminders");
      fromLocalStor = JSON.parse(fromLocalStor); //convert string to object

      for (y = 0; y<fromLocalStor.length; y++){
          for (var key in fromLocalStor[y]) {
              console.log(fromLocalStor[y][key]);
              $(".textArea[data-hour="+ key +"]").text(fromLocalStor[y][key]);
          };
      };

    //   $(".textArea[data-hour='9']").text('testing'); //This works to set the value of the text area
    
});

        